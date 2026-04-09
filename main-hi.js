const dimensionMeta = {
    S1: { name: 'S1 आत्म-मूल्य', model: 'सेल्फ मॉडल' },
    S2: { name: 'S2 आत्म-समझ', model: 'सेल्फ मॉडल' },
    S3: { name: 'S3 अंदरूनी ड्राइव', model: 'सेल्फ मॉडल' },
    E1: { name: 'E1 रिश्ते की सुरक्षा', model: 'इमोशनल मॉडल' },
    E2: { name: 'E2 भावनात्मक निवेश', model: 'इमोशनल मॉडल' },
    E3: { name: 'E3 सीमाएँ और निर्भरता', model: 'इमोशनल मॉडल' },
    A1: { name: 'A1 दुनिया को देखने का तरीका', model: 'एटीट्यूड मॉडल' },
    A2: { name: 'A2 नियम बनाम आज़ादी', model: 'एटीट्यूड मॉडल' },
    A3: { name: 'A3 जीवन का मतलब', model: 'एटीट्यूड मॉडल' },
    Ac1: { name: 'Ac1 मोटिवेशन स्टाइल', model: 'एक्शन मॉडल' },
    Ac2: { name: 'Ac2 डिसीजन स्टाइल', model: 'एक्शन मॉडल' },
    Ac3: { name: 'Ac3 काम पूरा करने का मोड', model: 'एक्शन मॉडल' },
    So1: { name: 'So1 सोशल पहल', model: 'सोशल मॉडल' },
    So2: { name: 'So2 पर्सनल बाउंड्री', model: 'सोशल मॉडल' },
    So3: { name: 'So3 अभिव्यक्ति और असलियत', model: 'सोशल मॉडल' }
};

