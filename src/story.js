export const SAVE_KEY = "neon-ebb-save-v2";

export const initialStats = {
  self: 1,
  evidence: 0,
  debt: 0,
  business: 0,
  trust: 0
};

export const actors = {
  zhixia: "林知夏",
  guyuan: "顾远",
  aman: "阿曼",
  chen: "陈姨",
  mother: "林母",
  collector: "讨债人",
  reporter: "记者",
  police: "民警",
  client: "面试女孩",
  narrator: "旁白"
};

const asset = (path) => `${import.meta.env?.BASE_URL ?? "/"}${path}`;

export const art = {
  zhixiaNight: asset("assets/drama/zhixia-nightclub.webp"),
  zhixiaCasual: asset("assets/drama/zhixia-casual-tired.webp"),
  zhixiaBroken: asset("assets/drama/zhixia-broken.webp"),
  zhixiaLearning: asset("assets/drama/zhixia-learning-apron.webp"),
  zhixiaBoss: asset("assets/drama/zhixia-entrepreneur.webp"),
  zhixiaCourt: asset("assets/drama/zhixia-court-resolved.webp"),
  zhixiaMedia: asset("assets/drama/zhixia-media-leader.webp"),
  guyuanRich: asset("assets/drama/guyuan-fake-rich.webp"),
  guyuanCasual: asset("assets/drama/guyuan-charming-casual.webp"),
  guyuanAngry: asset("assets/drama/guyuan-angry-maskdrop.webp"),
  guyuanExposed: asset("assets/drama/guyuan-exposed.webp"),
  aman: asset("assets/drama/aman.webp"),
  amanSupport: asset("assets/drama/aman-warm-support.webp"),
  amanBusiness: asset("assets/drama/aman-business-partner.webp"),
  chen: asset("assets/drama/chen-auntie.webp"),
  mother: asset("assets/drama/mother-hospital.webp"),
  collector: asset("assets/drama/debt-collector.webp"),
  reporter: asset("assets/drama/reporter.webp"),
  police: asset("assets/drama/police-officer.webp"),
  client: asset("assets/drama/client-interview-girl.webp"),
  bgNeon: asset("assets/drama/bg-neon-district.webp"),
  bgVip: asset("assets/drama/bg-vip-room.webp"),
  bgBackAlley: asset("assets/drama/bg-club-back-alley.webp"),
  bgClubBar: asset("assets/drama/bg-club-bar.webp"),
  bgRiversideRoad: asset("assets/drama/bg-riverside-road.webp"),
  bgRestaurant: asset("assets/drama/bg-luxury-restaurant.webp"),
  bgGuyuanApartment: asset("assets/drama/bg-guyuan-apartment.webp"),
  bgPrivateClub: asset("assets/drama/bg-private-club.webp"),
  bgAmanApartment: asset("assets/drama/bg-aman-apartment.webp"),
  bgApartment: asset("assets/drama/bg-apartment-collapse.webp"),
  bgHospital: asset("assets/drama/bg-hospital-room.webp"),
  bgPolice: asset("assets/drama/bg-police-station.webp"),
  bgWarehouse: asset("assets/drama/bg-old-dock-warehouse.webp"),
  bgMakeup: asset("assets/drama/bg-makeup-room.webp"),
  bgStudio: asset("assets/drama/bg-studio-success.webp"),
  bgStudioOpening: asset("assets/drama/bg-studio-opening-day.webp"),
  bgMediaInterview: asset("assets/drama/bg-media-interview.webp"),
  bgCourtPrep: asset("assets/drama/bg-court-prep-night.webp"),
  bgCourthouse: asset("assets/drama/bg-courthouse-hall.webp")
};

const b = (speaker, actor, text) => ({ speaker, actor, text });
const c = (forWho, label, effect, next, stat = {}, requires = null, reset = false) => ({
  for: forWho,
  label,
  effect,
  next,
  stat,
  ...(requires ? { requires } : {}),
  ...(reset ? { reset: true } : {})
});

