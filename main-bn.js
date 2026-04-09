const dimensionMeta = {
    S1: { name: 'S1 আত্মমর্যাদা', model: 'নিজস্ব মডেল' },
    S2: { name: 'S2 আত্ম-স্বচ্ছতা', model: 'নিজস্ব মডেল' },
    S3: { name: 'S3 ভেতরের চালিকা শক্তি', model: 'নিজস্ব মডেল' },
    E1: { name: 'E1 সম্পর্কের নিরাপত্তাবোধ', model: 'আবেগ মডেল' },
    E2: { name: 'E2 আবেগের বিনিয়োগ', model: 'আবেগ মডেল' },
    E3: { name: 'E3 সীমা ও নির্ভরতা', model: 'আবেগ মডেল' },
    A1: { name: 'A1 পৃথিবীকে দেখার চোখ', model: 'মনোভাব মডেল' },
    A2: { name: 'A2 নিয়ম বনাম স্বাধীনতা', model: 'মনোভাব মডেল' },
    A3: { name: 'A3 জীবনের অর্থবোধ', model: 'মনোভাব মডেল' },
    Ac1: { name: 'Ac1 প্রেরণার ধরন', model: 'কর্ম মডেল' },
    Ac2: { name: 'Ac2 সিদ্ধান্ত নেওয়ার ধরন', model: 'কর্ম মডেল' },
    Ac3: { name: 'Ac3 কাজ শেষ করার মোড', model: 'কর্ম মডেল' },
    So1: { name: 'So1 সামাজিক উদ্যোগ', model: 'সামাজিক মডেল' },
    So2: { name: 'So2 সম্পর্কের দূরত্ববোধ', model: 'সামাজিক মডেল' },
    So3: { name: 'So3 প্রকাশ আর আসলত্ব', model: 'সামাজিক মডেল' }
};

