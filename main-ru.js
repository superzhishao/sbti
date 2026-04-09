const dimensionMeta = {
    S1: { name: 'S1 Самооценка', model: 'Модель себя' },
    S2: { name: 'S2 Понимание себя', model: 'Модель себя' },
    S3: { name: 'S3 Внутренний драйв', model: 'Модель себя' },
    E1: { name: 'E1 Надежность привязанности', model: 'Эмоциональная модель' },
    E2: { name: 'E2 Глубина чувств', model: 'Эмоциональная модель' },
    E3: { name: 'E3 Границы и зависимость', model: 'Эмоциональная модель' },
    A1: { name: 'A1 Взгляд на мир', model: 'Модель отношения' },
    A2: { name: 'A2 Правила против свободы', model: 'Модель отношения' },
    A3: { name: 'A3 Чувство смысла', model: 'Модель отношения' },
    Ac1: { name: 'Ac1 Тип мотивации', model: 'Модель действия' },
    Ac2: { name: 'Ac2 Стиль решений', model: 'Модель действия' },
    Ac3: { name: 'Ac3 Режим выполнения', model: 'Модель действия' },
    So1: { name: 'So1 Социальная инициатива', model: 'Социальная модель' },
    So2: { name: 'So2 Личные границы', model: 'Социальная модель' },
    So3: { name: 'So3 Самовыражение и маски', model: 'Социальная модель' }
};