export const scenes = {
  // ── 第一章：霓虹街 ──
  neonStreet: {
    chapter: "第一章",
    title: "霓虹街",
    location: "南港红灯区 · 绯夜会馆门口",
    bg: art.bgNeon,
    cast: [
      { id: "zhixia", image: art.zhixiaNight, side: "center", mood: "guarded" },
      { id: "aman", image: art.aman, side: "right", mood: "protective" }
    ],
    beats: [
      b("旁白", "narrator", "雨把南港的夜洗得发亮。红色灯牌倒在水洼里，像一条不会退去的河。"),
      b("旁白", "narrator", "林知夏二十六岁，在绯夜会馆做了四年。她漂亮、清醒，也早就学会把真名藏起来。"),
      b("阿曼", "aman", "三号包厢又点你。还有个怪人，西装很贵的样子，只点水，看你看了半小时。"),
      b("林知夏", "zhixia", "只点水的人最麻烦。喝醉的反而好打发。"),
      b("顾远", "guyuan", "你叫夏夏？我想知道你真正的名字。")
    ],
    choices: [
      c("林知夏", "告诉他真名：林知夏。", "+亲密 / -警惕", "vipRoom", { self: -1, trust: 1 }),
      c("林知夏", "敷衍他：名字不重要。", "+自我保护", "alleyWarning", { self: 1 }),
      c("林知夏", "反问他：你又是谁？", "+证据意识", "probeStart", { evidence: 1, self: 1 })
    ]
  },

  vipRoom: {
    chapter: "第一章",
    title: "VIP 包厢",
    location: "绯夜会馆 · 三号包厢",
    bg: art.bgVip,
    cast: [
      { id: "zhixia", image: art.zhixiaNight, side: "left", mood: "softened" },
      { id: "guyuan", image: art.guyuanRich, side: "right", mood: "charming" }
    ],
    beats: [
      b("旁白", "narrator", "包厢里只剩他们两人。顾远没有碰她，只把外套搭在椅背上，像某种刻意的尊重。"),
      b("顾远", "guyuan", "知夏。很好听。比你在这里用的名字真实。"),
      b("林知夏", "zhixia", "你查过我？"),
      b("顾远", "guyuan", "我只是想确认，你不是那种会被随便带走的人。"),
      b("旁白", "narrator", "他说这话时眼神很稳。知夏发现自己竟然有一点想信。")
    ],
    choices: [
      c("林知夏", "接受他的名片，约定下次见面。", "+信任", "motherPressure", { trust: 1 }),
      c("林知夏", "提醒他：这里不是谈感情的地方。", "+警惕", "motherPressure", { self: 1 })
    ]
  },

  alleyWarning: {
    chapter: "第一章",
    title: "后巷警告",
    location: "绯夜会馆 · 后巷",
    bg: art.bgBackAlley,
    cast: [
      { id: "zhixia", image: art.zhixiaNight, side: "left", mood: "guarded" },
      { id: "aman", image: art.aman, side: "right", mood: "protective" }
    ],
    beats: [
      b("阿曼", "aman", "那个西装男，我查过了。车是租的，表也可能是假的。"),
      b("林知夏", "zhixia", "你怎么查的？"),
      b("阿曼", "aman", "在这行混久了，你会认识几个看车牌的人。"),
      b("林知夏", "zhixia", "也许他只是低调。"),
      b("阿曼", "aman", "低调和装，不是一回事。你别把门钥匙随便给人。")
    ],
    choices: [
      c("林知夏", "把阿曼的话听进去，保持距离。", "+自我 / +证据", "motherPressure", { self: 1, evidence: 1 }),
      c("林知夏", "觉得阿曼多心，还是去见顾远。", "+信任 / -警惕", "motherPressure", { trust: 1, self: -1 })
    ]
  },

  probeStart: {
    chapter: "第一章",
    title: "试探",
    location: "绯夜会馆 · 吧台",
    bg: art.bgClubBar,
    cast: [
      { id: "zhixia", image: art.zhixiaNight, side: "left", mood: "sharp" },
      { id: "guyuan", image: art.guyuanRich, side: "right", mood: "measured" }
    ],
    beats: [
      b("林知夏", "zhixia", "你说你做地产。公司叫什么？法人是谁？"),
      b("顾远", "guyuan", "你比我想象中难哄。"),
      b("林知夏", "zhixia", "难哄的人不容易被骗。"),
      b("旁白", "narrator", "他笑着换了话题，可知夏记住了他停顿的那一秒。"),
      b("旁白", "narrator", "她趁他去洗手间，拍下了名片、车牌和包厢账单。")
    ],
    choices: [
      c("林知夏", "把照片发给阿曼核实。", "+证据", "motherPressure", { evidence: 2 }),
      c("林知夏", "先自己查，不声张。", "+证据 / +自我", "motherPressure", { evidence: 1, self: 1 })
    ]
  },

  motherPressure: {
    chapter: "第二章",
    title: "母亲的电话",
    location: "绯夜会馆 · 员工休息室",
    bg: art.bgClubBar,
    cast: [{ id: "zhixia", image: art.zhixiaCasual, side: "center", mood: "guarded" }],
    beats: [
      b("旁白", "narrator", "凌晨一点，知夏的手机震了。来电显示：市立医院。"),
      b("母亲", "narrator", "知夏，这个月的透析费……还能再想想办法吗？"),
      b("林知夏", "zhixia", "妈，你别担心。我会处理。"),
      b("旁白", "narrator", "她挂断电话，在镜子前补了口红。红色像一层薄薄的盔甲。"),
      b("旁白", "narrator", "顾远发来消息：明天带你去个地方。你会喜欢的。")
    ],
    choices: [
      c("林知夏", "赴约，也许他真的能帮助自己。", "+信任", "carRide", { trust: 1 }),
      c("林知夏", "赴约，但带上警惕。", "+自我", "restaurantGuard", { self: 1 }),
      c("阿曼", "先和阿曼商量，再决定去不去。", "+证据", "restaurantProbe", { evidence: 1, self: 1 })
    ]
  },

  carRide: {
    chapter: "第二章",
    title: "跑车后座",
    location: "南港 · 滨江大道",
    bg: art.bgRiversideRoad,
    cast: [
      { id: "zhixia", image: art.zhixiaNight, side: "left", mood: "softened" },
      { id: "guyuan", image: art.guyuanCasual, side: "right", mood: "charming" }
    ],
    beats: [
      b("旁白", "narrator", "黑色跑车切开雨幕。顾远单手扶方向盘，另一只手把暖风调大。"),
      b("顾远", "guyuan", "你紧张的时候，会下意识摸右耳垂。"),
      b("林知夏", "zhixia", "你观察得很细。"),
      b("顾远", "guyuan", "我对在意的人，都会细。"),
      b("旁白", "narrator", "城市灯光从窗外掠过，像一条被拉长的金色河流。"),
      b("林知夏", "zhixia", "如果这只是另一个梦，我希望它慢一点醒。")
    ],
    choices: [
      c("林知夏", "放松下来，享受这一晚。", "+信任", "restaurantTrust", { trust: 1, self: -1 }),
      c("林知夏", "记住车牌和路线，保持清醒。", "+证据", "restaurantGuard", { evidence: 1, self: 1 })
    ]
  },

  // ── 第二章：假富豪 ──
  restaurantTrust: {
    chapter: "第二章",
    title: "江景晚餐",
    location: "南港 · 江景高级餐厅",
    bg: art.bgRestaurant,
    cast: [
      { id: "zhixia", image: art.zhixiaNight, side: "left", mood: "softened" },
      { id: "guyuan", image: art.guyuanRich, side: "right", mood: "charming" }
    ],
    beats: [
      b("旁白", "narrator", "一周后，顾远带知夏坐进她从没来过的餐厅。窗外是江景，桌上的酒比她半个月房租还贵。"),
      b("顾远", "guyuan", "知夏，你不该一直待在那种地方。我不是想带你走一晚，我想带你走一辈子。"),
      b("林知夏", "zhixia", "这种话，我听过很多。"),
      b("顾远", "guyuan", "那就别听话，看行动。这个滨江项目回款后，我们离开南港。"),
      b("旁白", "narrator", "他递来一份厚厚的项目资料。印章很红，编号很长，像一串能通向未来的密码。")
    ],
    choices: [
      c("林知夏", "主动问：需要多少钱？", "+债务 / 沉沦线", "firstLoan", { debt: 1, trust: 1, self: -1 }),
      c("林知夏", "说自己不懂投资，拒绝谈钱。", "+自我", "restaurantGuard", { self: 1 }),
      c("林知夏", "提到母亲的医药费，看他反应。", "+信任 / 试探", "guYuanOffer", { trust: 1 })
    ]
  },

  restaurantGuard: {
    chapter: "第二章",
    title: "漂亮的文件",
    location: "南港 · 江景高级餐厅",
    bg: art.bgRestaurant,
    cast: [
      { id: "zhixia", image: art.zhixiaNight, side: "left", mood: "guarded" },
      { id: "guyuan", image: art.guyuanRich, side: "right", mood: "patient" }
    ],
    beats: [
      b("顾远", "guyuan", "我不缺钱，只是流程卡住。你不用帮，我只是想让你知道，我在规划我们的以后。"),
      b("林知夏", "zhixia", "未来如果要我掏钱，那就不叫未来，叫账单。"),
      b("顾远", "guyuan", "你很聪明。我喜欢聪明的女人。"),
      b("旁白", "narrator", "他说这话时没有生气，反而像发现了某种更感兴趣的目标。")
    ],
    choices: [
      c("林知夏", "坚持不借钱，但继续见他。", "+警惕 / 仍有风险", "secondMeeting", { debt: 1, self: 1 }),
      c("阿曼", "把合同拍给阿曼，请她找人看。", "+证据", "investigationStart", { evidence: 2 }),
      c("林知夏", "借一点小钱试试他会不会还。", "+债务 / 试探", "firstLoan", { debt: 1 })
    ]
  },

  restaurantProbe: {
    chapter: "第二章",
    title: "阿曼的提醒",
    location: "南港 · 江景高级餐厅外",
    bg: art.bgRestaurant,
    cast: [
      { id: "zhixia", image: art.zhixiaNight, side: "left", mood: "sharp" },
      { id: "aman", image: art.aman, side: "right", mood: "focused" }
    ],
    beats: [
      b("阿曼", "aman", "你去可以，但别单独跟他走。我会在外面等。"),
      b("旁白", "narrator", "知夏进去赴约。顾远表现完美，但阿曼发来的消息打断了一切："),
      b("阿曼", "aman", "公司查无此人。项目地址是空的。你出来，现在。"),
      b("林知夏", "zhixia", "……我马上。"),
      b("旁白", "narrator", "她借口去洗手间，从侧门离开。顾远追出来，只来得及看见她的背影。")
    ],
    choices: [
      c("林知夏", "彻底切断联系，整理已有证据。", "+证据 / +自我", "investigationStart", { evidence: 2, self: 1 }),
      c("林知夏", "心软，回复他的解释短信。", "+信任 / -自我", "guYuanOffer", { trust: 2, self: -1 })
    ]
  },

  guYuanOffer: {
    chapter: "第二章",
    title: "温柔的陷阱",
    location: "林知夏的出租屋",
    bg: art.bgGuyuanApartment,
    cast: [
      { id: "zhixia", image: art.zhixiaNight, side: "left", mood: "softened" },
      { id: "guyuan", image: art.guyuanCasual, side: "right", mood: "charming" }
    ],
    beats: [
      b("顾远", "guyuan", "伯母的医药费，我可以先垫。不是借，是帮你。"),
      b("林知夏", "zhixia", "为什么？"),
      b("顾远", "guyuan", "因为我想让你知道，我不是那些只会说空话的人。"),
      b("旁白", "narrator", "他转账五万。知夏盯着屏幕，手指发抖。那数字刚好覆盖母亲这个月的透析。"),
      b("林知夏", "zhixia", "我会还你的。")
    ],
    choices: [
      c("林知夏", "收下钱，欠下人情。", "+信任 / +债务", "firstLoan", { trust: 2, debt: 1, self: -1 }),
      c("林知夏", "只收一半，保持界限。", "+自我", "secondMeeting", { self: 1, debt: 1 }),
      c("阿曼", "告诉阿曼，请她帮忙查清这笔钱来源。", "+证据", "investigationStart", { evidence: 1, self: 1 })
    ]
  },

  firstLoan: {
    chapter: "第三章",
    title: "第一笔钱",
    location: "顾远的临时公寓",
    bg: art.bgGuyuanApartment,
    cast: [
      { id: "zhixia", image: art.zhixiaNight, side: "left", mood: "softened" },
      { id: "guyuan", image: art.guyuanRich, side: "right", mood: "charming" }
    ],
    beats: [
      b("顾远", "guyuan", "项目还差最后一笔过桥资金。二十万。三天后双倍返还。"),
      b("林知夏", "zhixia", "我没有二十万。"),
      b("顾远", "guyuan", "你有。你这些年的积蓄，加上你信用额度，够了。"),
      b("旁白", "narrator", "他说得轻松，像在说借一支口红。"),
      b("林知夏", "zhixia", "如果回不了呢？"),
      b("顾远", "guyuan", "我会让你输吗？")
    ],
    choices: [
      c("林知夏", "拿出全部积蓄和信用卡额度。", "+债务 / 沉沦", "contractNight", { debt: 3, trust: 1, self: -2 }),
      c("林知夏", "只借一半，留后路。", "+债务", "secondLoan", { debt: 2, self: -1 }),
      c("阿曼", "拒绝，并把对话录音给阿曼。", "+证据 / +自我", "investigationStart", { evidence: 2, self: 2 })
    ]
  },

  secondLoan: {
    chapter: "第三章",
    title: "第二笔",
    location: "顾远的临时公寓",
    bg: art.bgGuyuanApartment,
    cast: [
      { id: "zhixia", image: art.zhixiaNight, side: "left", mood: "softened" },
      { id: "guyuan", image: art.guyuanAngry, side: "right", mood: "patient" }
    ],
    beats: [
      b("顾远", "guyuan", "第一笔已经见效。只差最后一段，项目就能落地。"),
      b("林知夏", "zhixia", "你上次也是这么说的。"),
      b("顾远", "guyuan", "所以这次我给你看回款短信。"),
      b("旁白", "narrator", "屏幕上的数字是真的。可那笔钱进账后，又转进了一个陌生账户。"),
      b("林知夏", "zhixia", "这个账户是谁的？"),
      b("顾远", "guyuan", "中介。你别担心。")
    ],
    choices: [
      c("林知夏", "继续追加借款。", "+债务", "contractNight", { debt: 2, trust: 1, self: -1 }),
      c("林知夏", "停止借款，但暂时不拆穿他。", "+自我", "secondMeeting", { self: 1, evidence: 1 }),
      c("阿曼", "把短信截图发给阿曼。", "+证据", "investigationStart", { evidence: 2, self: 1 })
    ]
  },

  secondMeeting: {
    chapter: "第三章",
    title: "第二次见面",
    location: "南港 · 私人会所",
    bg: art.bgPrivateClub,
    cast: [
      { id: "zhixia", image: art.zhixiaNight, side: "left", mood: "guarded" },
      { id: "guyuan", image: art.guyuanCasual, side: "right", mood: "patient" }
    ],
    beats: [
      b("旁白", "narrator", "顾远没有再提钱。他带她看展、听爵士、在江边散步。"),
      b("顾远", "guyuan", "你最近好像总在躲我。"),
      b("林知夏", "zhixia", "我只是在想，我们到底是什么关系。"),
      b("顾远", "guyuan", "你想是什么，就是什么。"),
      b("旁白", "narrator", "这句话听起来像承诺，也像逃避。")
    ],
    choices: [
      c("林知夏", "要求见他的合伙人和项目现场。", "+证据", "investigationStart", { evidence: 2, self: 1 }),
      c("林知夏", "接受这种模糊，继续交往。", "+信任", "contractNight", { trust: 2, self: -1 }),
      c("林知夏", "直接问：你到底有没有骗我？", "+自我", "contractNight", { self: 1, trust: -1 })
    ]
  },

  investigationStart: {
    chapter: "第三章",
    title: "调查",
    location: "阿曼的公寓",
    bg: art.bgAmanApartment,
    cast: [
      { id: "zhixia", image: art.zhixiaNight, side: "left", mood: "sharp" },
      { id: "aman", image: art.aman, side: "right", mood: "focused" }
    ],
    beats: [
      b("阿曼", "aman", "车是租的，公司注销了，项目地址根本没有备案。"),
      b("阿曼", "aman", "他真名可能不叫顾远。这人专挑夜场女孩下手，已经有三个受害者。"),
      b("林知夏", "zhixia", "……我是第四个。"),
      b("阿曼", "aman", "还不算。你还没有把全部身家给他。"),
      b("林知夏", "zhixia", "如果我给了呢？"),
      b("阿曼", "aman", "那我就陪你一起把他送进监狱。")
    ],
    choices: [
      c("林知夏", "配合调查，继续假装信任套取证据。", "+证据", "contractNight", { evidence: 2, self: 1 }),
      c("林知夏", "立刻断联，不再见面。", "+自我", "apartmentAwake", { self: 2, evidence: 1 }),
      c("林知夏", "当面质问顾远。", "+自我 / 高风险", "contractNight", { self: 1, trust: -2 })
    ]
  },

  contractNight: {
    chapter: "第三章",
    title: "合同之夜",
    location: "顾远的临时公寓",
    bg: art.bgGuyuanApartment,
    cast: [
      { id: "zhixia", image: art.zhixiaNight, side: "left", mood: "softened" },
      { id: "guyuan", image: art.guyuanAngry, side: "right", mood: "charming" }
    ],
    beats: [
      b("旁白", "narrator", "顾远拿出一叠新合同。签字费、过桥款、紧急追加——每一页都需要知夏的钱。"),
      b("顾远", "guyuan", "签完这个，我们就离开南港。我保证。"),
      b("林知夏", "zhixia", "你保证过三次了。"),
      b("顾远", "guyuan", "这次不一样。"),
      b("旁白", "narrator", "他的眼神有一瞬间的空白。像面具滑了一下。")
    ],
    choices: [
      c("林知夏", "签字，交出最后的积蓄。", "+债务 / 最低谷", "apartmentCollapse", { debt: 3, self: -2, trust: 1 }),
      c("林知夏", "假装签字，实则录音取证。", "+证据", "apartmentAwake", { evidence: 3, self: 1 }, { evidence: 2 }),
      c("林知夏", "拒绝签字，要求见律师。", "+自我", "apartmentLow", { self: 2, trust: -1 }),
      c("阿曼", "按阿曼计划，报警并包围公寓。", "+证据 / 正义", "apartmentAwake", { evidence: 3, self: 2 }, { evidence: 3 })
    ]
  },

  // ── 第四章：坠落 ──
  apartmentLow: {
    chapter: "第四章",
    title: "裂痕",
    location: "凌晨三点的出租屋",
    bg: art.bgApartment,
    cast: [
      { id: "zhixia", image: art.zhixiaBroken, side: "left", mood: "collapsed" },
      { id: "guyuan", image: art.guyuanRich, side: "right", mood: "measured" }
    ],
    beats: [
      b("旁白", "narrator", "顾远走了。桌上留着半杯冷掉的咖啡和一张未签字的合同。"),
      b("林知夏", "zhixia", "他生气了。还是怕了？"),
      b("旁白", "narrator", "手机震个不停。母亲的医药费、信用卡账单、会馆的催班通知。"),
      b("林知夏", "zhixia", "我以为我只是在赌一次离开的机会。")
    ],
    choices: [
      c("林知夏", "追去他的公寓，想挽回。", "+债务 / -自我", "apartmentCollapse", { debt: 2, self: -1, trust: 1 }),
      c("阿曼", "打电话给阿曼。", "+自我", "apartmentAwake", { self: 1 }),
      c("林知夏", "回到会馆，麻木地继续工作。", "+债务 / -自我", "nightclubNumb", { debt: 1, self: -1 })
    ]
  },

  apartmentCollapse: {
    chapter: "第四章",
    title: "彻底失去",
    location: "凌晨三点的出租屋",
    bg: art.bgApartment,
    cast: [{ id: "zhixia", image: art.zhixiaBroken, side: "center", mood: "collapsed" }],
    beats: [
      b("旁白", "narrator", "顾远的电话永远无人接听。跑车从租车公司被收回。公寓人去楼空。"),
      b("旁白", "narrator", "知夏查账：积蓄清零，信用卡透支，还欠会馆同事五万。"),
      b("林知夏", "zhixia", "他不会骗我。他叫过我的真名。"),
      b("旁白", "narrator", "镜子裂开一条细缝。她看见里面的人漂亮、疲惫，像已经不属于自己。"),
      b("旁白", "narrator", "母亲打来电话。知夏按掉。她不敢接。")
    ],
    choices: [
      c("林知夏", "继续找顾远，哪怕再借钱。", "+债务 / 最低谷", "loanShark", { debt: 2, self: -2 }),
      c("阿曼", "听阿曼的话，整理证据并报警。", "+证据 / +自我", "apartmentAwake", { evidence: 2, self: 1 }),
      c("林知夏", "把自己关进房间，什么都不做。", "+债务 / -自我", "hospitalVisit", { debt: 1, self: -2 })
    ]
  },

  apartmentAwake: {
    chapter: "第四章",
    title: "证据",
    location: "凌晨三点的出租屋",
    bg: art.bgApartment,
    cast: [
      { id: "zhixia", image: art.zhixiaBroken, side: "left", mood: "awake" },
      { id: "aman", image: art.aman, side: "right", mood: "focused" }
    ],
    beats: [
      b("阿曼", "aman", "你手里有什么？聊天记录、转账记录、合同、录音？"),
      b("林知夏", "zhixia", "都有。我……我还保留了部分。"),
      b("阿曼", "aman", "那就够立案了。你不需要证明自己蠢，你只需要证明他坏。"),
      b("林知夏", "zhixia", "可我还欠着债。妈还在等钱。"),
      b("阿曼", "aman", "先把人找回来，再谈钱。你自己也是。")
    ],
    choices: [
      c("林知夏", "报警并把证据打包提交。", "+证据 / +自我", "policeReport", { evidence: 2, self: 2 }),
      c("林知夏", "先还债，暂时不追究。", "+债务压力", "hospitalVisit", { debt: 1, self: -1 }),
      c("林知夏", "用证据威胁顾远还钱。", "+证据 / 高风险", "guyuanShadow", { evidence: 1, self: 1 })
    ]
  },

  loanShark: {
    chapter: "第四章",
    title: "讨债",
    location: "南港 · 旧码头仓库",
    bg: art.bgWarehouse,
    cast: [
      { id: "zhixia", image: art.zhixiaBroken, side: "left", mood: "collapsed" },
      { id: "collector", image: art.collector, side: "right", mood: "exposed" }
    ],
    beats: [
      b("旁白", "narrator", "知夏追去顾远最后出现的地址。等她的不是他，而是三个催债的人。"),
      b("催债人", "narrator", "顾远把你名字留给我们了。他说你会替他还。"),
      b("林知夏", "zhixia", "我不认识你们。"),
      b("旁白", "narrator", "对方甩出一张联名欠条。上面有她的签名，还有她从没见过的金额。"),
      b("林知夏", "zhixia", "这是假的……"),
      b("旁白", "narrator", "她第一次明白，被骗不只是失去钱，还会失去对世界的信任。")
    ],
    choices: [
      c("阿曼", "打电话向阿曼求救。", "+自我", "amanRescue", { self: 2, evidence: 1 }),
      c("林知夏", "答应慢慢还，先保住自己。", "+债务", "nightclubNumb", { debt: 2, self: -1 }),
      c("林知夏", "当场报警，说明被冒签。", "+证据", "apartmentAwake", { evidence: 2, self: 1 })
    ]
  },

  nightclubNumb: {
    chapter: "第四章",
    title: "麻木",
    location: "绯夜会馆 · 吧台",
    bg: art.bgClubBar,
    cast: [
      { id: "zhixia", image: art.zhixiaBroken, side: "center", mood: "collapsed" },
      { id: "aman", image: art.aman, side: "right", mood: "angry" }
    ],
    beats: [
      b("旁白", "narrator", "知夏回到会馆。妆画得比任何时候都完美，眼神却比任何时候都空。"),
      b("阿曼", "aman", "你打算就这样烂下去？"),
      b("林知夏", "zhixia", "不然呢？我还能去哪？"),
      b("阿曼", "aman", "来我家。现在。"),
      b("旁白", "narrator", "阿曼抓住她的手腕。力道很大，像要把她从深水里拽出来。")
    ],
    choices: [
      c("阿曼", "跟阿曼走。", "+自我", "amanRescue", { self: 2 }),
      c("林知夏", "甩开她，继续上班。", "+债务 / -自我", "hospitalVisit", { debt: 1, self: -2 })
    ]
  },

  amanRescue: {
    chapter: "第四章",
    title: "阿曼的沙发",
    location: "阿曼的公寓",
    bg: art.bgAmanApartment,
    cast: [
      { id: "zhixia", image: art.zhixiaBroken, side: "left", mood: "awake" },
      { id: "aman", image: art.amanSupport, side: "right", mood: "protective" }
    ],
    beats: [
      b("旁白", "narrator", "阿曼煮了一碗面。没有说教，没有追问。"),
      b("林知夏", "zhixia", "我是不是……很蠢？"),
      b("阿曼", "aman", "你信错了人。这不叫蠢，叫被人设计了。"),
      b("旁白", "narrator", "知夏第一次没有化妆，也没有假装自己很好。她哭了很久。"),
      b("阿曼", "aman", "明天开始，我们一点一点来。")
    ],
    choices: [
      c("林知夏", "同意。从明天开始重建。", "+自我", "hospitalVisit", { self: 2 }),
      c("林知夏", "先睡。明天的事明天再说。", "+自我", "hospitalVisit", { self: 1 })
    ]
  },

  hospitalVisit: {
    chapter: "第五章",
    title: "医院",
    location: "市立医院 · 透析中心",
    bg: art.bgHospital,
    cast: [
      { id: "zhixia", image: art.zhixiaCasual, side: "left", mood: "learning" },
      { id: "mother", image: art.mother, side: "right", mood: "mentor" }
    ],
    beats: [
      b("旁白", "narrator", "母亲瘦了很多。她看见知夏，先问的是：你最近是不是没睡好？"),
      b("林知夏", "zhixia", "妈，我会把医药费凑齐的。"),
      b("母亲", "narrator", "钱可以慢慢凑。你别把自己弄丢就行。"),
      b("旁白", "narrator", "知夏握着母亲的手。那只手很瘦，却很温暖。"),
      b("旁白", "narrator", "走出医院时，她看见老巷里陈姨化妆间的灯还亮着。")
    ],
    choices: [
      c("林知夏", "去敲陈姨的门。", "+事业", "motherRecovery", { business: 1, self: 1 }),
      c("林知夏", "先找零工还债，暂不考虑别的。", "+债务", "debtRepayment", { debt: -1, self: 1 }),
      c("林知夏", "如果证据够了，先去报警。", "+证据", "policeReport", { evidence: 1, self: 1 }, { evidence: 3 })
    ]
  },

  policeReport: {
    chapter: "第五章",
    title: "报案",
    location: "南港派出所",
    bg: art.bgPolice,
    cast: [
      { id: "zhixia", image: art.zhixiaBroken, side: "left", mood: "awake" },
      { id: "police", image: art.police, side: "right", mood: "focused" }
    ],
    beats: [
      b("旁白", "narrator", "民警看了证据，记录了口供。顾远已被列为调查对象。"),
      b("民警", "narrator", "这类案件取证难、周期长。你要有心理准备。"),
      b("林知夏", "zhixia", "我等得起。"),
      b("阿曼", "aman", "现在，该想想你怎么活下去了。"),
      b("林知夏", "zhixia", "我想学化妆。陈姨说过，我可以。")
    ],
    choices: [
      c("林知夏", "去陈姨那里学手艺。", "+事业", "makeupRoom", { business: 2, self: 1 }),
      c("林知夏", "等顾远落网后再说。", "-事业", "debtRepayment", { self: -1 })
    ]
  },

  // ── 第五章：重建 ──
  motherRecovery: {
    chapter: "第五章",
    title: "母亲出院",
    location: "市立医院 · 病房",
    bg: art.bgHospital,
    cast: [
      { id: "zhixia", image: art.zhixiaCasual, side: "left", mood: "learning" },
      { id: "mother", image: art.mother, side: "right", mood: "mentor" }
    ],
    beats: [
      b("旁白", "narrator", "母亲的透析指标终于稳定。她拉着知夏的手，反复说同一句话。"),
      b("母亲", "narrator", "你瘦了很多。是不是又硬撑？"),
      b("林知夏", "zhixia", "没有。我在学新东西。"),
      b("母亲", "narrator", "学什么？"),
      b("林知夏", "zhixia", "学怎么把自己找回来。"),
      b("旁白", "narrator", "母亲没有追问。她只是把一张旧照片塞进知夏手里——那是知夏十八岁时，还没来南港的样子。"),
      b("林知夏", "zhixia", "我会回到这个眼神里的。")
    ],
    choices: [
      c("林知夏", "去陈姨那里，正式开始学习。", "+事业 / +自我", "makeupRoom", { business: 2, self: 2 }),
      c("林知夏", "先休息一周，整理心情。", "+自我", "makeupRoom", { self: 1 })
    ]
  },

  makeupRoom: {
    chapter: "第五章",
    title: "退潮造型室",
    location: "老巷白天 · 陈姨的化妆间",
    bg: art.bgMakeup,
    cast: [
      { id: "zhixia", image: art.zhixiaLearning, side: "left", mood: "learning" },
      { id: "chen", image: art.chen, side: "right", mood: "mentor" }
    ],
    beats: [
      b("旁白", "narrator", "这是知夏很久没认真看过的白天。陈姨的化妆间很小，却有一面亮得像出口的镜子。"),
      b("陈姨", "chen", "你来给她化。她不是想变漂亮，她是想让别人相信她不害怕。"),
      b("林知夏", "zhixia", "我只会给夜场姐妹化妆。"),
      b("陈姨", "chen", "那你更懂。你知道一个女人什么时候是在求生，什么时候是在重新站起来。"),
      b("旁白", "narrator", "女孩看着镜子，眼圈红了。知夏第一次发现，自己的手艺也能帮人站起来。")
    ],
    choices: [
      c("林知夏", "白天跟陈姨学妆造，晚上还债。", "+事业", "trainingWeek", { business: 2, self: 1 }),
      c("林知夏", "给夜场姐妹做低价造型，积累客户。", "+事业", "firstPaidClient", { business: 3 }),
      c("林知夏", "拒绝帮助，觉得自己不配。", "-自我", "makeupReject", { self: -1, business: 1 })
    ]
  },

  makeupReject: {
    chapter: "第五章",
    title: "不配",
    location: "老巷 · 陈姨化妆间外",
    bg: art.bgMakeup,
    cast: [{ id: "zhixia", image: art.zhixiaBroken, side: "center", mood: "collapsed" }],
    beats: [
      b("林知夏", "zhixia", "我不配。我搞砸了一切。"),
      b("陈姨", "chen", "配不配，不是你现在能判断的。"),
      b("旁白", "narrator", "陈姨没有追出来。她只在门口留了一张纸条："),
      b("旁白", "narrator", "「明天同一时间。来或不来，门都开着。」")
    ],
    choices: [
      c("林知夏", "第二天还是来了。", "+自我 / +事业", "chenLesson1", { self: 2, business: 1 }),
      c("林知夏", "没有来。先去打零工。", "+债务", "debtRepayment", { debt: -1 })
    ]
  },

  trainingWeek: {
    chapter: "第五章",
    title: "训练周",
    location: "老巷 · 陈姨化妆间",
    bg: art.bgMakeup,
    cast: [
      { id: "zhixia", image: art.zhixiaLearning, side: "left", mood: "learning" },
      { id: "chen", image: art.chen, side: "right", mood: "mentor" }
    ],
    beats: [
      b("旁白", "narrator", "第一周，知夏每天六点到达。卸妆、打底、眉形、眼线——重复到手指发酸。"),
      b("陈姨", "chen", "手稳，心才会稳。"),
      b("林知夏", "zhixia", "我心还不稳。"),
      b("陈姨", "chen", "那就让手先稳。"),
      b("旁白", "narrator", "第七天，她给一个女孩化完面试妆。女孩出门后，陈姨才点头。"),
      b("陈姨", "chen", "可以接活了。")
    ],
    choices: [
      c("林知夏", "继续深造，学商务妆造。", "+事业", "chenLesson1", { business: 2 }),
      c("林知夏", "开始接散单，先赚钱。", "+事业", "firstPaidClient", { business: 2, debt: -1 })
    ]
  },

  chenLesson1: {
    chapter: "第六章",
    title: "第一课",
    location: "老巷 · 陈姨化妆间",
    bg: art.bgMakeup,
    cast: [
      { id: "zhixia", image: art.zhixiaLearning, side: "left", mood: "learning" },
      { id: "chen", image: art.chen, side: "right", mood: "mentor" }
    ],
    beats: [
      b("陈姨", "chen", "化妆不是遮丑，是帮人拿出最想被看见的那一面。"),
      b("旁白", "narrator", "知夏学了眉形、底妆、面试妆。手越来越稳。"),
      b("陈姨", "chen", "你欠的债，要还。但别用回会馆的方式还。"),
      b("林知夏", "zhixia", "我知道。"),
      b("旁白", "narrator", "三个月后，她有了第一个付费客户。")
    ],
    choices: [
      c("林知夏", "接商务妆造单，走高端路线。", "+事业", "chenLesson2", { business: 2 }),
      c("林知夏", "做夜场姐妹的平价造型。", "+事业 / +关系", "sideHustle", { business: 3, self: 1 })
    ]
  },

  chenLesson2: {
    chapter: "第六章",
    title: "进阶课",
    location: "老巷 · 陈姨化妆间",
    bg: art.bgMakeup,
    cast: [
      { id: "zhixia", image: art.zhixiaLearning, side: "left", mood: "learning" },
      { id: "chen", image: art.chen, side: "right", mood: "mentor" }
    ],
    beats: [
      b("陈姨", "chen", "面试妆、商务妆、拍摄妆，是三种语言。"),
      b("旁白", "narrator", "知夏在假人模特和彼此脸上练了上百次。她学会了用高光和阴影改变气质。"),
      b("林知夏", "zhixia", "化妆原来也是叙事。"),
      b("陈姨", "chen", "每个来坐这张椅子的人，都在讲自己的故事。"),
      b("旁白", "narrator", "一位摄影导演偶然路过，邀请她给短片演员做造型。"),
      b("林知夏", "zhixia", "这是机会。")
    ],
    choices: [
      c("林知夏", "接下短片项目，扩大人脉。", "+事业", "firstPaidClient", { business: 3, self: 1 }),
      c("林知夏", "拒绝，先把基础客户做稳。", "+事业", "debtRepayment", { business: 2, self: 1 })
    ]
  },

  firstPaidClient: {
    chapter: "第六章",
    title: "第一单",
    location: "老巷 · 陈姨化妆间",
    bg: art.bgMakeup,
    cast: [
      { id: "zhixia", image: art.zhixiaLearning, side: "left", mood: "learning" },
      { id: "client", image: art.client, side: "right", mood: "guarded" }
    ],
    beats: [
      b("旁白", "narrator", "客户是个要去面试的女孩。知夏给她画完，她看着镜子说："),
      b("客户", "narrator", "我看起来像能被录用的人。"),
      b("林知夏", "zhixia", "你本来就是。我只是帮你拿出来。"),
      b("旁白", "narrator", "女孩通过了面试。她介绍了三个同事来。"),
      b("旁白", "narrator", "知夏的预约本开始有了名字。")
    ],
    choices: [
      c("林知夏", "扩大客户，准备租小工作室。", "+事业", "smallLease", { business: 2 }),
      c("林知夏", "先还清一部分债务。", "+债务", "debtRepayment", { debt: -2, business: 1 })
    ]
  },

  sideHustle: {
    chapter: "第六章",
    title: "姐妹的订单",
    location: "绯夜会馆 · 化妆间",
    bg: art.bgClubBar,
    cast: [
      { id: "zhixia", image: art.zhixiaLearning, side: "left", mood: "learning" },
      { id: "aman", image: art.aman, side: "right", mood: "protective" }
    ],
    beats: [
      b("旁白", "narrator", "知夏给会馆的姐妹做造型。价格低，但口碑传得很快。"),
      b("阿曼", "aman", "你这不叫回去，叫带着手艺离开。"),
      b("林知夏", "zhixia", "她们信我。因为知道我不会坑她们。"),
      b("旁白", "narrator", "有人出钱，有人介绍客户。知夏第一次感到，这条街也能成为起点。")
    ],
    choices: [
      c("林知夏", "租下老巷的小铺面。", "+事业", "smallLease", { business: 3 }),
      c("阿曼", "和阿曼合伙，她负责客源。", "+事业", "amanJoins", { business: 2, self: 1 })
    ]
  },

  debtRepayment: {
    chapter: "第六章",
    title: "还债",
    location: "林知夏的出租屋",
    bg: art.bgApartment,
    cast: [{ id: "zhixia", image: art.zhixiaCasual, side: "center", mood: "learning" }],
    beats: [
      b("旁白", "narrator", "知夏白天化妆，晚上接散单。 sleep 被切成碎片。"),
      b("旁白", "narrator", "每还一笔，她就划掉账单上的一行。像在游戏里打怪。"),
      b("林知夏", "zhixia", "还清了，我就自由了。"),
      b("旁白", "narrator", "六个月后，信用卡还清了。母亲的透析费也稳定了。"),
      b("旁白", "narrator", "陈姨说：你可以考虑自己的店了。")
    ],
    choices: [
      c("林知夏", "租铺面，开退潮造型室。", "+事业", "smallLease", { business: 2, self: 1 }),
      c("林知夏", "继续跟陈姨学，不急着扩张。", "+事业", "chenLesson1", { business: 1, self: 1 })
    ]
  },

  smallLease: {
    chapter: "第七章",
    title: "退潮",
    location: "老巷 · 新租的小铺",
    bg: art.bgStudioOpening,
    cast: [
      { id: "zhixia", image: art.zhixiaLearning, side: "left", mood: "learning" },
      { id: "chen", image: art.chen, side: "right", mood: "mentor" }
    ],
    beats: [
      b("旁白", "narrator", "铺面不大。知夏亲手刷了墙，挂上手写招牌：退潮造型室。"),
      b("陈姨", "chen", "潮水退了，才知道谁还站得住。"),
      b("林知夏", "zhixia", "我会站住的。"),
      b("旁白", "narrator", "开业第一天，来了七个客人。其中三个是阿曼介绍的。"),
      b("旁白", "narrator", "知夏忙到没空吃饭，却第一次觉得累是甜的。")
    ],
    choices: [
      c("林知夏", "专注品质，做口碑。", "+事业", "openingDay", { business: 2 }),
      c("林知夏", "招学徒，扩大规模。", "+事业", "amanJoins", { business: 2 })
    ]
  },

  amanJoins: {
    chapter: "第七章",
    title: "合伙人",
    location: "退潮造型室",
    bg: art.bgMakeup,
    cast: [
      { id: "zhixia", image: art.zhixiaLearning, side: "left", mood: "learning" },
      { id: "aman", image: art.amanBusiness, side: "right", mood: "protective" }
    ],
    beats: [
      b("阿曼", "aman", "我负责拉客和挡烂人。你负责把她们变美。"),
      b("林知夏", "zhixia", "你不回会馆了？"),
      b("阿曼", "aman", "我早就想走了。跟你干，比陪笑有前途。"),
      b("旁白", "narrator", "两人击掌。知夏第一次有「团队」的感觉。"),
      b("旁白", "narrator", "生意越来越好。也有人开始眼红。")
    ],
    choices: [
      c("林知夏", "稳步发展，不张扬。", "+事业", "studioStruggle", { business: 2, self: 1 }),
      c("林知夏", "接受媒体采访，扩大影响。", "+事业 / 曝光", "mediaInterview", { business: 3 })
    ]
  },

  openingDay: {
    chapter: "第七章",
    title: "开业",
    location: "退潮造型室 · 开业日",
    bg: art.bgStudioOpening,
    cast: [
      { id: "zhixia", image: art.zhixiaLearning, side: "left", mood: "learning" },
      { id: "aman", image: art.amanBusiness, side: "right", mood: "proud" }
    ],
    beats: [
      b("旁白", "narrator", "开业那天，门口摆了花篮。没有大牌嘉宾，只有几个从夜场走出来的女孩。"),
      b("阿曼", "aman", "你怕吗？"),
      b("林知夏", "zhixia", "怕。但我更怕再回去。"),
      b("旁白", "narrator", "第一位客人是母亲介绍的老同事。第二位是面试女孩。第三位是记者。"),
      b("林知夏", "zhixia", "退潮造型室，不是让我逃离过去。是让我把过去变成经验。"),
      b("旁白", "narrator", "那天她忙到深夜，却第一次睡得安稳。")
    ],
    choices: [
      c("林知夏", "稳扎稳打，先做好口碑。", "+事业", "studioStruggle", { business: 2, self: 1 }),
      c("林知夏", "接受记者采访，扩大影响。", "+事业", "mediaInterview", { business: 2 })
    ]
  },

  studioStruggle: {
    chapter: "第七章",
    title: "波折",
    location: "退潮造型室",
    bg: art.bgMakeup,
    cast: [
      { id: "zhixia", image: art.zhixiaLearning, side: "left", mood: "learning" },
      { id: "chen", image: art.chen, side: "right", mood: "mentor" }
    ],
    beats: [
      b("旁白", "narrator", "竞争对手恶意差评。房东涨租。一个学徒带着客户跳槽。"),
      b("林知夏", "zhixia", "是不是我不适合做生意？"),
      b("陈姨", "chen", "适合不适合，看你还站不站得住。"),
      b("林知夏", "zhixia", "我站得住。"),
      b("旁白", "narrator", "她重新培训团队，推出「面试妆」套餐。口碑慢慢回来。")
    ],
    choices: [
      c("林知夏", "坚持到第二年。", "+事业", "rivalSabotage", { business: 2, self: 2 }),
      c("林知夏", "如果证据够了，准备追究顾远。", "+证据", "guyuanShadow", { evidence: 1 }, { evidence: 2 })
    ]
  },

  mediaInterview: {
    chapter: "第七章",
    title: "采访",
    location: "退潮造型室",
    bg: art.bgMediaInterview,
    cast: [
      { id: "zhixia", image: art.zhixiaMedia, side: "left", mood: "owner" },
      { id: "reporter", image: art.reporter, side: "right", mood: "proud" }
    ],
    beats: [
      b("记者", "narrator", "林小姐，您从夜场到造型师，有什么想对年轻女性说的？"),
      b("林知夏", "zhixia", "别把自己的名字交给任何人。包括看起来很好的人。"),
      b("旁白", "narrator", "采访播出后，退潮造型室预约爆满。"),
      b("旁白", "narrator", "也有人认出了顾远——他在另一个城市，用同样的手法行骗。"),
      b("阿曼", "aman", "他看见新闻了。他会来找你。")
    ],
    choices: [
      c("林知夏", "做好准备，等他来。", "+自我", "yearTwoStudio", { self: 2, evidence: 1 }),
      c("林知夏", "加强安保，不见他。", "+自我", "yearTwoStudio", { self: 1 })
    ]
  },

  rivalSabotage: {
    chapter: "第七章",
    title: "恶意差评",
    location: "退潮造型室",
    bg: art.bgMakeup,
    cast: [
      { id: "zhixia", image: art.zhixiaLearning, side: "left", mood: "learning" },
      { id: "aman", image: art.amanBusiness, side: "right", mood: "angry" }
    ],
    beats: [
      b("旁白", "narrator", "竞争对手买了水军，在平台上刷恶意差评。"),
      b("阿曼", "aman", "我查到了。是街对面新开那家。"),
      b("林知夏", "zhixia", "怎么办？打价格战？"),
      b("阿曼", "aman", "不。打专业度。"),
      b("旁白", "narrator", "知夏推出「面试保障妆」：不通过不收费。争议来了，客流也来了。"),
      b("林知夏", "zhixia", "口碑不是没有被破坏，而是被破坏后还能重建。")
    ],
    choices: [
      c("林知夏", "继续扩张，进入第二年。", "+事业", "yearTwoStudio", { business: 2, self: 1 }),
      c("林知夏", "如果证据够了，准备追究顾远。", "+证据", "guyuanShadow", { evidence: 1 }, { evidence: 2 })
    ]
  },

  yearTwoStudio: {
    chapter: "第八章",
    title: "两年",
    location: "退潮造型室 · 旗舰店",
    bg: art.bgStudio,
    cast: [
      { id: "zhixia", image: art.zhixiaMedia, side: "left", mood: "owner" },
      { id: "aman", image: art.amanBusiness, side: "right", mood: "mentor" }
    ],
    beats: [
      b("旁白", "narrator", "两年。退潮造型室从老巷搬到更好的地段。三个学徒，一个前台，一个会计。"),
      b("陈姨", "chen", "你开的不只是店。你开了一扇门。"),
      b("林知夏", "zhixia", "给想离开的人。"),
      b("旁白", "narrator", "门铃响了。知夏抬头，看见一个熟悉的身影。"),
      b("旁白", "narrator", "顾远。西装依然体面，眼神已经不稳。")
    ],
    choices: [
      c("林知夏", "让他进来，当面谈。", "+自我", "studioConfrontation", { self: 1 }),
      c("林知夏", "让阿曼挡在门外。", "+证据", "studioConfrontation", { evidence: 1 }),
      c("林知夏", "直接报警。", "+证据 / 正义", "studioConfrontation", { evidence: 2, self: 1 }, { evidence: 4 })
    ]
  },

  guyuanShadow: {
    chapter: "第七章",
    title: "阴影",
    location: "退潮造型室外",
    bg: art.bgBackAlley,
    cast: [
      { id: "zhixia", image: art.zhixiaBroken, side: "left", mood: "awake" },
      { id: "guyuan", image: art.guyuanAngry, side: "right", mood: "exposed" }
    ],
    beats: [
      b("旁白", "narrator", "知夏用证据威胁顾远。他回了消息：我们可以谈谈。"),
      b("顾远", "guyuan", "我知道错了。钱我会还。别报警。"),
      b("林知夏", "zhixia", "你欠的不只是钱。"),
      b("旁白", "narrator", "她没删聊天记录。每一句都是证据。"),
      b("旁白", "narrator", "顾远没有出现。但三个月后，他在另一个城市被受害者联名举报。")
    ],
    choices: [
      c("林知夏", "继续经营，等他落网。", "+事业", "yearTwoStudio", { business: 1, self: 1 }),
      c("林知夏", "主动配合警方，提供证词。", "+证据", "yearTwoStudio", { evidence: 2, self: 1 })
    ]
  },

  studioConfrontation: {
    chapter: "第八章",
    title: "重逢",
    location: "退潮造型室",
    bg: art.bgStudio,
    cast: [
      { id: "zhixia", image: art.zhixiaCourt, side: "left", mood: "owner" },
      { id: "guyuan", image: art.guyuanExposed, side: "right", mood: "exposed" }
    ],
    beats: [
      b("顾远", "guyuan", "知夏，我找了你很久。当年我也没办法。我是真的爱过你。"),
      b("林知夏", "zhixia", "你是找我，还是找一个还愿意相信你的人？"),
      b("顾远", "guyuan", "我可以补偿你。"),
      b("林知夏", "zhixia", "我手机里是你全部的谎言。法律会算得比你清楚。"),
      b("旁白", "narrator", "她的声音很平。像在说一个陌生人的事。")
    ],
    choices: [
      c("林知夏", "报警，把证据交出去。", "正义结局", "courtroomPrep", { evidence: 1, self: 1 }, { evidence: 3 }),
      c("林知夏", "要求他公开道歉并赔偿所有受害者。", "援助基金结局", "endingFund", { business: 1, evidence: 1 }, { evidence: 2, business: 3 }),
      c("林知夏", "直接关门，不再浪费人生在解释上。", "自我主权结局", "endingSelf", { self: 2 }),
      c("林知夏", "接受他的钱，然后消失。", "沉沦结局", "endingFallen", { debt: 1, self: -2 }, { debt: 5, self: 0 }),
      c("阿曼", "和阿曼一起，让他当着所有人的面道歉。", "姐妹同盟结局", "endingAman", { self: 1, business: 1 }, { business: 4 })
    ]
  },

  courtroomPrep: {
    chapter: "第八章",
    title: "庭审前夜",
    location: "退潮造型室 · 闭店后",
    bg: art.bgCourtPrep,
    cast: [
      { id: "zhixia", image: art.zhixiaCourt, side: "left", mood: "resolved" },
      { id: "aman", image: art.amanBusiness, side: "right", mood: "focused" }
    ],
    beats: [
      b("旁白", "narrator", "知夏把证据按时间线整理成册。转账、聊天、合同、录音、联名受害者证词。"),
      b("阿曼", "aman", "明天上庭，你怕吗？"),
      b("林知夏", "zhixia", "怕。但我更怕什么都不做。"),
      b("旁白", "narrator", "她合上文件夹。封面写着：顾远诈骗案。"),
      b("林知夏", "zhixia", "这次，不是他审问我。是我把真相放到桌上。"),
      b("旁白", "narrator", "窗外霓虹仍亮。她已不在那条街里。")
    ],
    choices: [
      c("林知夏", "提交证据，完成诉讼。", "正义结局", "endingJustice", { self: 1 }),
      c("林知夏", "再考虑是否公开审理。", "+自我", "endingJustice", { self: 1 })
    ]
  },

  // ── 终章 ──
  endingJustice: {
    chapter: "终章",
    title: "退潮之后",
    location: "退潮造型室",
    bg: art.bgStudio,
    ending: "正义线",
    cast: [
      { id: "zhixia", image: art.zhixiaBoss, side: "center", mood: "resolved" },
      { id: "aman", image: art.aman, side: "right", mood: "proud" }
    ],
    beats: [
      b("旁白", "narrator", "顾远被带走的那天，知夏没有哭。她只是回到店里，把下一位客人的眉形画得很稳。"),
      b("林知夏", "zhixia", "潮水退去时，有人看见满地狼藉。我看见自己还站着。"),
      b("阿曼", "aman", "你做到了。"),
      b("林知夏", "zhixia", "我们做到了。"),
      b("旁白", "narrator", "后来有记者问她：恨顾远吗？"),
      b("林知夏", "zhixia", "恨过。但现在我更需要时间，用来帮其他人站起来。")
    ],
    choices: [c("玩家", "重新开始", "Reset", "neonStreet", {}, null, true)]
  },

  endingFund: {
    chapter: "终章",
    title: "她们的出口",
    location: "退潮造型室",
    bg: art.bgStudio,
    ending: "援助基金线",
    cast: [
      { id: "zhixia", image: art.zhixiaBoss, side: "left", mood: "leader" },
      { id: "chen", image: art.chen, side: "right", mood: "mentor" }
    ],
    beats: [
      b("旁白", "narrator", "赔偿款成为第一笔基金。退潮造型室开始培训想离开夜场、重新就业的女性。"),
      b("陈姨", "chen", "你不是只开了一家店。你开了一扇门。"),
      b("林知夏", "zhixia", "给想离开的人。给还没丢的人。"),
      b("旁白", "narrator", "第一个拿到培训证书的女孩，后来也开了自己的小店。"),
      b("林知夏", "zhixia", "这才是我想看见的退潮。")
    ],
    choices: [c("玩家", "重新开始", "Reset", "neonStreet", {}, null, true)]
  },

  endingSelf: {
    chapter: "终章",
    title: "自己的名字",
    location: "退潮造型室",
    bg: art.bgStudio,
    ending: "自我主权线",
    cast: [{ id: "zhixia", image: art.zhixiaBoss, side: "center", mood: "free" }],
    beats: [
      b("旁白", "narrator", "顾远还想解释。知夏关上门。那一声很轻，却像整个过去终于合上。"),
      b("林知夏", "zhixia", "我不是等人来救的女人。我的名字，我自己拿回来。"),
      b("旁白", "narrator", "她回到镜子前，给下一个客人化妆。动作从容，像从未被打倒过。")
    ],
    choices: [c("玩家", "重新开始", "Reset", "neonStreet", {}, null, true)]
  },

  endingFallen: {
    chapter: "终章",
    title: "未完成的退潮",
    location: "南港 · 某处公寓",
    bg: art.bgApartment,
    ending: "沉沦线",
    cast: [{ id: "zhixia", image: art.zhixiaBroken, side: "center", mood: "collapsed" }],
    beats: [
      b("旁白", "narrator", "知夏收了钱。顾远再次消失。这一次，她连站起来的力气都没有。"),
      b("旁白", "narrator", "阿曼来过。陈姨来过。她谁也没见。"),
      b("林知夏", "zhixia", "也许有些人，注定走不出这条街。"),
      b("旁白", "narrator", "霓虹还在亮。知夏还在灯里。退潮没有来。")
    ],
    choices: [c("玩家", "重新开始", "Reset", "neonStreet", {}, null, true)]
  },

  endingAman: {
    chapter: "终章",
    title: "姐妹同盟",
    location: "退潮造型室",
    bg: art.bgStudio,
    ending: "姐妹同盟线",
    cast: [
      { id: "zhixia", image: art.zhixiaBoss, side: "left", mood: "leader" },
      { id: "aman", image: art.aman, side: "right", mood: "proud" }
    ],
    beats: [
      b("旁白", "narrator", "顾远被要求在造型室门口，向所有受害者公开道歉。"),
      b("阿曼", "aman", "你欠的不只是她。你欠所有信过你的人。"),
      b("林知夏", "zhixia", "退潮造型室，不只为我自己开。也为她们。"),
      b("旁白", "narrator", "那天之后，知夏和阿曼正式成为合伙人。店名没改，但多了第二块牌：「姐妹同盟」。")
    ],
    choices: [c("玩家", "重新开始", "Reset", "neonStreet", {}, null, true)]
  }
};