const questions = [
    {
        id: 'q1', dim: 'S1',
        text: 'আমি শুধু সিঙ্গেল না। আমি basically এক anxiety-ভরা, low self-esteem যুক্ত background NPC. ঠিকঠাক কোনো প্রেম হয়নি, যৌবনের বড় অংশ কেটেছে মাথার ভেতর কল্পনার সিনেমা চালিয়ে। অন্য সবার জীবন Facebook/Instagram-এ একদম set, আর আমি মনে হয় দূর থেকে অন্যের জীবন উঁকি মেরে দেখি। সৎভাবে বলুন তো, এটা কি একটু বেশিই personal লাগছে?',
        options: [
            { label: 'বেশি বাস্তব লাগছে', value: 1 },
            { label: 'এটা একটু বেশি heavy', value: 2 },
            { label: 'না, এটা আমি না', value: 3 }
        ]
    },
    {
        id: 'q2', dim: 'S1',
        text: 'আমার প্রায়ই মনে হয় আশপাশের মানুষজন আমার চেয়ে বেশি impressive।',
        options: [
            { label: 'হ্যাঁ, অনেক সময়', value: 1 },
            { label: 'কখনও কখনও', value: 2 },
            { label: 'তেমন না', value: 3 }
        ]
    },
    {
        id: 'q3', dim: 'S2',
        text: 'আমি আসলে কেমন মানুষ, সেটা আমি মোটামুটি ভালোই জানি।',
        options: [
            { label: 'অসম্মত', value: 1 },
            { label: 'নিরপেক্ষ', value: 2 },
            { label: 'সম্মত', value: 3 }
        ]
    },
    {
        id: 'q4', dim: 'S2',
        text: 'ভেতরে ভেতরে আমি জানি, আমার জন্য সত্যি কোন জিনিসগুলো গুরুত্বপূর্ণ।',
        options: [
            { label: 'অসম্মত', value: 1 },
            { label: 'নিরপেক্ষ', value: 2 },
            { label: 'সম্মত', value: 3 }
        ]
    },
    {
        id: 'q5', dim: 'S3',
        text: 'আমি সত্যি সত্যি grow করতে চাই, stronger version of myself হতে চাই।',
        options: [
            { label: 'অসম্মত', value: 1 },
            { label: 'নিরপেক্ষ', value: 2 },
            { label: 'সম্মত', value: 3 }
        ]
    },
    {
        id: 'q6', dim: 'S3',
        text: 'অন্যের মতামত আমার জীবনকে পুরোপুরি control করে না।',
        options: [
            { label: 'অসম্মত', value: 1 },
            { label: 'নিরপেক্ষ', value: 2 },
            { label: 'সম্মত', value: 3 }
        ]
    },
    {
        id: 'q7', dim: 'E1',
        text: 'তোমার সঙ্গী ৫ ঘণ্টা রিপ্লাই দেয়নি, পরে বলে পেট খারাপ ছিল। প্রথমে তোমার কী মনে হবে?',
        options: [
            { label: '৫ ঘণ্টা? কাহিনি ঠিক মেলছে না।', value: 1 },
            { label: 'বিশ্বাস আর সন্দেহের মাঝামাঝি থাকব।', value: 2 },
            { label: 'হয়তো সত্যিই খুব অসুস্থ ছিল।', value: 3 }
        ]
    },
    {
        id: 'q8', dim: 'E1',
        text: 'সম্পর্কে আমি প্রায়ই ভয় পাই যে আমাকে ফেলে দেওয়া হতে পারে।',
        options: [
            { label: 'হ্যাঁ', value: 1 },
            { label: 'মাঝে মাঝে', value: 2 },
            { label: 'না', value: 3 }
        ]
    },
    {
        id: 'q9', dim: 'E2',
        text: 'আমি যখন বলি আমি প্রেমকে সিরিয়াসলি নিই, তখন সত্যিই সেটা মানে করি।',
        options: [
            { label: 'সব সময় না', value: 1 },
            { label: 'হতে পারে', value: 2 },
            { label: 'হ্যাঁ, পুরোপুরি', value: 3 }
        ]
    },
    {
        id: 'q10', dim: 'E2',
        text: 'ধরো তোমার crush খুবই caring, smart, funny, loyal, attractive, আর somehow তোমাকেই পছন্দ করে। তখন কী হবে?',
        options: [
            { label: 'তবু আমি পুরোপুরি ডুবে যাব না।', value: 1 },
            { label: 'মাঝামাঝি কিছু হবে।', value: 2 },
            { label: 'আমি একদম emotional mess হয়ে যাব।', value: 3 }
        ]
    },
    {
        id: 'q11', dim: 'E3',
        text: 'সম্পর্কে যাওয়ার পর যদি ও খুব clingy হয়ে যায়, তোমার honest reaction কী?',
        options: [
            { label: 'সত্যি বলতে, খারাপ লাগবে না।', value: 1 },
            { label: 'মানুষের ওপর depend করে।', value: 2 },
            { label: 'আমাকে একটু space দরকার।', value: 3 }
        ]
    },
    {
        id: 'q12', dim: 'E3',
        text: 'যে সম্পর্কই হোক, personal space আমার জন্য খুব important।',
        options: [
            { label: 'আমি বেশি পছন্দ করি emotional closeness আর dependency।', value: 1 },
            { label: 'পরিস্থিতির ওপর', value: 2 },
            { label: 'হ্যাঁ, এটা নিয়ে compromise নাই', value: 3 }
        ]
    },
    {
        id: 'q13', dim: 'A1',
        text: 'বেশিরভাগ মানুষ শেষ পর্যন্ত মোটামুটি ভালোই।',
        options: [
            { label: 'এটা খুব optimistic শোনাচ্ছে', value: 1 },
            { label: 'হতে পারে', value: 2 },
            { label: 'হ্যাঁ, আমি এখনো এটা বিশ্বাস করি', value: 3 }
        ]
    },
    {
        id: 'q14', dim: 'A1',
        text: 'রাস্তা দিয়ে হাঁটছ, হঠাৎ এক দারুণ মিষ্টি বাচ্চা এসে তোমাকে একটা ললিপপ দিল। আশেপাশে কেউ নেই, শুধু pure cuteness. তোমার reaction?',
        options: [
            { label: 'আহা, এটাই তো আজকের সবচেয়ে cute জিনিস।', value: 3 },
            { label: 'আমি একদম confused।', value: 2 },
            { label: 'এটা কি কোনো নতুন scam?', value: 1 }
        ]
    },
    {
        id: 'q15', dim: 'A2',
        text: 'পরীক্ষা সামনে, কোচিং/স্টাডি সেশন মিস করা ঠিক হবে না। কিন্তু tonight তোমার crush PUBG Mobile খেলতে ডাকছে। কী করবে?',
        options: [
            { label: 'যাই। একদিনে কিছু হবে না।', value: 1 },
            { label: 'কোনো একটা excuse ম্যানেজ করব।', value: 2 },
            { label: 'এখন পড়াশোনাই আগে।', value: 3 }
        ]
    },
    {
        id: 'q16', dim: 'A2',
        text: 'আমি routine ভাঙতে পছন্দ করি, আর বাঁধা পড়ে থাকতে ঘৃণা করি।',
        options: [
            { label: 'সম্মত', value: 1 },
            { label: 'নিরপেক্ষ', value: 2 },
            { label: 'অসম্মত', value: 3 }
        ]
    },
    {
        id: 'q17', dim: 'A3',
        text: 'আমি সাধারণত জীবনে কোন দিকে যাচ্ছি, সেটা অন্তত মোটামুটি জানি।',
        options: [
            { label: 'অসম্মত', value: 1 },
            { label: 'নিরপেক্ষ', value: 2 },
            { label: 'সম্মত', value: 3 }
        ]
    },
    {
        id: 'q18', dim: 'A3',
        text: 'কখনও কখনও মনে হয়, জীবন মানে আসলে হরমোন, ক্ষুধা, ক্লান্তি আর বিশৃঙ্খলার একটা প্যাকেজ, যেটা নিজেকে “meaning” বলে চালায়।',
        options: [
            { label: 'হ্যাঁ, একদম', value: 1 },
            { label: 'দিনভেদে বদলায়', value: 2 },
            { label: 'না, এটা খুব বেশি cynical', value: 3 }
        ]
    },
    {
        id: 'q19', dim: 'Ac1',
        text: 'আমি সাধারণত growth আর achievement-এর জন্য কাজ করি, শুধু ঝামেলা এড়ানোর জন্য না।',
        options: [
            { label: 'অসম্মত', value: 1 },
            { label: 'নিরপেক্ষ', value: 2 },
            { label: 'সম্মত', value: 3 }
        ]
    },
    {
        id: 'q20', dim: 'Ac1',
        text: 'তুমি ৩০ মিনিট ধরে টয়লেটে বসে আছ, কিছুই হচ্ছে না। এখন এটা pure ego battle. তুমি কোন টাইপ?',
        options: [
            { label: 'আরও বসে থাকি, হয়তো এবার হবে।', value: 1 },
            { label: 'নিজেকেই উল্টাপাল্টা motivational speech দিই।', value: 2 },
            { label: 'Practical solution নিয়ে জীবন এগিয়ে নেই।', value: 3 }
        ]
    },
    {
        id: 'q21', dim: 'Ac2',
        text: 'আমি তুলনামূলকভাবে দ্রুত সিদ্ধান্ত নিই, বেশি টানাটানি পছন্দ করি না।',
        options: [
            { label: 'অসম্মত', value: 1 },
            { label: 'নিরপেক্ষ', value: 2 },
            { label: 'সম্মত', value: 3 }
        ]
    },
    {
        id: 'q22', dim: 'Ac2',
        text: 'এই প্রশ্নের আসলে কোনো প্রশ্ন নেই। আন্দাজে একটা বেছে নাও।',
        options: [
            { label: 'মনে হচ্ছে A-টাই হবে?', value: 1 },
            { label: 'চলো B-ই নিই', value: 2 },
            { label: 'সন্দেহ হলে C', value: 3 }
        ]
    },
    {
        id: 'q23', dim: 'Ac3',
        text: 'কেউ যদি বলে “তোমার execution power ভালো”, ভেতরে ভেতরে কোন কথাটা বেশি সত্যি লাগে?',
        options: [
            { label: 'ডেডলাইন যখন গলায় উঠে, তখনই আমার আসল power আসে।', value: 1 },
            { label: 'কখনও কখনও ঠিকই', value: 2 },
            { label: 'হ্যাঁ, জিনিস তো এগোতেই হবে', value: 3 }
        ]
    },
    {
        id: 'q24', dim: 'Ac3',
        text: 'আমি সাধারণত plan করি, তারপর...',
        options: [
            { label: 'বাস্তবতা এসে plan-কে স্লাইড ট্যাকল মারে।', value: 1 },
            { label: 'কিছু plan কাজ করে, কিছু করে না।', value: 2 },
            { label: 'plan ভেঙে গেলে ভীষণ বিরক্ত লাগে।', value: 3 }
        ]
    },
    {
        id: 'q25', dim: 'So1',
        text: 'তুমি Free Fire বা VALORANT খেলতে গিয়ে কিছু অনলাইন বন্ধুর সাথে close হয়েছ, এখন তারা real life-এ meet up করতে চায়। প্রথম reaction কী?',
        options: [
            { label: 'অনলাইনের vibe আলাদা, বাস্তবে meet করা আরেক জিনিস।', value: 1 },
            { label: 'দেখা যাক, vibe ভালো হলে যাওয়া যায়।', value: 2 },
            { label: 'ভালো করে ready হয়ে যাই, who knows?', value: 3 }
        ]
    },
    {
        id: 'q26', dim: 'So1',
        text: 'তোমার বন্ধু তার আরেক বন্ধুকে সঙ্গে নিয়ে এসেছে। তখন তুমি কী mood-এ থাকো?',
        options: [
            { label: 'শুরুর দিকে একটু distance রাখি।', value: 1 },
            { label: 'মানুষটা ভালো হলে আমি-ও ঠিক আছি।', value: 2 },
            { label: 'বন্ধুর বন্ধু মানেই মোটামুটি আমারও লোক।', value: 3 }
        ]
    },
    {
        id: 'q27', dim: 'So2',
        text: 'মানুষের সাথে আমার vibe অনেকটা electric fence-এর মতো। বেশি কাছে এলে alarm বাজে।',
        options: [
            { label: 'সম্মত', value: 3 },
            { label: 'নিরপেক্ষ', value: 2 },
            { label: 'অসম্মত', value: 1 }
        ]
    },
    {
        id: 'q28', dim: 'So2',
        text: 'যাদের আমি trust করি, তাদের সাথে আমি genuinely খুব close হতে চাই।',
        options: [
            { label: 'সম্মত', value: 1 },
            { label: 'নিরপেক্ষ', value: 2 },
            { label: 'অসম্মত', value: 3 }
        ]
    },
    {
        id: 'q29', dim: 'So3',
        text: 'কখনও তুমি clearly নেতিবাচক কিছু ভাবলেও সেটা চেপে যাও। সাধারণত কেন?',
        options: [
            { label: 'এমনটা খুব কমই হয়', value: 1 },
            { label: 'পরিস্থিতি awkward করতে চাই না', value: 2 },
            { label: 'আমার dark side সবাইকে দেখাতে ইচ্ছা করে না', value: 3 }
        ]
    },
    {
        id: 'q30', dim: 'So3',
        text: 'আমি ভিন্ন ভিন্ন মানুষের সামনে নিজের ভিন্ন ভিন্ন দিক দেখাই।',
        options: [
            { label: 'অসম্মত', value: 1 },
            { label: 'নিরপেক্ষ', value: 2 },
            { label: 'সম্মত', value: 3 }
        ]
    }
];

