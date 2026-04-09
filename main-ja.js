const dimensionMeta = {
    S1: { name: 'S1 自己肯定感', model: '自己モデル' },
    S2: { name: 'S2 自己理解', model: '自己モデル' },
    S3: { name: 'S3 コア欲求', model: '自己モデル' },
    E1: { name: 'E1 愛着の安定感', model: '感情モデル' },
    E2: { name: 'E2 感情投入度', model: '感情モデル' },
    E3: { name: 'E3 境界線と依存', model: '感情モデル' },
    A1: { name: 'A1 世界の見え方', model: '態度モデル' },
    A2: { name: 'A2 ルールと自由度', model: '態度モデル' },
    A3: { name: 'A3 人生の意味感', model: '態度モデル' },
    Ac1: { name: 'Ac1 行動の原動力', model: '行動モデル' },
    Ac2: { name: 'Ac2 決断スタイル', model: '行動モデル' },
    Ac3: { name: 'Ac3 実行モード', model: '行動モデル' },
    So1: { name: 'So1 社交の積極性', model: '社交モデル' },
    So2: { name: 'So2 対人距離感', model: '社交モデル' },
    So3: { name: 'So3 表現と本音', model: '社交モデル' }
};

const questions = [
    {
        id: 'q1', dim: 'S1',
        text: '恋愛経験ほぼゼロ、自己肯定感は低め、SNS を見ては「みんな普通に生きててすご…」ってなってる。頭の中では青春ドラマが何シーズンも放送されてるのに、現実はずっとモブ。これ、ちょっと刺さる？',
        options: [
            { label: '刺さりすぎて笑えない', value: 1 },
            { label: 'うわ、重いな', value: 2 },
            { label: 'いや、それはさすがに私じゃない', value: 3 }
        ]
    },
    {
        id: 'q2', dim: 'S1',
        text: '周りの人たちのほうが、自分よりちゃんとして見えることが多い。',
        options: [
            { label: 'かなりある', value: 1 },
            { label: 'たまにある', value: 2 },
            { label: 'あまりない', value: 3 }
        ]
    },
    {
        id: 'q3', dim: 'S2',
        text: '自分がどんな人間か、わりとはっきり分かっている。',
        options: [
            { label: 'そう思わない', value: 1 },
            { label: 'どちらとも言えない', value: 2 },
            { label: 'そう思う', value: 3 }
        ]
    },
    {
        id: 'q4', dim: 'S2',
        text: '自分が本当に大事にしたいものは、ちゃんと分かっている。',
        options: [
            { label: 'そう思わない', value: 1 },
            { label: 'どちらとも言えない', value: 2 },
            { label: 'そう思う', value: 3 }
        ]
    },
    {
        id: 'q5', dim: 'S3',
        text: 'もっと強くなりたいし、ちゃんとレベルアップしていきたい。',
        options: [
            { label: 'そう思わない', value: 1 },
            { label: 'どちらとも言えない', value: 2 },
            { label: 'そう思う', value: 3 }
        ]
    },
    {
        id: 'q6', dim: 'S3',
        text: '他人の評価に人生を左右されたくない。',
        options: [
            { label: 'そう思わない', value: 1 },
            { label: 'どちらとも言えない', value: 2 },
            { label: 'そう思う', value: 3 }
        ]
    },
    {
        id: 'q7', dim: 'E1',
        text: '恋人から 5 時間返信がなくて、「お腹壊してた」と言われた。最初に浮かぶのは？',
        options: [
            { label: '5時間は長すぎる。何かごまかしてない？', value: 1 },
            { label: '信じたいけど、ちょっと疑う', value: 2 },
            { label: '本当にしんどかったのかも', value: 3 }
        ]
    },
    {
        id: 'q8', dim: 'E1',
        text: '恋愛では、見捨てられることをわりと怖がりやすい。',
        options: [
            { label: 'はい', value: 1 },
            { label: 'ときどき', value: 2 },
            { label: 'いいえ', value: 3 }
        ]
    },
    {
        id: 'q9', dim: 'E2',
        text: '私は恋愛に入ると、基本的には本気で向き合うタイプだ。',
        options: [
            { label: 'いや、そこまでではない', value: 1 },
            { label: 'たぶん…？', value: 2 },
            { label: 'かなりそう', value: 3 }
        ]
    },
    {
        id: 'q10', dim: 'E2',
        text: '相手がめちゃくちゃ優しくて、賢くて、面白くて、誠実で、しかも自分のことが大好きだったら？',
        options: [
            { label: 'それでも自分は深くハマりすぎないと思う', value: 1 },
            { label: 'その中間くらい', value: 2 },
            { label: '大事にしすぎて恋愛脳になるかも', value: 3 }
        ]
    },
    {
        id: 'q11', dim: 'E3',
        text: '付き合った相手がかなりベタベタしてくる。正直どう感じる？',
        options: [
            { label: 'むしろ好きかも', value: 1 },
            { label: '相手次第かな', value: 2 },
            { label: 'ちょっと距離ほしい…', value: 3 }
        ]
    },
    {
        id: 'q12', dim: 'E3',
        text: 'どんな関係でも、自分の時間と空間はかなり大事。',
        options: [
            { label: '近さや依存のほうが大事', value: 1 },
            { label: '相手による', value: 2 },
            { label: 'かなり大事', value: 3 }
        ]
    },
    {
        id: 'q13', dim: 'A1',
        text: '世の中の人は、なんだかんだで基本的に善良だと思う。',
        options: [
            { label: 'いや、それは楽観的すぎる', value: 1 },
            { label: 'まあ場合による', value: 2 },
            { label: 'そう思いたいし、わりとそう思う', value: 3 }
        ]
    },
    {
        id: 'q14', dim: 'A1',
        text: '道を歩いていたら、めちゃくちゃ可愛い子どもが急に近づいてきて、ペロペロキャンディーを渡してきた。どう思う？',
        options: [
            { label: 'え、かわいすぎる。世界まだ終わってない', value: 3 },
            { label: '状況が理解できない', value: 2 },
            { label: 'これ新手の詐欺とかじゃない？', value: 1 }
        ]
    },
    {
        id: 'q15', dim: 'A2',
        text: 'テスト前で補講に出ないとまずい日なのに、好きな人から「今夜 Apex やろ」と誘われた。どうする？',
        options: [
            { label: '行く。1日くらいなんとかなる', value: 1 },
            { label: 'どうにか理由つけて両立を考える', value: 2 },
            { label: '今は補講優先', value: 3 }
        ]
    },
    {
        id: 'q16', dim: 'A2',
        text: '型にはめられるのが苦手で、わりと自由にやりたい。',
        options: [
            { label: 'そう思う', value: 1 },
            { label: 'どちらとも言えない', value: 2 },
            { label: 'そう思わない', value: 3 }
        ]
    },
    {
        id: 'q17', dim: 'A3',
        text: '細かいことは揺れても、人生の方向感はなんとなくある。',
        options: [
            { label: 'そう思わない', value: 1 },
            { label: 'どちらとも言えない', value: 2 },
            { label: 'そう思う', value: 3 }
        ]
    },
    {
        id: 'q18', dim: 'A3',
        text: 'ふとした瞬間に「人生って結局、欲望と疲労と勢いで動いてるだけでは？」と思うことがある。',
        options: [
            { label: 'めちゃくちゃ分かる', value: 1 },
            { label: '日による', value: 2 },
            { label: 'そこまで悲観しない', value: 3 }
        ]
    },
    {
        id: 'q19', dim: 'Ac1',
        text: '私は、面倒やリスクを避けることより、成長や成果を取りに行くほうだ。',
        options: [
            { label: 'そう思わない', value: 1 },
            { label: 'どちらとも言えない', value: 2 },
            { label: 'そう思う', value: 3 }
        ]
    },
    {
        id: 'q20', dim: 'Ac1',
        text: 'トイレに 30 分こもっているのに何も起きない。もはや意地の勝負。自分はどれに近い？',
        options: [
            { label: 'もう少し待てばワンチャンある', value: 1 },
            { label: '自分に向かって意味不明な鼓舞を始める', value: 2 },
            { label: '現実的な手段でさっさと終わらせる', value: 3 }
        ]
    },
    {
        id: 'q21', dim: 'Ac2',
        text: '決断は比較的早いほうで、引きずるのは苦手。',
        options: [
            { label: 'そう思わない', value: 1 },
            { label: 'どちらとも言えない', value: 2 },
            { label: 'そう思う', value: 3 }
        ]
    },
    {
        id: 'q22', dim: 'Ac2',
        text: 'この設問に意味はありません。勘で選んでください。',
        options: [
            { label: 'なんか A な気がする', value: 1 },
            { label: 'じゃあ B で', value: 2 },
            { label: '困ったときの C', value: 3 }
        ]
    },
    {
        id: 'q23', dim: 'Ac3',
        text: '「実行力あるよね」と言われたとき、心の声はどれに近い？',
        options: [
            { label: '追い詰められたときだけ急に強い', value: 1 },
            { label: 'まあ、時と場合による', value: 2 },
            { label: 'いや、普通に前に進めたいだけ', value: 3 }
        ]
    },
    {
        id: 'q24', dim: 'Ac3',
        text: '私はよく計画を立てる。でもそのあと…',
        options: [
            { label: '現実が秒速で壊しにくる', value: 1 },
            { label: 'うまくいく時もあれば、そうでもない時もある', value: 2 },
            { label: '計画が崩れるとかなりイラつく', value: 3 }
        ]
    },
    {
        id: 'q25', dim: 'So1',
        text: 'VALORANT で仲良くなったフレンドにオフ会へ誘われた。最初の気持ちは？',
        options: [
            { label: 'ゲーム内と現実は別。ちょっと警戒する', value: 1 },
            { label: '雰囲気次第で考える', value: 2 },
            { label: '服も整えて、わりと前向きに行く', value: 3 }
        ]
    },
    {
        id: 'q26', dim: 'So1',
        text: '友達がさらに別の友達を連れてきた。そんなときの自分は？',
        options: [
            { label: '最初は少し距離を取る', value: 1 },
            { label: '雰囲気よければ普通に話せる', value: 2 },
            { label: '友達の友達はもう半分こっち側', value: 3 }
        ]
    },
    {
        id: 'q27', dim: 'So2',
        text: '人との距離感、ちょっと近づかれすぎると自動で警報が鳴るタイプだ。',
        options: [
            { label: 'そう思う', value: 3 },
            { label: 'どちらとも言えない', value: 2 },
            { label: 'そう思わない', value: 1 }
        ]
    },
    {
        id: 'q28', dim: 'So2',
        text: '信頼した相手とは、かなり近い距離感になりたい。',
        options: [
            { label: 'そう思う', value: 1 },
            { label: 'どちらとも言えない', value: 2 },
            { label: 'そう思わない', value: 3 }
        ]
    },
    {
        id: 'q29', dim: 'So3',
        text: '本当は否定的なことを考えていたのに、最後まで言わなかった。そういう時の理由として近いのは？',
        options: [
            { label: 'そもそもそういう場面は少ない', value: 1 },
            { label: '空気を悪くしたくない', value: 2 },
            { label: '自分の黒い部分を見せたくない', value: 3 }
        ]
    },
    {
        id: 'q30', dim: 'So3',
        text: '相手によって見せる自分の面はかなり変わる。',
        options: [
            { label: 'そう思わない', value: 1 },
            { label: 'どちらとも言えない', value: 2 },
            { label: 'そう思う', value: 3 }
        ]
    }
];

