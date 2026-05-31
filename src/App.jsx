import { useMemo, useState } from "react";
import {
  SAVE_KEY,
  formatRequires,
  getLocalizedContent,
  getAvailableChoices,
  initialStats,
  resolveLocale,
  scenes as baseScenes
} from "./story.js";

function clamp(value, min = 0, max = 99) {
  return Math.min(max, Math.max(min, value));
}

function loadSave() {
  if (typeof window === "undefined") {
    return { sceneId: "neonStreet", beatIndex: 0, stats: initialStats, history: [] };
  }

  try {
    const saved = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (saved?.sceneId && baseScenes[saved.sceneId]) {
      return {
        sceneId: saved.sceneId,
        beatIndex: saved.beatIndex ?? 0,
        stats: { ...initialStats, ...saved.stats },
        history: saved.history ?? []
      };
    }
  } catch {
    localStorage.removeItem(SAVE_KEY);
  }

  return { sceneId: "neonStreet", beatIndex: 0, stats: initialStats, history: [] };
}

export default function App() {
  const [save, setSave] = useState(loadSave);
  const content = useMemo(() => getLocalizedContent(resolveLocale()), []);
  const { actors, locale, scenes, ui } = content;
  const scene = scenes[save.sceneId] || scenes.neonStreet;
  const beatIndex = clamp(save.beatIndex, 0, scene.beats.length - 1);
  const beat = scene.beats[beatIndex];
  const isChoiceTime = beatIndex === scene.beats.length - 1;
  const { unlocked: availableChoices, locked: lockedChoices } = getAvailableChoices(scene, save.stats);

  const routeProgress = useMemo(() => {
    const visited = new Set([...save.history.map((entry) => entry.sceneId), save.sceneId]);
    return Math.round((visited.size / Object.keys(scenes).length) * 100);
  }, [save.history, save.sceneId]);

  const playEstimate = useMemo(() => {
    const beatsDone =
      save.history.reduce((sum, entry) => sum + (scenes[entry.sceneId]?.beats.length ?? 0), 0) +
      beatIndex +
      1;
    const secondsPerBeat = 22;
    return Math.max(1, Math.round((beatsDone * secondsPerBeat) / 60));
  }, [save.history, beatIndex]);

  const lastChoice = save.history.at(-1)?.choice;

  function persist(nextSave) {
    localStorage.setItem(SAVE_KEY, JSON.stringify(nextSave));
    return nextSave;
  }

  function advance() {
    if (beatIndex < scene.beats.length - 1) {
      setSave((current) => persist({ ...current, beatIndex: beatIndex + 1 }));
    }
  }

  function choose(choice) {
    if (choice.reset) {
      reset();
      return;
    }

    setSave((current) =>
      persist({
        sceneId: choice.next,
        beatIndex: 0,
        stats: {
          self: clamp(current.stats.self + (choice.stat?.self || 0)),
          evidence: clamp(current.stats.evidence + (choice.stat?.evidence || 0)),
          debt: clamp(current.stats.debt + (choice.stat?.debt || 0)),
          business: clamp(current.stats.business + (choice.stat?.business || 0)),
          trust: clamp(current.stats.trust + (choice.stat?.trust || 0))
        },
        history: [
          ...current.history,
          {
            sceneId: current.sceneId,
            beatIndex,
            choice: ui.choiceHistory(choice)
          }
        ].slice(-20)
      }),
    );
  }

  function goBack() {
    setSave((current) => {
      const previous = current.history.at(-1);
      if (!previous) return current;
      return persist({
        ...current,
        sceneId: previous.sceneId,
        beatIndex: previous.beatIndex,
        history: current.history.slice(0, -1)
      });
    });
  }

  function reset() {
    localStorage.removeItem(SAVE_KEY);
    setSave({ sceneId: "neonStreet", beatIndex: 0, stats: initialStats, history: [] });
  }

  return (
    <main className="reader">
      <section className="phone" aria-label={ui.readerLabel}>
        <header className="hud">
          <button className="hud-button" type="button" onClick={goBack} disabled={!save.history.length}>
            {ui.back}
          </button>
          <div className="episode-chip">
            <span>{scene.chapter}</span>
            <strong>
              {routeProgress}% · {ui.approx} {playEstimate} {ui.minutes}
            </strong>
          </div>
          <button className="hud-button" type="button" onClick={reset}>
            {ui.reset}
          </button>
        </header>

        <section
          className="stage"
          style={{ "--scene-bg": `url(${scene.bg})` }}
          onClick={advance}
          aria-label={scene.location}
        >
          <div className="comic-overlay" />
          <div className="location-card">
            <span>{scene.location}</span>
            <strong>{scene.title}</strong>
          </div>
          {scene.ending && <div className="ending-ribbon">{scene.ending}</div>}

          <div className="cast">
            {scene.cast.map((member) => (
              <div
                className={`sprite sprite-${member.side} mood-${member.mood}${beat.actor === member.id ? " speaking" : ""}`}
                key={`${member.id}-${member.image}-${member.side}`}
              >
                <img src={member.image} alt={ui.spriteAlt(actors[member.id], member.mood)} />
              </div>
            ))}
          </div>
        </section>

        <section
          className={`dialogue speaker-${beat.actor}`}
          aria-live="polite"
          onClick={advance}
        >
          <div className="speaker-row">
            <strong>{beat.speaker}</strong>
            <span>
              {beatIndex + 1}/{scene.beats.length}
            </span>
          </div>
          <p>{beat.text}</p>
          {lastChoice && <small>{lastChoice}</small>}
          {!isChoiceTime && (
            <button
              onClick={(event) => {
                event.stopPropagation();
                advance();
              }}
            >
              {ui.continue}
            </button>
          )}
        </section>

        {isChoiceTime && (
          <section className="choice-sheet" aria-label={ui.choicePrompt}>
            <p>{ui.choicePrompt}</p>
            {availableChoices.map((choice) => (
              <button key={choice.label} type="button" onClick={() => choose(choice)}>
                <span>
                  <em>
                    {ui.forPrefix} {choice.for}
                  </em>
                  {choice.label}
                </span>
                <strong>{choice.effect}</strong>
              </button>
            ))}
            {lockedChoices.map((choice) => (
              <button key={`locked-${choice.label}`} type="button" className="locked" disabled>
                <span>
                  <em>
                    {ui.forPrefix} {choice.for}
                  </em>
                  {choice.label}
                </span>
                <strong>{formatRequires(choice.requires, locale)}</strong>
              </button>
            ))}
          </section>
        )}

        <footer className="stats">
          <Stat label={ui.stats.self} value={save.stats.self} />
          <Stat label={ui.stats.evidence} value={save.stats.evidence} />
          <Stat label={ui.stats.debt} value={save.stats.debt} danger />
          <Stat label={ui.stats.business} value={save.stats.business} />
          <Stat label={ui.stats.trust} value={save.stats.trust} muted />
        </footer>
      </section>
    </main>
  );
}

function Stat({ label, value, danger = false, muted = false }) {
  const width = Math.min(100, value * 20);

  return (
    <div className={`stat${danger ? " danger" : ""}${muted ? " muted" : ""}`}>
      <span>
        {label} <strong>{value}</strong>
      </span>
      <div>
        <i style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}