const specialQuestions = [
    {
        id: 'drink_gate_q1',
        special: true,
        kind: 'drink_gate',
        text: 'নিচের কোনটা তোমার regular vibe-এর সবচেয়ে কাছে?',
        options: [
            { label: 'খাওয়া, ঘুম, somehow বেঁচে থাকা', value: 1 },
            { label: 'আर्टি/ক্রিয়েটিভ শখ', value: 2 },
            { label: 'ড্রিঙ্কিং', value: 3 },
            { label: 'ফিটনেস', value: 4 }
        ]
    },
    {
        id: 'drink_gate_q2',
        special: true,
        kind: 'drink_trigger',
        text: 'সত্যি করে বলো, অ্যালকোহলের সাথে তোমার সম্পর্কটা কেমন?',
        options: [
            { label: 'আড্ডায় এক-দুই পেগ, সীমার মধ্যে থাকি।', value: 1 },
            { label: 'এটা basically আমার emotional support device.', value: 2 }
        ]
    }
];

const TYPE_LIBRARY = {
    CTRL: { code: 'CTRL', name: 'সব সামলানো মানুষ', intro: 'হ্যাঁ, save file-টা তোমার কাছেই আছে।', desc: 'জীবন যখন glitch করতে শুরু করে, তখন শেষ পর্যন্ত সবাই তোমার দিকেই তাকায়। নিয়ম তোমার কাছে optional লাগে, plan editable লাগে, আর chaos তোমার হাতে এসে somehow manageable হয়ে যায়। তুমি চেঁচামেচি না করেও বিপজ্জনক রকম effective।' },
    'ATM-er': { code: 'ATM-er', name: 'সব সময় দেওয়া মানুষ', intro: 'আমাকে কি এতটাই resourceful দেখায়?', desc: 'টাকা না হোক, সময়, ধৈর্য, শক্তি, emotional labor বা শেষ functioning brain cell—কিছু না কিছু তুমি দিচ্ছই। তুমি এতটাই reliable যে মানুষ স্বাভাবিকভাবেই ভর করে বসে।' },
    'Dior-s': { code: 'Dior-s', name: 'বেসমেন্ট দার্শনিক', intro: 'আমার flop era-টা আসলে একটা world view.', desc: 'তুমি অলস না। তুমি শুধু আধুনিক জীবনের motivational sales pitch-এ পুরো convinced না। hustle culture, productivity worship, status game—সব দেখে তুমি চুপচাপ বুঝে গেছ, অনেক কিছুই pretty packaging দেওয়া prison ছাড়া আর কিছু না।' },
    BOSS: { code: 'BOSS', name: 'ড্রাইভারের সিটের মানুষ', intro: 'স্টিয়ারিংটা দাও, আমি দেখি।', desc: 'তোমার মধ্যে অদ্ভুত এক নেতৃত্বের vibe আছে, তুমি চেষ্টা না করলেও। তুমি direction, movement আর competence পছন্দ করো। কিছু যখন track ছাড়া চলে যায়, তুমি endless discussion-এর মানুষ না; তুমি গিয়ে জিনিসটা হাতে তুলে নাও।' },
    'THAN-K': { code: 'THAN-K', name: 'কৃতজ্ঞতা জেনারেটর', intro: 'আমি এই ট্রাফিক জ্যামকেও ধন্যবাদ দিচ্ছি।', desc: 'অন্যরা যেখানে মাথা খায়, তুমি সেখানেও somehow একটা silver lining বের করে ফেলতে পারো। কেউ বলে optimism, কেউ বলে suspicious positivity. যাই হোক, তুমি stale air-এর মধ্যে emotional oxygen বানাতে পারো।' },
    'OH-NO': { code: 'OH-NO', name: 'বিপদ ভবিষ্যদ্বাণী বিভাগ', intro: 'ও না, এটা এত accurate কেন?', desc: 'তুমি basically walking risk management department. টেবিলের ধারে একটা গ্লাস দেখেই তুমি already spill, damage, repair, expense—সব simulate করে ফেলো। annoying? হতে পারে। useful? নিঃসন্দেহে।' },
    GOGO: { code: 'GOGO', name: 'বুলডোজার মোড', intro: 'ঠিক আছে, এগোই।', desc: 'তুমি momentum-এ বিশ্বাস করো। অতিরিক্ত ভাবা তোমার পছন্দ না, কারণ তোমার কাছে stagnation-টাই বেশি অসহ্য। অন্যরা যখন এখনো প্রসেস করছে, তুমি তখন situation-টা next phase-এ ঠেলে দিয়েছ।' },
    SEXY: { code: 'SEXY', name: 'মেইন ক্যারেক্টার', intro: 'দুঃখিত, তোমার aura তোমার আগেই রুমে ঢুকে পড়ে।', desc: 'তুমি attention attract করো এমনভাবে, যেন সেটা effort না, weather phenomenon. মানুষ তোমাকে notice করে, তোমার ওপর projection করে, আর মাঝে মাঝে তোমার আশেপাশে এসে short-circuit-ও হয়। তুমি performance না করলেও চলবে, তুমি already content.' },
    'LOVE-R': { code: 'LOVE-R', name: 'অতিরিক্ত রোমান্টিক', intro: 'তোমার emotional bandwidth আসলেই বেশি।', desc: 'তুমি casual vibe-এর জন্য বানানো না। তুমি yearning, projection, symbolism আর heart-breaking playlist-এর জন্য বানানো। ছোট্ট কিছু থেকেই তুমি পুরো ভেতরে এক মহাদেশ বানিয়ে ফেলতে পারো।' },
    MUM: { code: 'MUM', name: 'সান্ত্বনার অভিভাবক', intro: 'পানি লাগবে, validation লাগবে, নাকি দুটোই?', desc: 'তোমার মধ্যে warm-bath nervous system energy আছে। মানুষ তোমার আশেপাশে এসে unexpectedly safe ফিল করে, কারণ তুমি খুব দ্রুত emotional weather ধরতে পারো। সমস্যা হলো, তুমি অন্যদের জন্য যত নরম, নিজের জন্য ততটা না।' },
    FAKE: { code: 'FAKE', name: 'রূপ বদলানো মানুষ', intro: 'এখানে অনেক layer আছে। অনেক বেশি layer.', desc: 'তুমি context অনুযায়ী এত দ্রুত adapt করো যে মাঝে মাঝে creepy লাগে। friend mode, work mode, charm mode, emotionally unavailable mode—সব খুব cleanly switch করো। কেউ কেউ তোমাকে fake ভাবতে পারে; আসলে তুমি শুধু room টা খুব ভালো পড়তে পারো।' },
    OJBK: { code: 'OJBK', name: 'যা খুশি সম্রাট', intro: 'আমি “যা হয় হোক” বললে সত্যিই সেটা বোঝাই।', desc: 'খাবার কী, কোথায় বসব, কখন যাব—এই সব petty decision-এ তুমি খুব একটা emotional investment দাও না। উদাসীন বলার চেয়ে বরং বলা যায়, এসব জিনিসে energy খরচ করা তোমার কাছে worth it না।' },
    MALO: { code: 'MALO', name: 'বিশৃঙ্খল gremlin', intro: 'সভ্যতা আসলে তোমার জন্য design করা হয়নি।', desc: 'তোমার এক অংশ এখনো পুরো domesticated না। তুমি playful, ungovernable, আর boring জিনিসের প্রতি গভীর অবিশ্বাসী। জীবন যদি badly designed game লাগে, তুমি tutorial না পড়ে scenery-তে উঠতে শুরু করো।' },
    'JOKE-R': { code: 'JOKE-R', name: 'দুঃখী কৌতুকবিদ', intro: 'শেষমেশ মজাটাই ছিল self-defense.', desc: 'তুমি মজার, energetic, timing-এ sharp—আর মাঝে মাঝে একটু alarming-ও। তুমি room-কে alive রাখো, কিন্তু হাসির নিচে অনেক সময় armor পরে থাকো। সবাই হাসলে কেউ জিজ্ঞেস করে না ভেতরে কী চলছে।' },
    'WOC!': { code: 'WOC!', name: '“এইটা কী!” টাইপ', intro: 'এইটা কী! আমি এটা পেলাম কীভাবে?', desc: 'তুমি বাইরে loudly react করো, কিন্তু ভেতরে quietly pattern ধরো। উপরে chaos, নিচে clarity. কিছু nonsense হলে সেটা তুমি usually এক দুর্দান্ত emotionally honest reaction-এ প্রকাশ করো।' },
    'THIN-K': { code: 'THIN-K', name: 'অতিরিক্ত বিশ্লেষক', intro: 'একটু অপেক্ষা করুন। আপনার analysis এখনো চলছে।', desc: 'তোমার brain information scroll করে না, audit করে। তুমি শুধু content না, premise, bias, structure, motive—সব check করো। ভাবা তোমার hobby না; এটা তোমার default operating system.' },
    SHIT: { code: 'SHIT', name: 'রেগে থাকা কিন্তু competent', intro: 'সব বাজে। তবুও আমাকেই ঠিক করতে হবে।', desc: 'তুমি পৃথিবীর ওপর বিরক্তি ঝাড়তে ঝাড়তে শেষমেশ সবকিছু অন্যদের চেয়ে ভালোভাবে গুছিয়ে দাও। mood বলে doomsday, behavior বলে project manager. annoying but necessary—এই vibe.' },
    ZZZZ: { code: 'ZZZZ', name: 'shutdown শিল্পী', intro: 'আমি মারা যাইনি। শুধু power-saving mode-এ আছি।', desc: 'তুমি ৯৯টা notification, ৩টা deadline আর একটা social crisis ignore করতে পারো, তারপর শেষ সাইরেন বাজার সঙ্গে সঙ্গে কবর থেকে উঠে surprisingly decent কিছু deliver করো। urgency-এর সাথে তোমার relationship toxic, but effective.' },
    POOR: { code: 'POOR', name: 'লেজার বিম', intro: 'আমি low-resource না, আমি concentrated.', desc: 'তোমাকে low-energy লাগে কারণ তুমি নিজেকে ছড়িয়ে দাও না। অন্যরা effort everywhere ছড়ালে, তুমি সেটা compress করে একটা beam বানাও এবং গুরুত্বপূর্ণ জিনিস ভেদ করো। দূর থেকে scarcity, কাছে গিয়ে focus.' },
    MONK: { code: 'MONK', name: 'সীমানার সন্ন্যাসী', intro: 'না, এই মুহূর্তে আমার worldly need নেই।', desc: 'তুমি personal space-কে sacred ground-এর মতো treat করো। একা থাকা তোমার কাছে damage না; এটা maintenance, clarity, peace, sometimes survival. তুমি গভীরভাবে care করতে পারো, কিন্তু 24/7 কাউকে মাথার ভেতর রাখতে চাও না।' },
    IMSB: { code: 'IMSB', name: 'ভেতরের meltdown', intro: 'সত্যি বলো তো, আমি কি পুরো শেষ?', desc: 'তোমার ভেতরে দুইটা immortal enemy থাকে: একটা বলে “go for it”, আরেকটা বলে “আগেই social obituary লিখে রাখি।” তুমি doomed না; তুমি শুধু emotional decision-এর আগে ভয়ংকর পরিমাণ internal cinema চালাও।' },
    SOLO: { code: 'SOLO', name: 'সজারু টাইপ', intro: 'আমাকে এতটা expose করা হলো কেন?', desc: 'তুমি নিজেকে protect করতে গিয়ে অনেক সময় আসল অনুভূতির চেয়ে বেশি কঠিন, ঠান্ডা, detached দেখাও। spikes সত্যি, কিন্তু সেটা closeness-কে ঘৃণা করার জন্য না; closeness-এ hurt হওয়ার ভয় থেকে।' },
    FUCK: { code: 'FUCK', name: 'অসংযত বন্যপ্রাণী', intro: 'এটা কেমন ফলাফল রে ভাই?', desc: 'তুমি raw impulse, chaos, appetite আর life force-এর এক ধরনের high-voltage mix. social rules তোমার কাছে অনেক সময় decorative মনে হয়। তুমি “হ্যাঁ” আর “কখনোই না”র মধ্যে চরমভাবে দুলে থাকো, আর পুরো alive থাকলে তোমাকে কোনো fence-ই ধরে রাখতে পারে না।' },
    DEAD: { code: 'DEAD', name: 'আত্মিকভাবে offline', intro: 'আমি কি এখনো emotionally logged in আছি?', desc: 'তোমাকে এমন লাগে যেন তুমি এই game অনেকবার খেলেছ, আর map দেখে আর impressed হও না। desire কম, spectacle কম, পৃথিবীর noise অনেক সময় শুধু static লাগে। তুমি ফাঁকা নও, তুমি শুধু আর সহজে convinced হও না।' },
    IMFW: { code: 'IMFW', name: 'নরম target', intro: 'একটু দাঁড়াও... আমি কি সত্যিই এত সহজে hurt হই?', desc: 'তুমি তাড়াতাড়ি attach করো, তাড়াতাড়ি trust করো, আর security check শেষ হওয়ার আগেই meaning assign করে ফেলো। তুমি weak না; তুমি শুধু নরম। আর পৃথিবী অনেক সময় নরম মানুষকে carelessভাবে handle করে।' },
    HHHH: { code: 'HHHH', name: 'glitch goblin', intro: 'হা. হা হা. তুমি আসলে কী?', desc: 'অভিনন্দন। তুমি সিস্টেমটাই ভেঙে ফেলেছ। তোমার উত্তরগুলো এত সুন্দরভাবে অদ্ভুত ছিল যে standard personality library চাকরি ছেড়ে দিয়ে তোমাকে honorary glitch goblin ঘোষণা করেছে। আমরা এটাকে সম্মান করি, ভয় পাই, কিন্তু explain করতে পারি না।' },
    DRUNK: { code: 'DRUNK', name: 'মদের goblin', intro: 'Hidden personality has entered the chat.', desc: 'এই ফলাফল শুধু তখনই আসে, যখন alcohol goblin পুরো জেগে ওঠে। তোমার normal personality logic তখন fermented chaos, liquid confidence আর terrible idea-এর সাথে অতিরিক্ত আবেগী সম্পর্ক দিয়ে overwrite হয়ে যায়। পানি খাও। ex-কে text কোরো না।' }
};