const questions = [
    {
        id: 'q1', dim: 'S1',
        text: 'मैं सिर्फ single नहीं हूँ. मैं basically एक anxious NPC हूँ, low self-esteem के साथ, romantic delusion में PhD लिए हुए. Proper relationship कभी हुई नहीं, और youth का बड़ा हिस्सा ऐसे निकला जैसे दिमाग में किसी और life का trailer चल रहा हो, जबकि बाकी सब Instagram पर normal लग रहे थे. सच बताओ, यह line थोड़ी ज़्यादा personal लगी?',
        options: [
            { label: 'बहुत ज़्यादा personal लगी', value: 1 },
            { label: 'काफी heavy थी', value: 2 },
            { label: 'नहीं, ये मैं नहीं हूँ', value: 3 }
        ]
    },
    {
        id: 'q2', dim: 'S1',
        text: 'मुझे अक्सर लगता है कि मेरे आसपास के लोग मुझसे ज़्यादा impressive हैं.',
        options: [
            { label: 'हाँ, अक्सर', value: 1 },
            { label: 'कभी-कभी', value: 2 },
            { label: 'नहीं, इतना नहीं', value: 3 }
        ]
    },
    {
        id: 'q3', dim: 'S2',
        text: 'मुझे काफी हद तक पता है कि मैं असल में कैसा इंसान हूँ.',
        options: [
            { label: 'असहमत', value: 1 },
            { label: 'न्यूट्रल', value: 2 },
            { label: 'सहमत', value: 3 }
        ]
    },
    {
        id: 'q4', dim: 'S2',
        text: 'अंदर से मुझे पता है कि मेरे लिए सच में क्या मायने रखता है.',
        options: [
            { label: 'असहमत', value: 1 },
            { label: 'न्यूट्रल', value: 2 },
            { label: 'सहमत', value: 3 }
        ]
    },
    {
        id: 'q5', dim: 'S3',
        text: 'मैं सच में grow करना चाहता हूँ और अपने stronger version तक पहुँचना चाहता हूँ.',
        options: [
            { label: 'असहमत', value: 1 },
            { label: 'न्यूट्रल', value: 2 },
            { label: 'सहमत', value: 3 }
        ]
    },
    {
        id: 'q6', dim: 'S3',
        text: 'दूसरों की राय मेरी life को पूरी तरह control नहीं करती.',
        options: [
            { label: 'असहमत', value: 1 },
            { label: 'न्यूट्रल', value: 2 },
            { label: 'सहमत', value: 3 }
        ]
    },
    {
        id: 'q7', dim: 'E1',
        text: 'तुम्हारा partner 5 घंटे reply नहीं करता, फिर कहता है food poisoning थी. तुम्हारा पहला thought क्या होगा?',
        options: [
            { label: '5 घंटे? कहानी कुछ जमी नहीं', value: 1 },
            { label: 'मैं trust और doubt के बीच अटक जाऊँगा', value: 2 },
            { label: 'शायद सच में उसकी तबीयत खराब थी', value: 3 }
        ]
    },
    {
        id: 'q8', dim: 'E1',
        text: 'रिश्तों में मुझे अक्सर डर रहता है कि मुझे छोड़ दिया जाएगा.',
        options: [
            { label: 'हाँ', value: 1 },
            { label: 'कभी-कभी', value: 2 },
            { label: 'नहीं', value: 3 }
        ]
    },
    {
        id: 'q9', dim: 'E2',
        text: 'जब मैं कहता हूँ कि मैं प्यार को seriously लेता हूँ, तो सच में seriously ही लेता हूँ.',
        options: [
            { label: 'अगर honest रहूँ तो हमेशा नहीं', value: 1 },
            { label: 'शायद आधा-आधा', value: 2 },
            { label: 'हाँ, बिल्कुल', value: 3 }
        ]
    },
    {
        id: 'q10', dim: 'E2',
        text: 'सोचो तुम्हारा crush caring, funny, smart, loyal, attractive, emotionally mature और किसी चमत्कार से तुम पर ही फ़िदा है. फिर क्या होगा?',
        options: [
            { label: 'फिर भी मैं खुद को पूरी तरह नहीं छोड़ूँगा', value: 1 },
            { label: 'मैं बीच वाली जगह पर रहूँगा', value: 2 },
            { label: 'मैं पूरा lovesick disaster बन जाऊँगा', value: 3 }
        ]
    },
    {
        id: 'q11', dim: 'E3',
        text: 'तुम किसी को date करना शुरू करते हो और वो बहुत clingy हो जाता है. तुम्हारा honest reaction?',
        options: [
            { label: 'सच कहूँ तो मुझे शायद ठीक लगे', value: 1 },
            { label: 'इंसान पर depend करता है', value: 2 },
            { label: 'मुझे space चाहिए वरना मैं गायब हो जाऊँगा', value: 3 }
        ]
    },
    {
        id: 'q12', dim: 'E3',
        text: 'किसी भी रिश्ते में personal space मेरे लिए बहुत important है.',
        options: [
            { label: 'मुझे closeness और mutual dependence ज़्यादा पसंद है', value: 1 },
            { label: 'Situation पर depend करता है', value: 2 },
            { label: 'हाँ, ये non-negotiable है', value: 3 }
        ]
    },
    {
        id: 'q13', dim: 'A1',
        text: 'ज्यादातर लोग बेसिकली ठीक-ठाक और decent होते हैं.',
        options: [
            { label: 'ये बहुत optimistic लग रहा है', value: 1 },
            { label: 'शायद', value: 2 },
            { label: 'हाँ, मैं अभी भी ये मानता हूँ', value: 3 }
        ]
    },
    {
        id: 'q14', dim: 'A1',
        text: 'तुम सड़क पर चल रहे हो और एक बहुत ही प्यारा बच्चा अचानक आकर तुम्हें lollipop दे देता है. कोई context नहीं, सिर्फ pure cuteness. तुम्हारा reaction?',
        options: [
            { label: 'ये इस हफ्ते की सबसे cute चीज़ है', value: 3 },
            { label: 'मैं बहुत confused हो जाऊँगा', value: 2 },
            { label: 'ये किसी scam documentary की शुरुआत लग रही है', value: 1 }
        ]
    },
    {
        id: 'q15', dim: 'A2',
        text: 'Exam week चल रही है, तुम्हें mandatory study session में होना चाहिए, लेकिन तुम्हारा crush आज रात BGMI खेलने बुला रहा है. तुम क्या करोगे?',
        options: [
            { label: 'चलो, एक रात से क्या होगा', value: 1 },
            { label: 'कोई excuse manage करने की कोशिश करूँगा', value: 2 },
            { label: 'नहीं, अभी पढ़ाई पहले', value: 3 }
        ]
    },
    {
        id: 'q16', dim: 'A2',
        text: 'मुझे routine तोड़ना पसंद है और बंधा हुआ feel करना बिल्कुल पसंद नहीं.',
        options: [
            { label: 'सहमत', value: 1 },
            { label: 'न्यूट्रल', value: 2 },
            { label: 'असहमत', value: 3 }
        ]
    },
    {
        id: 'q17', dim: 'A3',
        text: 'मुझे आमतौर पर life की overall direction का कुछ न कुछ अंदाज़ा रहता है, चाहे details messy हों.',
        options: [
            { label: 'असहमत', value: 1 },
            { label: 'न्यूट्रल', value: 2 },
            { label: 'सहमत', value: 3 }
        ]
    },
    {
        id: 'q18', dim: 'A3',
        text: 'कभी-कभी मुझे लगता है life बस hormones, भूख, थकान और chaos का package है, जो खुद को meaning बोलकर बेच रहा है.',
        options: [
            { label: 'हाँ, बिल्कुल', value: 1 },
            { label: 'दिन पर depend करता है', value: 2 },
            { label: 'नहीं, ये बहुत cynical है', value: 3 }
        ]
    },
    {
        id: 'q19', dim: 'Ac1',
        text: 'मैं आमतौर पर growth और achievement के लिए push करता हूँ, सिर्फ problems avoid करने के लिए नहीं.',
        options: [
            { label: 'असहमत', value: 1 },
            { label: 'न्यूट्रल', value: 2 },
            { label: 'सहमत', value: 3 }
        ]
    },
    {
        id: 'q20', dim: 'Ac1',
        text: 'तुम 30 मिनट से toilet पर बैठे हो, कुछ नहीं हो रहा, और अब ये pure ego battle बन चुका है. तुम कौन-से type हो?',
        options: [
            { label: 'थोड़ा और बैठता हूँ, शायद universe को time चाहिए', value: 1 },
            { label: 'खुद को अजीब motivational speech देता हूँ', value: 2 },
            { label: 'Practical solution लेकर life आगे बढ़ाता हूँ', value: 3 }
        ]
    },
    {
        id: 'q21', dim: 'Ac2',
        text: 'मैं आमतौर पर decisions जल्दी लेता हूँ और चीज़ों को बेवजह खींचना पसंद नहीं करता.',
        options: [
            { label: 'असहमत', value: 1 },
            { label: 'न्यूट्रल', value: 2 },
            { label: 'सहमत', value: 3 }
        ]
    },
    {
        id: 'q22', dim: 'Ac2',
        text: 'यहाँ कोई सवाल नहीं है. बस blindly एक option चुनो और अपनी destiny accept करो.',
        options: [
            { label: 'A कुछ सही-सही लग रहा है', value: 1 },
            { label: 'चलो B ले लेते हैं', value: 2 },
            { label: 'Doubt हो तो C', value: 3 }
        ]
    },
    {
        id: 'q23', dim: 'Ac3',
        text: 'जब कोई कहता है कि तुम्हारी execution power strong है, तो अंदर से कौन-सा जवाब सबसे real लगता है?',
        options: [
            { label: 'सिर्फ तब जब panic और deadline टीम बना लें', value: 1 },
            { label: 'कभी-कभी, हाँ', value: 2 },
            { label: 'हाँ. चीज़ें आगे बढ़नी चाहिए', value: 3 }
        ]
    },
    {
        id: 'q24', dim: 'Ac3',
        text: 'मैं आमतौर पर plans बनाता हूँ, और फिर...',
        options: [
            { label: 'Reality आकर उन्हें पटक देती है', value: 1 },
            { label: 'कुछ चलते हैं, कुछ नहीं', value: 2 },
            { label: 'जब plan टूटता है तो मुझे गुस्सा आता है', value: 3 }
        ]
    },
    {
        id: 'q25', dim: 'So1',
        text: 'तुमने Valorant या Free Fire MAX से कुछ online friends बनाए, और अब वो real life meet-up चाहते हैं. तुम्हारा first instinct क्या है?',
        options: [
            { label: 'Online मज़ाक अलग चीज़ है, offline मिलना अलग level है', value: 1 },
            { label: 'हो सकता है ठीक हो, vibe देखकर तय करूँगा', value: 2 },
            { label: 'मैं तो already outfit सोच रहा हूँ. क्या पता iconic moment हो', value: 3 }
        ]
    },
    {
        id: 'q26', dim: 'So1',
        text: 'तुम्हारा दोस्त hangout पर अपने किसी और दोस्त को भी ले आता है. तुम्हारा कौन-सा version active होता है?',
        options: [
            { label: 'मैं naturally थोड़ी दूरी रखता हूँ', value: 1 },
            { label: 'अगर vibe अच्छी है तो मैं भी ठीक हूँ', value: 2 },
            { label: 'मेरे दोस्त का दोस्त लगभग मेरी team में ही है', value: 3 }
        ]
    },
    {
        id: 'q27', dim: 'So2',
        text: 'मैं basically इंसानी electric fence हूँ. कोई बहुत पास आ जाए तो अंदर alarm बजने लगता है.',
        options: [
            { label: 'सहमत', value: 3 },
            { label: 'न्यूट्रल', value: 2 },
            { label: 'असहमत', value: 1 }
        ]
    },
    {
        id: 'q28', dim: 'So2',
        text: 'जिन लोगों पर मुझे सच में trust है, उनके साथ मुझे बहुत गहरी inner-circle वाली closeness चाहिए.',
        options: [
            { label: 'सहमत', value: 1 },
            { label: 'न्यूट्रल', value: 2 },
            { label: 'असहमत', value: 3 }
        ]
    },
    {
        id: 'q29', dim: 'So3',
        text: 'कभी तुम्हारी किसी चीज़ पर clearly negative राय होती है, लेकिन तुम उसे बोलते नहीं. Usually क्यों?',
        options: [
            { label: 'ऐसा कम होता है, मैं बोल देता हूँ', value: 1 },
            { label: 'मैं awkward माहौल नहीं बनाना चाहता', value: 2 },
            { label: 'मैं नहीं चाहता लोग जानें कि अंदर कितनी dark commentary चल रही है', value: 3 }
        ]
    },
    {
        id: 'q30', dim: 'So3',
        text: 'मैं अलग-अलग लोगों के सामने अपना अलग version दिखाता हूँ.',
        options: [
            { label: 'असहमत', value: 1 },
            { label: 'न्यूट्रल', value: 2 },
            { label: 'सहमत', value: 3 }
        ]
    }
];