const questions = [
    {
        id: 'q1', dim: 'S1',
        text: 'Я не просто одинокий человек. Я тревожный NPC с низкой самооценкой, фантазиями на максимум и романтическим опытом примерно на уровне пустого слота сохранения. Нормальных отношений у меня толком не было, юность местами ощущается как длинный монтаж из чужой красивой жизни и моей внутренней драмы. Если честно: это сейчас слишком больно попало или еще терпимо?',
        options: [
            { label: 'Слишком жизненно', value: 1 },
            { label: 'Жестко, но ладно', value: 2 },
            { label: 'Нет, это вообще не про меня', value: 3 }
        ]
    },
    {
        id: 'q2', dim: 'S1',
        text: 'Мне часто кажется, что люди вокруг объективно круче и убедительнее меня.',
        options: [
            { label: 'Да, часто', value: 1 },
            { label: 'Иногда бывает', value: 2 },
            { label: 'Нет, не особо', value: 3 }
        ]
    },
    {
        id: 'q3', dim: 'S2',
        text: 'Я довольно ясно понимаю, какой я человек на самом деле.',
        options: [
            { label: 'Не согласен', value: 1 },
            { label: 'Нейтрально', value: 2 },
            { label: 'Согласен', value: 3 }
        ]
    },
    {
        id: 'q4', dim: 'S2',
        text: 'Где-то внутри я хорошо знаю, что для меня по-настоящему важно.',
        options: [
            { label: 'Не согласен', value: 1 },
            { label: 'Нейтрально', value: 2 },
            { label: 'Согласен', value: 3 }
        ]
    },
    {
        id: 'q5', dim: 'S3',
        text: 'Мне правда хочется расти и становиться сильнее, а не просто как-то доползать до следующей недели.',
        options: [
            { label: 'Не согласен', value: 1 },
            { label: 'Нейтрально', value: 2 },
            { label: 'Согласен', value: 3 }
        ]
    },
    {
        id: 'q6', dim: 'S3',
        text: 'Чужое мнение не управляет моей жизнью так уж сильно.',
        options: [
            { label: 'Не согласен', value: 1 },
            { label: 'Нейтрально', value: 2 },
            { label: 'Согласен', value: 3 }
        ]
    },
    {
        id: 'q7', dim: 'E1',
        text: 'Твой партнер не отвечает уже 5 часов, а потом пишет, что отравился. Какая первая мысль?',
        options: [
            { label: 'Пять часов? Что-то легенда не сходится', value: 1 },
            { label: 'Я зависну между доверием и подозрением', value: 2 },
            { label: 'Может, человеку и правда было очень плохо', value: 3 }
        ]
    },
    {
        id: 'q8', dim: 'E1',
        text: 'В отношениях я часто боюсь, что меня бросят или резко охладеют.',
        options: [
            { label: 'Да', value: 1 },
            { label: 'Иногда', value: 2 },
            { label: 'Нет', value: 3 }
        ]
    },
    {
        id: 'q9', dim: 'E2',
        text: 'Когда я говорю, что отношусь к любви серьезно, я реально это имею в виду.',
        options: [
            { label: 'Если честно, не всегда', value: 1 },
            { label: 'Скорее наполовину', value: 2 },
            { label: 'Да, абсолютно', value: 3 }
        ]
    },
    {
        id: 'q10', dim: 'E2',
        text: 'Представь: человек одновременно добрый, умный, смешной, красивый, надежный, зрелый и почему-то в восторге именно от тебя. Что дальше?',
        options: [
            { label: 'Даже так я не дал бы себе раскрыться до конца', value: 1 },
            { label: 'Где-то посередине бы остался', value: 2 },
            { label: 'Улетел бы в полную влюбленную катастрофу', value: 3 }
        ]
    },
    {
        id: 'q11', dim: 'E3',
        text: 'Ты начинаешь встречаться с человеком, а он быстро становится очень прилипчивым. Твоя честная реакция?',
        options: [
            { label: 'Если честно, в этом даже есть кайф', value: 1 },
            { label: 'Смотря какой человек и какой вайб', value: 2 },
            { label: 'Дайте воздуха, я сейчас испарюсь', value: 3 }
        ]
    },
    {
        id: 'q12', dim: 'E3',
        text: 'Личное пространство для меня важно почти в любых отношениях.',
        options: [
            { label: 'Мне ближе близость и взаимная зависимость', value: 1 },
            { label: 'Зависит от ситуации', value: 2 },
            { label: 'Да, это вообще не обсуждается', value: 3 }
        ]
    },
    {
        id: 'q13', dim: 'A1',
        text: 'Большинство людей в целом скорее нормальные и не хотят тебе зла.',
        options: [
            { label: 'Слишком наивно звучит', value: 1 },
            { label: 'Может быть', value: 2 },
            { label: 'Да, я в это пока верю', value: 3 }
        ]
    },
    {
        id: 'q14', dim: 'A1',
        text: 'Ты идешь по улице, к тебе подбегает очень милый ребенок и молча дарит леденец. Ни подвоха, ни родителей рядом, просто концентрированная милота. Что ты подумаешь?',
        options: [
            { label: 'Господи, это самое милое за всю неделю', value: 3 },
            { label: 'Я бы очень завис от происходящего', value: 2 },
            { label: 'Это начало схемы развода или соцэксперимента', value: 1 }
        ]
    },
    {
        id: 'q15', dim: 'A2',
        text: 'Идет зачетная неделя, тебя ждут на обязательной подготовке, а краш зовет вечером катнуть в CS2. Что выберешь?',
        options: [
            { label: 'Пойду играть, один вечер ничего не решит', value: 1 },
            { label: 'Попробую придумать отмазку и усидеть на двух стульях', value: 2 },
            { label: 'Нет, сейчас учеба важнее', value: 3 }
        ]
    },
    {
        id: 'q16', dim: 'A2',
        text: 'Я люблю ломать рутину и терпеть не могу, когда меня слишком жестко загоняют в рамки.',
        options: [
            { label: 'Согласен', value: 1 },
            { label: 'Нейтрально', value: 2 },
            { label: 'Не согласен', value: 3 }
        ]
    },
    {
        id: 'q17', dim: 'A3',
        text: 'У меня обычно есть хотя бы общее ощущение, куда я иду по жизни, даже если детали разваливаются.',
        options: [
            { label: 'Не согласен', value: 1 },
            { label: 'Нейтрально', value: 2 },
            { label: 'Согласен', value: 3 }
        ]
    },
    {
        id: 'q18', dim: 'A3',
        text: 'Иногда я смотрю на жизнь и думаю: это же просто гормоны, усталость, аппетит и хаос, которые зачем-то притворяются смыслом.',
        options: [
            { label: 'Именно так', value: 1 },
            { label: 'Зависит от дня', value: 2 },
            { label: 'Нет, это уже слишком мрачно', value: 3 }
        ]
    },
    {
        id: 'q19', dim: 'Ac1',
        text: 'Меня чаще двигает вперед желание вырасти и победить, чем желание просто избежать проблем и напряжения.',
        options: [
            { label: 'Не согласен', value: 1 },
            { label: 'Нейтрально', value: 2 },
            { label: 'Согласен', value: 3 }
        ]
    },
    {
        id: 'q20', dim: 'Ac1',
        text: 'Ты сидишь в туалете уже 30 минут, ничего не происходит, и теперь это уже чистая битва характеров. Какая ты версия?',
        options: [
            { label: 'Сижу дальше, вдруг судьба просто тянет драму', value: 1 },
            { label: 'Провожу себе психованную мотивационную речь', value: 2 },
            { label: 'Выбираю практичное решение и иду жить дальше', value: 3 }
        ]
    },
    {
        id: 'q21', dim: 'Ac2',
        text: 'Я обычно довольно быстро принимаю решения и не люблю растягивать все до бесконечности.',
        options: [
            { label: 'Не согласен', value: 1 },
            { label: 'Нейтрально', value: 2 },
            { label: 'Согласен', value: 3 }
        ]
    },
    {
        id: 'q22', dim: 'Ac2',
        text: 'Вопроса тут нет. Просто выбери вариант вслепую и смирись со своей судьбой.',
        options: [
            { label: 'Пусть будет A, выглядит подозрительно верно', value: 1 },
            { label: 'Ладно, беру B', value: 2 },
            { label: 'Если сомневаюсь, значит C', value: 3 }
        ]
    },
    {
        id: 'q23', dim: 'Ac3',
        text: 'Когда тебе говорят, что у тебя мощная исполнительность, какой внутренний ответ ближе?',
        options: [
            { label: 'Только если паника и дедлайн объединились против меня', value: 1 },
            { label: 'Ну иногда да', value: 2 },
            { label: 'Да, дела должны двигаться вперед', value: 3 }
        ]
    },
    {
        id: 'q24', dim: 'Ac3',
        text: 'Я обычно строю планы, а потом...',
        options: [
            { label: 'Реальность влетает в них с ноги', value: 1 },
            { label: 'Что-то срабатывает, что-то нет', value: 2 },
            { label: 'Меня бесит, когда план разваливают', value: 3 }
        ]
    },
    {
        id: 'q25', dim: 'So1',
        text: 'Ты подружился с людьми через Dota 2, и теперь они зовут встретиться вживую. Какая первая реакция?',
        options: [
            { label: 'Онлайн одно, а офлайн уже совсем другой уровень риска', value: 1 },
            { label: 'Может быть норм, надо смотреть по вайбу', value: 2 },
            { label: 'Так, я уже выбираю, что надеть. Вдруг это легендарный выход', value: 3 }
        ]
    },
    {
        id: 'q26', dim: 'So1',
        text: 'Друг приводит с собой еще одного знакомого на тусовку. Какая версия тебя включается?',
        options: [
            { label: 'Я автоматически держу дистанцию', value: 1 },
            { label: 'Если атмосфера ок, то и я ок', value: 2 },
            { label: 'Друг моего друга почти сразу проходит в мой состав', value: 3 }
        ]
    },
    {
        id: 'q27', dim: 'So2',
        text: 'Я человек-электрозабор. Если ко мне подойти слишком близко, внутренняя сигнализация сразу орет.',
        options: [
            { label: 'Согласен', value: 3 },
            { label: 'Нейтрально', value: 2 },
            { label: 'Не согласен', value: 1 }
        ]
    },
    {
        id: 'q28', dim: 'So2',
        text: 'С людьми, которым я правда доверяю, мне хочется очень близкой, почти семейной степени контакта.',
        options: [
            { label: 'Согласен', value: 1 },
            { label: 'Нейтрально', value: 2 },
            { label: 'Не согласен', value: 3 }
        ]
    },
    {
        id: 'q29', dim: 'So3',
        text: 'Бывает, что у тебя явно негативное мнение, но ты держишь его при себе. Почему чаще всего?',
        options: [
            { label: 'Редко такое бывает, я и так высказываюсь', value: 1 },
            { label: 'Не хочу делать всем неловко', value: 2 },
            { label: 'Лучше не показывать, насколько у меня там темно внутри', value: 3 }
        ]
    },
    {
        id: 'q30', dim: 'So3',
        text: 'Я показываю разные версии себя разным людям.',
        options: [
            { label: 'Не согласен', value: 1 },
            { label: 'Нейтрально', value: 2 },
            { label: 'Согласен', value: 3 }
        ]
    }
];