const NORMAL_TYPES = [
    { code: 'CTRL', pattern: 'HHH-HHH-HHH-HHH-HHH' },
    { code: 'ATM-er', pattern: 'LMH-HHM-MMM-LMM-MLH' },
    { code: 'Dior-s', pattern: 'LLM-MML-LLL-LLM-LHM' },
    { code: 'BOSS', pattern: 'HMH-MHH-HHM-HHH-MHM' },
    { code: 'THAN-K', pattern: 'MMH-HMH-HHH-MMM-HLM' },
    { code: 'OH-NO', pattern: 'MLM-LMM-MHH-LMM-HHH' },
    { code: 'GOGO', pattern: 'MMH-MHM-HMH-HHH-HLH' },
    { code: 'SEXY', pattern: 'MHM-HMH-HHH-HHM-HHM' },
    { code: 'LOVE-R', pattern: 'MLH-LHL-HLH-MLM-MLH' },
    { code: 'MUM', pattern: 'MMH-MHL-HMM-LMM-HLL' },
    { code: 'FAKE', pattern: 'HLM-MML-MLM-MLM-HLH' },
    { code: 'OJBK', pattern: 'MMH-MMM-HML-LMM-MML' },
    { code: 'MALO', pattern: 'MLH-MHM-MLH-MLH-LMH' },
    { code: 'JOKE-R', pattern: 'LLH-LHL-LML-LLL-MLM' },
    { code: 'WOC!', pattern: 'HHL-HMH-MMH-HHM-LHH' },
    { code: 'THIN-K', pattern: 'HHL-HMH-MLH-MHM-LHH' },
    { code: 'SHIT', pattern: 'HHL-HLH-LMM-HHM-LHH' },
    { code: 'ZZZZ', pattern: 'MHL-MLH-LML-MML-LHM' },
    { code: 'POOR', pattern: 'HHL-MLH-LMH-HHH-LHL' },
    { code: 'MONK', pattern: 'HHL-LLH-LLM-MML-LHM' },
    { code: 'IMSB', pattern: 'LLM-LMM-LLL-LLL-MLM' },
    { code: 'SOLO', pattern: 'LML-LLH-LHL-LML-LHM' },
    { code: 'FUCK', pattern: 'MLL-LHL-LLM-MLL-HLH' },
    { code: 'DEAD', pattern: 'LLL-LLM-LML-LLL-LHM' },
    { code: 'IMFW', pattern: 'LLH-LHL-LML-LLL-MLL' }
];