const specialQuestions = [
    {
        id: 'drink_gate_q1',
        special: true,
        kind: 'drink_gate',
        text: 'इनमें से कौन-सी चीज़ तुम्हारे usual mode जैसी लगती है?',
        options: [
            { label: 'खाना, सोना, survive करना', value: 1 },
            { label: 'Creative hobbies', value: 2 },
            { label: 'पीना', value: 3 },
            { label: 'Gym और fitness', value: 4 }
        ]
    },
    {
        id: 'drink_gate_q2',
        special: true,
        kind: 'drink_trigger',
        text: 'Honestly, शराब के साथ तुम्हारा relation कैसा है?',
        options: [
            { label: 'कभी-कभी पीता हूँ, पर limit जानता हूँ', value: 1 },
            { label: 'कभी-कभी alcohol emotional support device बन जाती है', value: 2 }
        ]
    }
];

const TYPE_LIBRARY = {
    CTRL: { code: 'CTRL', name: 'सब संभालने वाला', intro: 'हाँ, save file वाकई तुम्हारे पास है.', desc: 'जब life buffering करने लगती है, लोग तुम्हें बुलाते हैं. Rules तुम्हें optional लगते हैं, plans editable लगते हैं, और chaos तुम्हारे हाथ में आकर somehow manageable हो जाता है. तुम loud हो या नहीं, effective ज़रूर हो.' },
    'ATM-er': { code: 'ATM-er', name: 'पेमेंट मशीन', intro: 'क्या मैं unlimited wallet जैसा दिखता हूँ?', desc: 'तुम literally पैसे से नहीं बने हो, फिर भी किसी न किसी form में payment तुम ही करते हो: time, energy, patience, emotional labour या आखिरी बची हुई mental battery. तुम stable हो, कभी-कभी अपनी cost पर भी.' },
    'Dior-s': { code: 'Dior-s', name: 'बेसमेंट फ़िलॉसफ़र', intro: 'मेरी flop era भी एक ideology है.', desc: 'तुम lazy नहीं हो. तुम बस modern life के sales pitch से convinced नहीं हो. Productivity worship, hustle culture और status game देखकर तुम्हारा अंदरूनी सिस्टम कहता है: यह बस अच्छी packaging वाली jail है.' },
    BOSS: { code: 'BOSS', name: 'ड्राइवर', intro: 'स्टीयरिंग दो. मैं संभाल लूँगा.', desc: 'तुमसे executive energy निकलती है, चाहे तुम कोशिश करो या नहीं. तुम्हें direction, movement और competence पसंद है. जब चीज़ें track से उतरती हैं, तुम endless discussion नहीं करते. तुम wheel पकड़ लेते हो.' },
    'THAN-K': { code: 'THAN-K', name: 'ग्रैटिट्यूड मशीन', intro: 'मैं academy, traffic jam और random luck सबका शुक्रिया अदा करना चाहूँगा.', desc: 'तुम उन situations में भी silver lining निकाल लेते हो जहाँ बाकी लोग wall punch करने को तैयार हों. किसी के लिए यह optimism है, किसी के लिए suspicious behaviour. पर तुम stale हवा में भी emotional oxygen ढूँढ़ लेते हो.' },
    'OH-NO': { code: 'OH-NO', name: 'डिज़ास्टर स्कैनर', intro: 'ओह नहीं. यह इतना accurate क्यों है?', desc: 'तुम risk management department हो, बस human body में. एक गलत जगह रखा हुआ glass और तुम water damage, short circuit, insurance call और life lesson सब imagine कर चुके होते हो. Irritating? कभी-कभी. Useful? बहुत.' },
    GOGO: { code: 'GOGO', name: 'बुलडोज़र', intro: 'ठीक है. अब आगे बढ़ते हैं.', desc: 'तुम momentum में उतना विश्वास करते हो जितना कुछ लोग धर्म में करते हैं. तुम vibe को endlessly discuss करने वालों में नहीं हो. तुम काम को अगले phase में धकेलने वालों में हो. जब बाकी लोग अभी सोच रहे होते हैं, तुम चालू हो चुके होते हो.' },
    SEXY: { code: 'SEXY', name: 'मुख्य किरदार', intro: 'दुर्भाग्य से तुम्हारी aura कमरे में तुमसे पहले पहुँच जाती है.', desc: 'तुम attention उस तरह attract करते हो जैसे मौसम अपना असर करता है. लोग तुम्हें notice करते हैं, तुम पर projections डालते हैं, और कभी-कभी तुम्हारे आसपास थोड़े glitch भी हो जाते हैं. तुम्हें perform करने की भी ज़रूरत नहीं पड़ती. बस होना काफी है.' },
    'LOVE-R': { code: 'LOVE-R', name: 'होपलेस रोमांटिक', intro: 'तुम्हारी emotional bandwidth थोड़ा ज़्यादा ही है.', desc: 'तुम casual vibes के लिए नहीं बने. तुम longing, symbolism, dramatic playlists और internal love cinema के लिए बने हो. एक falling leaf भी तुम्हारे लिए metaphor बन सकता है. Crush तो पूरा internal universe बन जाता है.' },
    MUM: { code: 'MUM', name: 'कम्फर्ट पैरेंट', intro: 'पानी चाहिए, validation चाहिए, या दोनों?', desc: 'तुम्हारे अंदर warm-bath nervous system energy है. लोग तुम्हारे आसपास unexpectedly safe feel करते हैं क्योंकि तुम जल्दी emotional weather पकड़ लेते हो और care mode में shift हो जाते हो. Catch यह है कि तुम दूसरों पर softness ज़्यादा खर्च करते हो, खुद पर कम.' },
    FAKE: { code: 'FAKE', name: 'शेप-शिफ्टर', intro: 'यहाँ layers बहुत हैं. शायद ज़रूरत से ज़्यादा.', desc: 'तुम context के हिसाब से इतने smoothly adapt करते हो कि थोड़ा eerie लगता है. Friend mode, work mode, charming mode, emotionally unavailable mode, तुम जल्दी switch कर लेते हो. कुछ लोग तुम्हें fake समझते हैं. ज़्यादातर समय तुम बस room को बहुत अच्छे से पढ़ रहे होते हो.' },
    OJBK: { code: 'OJBK', name: 'जो भी महाराज', intro: 'मैंने जो भी कहा था, सच में वही मतलब था.', desc: 'तुम life में उस investment level के साथ चलते हो जैसे कोई शाही इंसान छोटे झगड़े देख रहा हो. Rice या pasta, अंदर या बाहर, यह या वह, तुम्हारा जवाब अक्सर एक polished version होता है: मुझे इससे फर्क नहीं पड़ता.' },
    MALO: { code: 'MALO', name: 'कैओस गॉब्लिन', intro: 'सभ्यता शायद तुम्हारे temperament के लिए बनी ही नहीं थी.', desc: 'तुम्हारा एक हिस्सा अभी भी tree branch से नीचे नहीं उतरा. तुम playful हो, मुश्किल से tame होते हो, और किसी भी चीज़ पर शक करते हो जो बहुत polished या बहुत serious लगे. अगर life एक badly designed game लगे, तो तुम tutorial skip करके scenery पर चढ़ जाओगे.' },
    'JOKE-R': { code: 'JOKE-R', name: 'उदास जोकर', intro: 'निकला यह कि joke तो emotional self-defense थी.', desc: 'तुम मज़ेदार उस तरह हो जैसे तूफ़ान सुंदर हो सकता है: loud, theatrical और थोड़ा alarming. तुम jokes और timing से room को alive रखते हो, पर comedy तुम्हारे लिए armour भी है. अगर लोग काफी हँस लें, तो शायद कोई भीतर झाँकने न आए.' },
    'WOC!': { code: 'WOC!', name: 'अरे बाप रे टाइप', intro: 'रुको, मैं इस category में कैसे पहुँच गया?', desc: 'तुम बाहर से loudly react करते हो, अंदर से quietly process करते हो. Surface पर chaos, exclamations और disbelief. अंदर pattern recognition surprisingly साफ. जब कोई चीज़ bakwaas लगती है, तुम उसे एक दिल से निकली आवाज़ में express कर देते हो.' },
    'THIN-K': { code: 'THIN-K', name: 'ओवरथिंकर', intro: 'कृपया इंतज़ार करें. Analysis अभी चल रही है.', desc: 'तुम्हारा दिमाग scroll नहीं करता, audit करता है. तुम information सिर्फ consume नहीं करते; premises, bias, structure, motive और logic सब inspect करते हो. सोचना तुम्हारे लिए hobby नहीं है. यह default operating system है.' },
    SHIT: { code: 'SHIT', name: 'गुस्सैल competent इंसान', intro: 'सब बेकार है. मैं फिर भी इसे ठीक कर दूँगा.', desc: 'तुम दुनिया से ऐसे complain करते हो जैसे उसने तुम्हें personally insult किया हो, और फिर पलटकर mess भी तुम ही साफ करते हो. तुम्हारा emotional tone doom बोलता है, पर behaviour project manager with unresolved anger बोलता है. Somehow, काम हो जाता है.' },
    ZZZZ: { code: 'ZZZZ', name: 'शटडाउन आर्टिस्ट', intro: 'मैं मरा नहीं हूँ. बस energy-saving mode में हूँ.', desc: 'तुम 99 notifications, 3 deadlines और एक social crisis ignore कर सकते हो, लेकिन जैसे ही आखिरी alarm बजता है, तुम grave से उठकर कुछ surprisingly decent deliver कर देते हो. Urgency के साथ तुम्हारा relation toxic है, पर productive भी.' },
    POOR: { code: 'POOR', name: 'लेज़र बीम', intro: 'मैं low-resource नहीं हूँ. मैं concentrated हूँ.', desc: 'तुम underpowered इसलिए लगते हो क्योंकि तुम खुद को हर जगह नहीं फैलाते. जब बाकी लोग effort को सौ जगह बाँट देते हैं, तुम उसे एक beam में compress करके वही जला देते हो जो matter करता है. दूर से scarcity, पास से focus.' },
    MONK: { code: 'MONK', name: 'बाउंड्री मोंक', intro: 'नहीं, अभी मुझे worldly needs नहीं हैं.', desc: 'तुम personal space को sacred ground की तरह treat करते हो. Solitude तुम्हारे लिए damage का sign नहीं है. यह maintenance, clarity, peace और कभी-कभी survival है. तुम deeply care कर सकते हो, बिना किसी को अपनी psychic living room में 24/7 रखे.' },
    IMSB: { code: 'IMSB', name: 'अंदरूनी meltdown', intro: 'सच बताओ, क्या मैं overcooked हूँ?', desc: 'तुम्हारे अंदर दो immortal दुश्मन रहते हैं: एक कहता है shot ले, दूसरा पहले से social obituary लिख देता है. तुम doomed नहीं हो. बस हर emotionally relevant choice से पहले internal cinema बहुत ज़्यादा चलता है.' },
    SOLO: { code: 'SOLO', name: 'साही', intro: 'मुझे इतना सही drag क्यों किया गया?', desc: 'तुम खुद को बचाने के लिए ज़्यादा tough, ज़्यादा cold और ज़्यादा detached दिखते हो जितना अक्सर feel करते हो. काँटे असली हैं, पर इसलिए नहीं कि तुम्हें closeness से नफ़रत है. इसलिए कि closeness risky लगती है जब तुम बहुत ज़्यादा care करते हो.' },
    FUCK: { code: 'FUCK', name: 'जंगली टाइप', intro: 'ये कैसा result है भाई?', desc: 'तुम raw impulse, chaos, appetite और life force हो, जिनकी containment policy कमजोर है. Social rules तुम्हें decorative लगते हैं. तुम जोर से yes और जोर से no के बीच swing करते हो, और जब fully alive होते हो, तो ऐसे लगते हो जैसे तुम्हें किसी fence में कभी बंद किया ही नहीं जा सकता था.' },
    DEAD: { code: 'DEAD', name: 'आध्यात्मिक रूप से offline', intro: 'क्या मैं अभी भी emotionally logged in हूँ?', desc: 'तुम ऐसे लगते हो जैसे इस game को बहुत बार खेल चुके हो और अब map से impress नहीं होते. Desire muted, spectacle muted, और दुनिया का शोर static जैसा लगता है. तुम ज़रूरी नहीं कि empty हो. तुम बस deeply unconvinced हो.' },
    IMFW: { code: 'IMFW', name: 'सॉफ्ट टारगेट', intro: 'रुको... क्या मैं सच में इतना easily hurt हो जाता हूँ?', desc: 'तुम जल्दी bond करते हो, पूरी तरह trust करते हो, और building clear होने से पहले ही meaning attach कर देते हो. तुम weak नहीं हो. तुम बस एक ऐसी दुनिया में tender हो जो tenderness को carelessness का invitation समझ लेती है.' },
    HHHH: { code: 'HHHH', name: 'ग्लिच गॉब्लिन', intro: 'हा. हा हा. तुम आखिर हो क्या?', desc: 'बधाई हो, तुमने system तोड़ दिया. तुम्हारे answers इतने खूबसूरती से अजीब थे कि standard personality library ने resign कर दिया और तुम्हें honorary title दे दिया: ग्लिच गॉब्लिन. हम इसे respect भी करते हैं, डरते भी हैं, और पूरी तरह समझा भी नहीं सकते.' },
    DRUNK: { code: 'DRUNK', name: 'दारू गॉब्लिन', intro: 'छुपी हुई personality chat में आ गई है.', desc: 'यह result तभी आता है जब alcohol goblin उठ जाती है. Normal personality logic थोड़ी देर के लिए override हो जाती है और उसकी जगह fermented chaos, liquid confidence और bad ideas के साथ suspiciously warm relationship ले लेता है. पानी पियो और ex को text मत करो.' }
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
    S1: { L: 'तुम खुद पर उतने सख्त हो जितना कोई दुश्मन भी शायद न हो.', M: 'तुम्हारा confidence context, timing और mood पर काफी depend करता है.', H: 'तुम्हें अपनी value का अंदाज़ा है और तुम इतनी आसानी से नहीं टूटते.' },
    S2: { L: 'तुम्हारा अंदरूनी signal कभी-कभी धुंधला हो जाता है. Identity buffering आम बात है.', M: 'तुम आमतौर पर खुद को पहचान लेते हो, जब तक mood login चुरा न ले.', H: 'तुम्हें अपने motives, limits और patterns की अच्छी समझ है.' },
    S3: { L: 'Comfort और safety अक्सर बड़े ambition से ऊपर आ जाते हैं.', M: 'तुम्हारा एक हिस्सा growth चाहता है, दूसरा हिस्सा blanket और silence.', H: 'Goals, progress और purpose तुम्हें काफी push करते हैं.' },
    E1: { L: 'तुम्हारा relationship alarm system बहुत जल्दी trigger हो जाता है.', M: 'आधा trust, आधा suspicion. तुम्हारा दिल अक्सर खुद से negotiate करता है.', H: 'तुम panic करने से पहले bond पर भरोसा करने की ज़्यादा संभावना रखते हो.' },
    E2: { L: 'तुम feelings बहुत संभलकर invest करते हो. दरवाज़ा बंद नहीं, बस heavily locked है.', M: 'तुम commit कर सकते हो, लेकिन usually emotional backup plan रखते हो.', H: 'एक बार care कर लिया तो पूरी sincerity से करते हो.' },
    E3: { L: 'Warmth, closeness और emotional availability तुम्हारे लिए बहुत matter करती है.', M: 'तुम intimacy और independence दोनों चाहते हो, adjustable ratio में.', H: 'Love में भी तुम्हें एक ऐसा space चाहिए जो साफ़ तौर पर सिर्फ तुम्हारा हो.' },
    A1: { L: 'तुम दुनिया को पहले defensive suspicion के साथ देखते हो.', M: 'तुम naive नहीं हो, पर full conspiracy mode में भी नहीं रहते.', H: 'तुम अभी भी लोगों और दुनिया को decent होने का chance देते हो.' },
    A2: { L: 'अगर freedom या comfort दांव पर हो, तो तुम rules आसानी से मोड़ लेते हो.', M: 'तुम structure follow कर सकते हो, पर उसके गुलाम नहीं हो.', H: 'Order और process तुम्हें समझ आते हैं. Random chaos नहीं.' },
    A3: { L: 'Meaning कभी-कभी बहुत पतला लगता है, और life थोड़ी performative.', M: 'कुछ दिनों में तुम्हारे पास purpose होता है, कुछ दिनों में तुम spiritually off-duty होते हो.', H: 'तुम्हें आमतौर पर clear direction और personal meaning feel होता है.' },
    Ac1: { L: 'तुम्हारा पहला instinct अक्सर risk control होता है, glory नहीं.', M: 'कभी जीतना चाहते हो, कभी बस कम परेशानी चाहते हो.', H: 'Results, growth और forward motion तुम्हें जल्दी energize करते हैं.' },
    Ac2: { L: 'Decision-making तुम्हारे लिए अक्सर दिमाग में बहुत सारे tabs खुले होने जैसा है.', M: 'तुम सोचते हो, लेकिन total system crash तक नहीं जाते.', H: 'तुम जल्दी decide करते हो और endlessly revisit करना पसंद नहीं करते.' },
    Ac3: { L: 'तुम्हारी execution drive का deadlines के साथ toxic लेकिन passionate रिश्ता है.', M: 'तुम act कर सकते हो, पर mood और timing बहुत matter करते हैं.', H: 'अगर कुछ अधूरा रह जाए तो वो दिमाग में खुजली की तरह अटका रहता है.' },
    So1: { L: 'Social initiative के लिए तुम्हें warm-up और शायद एक छोटी prayer चाहिए.', M: 'तुम vibe match कर लेते हो, लेकिन room पर force नहीं करते.', H: 'तुम interaction खुद शुरू करने में ज़्यादा comfortable हो.' },
    So2: { L: 'जब तुम trust करते हो, तो closeness तुम्हें बहुत natural लगती है.', M: 'तुम closeness और breathing room दोनों चाहते हो, बदलती मात्रा में.', H: 'तुम्हारी boundary system strong है. तुम cornered feel होने से पहले पीछे हट जाते हो.' },
    So3: { L: 'तुम curated होने से ज़्यादा direct हो. Feel किया तो leak हो जाता है.', M: 'तुम context के हिसाब से truth और social smoothness balance करते हो.', H: 'तुम अलग-अलग लोगों के सामने अपनी अलग layers दिखाने में skilled हो.' }
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
        console.warn('हिंदी वर्ज़न के पोस्टर लोड नहीं हो पाए.', error);
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
    if (q.special) return 'बोनस सवाल';
    return app.previewMode ? dimensionMeta[q.dim].name : 'डाइमेंशन छिपा हुआ है';
}

