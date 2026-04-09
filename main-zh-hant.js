const dimensionMeta = {
    S1: { name: 'S1 自我價值感', model: '自我模型' },
    S2: { name: 'S2 自我清晰度', model: '自我模型' },
    S3: { name: 'S3 核心驅力', model: '自我模型' },
    E1: { name: 'E1 依附安全感', model: '情感模型' },
    E2: { name: 'E2 情感投入度', model: '情感模型' },
    E3: { name: 'E3 邊界與依賴', model: '情感模型' },
    A1: { name: 'A1 世界觀', model: '態度模型' },
    A2: { name: 'A2 規則與自由', model: '態度模型' },
    A3: { name: 'A3 意義感', model: '態度模型' },
    Ac1: { name: 'Ac1 動機取向', model: '行動模型' },
    Ac2: { name: 'Ac2 決策風格', model: '行動模型' },
    Ac3: { name: 'Ac3 執行模式', model: '行動模型' },
    So1: { name: 'So1 社交主動性', model: '社交模型' },
    So2: { name: 'So2 人際距離感', model: '社交模型' },
    So3: { name: 'So3 表達與真實度', model: '社交模型' }
};

const questions = [
    {
        id: 'q1', dim: 'S1',
        text: '我不只是單身，我根本是自帶焦慮跟低自尊的背景 NPC。沒談過什麼像樣的戀愛，青春幾乎都活在腦內小劇場裡。別人在 IG 上看起來都過得好正常，我卻像在地底偷看別人的人生。老實說，這段有沒有戳到你？',
        options: [
            { label: '太真實了，我不舒服', value: 1 },
            { label: '這也太重了吧', value: 2 },
            { label: '沒有，這不是我', value: 3 }
        ]
    },
    {
        id: 'q2', dim: 'S1',
        text: '我常覺得身邊的人都比我厲害、比我完整。',
        options: [
            { label: '很常這樣', value: 1 },
            { label: '偶爾會', value: 2 },
            { label: '不太會', value: 3 }
        ]
    },
    {
        id: 'q3', dim: 'S2',
        text: '我其實蠻清楚自己到底是什麼樣的人。',
        options: [
            { label: '不同意', value: 1 },
            { label: '中立', value: 2 },
            { label: '同意', value: 3 }
        ]
    },
    {
        id: 'q4', dim: 'S2',
        text: '我心裡有真正想追的東西，不只是嘴上說說。',
        options: [
            { label: '不同意', value: 1 },
            { label: '中立', value: 2 },
            { label: '同意', value: 3 }
        ]
    },
    {
        id: 'q5', dim: 'S3',
        text: '我真的很想往上爬，想變強、變穩、變得更厲害。',
        options: [
            { label: '不同意', value: 1 },
            { label: '中立', value: 2 },
            { label: '同意', value: 3 }
        ]
    },
    {
        id: 'q6', dim: 'S3',
        text: '別人的評價，不太能真的左右我的人生。',
        options: [
            { label: '不同意', value: 1 },
            { label: '中立', value: 2 },
            { label: '同意', value: 3 }
        ]
    },
    {
        id: 'q7', dim: 'E1',
        text: '另一半超過 5 小時沒回訊息，後來說自己腸胃炎。你第一個反應是？',
        options: [
            { label: '5 小時太久了吧，這說法有點怪。', value: 1 },
            { label: '我會在信任和懷疑中間搖擺。', value: 2 },
            { label: '也許他/她今天真的很不舒服。', value: 3 }
        ]
    },
    {
        id: 'q8', dim: 'E1',
        text: '我在感情裡很容易擔心自己被拋下。',
        options: [
            { label: '是', value: 1 },
            { label: '偶爾', value: 2 },
            { label: '不是', value: 3 }
        ]
    },
    {
        id: 'q9', dim: 'E2',
        text: '我敢說，我對每一段感情基本上都是真心的。',
        options: [
            { label: '也沒有到每次都那麼真', value: 1 },
            { label: '可能吧', value: 2 },
            { label: '是，真的很認真', value: 3 }
        ]
    },
    {
        id: 'q10', dim: 'E2',
        text: '如果你喜歡的人溫柔、成熟、好笑、聰明、好看、專情，而且還超級喜歡你，你會怎樣？',
        options: [
            { label: '就算對方再好，我也不會陷太深。', value: 1 },
            { label: '大概介於中間。', value: 2 },
            { label: '我會超珍惜，甚至直接變戀愛腦。', value: 3 }
        ]
    },
    {
        id: 'q11', dim: 'E3',
        text: '交往後，對方非常黏人。你的真實感受是？',
        options: [
            { label: '老實說，我可能還蠻爽的。', value: 1 },
            { label: '看人，沒有一定。', value: 2 },
            { label: '我比較想保有自己的空間。', value: 3 }
        ]
    },
    {
        id: 'q12', dim: 'E3',
        text: '不管是什麼關係，我都很重視個人空間。',
        options: [
            { label: '我比較喜歡互相依賴的感覺', value: 1 },
            { label: '看情況', value: 2 },
            { label: '是，而且很重要', value: 3 }
        ]
    },
    {
        id: 'q13', dim: 'A1',
        text: '大部分的人，本質上其實是善良的。',
        options: [
            { label: '這也太理想化了吧', value: 1 },
            { label: '也許吧', value: 2 },
            { label: '我還是願意相信好人比較多', value: 3 }
        ]
    },
    {
        id: 'q14', dim: 'A1',
        text: '你走在路上，一個超可愛的小朋友突然跑來塞給你一支棒棒糖。沒有家長、沒有套路，只有滿滿可愛。你第一反應是？',
        options: [
            { label: '天啊也太可愛了吧，世界還有救。', value: 3 },
            { label: '我整個滿頭問號。', value: 2 },
            { label: '這是不是什麼新型詐騙？', value: 1 }
        ]
    },
    {
        id: 'q15', dim: 'A2',
        text: '快考試了，學校規定一定要留下來晚自習，但你今晚又約了喜歡的人一起打《傳說對決》。你會怎麼做？',
        options: [
            { label: '翹掉啊，就這一次而已。', value: 1 },
            { label: '想辦法請個假好了。', value: 2 },
            { label: '都快考試了還打什麼。', value: 3 }
        ]
    },
    {
        id: 'q16', dim: 'A2',
        text: '我喜歡打破常規，不喜歡被框住。',
        options: [
            { label: '同意', value: 1 },
            { label: '中立', value: 2 },
            { label: '不同意', value: 3 }
        ]
    },
    {
        id: 'q17', dim: 'A3',
        text: '我做事通常是有方向感的，不太會完全亂飄。',
        options: [
            { label: '不同意', value: 1 },
            { label: '中立', value: 2 },
            { label: '同意', value: 3 }
        ]
    },
    {
        id: 'q18', dim: 'A3',
        text: '我偶爾會突然覺得，人生哪有什麼真正的意義，大家只是被慾望、疲勞、荷爾蒙跟情緒推著走而已。',
        options: [
            { label: '對，我真的會這樣想。', value: 1 },
            { label: '有時候吧。', value: 2 },
            { label: '這也太悲觀了。', value: 3 }
        ]
    },
    {
        id: 'q19', dim: 'Ac1',
        text: '我做事主要是為了追求成果和成長，不是只想避開麻煩。',
        options: [
            { label: '不同意', value: 1 },
            { label: '中立', value: 2 },
            { label: '同意', value: 3 }
        ]
    },
    {
        id: 'q20', dim: 'Ac1',
        text: '你便祕，在馬桶上坐了 30 分鐘還是毫無進展。這時你比較像哪一種？',
        options: [
            { label: '再坐一下，說不定等等就有了。', value: 1 },
            { label: '開始對自己的屁股發表失控演說。', value: 2 },
            { label: '用實際方法快點解決。', value: 3 }
        ]
    },
    {
        id: 'q21', dim: 'Ac2',
        text: '我做決定算果斷，不喜歡拖拖拉拉。',
        options: [
            { label: '不同意', value: 1 },
            { label: '中立', value: 2 },
            { label: '同意', value: 3 }
        ]
    },
    {
        id: 'q22', dim: 'Ac2',
        text: '這題沒有題目，請直接盲選。',
        options: [
            { label: '想了半天還是覺得 A 吧？', value: 1 },
            { label: '不然就 B？', value: 2 },
            { label: '不會就選 C', value: 3 }
        ]
    },
    {
        id: 'q23', dim: 'Ac3',
        text: '如果別人說你「執行力很強」，你心裡最接近哪一句？',
        options: [
            { label: '我是被逼到最後才會突然超有執行力。', value: 1 },
            { label: '有時候啦。', value: 2 },
            { label: '對，事情本來就該被推進。', value: 3 }
        ]
    },
    {
        id: 'q24', dim: 'Ac3',
        text: '我做事通常會先有計畫，但接下來...',
        options: [
            { label: '計畫永遠趕不上變化。', value: 1 },
            { label: '有時做得到，有時做不到。', value: 2 },
            { label: '我真的很討厭計畫被打亂。', value: 3 }
        ]
    },
    {
        id: 'q25', dim: 'So1',
        text: '你因為玩《英雄聯盟》認識了一群網友，現在大家約你線下見面。你的想法是？',
        options: [
            { label: '網上嘴砲是一回事，真的見面還是會有點怕。', value: 1 },
            { label: '見網友也還好，看感覺再說。', value: 2 },
            { label: '我會認真打扮一下，順便熱情開聊。', value: 3 }
        ]
    },
    {
        id: 'q26', dim: 'So1',
        text: '朋友帶了他/她的朋友一起來，你最可能是什麼狀態？',
        options: [
            { label: '我對朋友的朋友本來就會先保留一點距離。', value: 1 },
            { label: '看對方，好相處就聊。', value: 2 },
            { label: '朋友的朋友也可以直接變我的朋友。', value: 3 }
        ]
    },
    {
        id: 'q27', dim: 'So2',
        text: '我跟人相處基本上像電子圍欄，靠太近就會自動警報。',
        options: [
            { label: '同意', value: 3 },
            { label: '中立', value: 2 },
            { label: '不同意', value: 1 }
        ]
    },
    {
        id: 'q28', dim: 'So2',
        text: '對我真正信任的人，我其實會想要很近、很熟、很自己人的關係。',
        options: [
            { label: '同意', value: 1 },
            { label: '中立', value: 2 },
            { label: '不同意', value: 3 }
        ]
    },
    {
        id: 'q29', dim: 'So3',
        text: '有時候你明明心裡有負面想法，但最後選擇不講。通常是為什麼？',
        options: [
            { label: '這種情況其實不太常發生。', value: 1 },
            { label: '我不想把氣氛弄僵。', value: 2 },
            { label: '我不想讓別人看到我其實有多黑暗。', value: 3 }
        ]
    },
    {
        id: 'q30', dim: 'So3',
        text: '我面對不同的人，會自然切換不同版本的自己。',
        options: [
            { label: '不同意', value: 1 },
            { label: '中立', value: 2 },
            { label: '同意', value: 3 }
        ]
    }
];