const DIM_EXPLANATIONS = {
    S1: { L: 'তুমি নিজের ওপর অপ্রয়োজনের চেয়েও বেশি কঠোর।', M: 'তোমার আত্মবিশ্বাস সময়, পরিস্থিতি আর মানসিক আবহাওয়ার ওপর অনেকটাই নির্ভর করে।', H: 'তুমি নিজের মূল্য মোটামুটি জানো এবং সহজে ভেঙে পড়ো না।' },
    S2: { L: 'নিজেকে বোঝার সিগন্যাল তোমার মাঝে মাঝে ঝাপসা হয়ে যায়।', M: 'সাধারণত নিজেকে চেনো, তবে mood খারাপ হলে কিছুটা disconnect হয়ে যেতে পারো।', H: 'নিজের motive, pattern আর limit সম্পর্কে তোমার ধারণা বেশ পরিষ্কার।' },
    S3: { L: 'বড় ambition-এর চেয়ে comfort আর safety তোমার কাছে বেশি গুরুত্বপূর্ণ হয়ে ওঠে।', M: 'তোমার এক অংশ grow করতে চায়, আরেক অংশ চায় শান্তিতে blanket মুড়ি দিয়ে থাকতে।', H: 'goal, progress আর meaning তোমাকে বেশ জোরেই সামনে ঠেলে দেয়।' },
    E1: { L: 'তোমার relationship alarm system খুব sensitive।', M: 'আধা বিশ্বাস, আধা সন্দেহ—হৃদয় নিজের সাথেই দরকষাকষি করে।', H: 'তুমি ছোটখাটো disturbance-এ পুরো সম্পর্ককে প্রশ্নবিদ্ধ করে ফেলো না।' },
    E2: { L: 'তুমি আবেগে ঢোকো খুব সাবধানে। দরজা বন্ধ না, কিন্তু heavy lock-এ।', M: 'commit করতে পারো, তবে backup exit রেখে।', H: 'একবার care করলে সত্যি সত্যিই পুরো মন দিয়ে care করো।' },
    E3: { L: 'warmth, closeness আর emotional availability তোমার কাছে খুব গুরুত্বপূর্ণ।', M: 'তুমি intimacy-ও চাও, freedom-ও চাও।', H: 'ভালোবাসার মাঝেও তোমার নিজের territory দরকার।' },
    A1: { L: 'তুমি পৃথিবীকে আগে সন্দেহের চোখে দেখো।', M: 'তুমি naive না, আবার full conspiracy mode-এও না।', H: 'তুমি এখনো মানুষ আর পৃথিবীর ভালো হওয়ার সম্ভাবনায় কিছুটা জায়গা রাখো।' },
    A2: { L: 'comfort বা freedom দরকার হলে তুমি নিয়ম সহজে বাঁকাতে পারো।', M: 'structure মানতে পারো, কিন্তু অন্ধভাবে না।', H: 'order আর process তোমার কাছে বেশ যুক্তিসংগত; random chaos তোমার ভালো লাগে না।' },
    A3: { L: 'জীবনের meaning তোমার কাছে অনেক সময় পাতলা লাগে।', M: 'কিছুদিন তোমার direction থাকে, কিছুদিন মনে হয় আত্মা ছুটিতে গেছে।', H: 'তুমি তুলনামূলকভাবে স্পষ্টভাবে নিজের পথ আর অর্থ অনুভব করো।' },
    Ac1: { L: 'তোমার প্রথম instinct অনেক সময় glory না, risk control।', M: 'কখনও জিততে চাও, কখনও শুধু কম ঝামেলা চাও।', H: 'result, growth আর forward motion তোমাকে দ্রুত activate করে।' },
    Ac2: { L: 'তোমার decision-making অনেক সময় অনেকগুলো browser tab একসাথে খোলার মতো।', M: 'তুমি ভাবো, কিন্তু system crash হওয়া পর্যন্ত না।', H: 'তুমি দ্রুত সিদ্ধান্ত নিতে পারো এবং endless loop পছন্দ করো না।' },
    Ac3: { L: 'deadline-এর সঙ্গে তোমার execution-এর toxic but passionate সম্পর্ক আছে।', M: 'কাজ করতে পারো, কিন্তু mood আর timing খুব matter করে।', H: 'কিছু unfinished থাকলে সেটা তোমার মাথায় খচখচ করে।' },
    So1: { L: 'socially initiate করতে তোমার warm-up লাগে, maybe একটুখানি dua-ও লাগে।', M: 'তুমি vibe match করতে পারো, কিন্তু room force করে lead করো না।', H: 'তুমি interaction শুরু করতে তুলনামূলকভাবে স্বচ্ছন্দ।' },
    So2: { L: 'তুমি কাউকে trust করলে closeness তোমার কাছে খুব natural লাগে।', M: 'তুমি closeness-ও চাও, breathing room-ও চাও।', H: 'তোমার boundary system বেশ শক্ত; uncomfortable হওয়ার আগেই একটু পিছু হটো।' },
    So3: { L: 'তুমি curated-এর চেয়ে direct বেশি। কিছু feel করলে সেটা বেরিয়ে পড়ে।', M: 'context অনুযায়ী সত্য আর smoothness-এর balance রাখো।', H: 'তুমি আলাদা মানুষ আর আলাদা জায়গায় নিজের আলাদা layer দেখাতে পারো।' }
};