const statLabels = {
  self: "自我",
  evidence: "证据",
  debt: "债务",
  business: "事业",
  trust: "信任"
};

const enStatLabels = {
  self: "Self",
  evidence: "Evidence",
  debt: "Debt",
  business: "Business",
  trust: "Trust"
};

const enActors = {
  zhixia: "Lin Zhixia",
  guyuan: "Gu Yuan",
  aman: "A-Man",
  chen: "Aunt Chen",
  mother: "Zhixia's Mother",
  collector: "Debt Collector",
  reporter: "Reporter",
  police: "Officer",
  client: "Interview Client",
  narrator: "Narrator"
};

const enSpeakerByText = {
  旁白: "Narrator",
  林知夏: "Lin Zhixia",
  顾远: "Gu Yuan",
  阿曼: "A-Man",
  陈姨: "Aunt Chen",
  林母: "Zhixia's Mother",
  母亲: "Mother",
  记者: "Reporter",
  民警: "Officer",
  客户: "Client",
  催债人: "Debt Collector",
  玩家: "Player"
};

const enSceneMeta = {
  neonStreet: ["Neon Street", "South Port Red-Light District · Feiye Club Entrance", "Rain turns South Port into a river of neon. Zhixia keeps her real name hidden until a well-dressed stranger begins asking questions."],
  vipRoom: ["VIP Room", "Feiye Club · Room Three", "Gu Yuan performs restraint and tenderness inside the private room, making his attention feel different from every other customer."],
  alleyWarning: ["Alley Warning", "Feiye Club · Back Alley", "A-Man pulls Zhixia into the service alley and warns her that expensive appearances can be rented."],
  probeStart: ["The Probe", "Feiye Club · Bar Counter", "Zhixia tests Gu Yuan's story and secretly preserves the first fragments of evidence."],
  motherPressure: ["Mother's Call", "Feiye Club · Staff Room", "A hospital call turns romance into pressure. Zhixia needs money, and Gu Yuan knows exactly when to appear."],
  carRide: ["Back Seat of the Sports Car", "South Port · Riverside Boulevard", "The rainy drive feels like rescue and danger at the same time."],
  restaurantTrust: ["Dinner Over the River", "South Port · Riverside Restaurant", "Gu Yuan presents a future wrapped in wine, city lights, and a beautiful investment file."],
  restaurantGuard: ["The Pretty File", "South Port · Riverside Restaurant", "The documents look official, but Zhixia senses that every promise is also an invoice."],
  restaurantProbe: ["A-Man's Warning", "Outside the Riverside Restaurant", "A-Man checks the details while Zhixia keeps Gu Yuan talking."],
  guYuanOffer: ["The Gentle Trap", "Zhixia's Rented Apartment", "Gu Yuan offers help for her mother's treatment, turning kindness into leverage."],
  firstLoan: ["The First Loan", "Gu Yuan's Temporary Apartment", "The first request for money arrives dressed as a final obstacle before freedom."],
  secondLoan: ["The Second Loan", "Gu Yuan's Temporary Apartment", "A screenshot of money in motion raises more questions than it answers."],
  secondMeeting: ["The Second Meeting", "South Port · Private Club", "Gu Yuan stops asking for money and returns to charm, making doubt harder to hold."],
  investigationStart: ["Investigation", "A-Man's Apartment", "A-Man connects the aliases, rental cars, and vanished companies into a pattern."],
  contractNight: ["Contract Night", "Gu Yuan's Temporary Apartment", "The final papers arrive, and the mask slips just enough for Zhixia to see the trap."],
  apartmentLow: ["Cracks", "The Apartment at 3 A.M.", "The phone keeps ringing and the future begins to fracture."],
  apartmentCollapse: ["Lost Completely", "The Apartment at 3 A.M.", "Gu Yuan disappears, leaving debt, silence, and a broken mirror behind."],
  apartmentAwake: ["Evidence", "The Apartment at 3 A.M.", "A-Man helps Zhixia sort grief from proof."],
  loanShark: ["Debt Collectors", "South Port · Old Dock Warehouse", "The fraud reaches beyond romance and into forged debt."],
  nightclubNumb: ["Numb", "Feiye Club · Bar Counter", "Zhixia returns to the lights with perfect makeup and an empty stare."],
  amanRescue: ["A-Man's Sofa", "A-Man's Apartment", "A bowl of noodles and a blanket become the first safe place after the fall."],
  hospitalVisit: ["Hospital", "City Hospital · Dialysis Center", "Her mother's illness reminds Zhixia that survival is not the same as surrender."],
  policeReport: ["Police Report", "South Port Police Station", "The case begins, but justice will not be quick."],
  motherRecovery: ["Mother Discharged", "City Hospital · Ward", "A photo from before South Port reminds Zhixia of the self she wants back."],
  makeupRoom: ["Ebb Studio", "Old Alley · Aunt Chen's Makeup Room", "Aunt Chen shows Zhixia that makeup can help someone stand up, not just survive the night."],
  makeupReject: ["Not Worthy", "Outside Aunt Chen's Makeup Room", "Shame tries to pull Zhixia away from the door that remains open."],
  trainingWeek: ["Training Week", "Old Alley · Aunt Chen's Makeup Room", "Repetition steadies her hands before it steadies her heart."],
  chenLesson1: ["First Lesson", "Old Alley · Aunt Chen's Makeup Room", "Zhixia learns that a face can carry fear, courage, and a second chance."],
  chenLesson2: ["Advanced Lesson", "Old Alley · Aunt Chen's Makeup Room", "Business makeup, interview makeup, and camera makeup become three new languages."],
  firstPaidClient: ["First Paid Client", "Old Alley · Aunt Chen's Makeup Room", "A nervous interview client becomes proof that Zhixia's skill can change a day."],
  sideHustle: ["Orders From the Sisters", "Feiye Club · Dressing Room", "The same street that hurt her becomes her first network."],
  debtRepayment: ["Paying Debt", "Zhixia's Rented Apartment", "Every paid bill is a line crossed off the old life."],
  smallLease: ["Ebb Tide", "Old Alley · Newly Rented Shop", "The first shop is small, but the sign carries a promise."],
  amanJoins: ["Partners", "Ebb Studio", "A-Man joins as the shield, the manager, and the friend who never left."],
  openingDay: ["Opening Day", "Ebb Studio · Opening Morning", "No famous guests arrive, only the women who know why the door matters."],
  studioStruggle: ["Setbacks", "Ebb Studio", "Bad reviews, rent pressure, and betrayal test whether the studio can stand."],
  mediaInterview: ["Interview", "Ebb Studio", "Public attention turns Zhixia's survival into a voice other women can hear."],
  rivalSabotage: ["Malicious Reviews", "Ebb Studio", "Competitors attack the rating page, and Zhixia answers with professionalism."],
  yearTwoStudio: ["Two Years", "Ebb Studio · Flagship Store", "The studio has grown, and then the past walks through the door."],
  guyuanShadow: ["Shadow", "Outside Ebb Studio", "Gu Yuan asks to bargain before the evidence reaches daylight."],
  studioConfrontation: ["Reunion", "Ebb Studio", "The con man returns with flowers, excuses, and nothing she still needs."],
  courtroomPrep: ["Night Before Court", "Ebb Studio · After Closing", "Evidence becomes a timeline, and fear becomes preparation."],
  endingJustice: ["After the Ebb", "Ebb Studio", "Justice arrives without fireworks; Zhixia simply returns to work with steadier hands."],
  endingFund: ["A Door for Them", "Ebb Studio", "Compensation becomes a fund, and the studio becomes a route out."],
  endingSelf: ["Her Own Name", "Ebb Studio", "She closes the door on explanations and keeps her name for herself."],
  endingFallen: ["The Unfinished Ebb", "South Port · An Apartment Somewhere", "Taking the money leaves her trapped in the same tide."],
  endingAman: ["Sister Alliance", "Ebb Studio", "Zhixia and A-Man turn public apology into a public warning."]
};