const specialQuestions = [
    {
        id: 'drink_gate_q1',
        special: true,
        kind: 'drink_gate',
        text: '哪一個最像你平常的狀態？',
        options: [
            { label: '吃飯、睡覺、活下去', value: 1 },
            { label: '文藝或創作型興趣', value: 2 },
            { label: '喝酒', value: 3 },
            { label: '健身運動', value: 4 }
        ]
    },
    {
        id: 'drink_gate_q2',
        special: true,
        kind: 'drink_trigger',
        text: '你跟酒的關係，老實說比較像哪一種？',
        options: [
            { label: '小酌可以，但我有底線。', value: 1 },
            { label: '酒根本是我的情緒外接硬碟。', value: 2 }
        ]
    }
];

const TYPE_LIBRARY = {
    CTRL: { code: 'CTRL', name: '控場者', intro: '對，你就是那個會把場面收回來的人。', desc: '當生活開始卡頓、混亂、崩掉的時候，大家最後通常都會看向你。規則對你來說像參考用，計畫也像可以隨時重寫的檔案。你不一定高調，但真的很會收場。' },
    'ATM-er': { code: 'ATM-er', name: '一直在付出的人', intro: '我看起來真的這麼像會買單的人嗎？', desc: '你不一定真的有錢，但你總是在付出，可能是時間、耐心、精力、情緒勞動，甚至最後一點點剩餘理智。你穩到讓人上癮，所以大家很自然就會往你身上靠。' },
    'Dior-s': { code: 'Dior-s', name: '地下室哲學家', intro: '我的低潮期，某種程度上算是一種世界觀。', desc: '你不是懶，你只是對現代人生那一整套成功學說法沒有很買單。努力、效率、升級、競爭，這些東西你都看過，但你心裡很清楚，有些包裝得很高級的東西，本質可能還是牢籠。' },
    BOSS: { code: 'BOSS', name: '掌舵者', intro: '方向盤拿來，我來處理。', desc: '你身上有種很明顯的主導氣場，就算你沒特別想當主角也是一樣。你喜歡方向感、推進感、還有事情被做對的感覺。當局面歪掉時，你的本能不是一直討論，而是直接把車拉回正軌。' },
    'THAN-K': { code: 'THAN-K', name: '感謝發電機', intro: '我想感謝今天的塞車，還有我自己。', desc: '你總能在很鳥的情況裡，硬是找到一點還能呼吸的空氣。有人覺得你樂觀，有人覺得你很可疑，但不管怎樣，你就是有一種奇怪的本事，能在爛狀況裡撈出一點正向感。' },
    'OH-NO': { code: 'OH-NO', name: '災難預報員', intro: '喔不，這也太準了吧。', desc: '你像是一個風險管理部門本人。別人只看到桌邊的一個水杯，你已經想到它倒了之後的連鎖災難。你不是想太多，你只是總能比別人更早看到事情可能會怎麼炸。' },
    GOGO: { code: 'GOGO', name: '推進機器', intro: '好，直接往前。', desc: '你很信奉動起來這件事。對你來說，卡住比做錯還難受。你不喜歡一直分析到氣氛都冷掉，因為在別人還在想的時候，你通常已經先把事情推進半步了。' },
    SEXY: { code: 'SEXY', name: '主角感本人', intro: '很抱歉，你的氣場比你本人更早進場。', desc: '你會吸引注意力，而且不是那種硬撐出來的，是一種很自然就會被看見的存在感。別人容易記住你、誤讀你、投射你，甚至在你附近稍微失常。你不一定在表演，但你看起來永遠像在發光。' },
    'LOVE-R': { code: 'LOVE-R', name: '戀愛災難型浪漫派', intro: '你的感情容量真的有點太大了。', desc: '你不是那種適合隨便玩玩的類型。你適合暗戀、想像、過度解讀、象徵意義，以及一堆讓人睡不著的情緒歌單。別人一個小舉動，你心裡可能已經剪好整部電影。' },
    MUM: { code: 'MUM', name: '安撫型照顧者', intro: '你要喝水、被安慰，還是兩個都要？', desc: '你有一種很像熱水澡的氣場，會讓人莫名覺得安心。你通常很快就能察覺別人的情緒起伏，然後自然切進照顧模式。唯一的問題是，你常常對別人很溫柔，對自己卻沒那麼客氣。' },
    FAKE: { code: 'FAKE', name: '場域變色龍', intro: '你不是沒層次，你是層次多到有點可怕。', desc: '你超會看場合，也超會切模式。朋友面前的你、工作時的你、曖昧期的你、關機狀態的你，根本像不同版本。有些人會覺得你很假，但更多時候，你只是太知道現在這個空間需要什麼樣的你。' },
    OJBK: { code: 'OJBK', name: '都可以之王', intro: '我說都可以，是真的都可以。', desc: '你活在一種很高級的隨便裡。吃什麼、去哪裡、幾點碰面，這類問題很難真正激起你的情緒波動。不是你沒想法，而是你常覺得這些小事不值得花太多情緒。' },
    MALO: { code: 'MALO', name: '混亂小動物', intro: '文明社會本來就不是為你設計的。', desc: '你身上有種沒被完全馴化的東西。你喜歡玩、喜歡鬧、很怕無聊，也很難真心敬畏那些過度正經的東西。如果人生像一個設計很爛的遊戲，你通常不會照規則玩。' },
    'JOKE-R': { code: 'JOKE-R', name: '悲傷搞笑仔', intro: '原來那些笑話其實是自我保護。', desc: '你很會接話、很會搞氣氛、很會讓一個快死掉的場子活過來。但你也常用幽默把一些更深的情緒蓋住。大家都覺得你好笑，可是有些東西，你只想讓它藏在笑點下面。' },
    'WOC!': { code: 'WOC!', name: '哇靠型人格', intro: '哇靠，我怎麼會抽到這個？', desc: '你外表反應大、吐槽快，但內心其實很清楚自己在看什麼。你會大聲震驚，但你不是亂，你只是太快抓到荒謬點。你的驚呼常常比別人的長篇分析還準。' },
    'THIN-K': { code: 'THIN-K', name: '過度思考者', intro: '請稍候，你的大腦還在分析中。', desc: '你的腦不是在接收資訊，是在做審核。你不只看內容，你還會看前提、看偏見、看邏輯、看這個人到底憑什麼講這些。對你來說，思考不是技能，是預設模式。' },
    SHIT: { code: 'SHIT', name: '憤怒但能幹的人', intro: '一切都很爛，但我還是會把它做好。', desc: '你嘴上對世界非常不耐煩，態度也像隨時要開罵，但最後真正把事情收乾淨的人通常還是你。你的情緒像末日，執行力卻像專案經理。很煩，但很可靠。' },
    ZZZZ: { code: 'ZZZZ', name: '省電模式王者', intro: '我不是死掉，我只是先省電。', desc: '你平常可以已讀一堆訊息、拖過一堆期限、忽略一堆外界噪音，但真的到了最後一刻，你又會奇蹟般醒來，交出一個還不錯的成果。你和急迫感之間的關係，很有毒，但也很有效。' },
    POOR: { code: 'POOR', name: '聚焦光束', intro: '我不是資源少，我是全部集中在同一束光上。', desc: '你不是沒能量，你只是很討厭分散。當別人把注意力灑得到處都是時，你會把自己的資源壓縮成一條光束，直接打在真正重要的東西上。遠看像匱乏，近看是專注。' },
    MONK: { code: 'MONK', name: '邊界修行者', intro: '不好意思，我現在沒有世俗需求。', desc: '你把自己的空間看得很神聖。對你來說，一個人待著不是壞掉，是維修、是清空、是重新回神。你不是不會在乎別人，你只是沒辦法 24 小時都讓別人住進你的精神客廳。' },
    IMSB: { code: 'IMSB', name: '內心大爆炸', intro: '說真的，我是不是快不行了？', desc: '你的內心常常住著兩個敵對陣營：一個想衝，一個想先寫好社死遺書。你不是廢，你只是每次做情緒上重要的選擇前，都會先上映一整部災難片。' },
    SOLO: { code: 'SOLO', name: '刺蝟型人格', intro: '為什麼這個結果這麼像在公開處刑我？', desc: '你會先把自己包得比較硬、比較冷、比較不在乎，因為那樣比較安全。你不是討厭靠近，而是越在乎，越怕被傷到。你的刺是真的，但不是沒有原因。' },
    FUCK: { code: 'FUCK', name: '野生派', intro: '這到底是什麼鬼結果？', desc: '你是衝動、生命力、慾望、混亂感的綜合體。很多社會規則對你來說只是參考用，你的開關也不是半開半關，是直接不是全開就是全關。你很難被真正馴服。' },
    DEAD: { code: 'DEAD', name: '靈魂離線中', intro: '請問我情緒上還有在線嗎？', desc: '你給人的感覺很像玩這個世界玩太久，已經沒有太多新鮮感了。欲望變小了、刺激變淡了、很多熱鬧都只剩背景音。你不一定是空掉，只是很難再被輕易說服。' },
    IMFW: { code: 'IMFW', name: '柔軟受傷體質', intro: '等等，我真的有這麼容易受傷嗎？', desc: '你很容易快速投入、快速相信、快速賦予意義。你不是脆弱，你只是反應很真。可惜這個世界常常把溫柔當成可以隨便對待的理由。' },
    HHHH: { code: 'HHHH', name: '系統異常生物', intro: '哈。哈哈哈。你到底是什麼？', desc: '恭喜，你把系統搞壞了。你的回答方式太奇怪、太偏、太有自己的節奏，導致正常人格資料庫直接放棄理解你，轉而頒給你「系統異常生物」這個榮譽稱號。' },
    DRUNK: { code: 'DRUNK', name: '酒精小怪獸', intro: '隱藏人格已加入聊天室。', desc: '這個結果只會在你跟酒的關係太有故事時出現。正常人格邏輯已經被酒精、衝動、情緒和壞主意聯手蓋掉。麻煩先去喝水，然後不要傳訊息給前任。' }
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
    S1: { L: '你對自己通常比別人對你還狠。', M: '你的自信很吃時機、狀態和當天氣氛。', H: '你大致知道自己有多少份量，不太會一下就垮。' },
    S2: { L: '你對自己的輪廓感有時會變得有點模糊。', M: '平常大概知道自己是誰，但情緒一亂就可能暫時失焦。', H: '你對自己的動機、界線和習慣有不錯的掌握。' },
    S3: { L: '比起野心，你更容易優先選擇安全感和舒服。', M: '你一部分想成長，另一部分只想躺平別被煩。', H: '目標感、進步感和意義感對你有明顯推力。' },
    E1: { L: '你的感情警報系統非常敏感。', M: '你一半相信，一半懷疑，心很常自己在內耗。', H: '你比較能相信關係本身，不會每次一有波動就先崩。' },
    E2: { L: '你投入感情時會比較保守，門不是關著，只是鎖很多層。', M: '你可以認真，但通常會留一點退路。', H: '你一旦真的在乎，通常就是很認真地整個放進去。' },
    E3: { L: '親密、陪伴和情感回應對你來說很重要。', M: '你想要靠近，但也想保有一點自由。', H: '再親密的關係裡，你還是需要很清楚屬於自己的空間。' },
    A1: { L: '你看世界時會先啟動防備模式。', M: '你不算天真，但也沒有完全不相信人。', H: '你還願意相信人和世界有善意的可能。' },
    A2: { L: '只要自由或舒服更重要，你很容易把規則往旁邊挪。', M: '你可以守規矩，但不會無條件服從。', H: '秩序和流程對你來說是合理的，亂搞反而讓你很煩。' },
    A3: { L: '你有時會覺得人生的意義感很薄。', M: '有些日子你很有方向，有些日子像靈魂請假。', H: '你通常比較能感覺到自己為什麼而活、往哪裡走。' },
    Ac1: { L: '你的第一反應常是先避風險，不是先衝成果。', M: '有時想贏，有時只想少點麻煩。', H: '你對成果、進步和推進感通常蠻有反應。' },
    Ac2: { L: '你做決定時常像腦中開太多分頁。', M: '你會想，但通常還不至於想太久想壞。', H: '你算果斷，也很不喜歡一直反覆重來。' },
    Ac3: { L: '你的執行力常跟 deadline 保持一段又 toxic 又深情的關係。', M: '你做得到，但很看時機和狀態。', H: '有事情沒做完時，你真的會一直記在心上。' },
    So1: { L: '你在社交上需要熱機時間，最好還附一點心理建設。', M: '你可以順著氣氛走，但不太會一開始就主動帶場。', H: '你比較有可能自己先開話題、先打開局面。' },
    So2: { L: '只要你信任，靠近這件事對你來說其實很自然。', M: '你同時想靠近，也想保留呼吸空間。', H: '你的人際界線感算強，快不舒服時會先往後退。' },
    So3: { L: '你比較偏直接型，有感受時很難完全藏住。', M: '你會看場合，在真話和場面之間找平衡。', H: '你很會依人、依場景切換自己要露出的那一面。' }
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
        console.warn('無法載入繁中版結果圖片。', error);
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
    if (q.special) return '額外題';
    return app.previewMode ? dimensionMeta[q.dim].name : '維度隱藏中';
}