const specialQuestions = [
    {
        id: 'drink_gate_q1',
        special: true,
        kind: 'drink_gate',
        text: 'Что из этого больше всего похоже на твой обычный режим?',
        options: [
            { label: 'Есть, спать, выживать', value: 1 },
            { label: 'Творческие штуки и хобби', value: 2 },
            { label: 'Выпивать', value: 3 },
            { label: 'Спорт и зал', value: 4 }
        ]
    },
    {
        id: 'drink_gate_q2',
        special: true,
        kind: 'drink_trigger',
        text: 'Если честно, какие у тебя отношения с алкоголем?',
        options: [
            { label: 'Нормально. Могу выпить, но знаю меру', value: 1 },
            { label: 'Алкоголь временами работает как эмоциональный костыль', value: 2 }
        ]
    }
];

const TYPE_LIBRARY = {
    CTRL: { code: 'CTRL', name: 'Решала', intro: 'Да, похоже, сейвфайл действительно у тебя.', desc: 'Ты тот человек, которому звонят, когда жизнь начинает лагать. Для тебя правила скорее рекомендации, планы редактируются на ходу, а хаос почему-то становится управляемым, если ты в него влезаешь. Ты не обязательно самый шумный, зато пугающе эффективный.' },
    'ATM-er': { code: 'ATM-er', name: 'Спонсор', intro: 'А у меня точно лицо человека с безлимитной картой?', desc: 'Возможно, ты не буквально банкомат, но именно ты почему-то платишь в любой валюте: деньгами, временем, нервами, терпением, эмоциональной емкостью и остатками батарейки. На тебе часто держится стабильность, даже когда ты сам уже на нуле.' },
    'Dior-s': { code: 'Dior-s', name: 'Подвальный философ', intro: 'Мой период провала вообще-то мировоззрение.', desc: 'Ты не ленивый, ты просто идеологически не купил маркетинг современной жизни. Ты посмотрел на культ продуктивности, гонку за статусом и бесконечное достигаторство и где-то внутри решил, что это тюрьма, только с более красивым интерфейсом.' },
    BOSS: { code: 'BOSS', name: 'Рулевой', intro: 'Дай сюда руль, я разберусь.', desc: 'От тебя фонит управленческой энергией даже тогда, когда ты вроде просто стоишь. Тебе нравится вектор, движение и ощущение, что кто-то вообще держит курс. Если все начинает плыть, ты не склонен бесконечно обсуждать. Ты склонен брать управление на себя.' },
    'THAN-K': { code: 'THAN-K', name: 'Благодарочка', intro: 'Хочу поблагодарить академию, курьера и этот затор на дороге.', desc: 'Ты способен найти светлую сторону в ситуациях, где другие уже мысленно кидают тапок в стену. Кто-то назовет это оптимизмом, кто-то заподозрит странности. Но факт в том, что ты умеешь добывать эмоциональный кислород даже из спертых обстоятельств.' },
    'OH-NO': { code: 'OH-NO', name: 'Тревожник', intro: 'О нет. Почему это так точно?', desc: 'Ты отдел управления рисками в человеческом теле. Одна неловко поставленная кружка, и ты уже мысленно просчитал залитый ноутбук, короткое замыкание, спор с техподдержкой и потерю данных. Раздражает? Иногда. Полезно? Очень.' },
    GOGO: { code: 'GOGO', name: 'Таран', intro: 'Так. Погнали дальше.', desc: 'Ты веришь в инерцию почти как другие в религию. Ты не любишь бесконечно жевать вайб и обсуждать, что все чувствуют по поводу задачи. Тебе проще встать, двинуть и продавить ситуацию в следующую фазу, пока остальные еще собирают мысли.' },
    SEXY: { code: 'SEXY', name: 'Главный персонаж', intro: 'К сожалению для всех остальных, твоя аура зашла в комнату раньше тебя.', desc: 'Ты притягиваешь внимание так, будто это не усилие, а погодное явление. Люди замечают тебя, додумывают за тебя сюжет и иногда странно зависают в твоем присутствии. Тебе даже не обязательно что-то играть. Часто достаточно просто существовать.' },
    'LOVE-R': { code: 'LOVE-R', name: 'Безнадежный романтик', intro: 'Твоя эмоциональная пропускная способность подозрительно огромная.', desc: 'Ты явно создан не для casual режима. Ты создан для тоски, символизма, проекций, драматичных плейлистов и внутренней эпопеи на тему одного взгляда. У тебя даже падающий лист может стать знаком судьбы, а симпатия легко превращается в отдельную цивилизацию.' },
    MUM: { code: 'MUM', name: 'Утешающий родитель', intro: 'Тебе воды, плед или подтверждение, что ты молодец?', desc: 'От тебя идет нервной системе очень теплый сигнал. Рядом с тобой людям безопаснее, потому что ты быстро считываешь эмоциональную погоду и часто инстинктивно переходишь в режим заботы. Минус в том, что к себе ты обычно мягче не становишься.' },
    FAKE: { code: 'FAKE', name: 'Оборотень', intro: 'Слоев тут подозрительно много.', desc: 'Ты настолько хорошо адаптируешься к контексту, что это местами даже тревожно. Режим для друзей, режим для работы, режим обаятельного человека, режим эмоционального айсберга, все это ты переключаешь быстро и чисто. Некоторые считают это фальшью. Чаще это просто сверхчувствительность к комнате.' },
    OJBK: { code: 'OJBK', name: 'Император без разницы', intro: 'Я сказал ладно, и я правда это имел в виду.', desc: 'Ты проходишь через жизнь с эмоциональной вовлеченностью человека, который устал рассматривать споры крестьян о гарнире. Рис или картошка, внутри или у окна, так или эдак, твой ответ часто звучит как элегантная версия фразы мне все равно.' },
    MALO: { code: 'MALO', name: 'Хаосенок', intro: 'Цивилизация явно была придумана не под твой темперамент.', desc: 'Часть тебя так и не слезла с ветки. Ты игривый, плохо приручаемый и подозрительно настороженный ко всему слишком прилизанному и серьезному. Если жизнь ощущается как плохо продуманная игра, твой первый импульс не читать правила, а залезть на декорации.' },
    'JOKE-R': { code: 'JOKE-R', name: 'Грустный клоун', intro: 'Выяснилось, что шутка была механизмом самозащиты.', desc: 'Ты смешной примерно так же, как красива гроза: эффектно, громко и местами тревожно. Ты оживляешь комнаты юмором и таймингом, но комедия у тебя часто работает как броня. Если все смеются достаточно громко, никто не полезет смотреть, что у тебя под этим.' },
    'WOC!': { code: 'WOC!', name: 'Да вы что человек', intro: 'Подожди, как я вообще это выбил?', desc: 'Ты реагируешь шумно, а думаешь очень четко. Снаружи у тебя возгласы, хаос и фирменное ничего себе. Внутри отличное чувство паттернов и моментальное распознавание ерунды. Когда что-то выглядит как бред, ты обычно выражаешь это одним очень искренним звуком.' },
    'THIN-K': { code: 'THIN-K', name: 'Перемысливатель', intro: 'Подождите. Анализ еще грузится.', desc: 'Твой мозг не скроллит, он проводит аудит. Ты не просто потребляешь информацию, ты проверяешь мотивы, логику, структуру, скрытые допущения и моральное право автора вообще это писать. Для тебя мысль это не хобби. Это прошивка.' },
    SHIT: { code: 'SHIT', name: 'Злой компетентный', intro: 'Все ужасно. Я все равно это починю.', desc: 'Ты ворчишь так, будто мир лично тебя оскорбил, а потом разворачиваешься и разгребаешь бардак лучше всех. По тону ты апокалипсис, по действиям проектный менеджер с нерешенной яростью. Почему-то именно на тебе многое и доезжает до результата.' },
    ZZZZ: { code: 'ZZZZ', name: 'Король отключки', intro: 'Я не умер. Я в режиме энергосбережения.', desc: 'Ты можешь проигнорировать девяносто девять уведомлений, три дедлайна и небольшой социальный пожар, но в момент последней тревоги внезапно восстаешь из мертвых и выдаешь что-то подозрительно приличное. Отношения с срочностью у тебя токсичные, но почему-то рабочие.' },
    POOR: { code: 'POOR', name: 'Лазер', intro: 'Я не в дефиците. Я просто сконцентрирован.', desc: 'Со стороны может казаться, что у тебя мало ресурса, но на деле ты просто отказываешься распыляться. Пока другие тратят силы на сто мелких вещей, ты сжимаешь внимание в один луч и прожигаешь то, что важно. Издалека это выглядит как бедность. Вблизи это фокус.' },
    MONK: { code: 'MONK', name: 'Монах границ', intro: 'Нет, мирские потребности мне сейчас не нужны.', desc: 'Ты относишься к личному пространству почти как к святыне. Одиночество для тебя не поломка, а обслуживание системы, ясность, покой, а иногда и выживание. Ты способен любить глубоко и при этом не хотеть никого в своей психической гостиной двадцать четыре на семь.' },
    IMSB: { code: 'IMSB', name: 'Внутренняя истерика', intro: 'Скажи честно, я уже прожарен жизнью?', desc: 'Внутри тебя живут два бессмертных соперника: один хочет рискнуть и выстрелить, другой заранее пишет тебе социальный некролог. Ты не обречен, просто перед любым эмоционально важным действием запускаешь катастрофическое количество внутренних сцен.' },
    SOLO: { code: 'SOLO', name: 'Ежик', intro: 'Почему меня так метко разобрали?', desc: 'Ты защищаешься тем, что выглядишь жестче, холоднее и отстраненнее, чем часто чувствуешь. Иглы настоящие, но нужны они не потому, что тебе не нужна близость. Они нужны потому, что близость кажется рискованной, когда тебе не все равно слишком сильно.' },
    FUCK: { code: 'FUCK', name: 'Дикарь', intro: 'Что это вообще за результат такой?', desc: 'Ты сырой импульс, хаос, аппетит и жизненная сила, у которой проблемы с ограничителями. Социальные правила тебе часто кажутся декоративными. Ты резко качаешься между да черт возьми и ни за что, а в самые живые моменты ощущаешься как человек, которого никакой забор и не должен был удержать.' },
    DEAD: { code: 'DEAD', name: 'Духовно офлайн', intro: 'Я вообще еще эмоционально в сети?', desc: 'Ты производишь впечатление человека, который слишком много раз прошел эту карту и перестал впечатляться спецэффектами. Желание приглушено, зрелище приглушено, шум мира часто идет как белый шум. Ты не обязательно пустой. Ты скорее глубоко неубежденный.' },
    IMFW: { code: 'IMFW', name: 'Мягкая мишень', intro: 'Подожди, я правда настолько легко раним?', desc: 'Ты быстро привязываешься, сильно доверяешь и наделяешь вещи смыслом раньше, чем внутренняя служба безопасности успевает открыть протокол. Это не слабость. Это мягкость в мире, который слишком часто путает мягкость с приглашением обращаться небрежно.' },
    HHHH: { code: 'HHHH', name: 'Баговый гоблин', intro: 'Ха. Ха-ха. А ты вообще кто?', desc: 'Поздравляем, ты сломал систему. Твои ответы оказались настолько красиво странными, что стандартная библиотека типов уволилась, хлопнула дверью и оставила тебе почетное звание багового гоблина. Мы это уважаем, немного боимся и не можем уверенно объяснить.' },
    DRUNK: { code: 'DRUNK', name: 'Алкогоблин', intro: 'Скрытая версия личности вышла в онлайн.', desc: 'Этот результат появляется только когда просыпается алкогольный гоблин. Нормальная логика личности временно отключается и уступает место жидкой смелости, ферментированному хаосу и подозрительно теплым отношениям с плохими идеями. Пей воду и не пиши бывшим.' }
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
    S1: { L: 'Ты относишься к себе жестче, чем большинство врагов вообще стали бы стараться.', M: 'Твоя уверенность зависит от контекста, настроения и фазы луны.', H: 'Ты более-менее знаешь себе цену и не так легко рассыпаешься.' },
    S2: { L: 'Внутренний сигнал о себе у тебя часто шумит и плывет.', M: 'Обычно ты себя считываешь, если настроение не украло доступ к панели управления.', H: 'Ты неплохо понимаешь свои мотивы, пределы и повторяющиеся паттерны.' },
    S3: { L: 'Комфорт и безопасность у тебя часто выигрывают у большого разгона и амбиций.', M: 'Одна часть тебя хочет роста, другая хочет плед и чтобы никто не трогал.', H: 'Цели, прогресс и ощущение движения сильно тебя подталкивают.' },
    E1: { L: 'Твоя сигнализация в отношениях срабатывает подозрительно быстро.', M: 'Половина тебя доверяет, половина ведет внутренний допрос.', H: 'Ты скорее способен опереться на связь, чем паниковать из-за каждого сбоя.' },
    E2: { L: 'Ты вкладываешься осторожно. Дверь не закрыта, но заперта на все замки.', M: 'Ты можешь привязаться, но часто держишь внутри запасной выход.', H: 'Если тебе кто-то важен, ты реально вкладываешься и чувствами, и энергией.' },
    E3: { L: 'Тепло, близость и эмоциональная доступность для тебя очень важны.', M: 'Тебе нужны и близость, и автономия, просто в плавающих пропорциях.', H: 'Даже в любви тебе нужно пространство, которое точно принадлежит только тебе.' },
    A1: { L: 'Мир ты встречаешь сначала с настороженностью и легкой обороной.', M: 'Ты не наивен, но и не живешь в режиме тотального заговора.', H: 'Ты все еще оставляешь людям и миру шанс оказаться нормальными.' },
    A2: { L: 'Если на кону свобода или удобство, ты довольно легко сгибаешь правила.', M: 'Ты умеешь жить в структуре, но не готов ей поклоняться.', H: 'Порядок и процесс тебе понятны. Импровизированный хаос скорее раздражает.' },
    A3: { L: 'Смысл временами ощущается тонким, а жизнь подозрительно постановочной.', M: 'В одни дни у тебя есть направление, в другие ты духовно в отгуле.', H: 'У тебя чаще есть ощущение курса и личного смысла.' },
    Ac1: { L: 'Первым делом ты думаешь не о победе, а о том, как бы не влететь.', M: 'Иногда ты хочешь выиграть, а иногда просто хочешь меньше проблем.', H: 'Результат, рост и движение вперед довольно быстро тебя зажигают.' },
    Ac2: { L: 'Принятие решений у тебя часто выглядит как слишком много вкладок в голове.', M: 'Ты обдумываешь, но обычно не до полной системной аварии.', H: 'Ты решаешь быстро и не любишь по сто раз возвращаться к одному и тому же.' },
    Ac3: { L: 'Твоя исполнительность токсично, но страстно привязана к дедлайнам.', M: 'Ты способен действовать, но настроение и тайминг сильно влияют.', H: 'Если дело висит незавершенным, оно буквально чешет тебе мозг.' },
    So1: { L: 'Чтобы самому войти в контакт, тебе нужен разогрев и, возможно, маленькая молитва.', M: 'Ты умеешь подстроиться под атмосферу, но редко форсируешь ее сам.', H: 'Ты легче сам открываешь взаимодействие и заводишь контакт.' },
    So2: { L: 'Когда ты доверяешь, близость ощущается для тебя очень естественной.', M: 'Тебе нужны и близость, и воздух, просто объем меняется по ходу дела.', H: 'Твоя система границ крепкая. Ты отходишь раньше, чем тебя начнет душить.' },
    So3: { L: 'Ты скорее прямой, чем отредактированный. Если чувствуешь, это обычно просачивается.', M: 'Ты балансируешь между правдой и социальной гладкостью по ситуации.', H: 'Ты хорошо умеешь показывать разные свои слои в разных комнатах.' }
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
        console.warn('Не удалось загрузить постеры для русской версии.', error);
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
    if (q.special) return 'Бонусный вопрос';
    return app.previewMode ? dimensionMeta[q.dim].name : 'Шкала скрыта';
}