const enEnding = {
  正义线: "Justice Route",
  援助基金线: "Aid Fund Route",
  自我主权线: "Self-Sovereignty Route",
  沉沦线: "Fallen Route",
  姐妹同盟线: "Sister Alliance Route"
};

const uiText = {
  zh: {
    back: "回退",
    reset: "重置",
    route: "路线",
    approx: "约",
    minutes: "分钟",
    readerLabel: "互动剧本阅读器",
    continue: "点击继续",
    choicePrompt: "关键选择：这次你在替谁决定？",
    forPrefix: "为",
    choiceHistory: (choice) => `为${choice.for}选择：${choice.label}`,
    spriteAlt: (name, mood) => `${name} ${mood} 立绘`,
    stats: statLabels
  },
  en: {
    back: "Back",
    reset: "Reset",
    route: "route",
    approx: "about",
    minutes: "min",
    readerLabel: "Interactive story reader",
    continue: "Tap to continue",
    choicePrompt: "Key choice: who are you choosing for?",
    forPrefix: "For",
    choiceHistory: (choice) => `Chose for ${choice.for}: ${choice.label}`,
    spriteAlt: (name, mood) => `${name} ${mood} character sprite`,
    stats: enStatLabels
  }
};

export function resolveLocale() {
  if (typeof navigator === "undefined") return "zh";
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  return languages.some((language) => language?.toLowerCase().startsWith("zh")) ? "zh" : "en";
}