const dimensionOrder = ['S1', 'S2', 'S3', 'E1', 'E2', 'E3', 'A1', 'A2', 'A3', 'Ac1', 'Ac2', 'Ac3', 'So1', 'So2', 'So3'];
const DRUNK_TRIGGER_QUESTION_ID = 'drink_gate_q2';

let TYPE_IMAGES = {};

async function loadTypeImages() {
    try {
        const source = await fetch('./main.js').then((res) => res.text());
        const match = source.match(/const TYPE_IMAGES = (\{[\s\S]*?\n\});/);
        if (match) {
            TYPE_IMAGES = new Function(`return ${match[1]}`)();
        }
    } catch (error) {
        console.warn('বাংলা সংস্করণের ছবিগুলো লোড করা যায়নি।', error);
    }
}

const app = {
    shuffledQuestions: [],
    answers: {},
    previewMode: false
};

const screens = {
    intro: document.getElementById('intro'),
    test: document.getElementById('test'),
    result: document.getElementById('result')
};

const questionList = document.getElementById('questionList');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const submitBtn = document.getElementById('submitBtn');
const testHint = document.getElementById('testHint');

function showScreen(name) {
    Object.entries(screens).forEach(([key, el]) => {
        el.classList.toggle('active', key === name);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function getVisibleQuestions() {
    const visible = [...app.shuffledQuestions];
    const gateIndex = visible.findIndex((q) => q.id === 'drink_gate_q1');
    if (gateIndex !== -1 && app.answers['drink_gate_q1'] === 3) {
        visible.splice(gateIndex + 1, 0, specialQuestions[1]);
    }
    return visible;
}

function getQuestionMetaLabel(q) {
    if (q.special) return 'বোনাস প্রশ্ন';
    return app.previewMode ? dimensionMeta[q.dim].name : 'মাত্রা গোপন';
}

function renderQuestions() {
    const visibleQuestions = getVisibleQuestions();
    questionList.innerHTML = '';

    visibleQuestions.forEach((q, index) => {
        const card = document.createElement('article');
        card.className = 'question';
        card.innerHTML = `
          <div class="question-meta">
            <div class="badge">প্রশ্ন ${index + 1}</div>
            <div>${getQuestionMetaLabel(q)}</div>
          </div>
          <div class="question-title">${q.text}</div>
          <div class="options">
            ${q.options.map((opt, i) => {
                const code = ['A', 'B', 'C', 'D'][i] || String(i + 1);
                const checked = app.answers[q.id] === opt.value ? 'checked' : '';
                return `
                <label class="option">
                  <input type="radio" name="${q.id}" value="${opt.value}" ${checked} />
                  <div class="option-code">${code}</div>
                  <div>${opt.label}</div>
                </label>
              `;
            }).join('')}
          </div>
        `;
        questionList.appendChild(card);
    });

    questionList.querySelectorAll('input[type="radio"]').forEach((input) => {
        input.addEventListener('change', (e) => {
            const { name, value } = e.target;
            app.answers[name] = Number(value);

            if (name === 'drink_gate_q1') {
                if (Number(value) !== 3) {
                    delete app.answers['drink_gate_q2'];
                }
                renderQuestions();
                return;
            }

            updateProgress();
        });
    });

    updateProgress();
}

function updateProgress() {
    const visibleQuestions = getVisibleQuestions();
    const total = visibleQuestions.length;
    const done = visibleQuestions.filter((q) => app.answers[q.id] !== undefined).length;
    const percent = total ? (done / total) * 100 : 0;
    progressBar.style.width = `${percent}%`;
    progressText.textContent = `${done} / ${total}`;
    const complete = done === total && total > 0;
    submitBtn.disabled = !complete;
    testHint.textContent = complete
        ? 'সব শেষ। এবার তোমার ডিজিটাল আত্মা ফলাফলের হাতে তুলে দিতে পারো।'
        : 'এখান থেকে পালানোর উপায় নেই। সব প্রশ্ন শেষ করুন।';
}

function sumToLevel(score) {
    if (score <= 3) return 'L';
    if (score === 4) return 'M';
    return 'H';
}

function levelNum(level) {
    return { L: 1, M: 2, H: 3 }[level];
}

function parsePattern(pattern) {
    return pattern.replace(/-/g, '').split('');
}

function getDrunkTriggered() {
    return app.answers[DRUNK_TRIGGER_QUESTION_ID] === 2;
}

function computeResult() {
    const rawScores = {};
    const levels = {};
    Object.keys(dimensionMeta).forEach((dim) => { rawScores[dim] = 0; });

    questions.forEach((q) => {
        rawScores[q.dim] += Number(app.answers[q.id] || 0);
    });

    Object.entries(rawScores).forEach(([dim, score]) => {
        levels[dim] = sumToLevel(score);
    });

    const userVector = dimensionOrder.map((dim) => levelNum(levels[dim]));
    const ranked = NORMAL_TYPES.map((type) => {
        const vector = parsePattern(type.pattern).map(levelNum);
        let distance = 0;
        let exact = 0;
        for (let i = 0; i < vector.length; i++) {
            const diff = Math.abs(userVector[i] - vector[i]);
            distance += diff;
            if (diff === 0) exact += 1;
        }
        const similarity = Math.max(0, Math.round((1 - distance / 30) * 100));
        return { ...type, ...TYPE_LIBRARY[type.code], distance, exact, similarity };
    }).sort((a, b) => {
        if (a.distance !== b.distance) return a.distance - b.distance;
        if (b.exact !== a.exact) return b.exact - a.exact;
        return b.similarity - a.similarity;
    });

    const bestNormal = ranked[0];
    const drunkTriggered = getDrunkTriggered();

    let finalType;
    let modeKicker = 'আপনার মূল টাইপ';
    let badge = `মিল ${bestNormal.similarity}% · একদম মিলে গেছে ${bestNormal.exact}/15`;
    let sub = 'পনেরোটি মাত্রার ভিত্তিতে এখনকার জন্য এটাই আপনার সবচেয়ে কাছের ম্যাচ।';
    let special = false;
    let secondaryType = null;

    if (drunkTriggered) {
        finalType = TYPE_LIBRARY.DRUNK;
        secondaryType = bestNormal;
        modeKicker = 'লুকানো ব্যক্তিত্ব আনলক হয়েছে';
        badge = 'মিল 100% · স্টিয়ারিং এখন অ্যালকোহলের হাতে';
        sub = 'তোমার drinking settings স্বাভাবিক personality pipeline-কে override করেছে।';
        special = true;
    } else if (bestNormal.similarity < 60) {
        finalType = TYPE_LIBRARY.HHHH;
        modeKicker = 'সিস্টেম fallback';
        badge = `সাধারণ টাইপগুলোর মধ্যে সেরা মিলও শুধু ${bestNormal.similarity}%`;
        sub = 'স্ট্যান্ডার্ড personality library তোমাকে বুঝতে না পেরে HHHH-তে পাঠিয়ে দিয়েছে।';
        special = true;
    } else {
        finalType = bestNormal;
    }

    return {
        rawScores,
        levels,
        ranked,
        bestNormal,
        finalType,
        modeKicker,
        badge,
        sub,
        special,
        secondaryType
    };
}

function renderDimList(result) {
    const dimList = document.getElementById('dimList');
    dimList.innerHTML = dimensionOrder.map((dim) => {
        const level = result.levels[dim];
        const explanation = DIM_EXPLANATIONS[dim][level];
        return `
          <div class="dim-item">
            <div class="dim-item-top">
              <div class="dim-item-name">${dimensionMeta[dim].name}</div>
              <div class="dim-item-score">${level} / ${result.rawScores[dim]} পয়েন্ট</div>
            </div>
            <p>${explanation}</p>
          </div>
        `;
    }).join('');
}

function renderPoster(type) {
    const posterBox = document.getElementById('posterBox');
    const posterImage = document.getElementById('posterImage');
    const imageSrc = TYPE_IMAGES[type.code];
    if (imageSrc) {
        posterImage.src = imageSrc;
        posterImage.alt = `${type.code} (${type.name})`;
        posterBox.classList.remove('no-image');
    } else {
        posterImage.removeAttribute('src');
        posterImage.alt = '';
        posterBox.classList.add('no-image');
    }
}

function renderResult() {
    const result = computeResult();
    const type = result.finalType;

    document.getElementById('resultModeKicker').textContent = result.modeKicker;
    document.getElementById('resultTypeName').textContent = `${type.code} (${type.name})`;
    document.getElementById('matchBadge').textContent = result.badge;
    document.getElementById('resultTypeSub').textContent = result.sub;
    document.getElementById('resultDesc').textContent = type.desc;
    document.getElementById('posterCaption').textContent = type.intro;
    document.getElementById('funNote').textContent = result.special
        ? 'এই টেস্ট শুধু মজার জন্য। লুকানো ব্যক্তিত্ব আর fallback result ইচ্ছা করেই chaos বাড়ানোর জন্য যোগ করা হয়েছে। এটাকে psychology, medicine, spiritual truth বা legal proof ভাববেন না।'
        : 'এই টেস্ট শুধুই বিনোদনের জন্য। দয়া করে এটাকে ডায়াগনোসিস, চাকরি, সম্পর্ক, ব্রেকআপ, ঝাড়ফুঁক বা বড় জীবন সিদ্ধান্তের ভিত্তি বানাবেন না।';

    renderPoster(type);
    renderDimList(result);
    showScreen('result');
}

function startTest(preview = false) {
    app.previewMode = preview;
    app.answers = {};
    const shuffledRegular = shuffle(questions);
    const insertIndex = Math.floor(Math.random() * shuffledRegular.length) + 1;
    app.shuffledQuestions = [
        ...shuffledRegular.slice(0, insertIndex),
        specialQuestions[0],
        ...shuffledRegular.slice(insertIndex)
    ];
    renderQuestions();
    showScreen('test');
}

document.getElementById('startBtn').addEventListener('click', () => startTest(false));
document.getElementById('backIntroBtn').addEventListener('click', () => showScreen('intro'));
document.getElementById('submitBtn').addEventListener('click', renderResult);
document.getElementById('restartBtn').addEventListener('click', () => startTest(false));
document.getElementById('toTopBtn').addEventListener('click', () => showScreen('intro'));

loadTypeImages().then(() => {
    const defaultType = TYPE_LIBRARY.CTRL;
    renderPoster(defaultType);
});