function renderQuestions() {
    const visibleQuestions = getVisibleQuestions();
    questionList.innerHTML = '';

    visibleQuestions.forEach((q, index) => {
        const card = document.createElement('article');
        card.className = 'question';
        card.innerHTML = `
          <div class="question-meta">
            <div class="badge">第 ${index + 1} 題</div>
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
        ? '好，現在可以把你的數位靈魂交給結果頁了。'
        : '沒有捷徑，題目請乖乖做完。世界已經夠亂了。';
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
    let modeKicker = '你的核心人格';
    let badge = `匹配度 ${bestNormal.similarity}% · 精準命中 ${bestNormal.exact}/15`;
    let sub = '這是根據十五個維度推算出，目前最接近你的結果。';
    let special = false;
    let secondaryType = null;

    if (drunkTriggered) {
        finalType = TYPE_LIBRARY.DRUNK;
        secondaryType = bestNormal;
        modeKicker = '隱藏人格已解鎖';
        badge = '匹配度 100% · 酒精已接手方向盤';
        sub = '你的喝酒設定直接覆蓋了原本的人格判定流程。';
        special = true;
    } else if (bestNormal.similarity < 60) {
        finalType = TYPE_LIBRARY.HHHH;
        modeKicker = '系統備援模式';
        badge = `一般人格庫最高只匹配到 ${bestNormal.similarity}%`;
        sub = '你的回答實在太偏，正常人格資料庫放棄理解你，直接派出 HHHH。';
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
              <div class="dim-item-score">${level} / ${result.rawScores[dim]} 分</div>
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
        posterImage.alt = `${type.code}（${type.name}）`;
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
    document.getElementById('resultTypeName').textContent = `${type.code}（${type.name}）`;
    document.getElementById('matchBadge').textContent = result.badge;
    document.getElementById('resultTypeSub').textContent = result.sub;
    document.getElementById('resultDesc').textContent = type.desc;
    document.getElementById('posterCaption').textContent = type.intro;
    document.getElementById('funNote').textContent = result.special
        ? '本測驗純屬娛樂。隱藏人格和異常人格本來就是故意加進來鬧的，請不要把它當成心理學、醫學、靈性啟示或人生判決。'
        : '本測驗純屬娛樂，請不要拿去做診斷、招募、交往、分手、算命或任何重大人生決定。';

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