function renderQuestions() {
    const visibleQuestions = getVisibleQuestions();
    questionList.innerHTML = '';

    visibleQuestions.forEach((q, index) => {
        const card = document.createElement('article');
        card.className = 'question';
        card.innerHTML = `
          <div class="question-meta">
            <div class="badge">Вопрос ${index + 1}</div>
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
        ? 'Все готово. Теперь можно официально передать цифровую душу странице результата.'
        : 'Сбежать не выйдет. Закончи все вопросы. Миру и так уже хватает хаоса.';
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
    let modeKicker = 'Твой основной тип';
    let badge = `Совпадение ${bestNormal.similarity}% · точных попаданий ${bestNormal.exact}/15`;
    let sub = 'Это твое самое сильное совпадение по пятнадцати шкалам.';
    let special = false;
    let secondaryType = null;

    if (drunkTriggered) {
        finalType = TYPE_LIBRARY.DRUNK;
        secondaryType = bestNormal;
        modeKicker = 'Скрытая личность разблокирована';
        badge = 'Совпадение 100% · управление захватил этанол';
        sub = 'Твои алкогольные настройки временно переопределили стандартный конвейер личности.';
        special = true;
    } else if (bestNormal.similarity < 60) {
        finalType = TYPE_LIBRARY.HHHH;
        modeKicker = 'Системный запасной вариант';
        badge = `Лучшее обычное совпадение дотянуло только до ${bestNormal.similarity}%`;
        sub = 'Стандартная библиотека типов не выдержала твоего мозга и отправила тебя в категорию HHHH.';
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
              <div class="dim-item-score">${level} / ${result.rawScores[dim]} балла</div>
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
        ? 'Этот тест сделан для развлечения. Скрытые личности и аварийные типы добавлены намеренно ради хаоса. Не принимай это за психологию, медицину, духовную истину или юридическое доказательство.'
        : 'Этот тест сделан для развлечения. Не используй его для диагностики, найма, свиданий, расставаний, спиритических сеансов или больших жизненных решений. Угорай ответственно.';

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