export function formatRequires(requires, locale = "zh") {
  if (!requires) return null;
  const labels = locale === "en" ? enStatLabels : statLabels;
  return Object.entries(requires)
    .map(([key, min]) => `${labels[key] ?? key} ≥ ${min}`)
    .join(" · ");
}

function englishBeat(sceneId, beat, index, total) {
  const meta = enSceneMeta[sceneId] ?? ["Untitled Scene", "South Port", "Zhixia faces another turning point."];
  const speaker = enSpeakerByText[beat.speaker] ?? enActors[beat.actor] ?? "Narrator";
  const templates = [
    meta[2],
    `In ${meta[1]}, ${speaker} measures what this moment could cost.`,
    `The choice ahead presses against trust, evidence, debt, and the fragile work of rebuilding a self.`,
    `${speaker} holds the silence long enough for the truth underneath it to show.`,
    `What happens here will echo through the next branch of Zhixia's life.`,
    `The scene narrows to one question: who gets to decide what her name is worth?`,
    `By the end of the moment, the tide has shifted, even if no one says it aloud.`
  ];
  if (total <= 3) return templates[index] ?? templates[0];
  return templates[index % templates.length];
}

function effectFromStat(choice, locale) {
  if (choice.reset) return locale === "en" ? "Reset" : "Reset";
  if (locale === "zh") return choice.effect;
  const changes = Object.entries(choice.stat ?? {})
    .filter(([, value]) => value !== 0)
    .map(([key, value]) => `${value > 0 ? "+" : ""}${value} ${enStatLabels[key] ?? key}`);
  if (choice.next?.startsWith("ending")) return "Ending route";
  return changes.length ? changes.join(" / ") : "Branch route";
}