const specialQuestions = [
    {
        id: 'drink_gate_q1',
        special: true,
        kind: 'drink_gate',
        text: '普段の自分にいちばん近いのは？',
        options: [
            { label: '食べて寝て生き延びる', value: 1 },
            { label: 'アート系の趣味', value: 2 },
            { label: 'お酒', value: 3 },
            { label: '筋トレ・運動', value: 4 }
        ]
    },
    {
        id: 'drink_gate_q2',
        special: true,
        kind: 'drink_trigger',
        text: 'お酒との距離感、正直どっち？',
        options: [
            { label: 'ほどほどに楽しむ派', value: 1 },
            { label: '酒がメンタルの外付けハードウェアになってる', value: 2 }
        ]
    }
];

const TYPE_LIBRARY = {
    CTRL: { code: 'CTRL', name: '仕切り屋', intro: 'はい、あなた保存ボタン持ってます。', desc: '場が崩れそうになると、なぜかあなたが処理班になります。ルールも計画も、あなたの前では「一旦編集可能ファイル」みたいな扱い。派手ではないのに、気づけば全部整っている。そういう怖さがあります。' },
    'ATM-er': { code: 'ATM-er', name: '払いがち人間', intro: 'え、私そんなに余裕ありそう？', desc: 'お金そのものではなくても、時間、気力、気遣い、最後の正気など、何かしらをずっと支払っている人です。頼られやすく、断れず、気づいたら全体を回している。優しさに耐久値を持たせるべきタイプ。' },
    'Dior-s': { code: 'Dior-s', name: '地下哲学者', intro: 'この停滞、思想です。', desc: 'やる気がないのではなく、現代社会の売り文句をあまり信用していないだけです。自己啓発、消費、成功の物語を見たうえで、「それ、別に幸せ確定じゃなくない？」と静かに見切っているタイプ。' },
    BOSS: { code: 'BOSS', name: '運転席の人', intro: 'ハンドルこっちにください。', desc: '責任感、推進力、判断力。全部そこそこ強めです。何かがグダつくと、話し合いより先に「じゃあ私がやる」で回収しがち。人を従わせるというより、結果的に周囲がついてきます。' },
    'THAN-K': { code: 'THAN-K', name: '感謝エンジン', intro: 'この渋滞にも意味がある。たぶん。', desc: '普通の人がイラつく場面でも、なぜか心の酸素を作れるタイプ。前向きというより、精神の回復力が妙に高い。しかもそれを他人にも分けられるので、近くにいると地味に救われます。' },
    'OH-NO': { code: 'OH-NO', name: 'やばい予報士', intro: 'え、待って、これ嫌な予感しかしない。', desc: '一見小さな違和感から、最悪の展開まで数手先を読むタイプ。コップが机の端にあるだけで、こぼれる、壊れる、詰む、まで見えています。神経質とも言えるし、有能とも言える。実際どっちもです。' },
    GOGO: { code: 'GOGO', name: '突進型', intro: 'はい、じゃあ行きます。', desc: '考える前に動く、ではなく、動きながら考えるタイプ。タスクが残っている状態を精神が嫌います。止まっている時間がいちばん苦手なので、とにかく前進によって世界を処理しようとします。' },
    SEXY: { code: 'SEXY', name: '雰囲気つよつよ人間', intro: '存在だけで絵になるの、ちょっと反則です。', desc: '頑張って注目を集めるというより、普通にそこにいるだけで画面映えするタイプ。人から見られやすく、印象に残りやすく、たまに周囲の挙動がおかしくなる。存在がコンテンツ。' },
    'LOVE-R': { code: 'LOVE-R', name: '恋愛大河ドラマ', intro: '感情の容量が明らかに多い。', desc: '軽い好意を軽いまま終わらせるのが苦手です。小さな出来事も意味を帯びやすく、感情が物語になりやすい。ロマンと余韻と想像力が豊かすぎて、自分の心が自分をしんどくすることもあります。' },
    MUM: { code: 'MUM', name: '保護者みたいな人', intro: '水いる？ 話聞く？ 両方いく？', desc: '人の空気や感情の変化を察するのが早く、気づくと世話役に回っています。安心感があるので、周りが甘えやすい。ただし、その優しさを自分に向ける量だけは毎回ちょっと足りません。' },
    FAKE: { code: 'FAKE', name: '擬態の達人', intro: '場面ごとに人格の衣装チェンジ。', desc: '環境適応が速すぎて、人によって印象がかなり変わります。親しい相手、職場、恋愛、初対面、全部モードが違う。嘘っぽいというより、その場に必要な自分を瞬時に選べる人です。' },
    OJBK: { code: 'OJBK', name: 'なんでもいい帝王', intro: '「どっちでもいい」は本気です。', desc: 'ごはん何食べる？ どこ座る？ 何時にする？ そういった人類が延々悩んでいることに、あまり熱量を持ちません。無関心というより、細部にエネルギーを割く気がないだけ。妙な王者感があります。' },
    MALO: { code: 'MALO', name: 'やんちゃ残存種', intro: '文明がこちらに追いついてないだけ。', desc: '秩序や常識に対して、必要以上に敬意を払わないタイプ。ふざけ心と反射神経で生きていて、退屈を強く嫌います。ちゃんとしている空間ほど、ちょっと壊したくなる衝動がある。' },
    'JOKE-R': { code: 'JOKE-R', name: '哀しきムードメーカー', intro: 'ネタにしてるうちはまだ大丈夫。', desc: '場を回す、笑いを取る、空気を軽くする。それが上手い人です。ただし、笑わせている本人がいちばん色々抱えているパターンも多い。冗談が防具になっているタイプ。' },
    'WOC!': { code: 'WOC!', name: 'うわっ人間', intro: 'え、なんでこれなの？ マジで？', desc: '外では大げさに反応するのに、内心はわりと冷静。驚いているようで、実は筋は見えている。ツッコミと観察眼が同時に走るので、混乱しているように見えて結構まともです。' },
    'THIN-K': { code: 'THIN-K', name: '考えすぎ職人', intro: 'ただいま脳内会議が長引いております。', desc: '情報を受け取るというより、監査しているタイプ。論点、前提、偏り、構造、発信者の温度感までつい見てしまう。ぼーっとしているようで、脳内では常に検品作業が進んでいます。' },
    SHIT: { code: 'SHIT', name: '文句は言うが有能', intro: '全部クソ。でも結局やるのは私。', desc: '口では世界や案件に悪態をつきながら、最後は自分がいちばん綺麗に片づけているタイプ。機嫌は悪いのに仕事はできる。終末論者みたいな顔で現場を回す、謎の頼もしさがあります。' },
    ZZZZ: { code: 'ZZZZ', name: '省エネ覚醒型', intro: '寝てただけです。死んでません。', desc: '普段は既読も締切も流せるのに、本当に最後の最後だけ異常な集中力を出します。先延ばし体質と土壇場の火力が危険な共存をしているタイプ。扱いづらいけど結果は出しがち。' },
    POOR: { code: 'POOR', name: '一点集中レーザー', intro: 'リソース不足じゃなくて、圧縮してるだけ。', desc: 'いろんなことに広く手を出さず、本当に大事な一点にだけ熱量を集めます。周りからは余裕がなさそうに見えるけど、実際は集中しすぎているだけ。刺さる対象にはめちゃくちゃ強い。' },
    MONK: { code: 'MONK', name: '境界線の僧', intro: '俗世との距離はこれくらいでお願いします。', desc: 'ひとり時間と自分の領域をかなり大切にするタイプ。冷たいのではなく、静けさが必要なだけ。距離感があるからこそ関係が保てる、という考え方に近いです。' },
    IMSB: { code: 'IMSB', name: '脳内大炎上', intro: 'え、私ってそんなに詰んでる？', desc: '心の中に「行け！」と「やめとけ！」の二大勢力が常駐しています。好きな人、チャンス、発言タイミング。全部に対して脳内会議が長すぎる。別にダメ人間ではないけど、内面の上映時間が長い。' },
    SOLO: { code: 'SOLO', name: 'ハリネズミ系', intro: 'なんでこんなに見抜かれてるの？', desc: '傷つきやすさを見せないために、先に距離を取ったり、少し固く振る舞ったりしやすいタイプ。本当は人が嫌いというより、近づきすぎると痛い目を見る気がしているだけです。' },
    FUCK: { code: 'FUCK', name: '野生強め', intro: 'いや何この結果。攻めすぎでしょ。', desc: '欲望、衝動、テンション、生命力。全部強め。社会のルールを絶対だとは思っていないし、感情のスイッチもかなり物理的。「行くか、無理か」がはっきりしていて、妙に野性的な魅力があります。' },
    DEAD: { code: 'DEAD', name: '悟りかけオフライン勢', intro: '私、まだログインしてる？', desc: '刺激や欲望に対して少し距離があり、世の中の盛り上がりを外から見ている感覚が強めです。無気力というより、色々見たあとに温度が下がった感じ。静かだけど、わりと深いところまで見ています。' },
    IMFW: { code: 'IMFW', name: 'やわらか被弾体質', intro: '待って、私そんなに傷つきやすい？', desc: '信じるのが早く、感情が入るのも早いタイプ。弱いというより、ちゃんと反応してしまうだけ。雑に扱われるとしっかりダメージを受ける、繊細で真面目な人です。' },
    HHHH: { code: 'HHHH', name: 'システム破壊枠', intro: 'ははは…え、何これ。', desc: 'おめでとうございます。あなたは標準人格ライブラリを壊しました。答え方が独特すぎて、通常の枠組みでは処理不能。恐れられ、尊敬され、説明はできない。そんな特別枠です。' },
    DRUNK: { code: 'DRUNK', name: '酒クズ人格', intro: '隠し人格、開放されました。', desc: 'これは酒の気配が濃すぎる人だけが踏み抜く隠しルートです。通常の理性や整合性はアルコールで上書きされました。テンションと判断ミスと謎の自信が混ざり合っています。水を飲んでください。' }
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
    S1: { L: '自分に対して、他人以上に厳しめです。', M: '自信はその日の空気やコンディションに左右されやすいです。', H: '自分の価値をそこそこ把握していて、簡単には崩れません。' },
    S2: { L: '自分の輪郭が少しぼやけやすいタイプです。', M: '普段は分かっていても、気分で見失うことがあります。', H: '自分の癖、欲求、限界をかなり把握しています。' },
    S3: { L: '上を目指すより、安心や快適さを優先しやすいです。', M: '頑張りたい気持ちと休みたい気持ちが常に会議中です。', H: '目標や成長欲に背中を押されやすいです。' },
    E1: { L: '関係の警報装置がかなり敏感です。', M: '信じたい気持ちと疑う気持ちが半々くらいです。', H: '多少の揺れでは関係そのものをすぐ疑いません。' },
    E2: { L: '感情投資は慎重派です。扉は閉まっていないけど重いです。', M: '入る時は入るけど、逃げ道も少し残します。', H: '好きになるとかなり本気で入っていきます。' },
    E3: { L: '関係の温度感や密着感を大事にしやすいです。', M: '近さも距離も、その時々で調整したいタイプです。', H: 'どれだけ仲良くても自分の領域は必要です。' },
    A1: { L: '世界を見るとき、まず警戒が先に来やすいです。', M: '楽観もしすぎず、疑いすぎもしない観察型です。', H: '人や世界に対して善意の余白を残せる人です。' },
    A2: { L: '自由や楽さのためならルールを曲げやすいです。', M: '守るときは守るし、崩すときは崩します。', H: '秩序や手順があるほうが落ち着きます。' },
    A3: { L: '人生の意味が少し薄く感じやすいです。', M: '目的がある日もあれば、完全に電源オフの日もあります。', H: '自分がどこへ向かいたいかを感じやすいです。' },
    Ac1: { L: '成果より先に「やらかさない」が起動しやすいです。', M: '勝ちたい日と、平穏がほしい日が混在しています。', H: '前進、成長、達成感に火がつきやすいです。' },
    Ac2: { L: '決める前に脳内タブが増えすぎる傾向があります。', M: 'ちゃんと考えるけど、完全フリーズまではいきません。', H: '決めたら早くて、引きずるのが苦手です。' },
    Ac3: { L: '締切と実行力が危険な共依存をしています。', M: 'できる時はできる、できない時はできないです。', H: '物事が止まっていると内心かなり気になります。' },
    So1: { L: '社交は少し助走が必要です。', M: '来るものは受けるけど、自分から押し込むことは少なめです。', H: '自分から場を開きにいくことにそこまで抵抗がありません。' },
    So2: { L: '信頼した相手とはかなり近い距離感を求めやすいです。', M: '近づきたい気持ちと、少し離れたい気持ちが共存しています。', H: '対人境界線が比較的しっかりしています。' },
    So3: { L: '本音が比較的そのまま表に出やすいです。', M: '本音と空気のバランスを見ながら話します。', H: '相手や場によって出す自分をかなり切り替えています。' }
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
        console.warn('日本語版の画像読み込みに失敗しました。', error);
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
    if (q.special) return '追加質問';
    return app.previewMode ? dimensionMeta[q.dim].name : '次元は非表示';
}