function renderQuestions() {
    const visibleQuestions = getVisibleQuestions();
    questionList.innerHTML = '';

    visibleQuestions.forEach((q, index) => {
        const card = document.createElement('article');
        card.className = 'question';
        card.innerHTML = `
          <div class="question-meta">
            <div class="badge">सवाल ${index + 1}</div>
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
        ? 'सब हो गया. अब अपनी डिजिटल आत्मा को रिजल्ट पेज के हवाले कर सकते हो.'
        : 'भाग नहीं सकते. पूरा टेस्ट खत्म करो. दुनिया पहले ही काफी messy है.';
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
    let modeKicker = 'तुम्हारा मुख्य टाइप';
    let badge = `मैच ${bestNormal.similarity}% · exact hit ${bestNormal.exact}/15`;
    let sub = 'पंद्रह डाइमेंशन के आधार पर यही तुम्हारा सबसे मजबूत मैच है.';
    let special = false;
    let secondaryType = null;

    if (drunkTriggered) {
        finalType = TYPE_LIBRARY.DRUNK;
        secondaryType = bestNormal;
        modeKicker = 'छुपी हुई personality unlock हो गई';
        badge = 'मैच 100% · steering ethanol ने पकड़ लिया';
        sub = 'तुम्हारी alcohol settings ने थोड़ी देर के लिए normal personality system override कर दिया.';
        special = true;
    } else if (bestNormal.similarity < 60) {
        finalType = TYPE_LIBRARY.HHHH;
        modeKicker = 'सिस्टम fallback';
        badge = `सबसे अच्छा standard match भी सिर्फ ${bestNormal.similarity}% तक पहुँचा`;
        sub = 'Regular type library ने तुम्हारे दिमाग से हाथ खड़े कर दिए और तुम्हें HHHH में भेज दिया.';
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
              <div class="dim-item-score">${level} / ${result.rawScores[dim]} अंक</div>
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
        ? 'यह टेस्ट सिर्फ मज़े के लिए है. Hidden personalities और emergency types जानबूझकर chaos के लिए डाले गए हैं. इसे psychology, medicine, spiritual truth या legal proof मत समझो.'
        : 'यह टेस्ट सिर्फ मज़े के लिए है. इसे diagnosis, hiring, dating, breakup, séance या बड़े life decision के लिए इस्तेमाल मत करो. हँसो, लेकिन responsibly.';

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