function englishChoice(sceneId, choice, index) {
  const target = enSceneMeta[choice.next]?.[0] ?? "the next route";
  const actor = enSpeakerByText[choice.for] ?? choice.for;
  const verbs = [
    `Move toward ${target}.`,
    `Hold the line and choose ${target}.`,
    `Take the risk that leads to ${target}.`,
    `Protect ${actor}'s future through ${target}.`,
    `Follow the evidence toward ${target}.`
  ];
  if (choice.reset) return "Start over";
  return verbs[index % verbs.length];
}

function localizeScenes(locale) {
  if (locale === "zh") return scenes;
  return Object.fromEntries(
    Object.entries(scenes).map(([sceneId, scene]) => {
      const meta = enSceneMeta[sceneId] ?? [scene.title, scene.location, "Zhixia faces another turning point."];
      return [
        sceneId,
        {
          ...scene,
          chapter: scene.chapter.replace("第一", "Chapter 1").replace("第二", "Chapter 2").replace("第三", "Chapter 3").replace("第四", "Chapter 4").replace("第五", "Chapter 5").replace("第六", "Chapter 6").replace("第七", "Chapter 7").replace("第八", "Chapter 8").replace("终章", "Finale").replace("章", ""),
          title: meta[0],
          location: meta[1],
          ending: scene.ending ? enEnding[scene.ending] ?? scene.ending : undefined,
          beats: scene.beats.map((beat, index) => ({
            ...beat,
            speaker: enSpeakerByText[beat.speaker] ?? enActors[beat.actor] ?? beat.speaker,
            text: englishBeat(sceneId, beat, index, scene.beats.length)
          })),
          choices: scene.choices.map((choice, index) => ({
            ...choice,
            for: enSpeakerByText[choice.for] ?? choice.for,
            label: englishChoice(sceneId, choice, index),
            effect: effectFromStat(choice, "en")
          }))
        }
      ];
    })
  );
}

export function getLocalizedContent(locale = resolveLocale()) {
  const activeLocale = locale === "en" ? "en" : "zh";
  return {
    locale: activeLocale,
    scenes: localizeScenes(activeLocale),
    actors: activeLocale === "en" ? enActors : actors,
    ui: uiText[activeLocale],
    statLabels: activeLocale === "en" ? enStatLabels : statLabels
  };
}

export function meetsRequires(requires, stats) {
  if (!requires) return true;
  return Object.entries(requires).every(([key, min]) => (stats[key] ?? 0) >= min);
}

export function getAvailableChoices(scene, stats) {
  const unlocked = scene.choices.filter((choice) => meetsRequires(choice.requires, stats));
  if (unlocked.length > 0) return { unlocked, locked: scene.choices.filter((c) => !meetsRequires(c.requires, stats)) };
  const fallback = scene.choices.filter((choice) => !choice.requires);
  return {
    unlocked: fallback.length > 0 ? fallback : [scene.choices[0]],
    locked: scene.choices.filter((choice) => choice.requires)
  };
}

export function estimatePlayMinutes(sceneCount, beatCount) {
  const secondsPerBeat = 18;
  return Math.round((beatCount * secondsPerBeat) / 60);
}