function renderQuestions() {
    const visibleQuestions = getVisibleQuestions();
    questionList.innerHTML = '';

    visibleQuestions.forEach((q, index) => {
        const card = document.createElement('article');
        card.className = 'question';
        card.innerHTML = `
          <div class="question-meta">
            <div class="badge">第 ${index + 1} 問</div>
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
        ? '全部回答済みです。そろそろ電子の魂を結果画面に提出してください。'
        : '全部答えないと帰れません。せめて最後までやってください。';
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
    let modeKicker = 'あなたのメインタイプ';
    let badge = `一致度 ${bestNormal.similarity}% ・ 15次元中 ${bestNormal.exact} 個がほぼ一致`;
    let sub = '15 次元の結果から見ると、現時点でいちばん近い性格像です。';
    let special = false;
    let secondaryType = null;

    if (drunkTriggered) {
        finalType = TYPE_LIBRARY.DRUNK;
        secondaryType = bestNormal;
        modeKicker = '隠し人格が発動しました';
        badge = '一致度 100% ・ アルコールが完全に主導権を握っています';
        sub = 'お酒の気配が強すぎて、通常の人格判定が上書きされました。';
        special = true;
    } else if (bestNormal.similarity < 60) {
        finalType = TYPE_LIBRARY.HHHH;
        modeKicker = 'システムによる強制補完';
        badge = `通常人格ライブラリの最高一致度は ${bestNormal.similarity}% でした`;
        sub = 'あなたの思考回路に通常ライブラリが対応できず、HHHH に強制割り当てされました。';
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
              <div class="dim-item-score">${level} / ${result.rawScores[dim]} 点</div>
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
        ? 'この診断は完全にネタです。隠し人格や補完人格も演出として入っています。心理学、医学、スピリチュアル、人生判断の根拠にはしないでください。'
        : 'この診断は完全にお遊びです。診断、採用、恋愛、別れ、人生の重大決定には使わないでください。笑って流すのが正解です。';

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
