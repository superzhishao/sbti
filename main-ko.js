const dimensionMeta = {
    S1: { name: 'S1 자존감', model: '자기 모델' },
    S2: { name: 'S2 자기 이해도', model: '자기 모델' },
    S3: { name: 'S3 핵심 욕구', model: '자기 모델' },
    E1: { name: 'E1 애착 안정감', model: '감정 모델' },
    E2: { name: 'E2 감정 몰입도', model: '감정 모델' },
    E3: { name: 'E3 경계선과 의존도', model: '감정 모델' },
    A1: { name: 'A1 세상을 보는 시선', model: '태도 모델' },
    A2: { name: 'A2 규칙 vs 자유', model: '태도 모델' },
    A3: { name: 'A3 삶의 의미감', model: '태도 모델' },
    Ac1: { name: 'Ac1 행동 동력', model: '행동 모델' },
    Ac2: { name: 'Ac2 결정 스타일', model: '행동 모델' },
    Ac3: { name: 'Ac3 실행 모드', model: '행동 모델' },
    So1: { name: 'So1 사회적 적극성', model: '사회 모델' },
    So2: { name: 'So2 대인 거리감', model: '사회 모델' },
    So3: { name: 'So3 표현과 진짜 속마음', model: '사회 모델' }
};

const questions = [
    {
        id: 'q1', dim: 'S1',
        text: '연애는 거의 못 해봤고, 자존감은 낮고, SNS만 보면 "다들 왜 이렇게 멀쩡하게 사냐" 싶다. 머릿속에서는 청춘 드라마가 몇 시즌째 상영 중인데 현실의 나는 계속 엑스트라. 이거 솔직히 좀 찔리냐?',
        options: [
            { label: '너무 찔려서 웃음도 안 나옴', value: 1 },
            { label: '와, 말이 좀 세네', value: 2 },
            { label: '아니, 그 정도는 아님', value: 3 }
        ]
    },
    {
        id: 'q2', dim: 'S1',
        text: '주변 사람들보다 내가 덜 괜찮은 사람처럼 느껴질 때가 많다.',
        options: [
            { label: '꽤 자주 그렇다', value: 1 },
            { label: '가끔 그렇다', value: 2 },
            { label: '별로 그렇지 않다', value: 3 }
        ]
    },
    {
        id: 'q3', dim: 'S2',
        text: '나는 내가 어떤 사람인지 비교적 분명하게 알고 있다.',
        options: [
            { label: '그렇지 않다', value: 1 },
            { label: '보통이다', value: 2 },
            { label: '그렇다', value: 3 }
        ]
    },
    {
        id: 'q4', dim: 'S2',
        text: '내가 진짜 중요하게 생각하는 게 뭔지는 어느 정도 알고 있다.',
        options: [
            { label: '그렇지 않다', value: 1 },
            { label: '보통이다', value: 2 },
            { label: '그렇다', value: 3 }
        ]
    },
    {
        id: 'q5', dim: 'S3',
        text: '나는 더 나아지고 싶고, 진짜로 레벨업하고 싶다.',
        options: [
            { label: '그렇지 않다', value: 1 },
            { label: '보통이다', value: 2 },
            { label: '그렇다', value: 3 }
        ]
    },
    {
        id: 'q6', dim: 'S3',
        text: '남의 평가가 내 인생을 좌우하게 두고 싶지 않다.',
        options: [
            { label: '그렇지 않다', value: 1 },
            { label: '보통이다', value: 2 },
            { label: '그렇다', value: 3 }
        ]
    },
    {
        id: 'q7', dim: 'E1',
        text: '애인이 5시간째 답이 없고 "배탈 나서 누워 있었어"라고 한다. 제일 먼저 드는 생각은?',
        options: [
            { label: '5시간? 그건 좀 말이 안 맞는데', value: 1 },
            { label: '믿고 싶긴 한데 좀 수상하다', value: 2 },
            { label: '진짜 많이 아팠을 수도 있지', value: 3 }
        ]
    },
    {
        id: 'q8', dim: 'E1',
        text: '연애할 때 나는 버려질까 봐 걱정하는 편이다.',
        options: [
            { label: '그렇다', value: 1 },
            { label: '가끔 그렇다', value: 2 },
            { label: '그렇지 않다', value: 3 }
        ]
    },
    {
        id: 'q9', dim: 'E2',
        text: '나는 연애를 하면 기본적으로 진심으로 들어가는 편이다.',
        options: [
            { label: '꼭 그렇진 않다', value: 1 },
            { label: '애매하다', value: 2 },
            { label: '그렇다, 꽤 진심이다', value: 3 }
        ]
    },
    {
        id: 'q10', dim: 'E2',
        text: '상대가 엄청 다정하고, 똑똑하고, 웃기고, 성숙하고, 예쁘거나 잘생겼고, 심지어 나를 엄청 좋아한다면?',
        options: [
            { label: '그래도 난 너무 깊게 빠지진 않을 듯', value: 1 },
            { label: '중간 어딘가일 듯', value: 2 },
            { label: '거의 사랑에 풀세팅될 듯', value: 3 }
        ]
    },
    {
        id: 'q11', dim: 'E3',
        text: '사귀는 사람이 엄청 들이대고 붙어 있으려 한다. 솔직한 반응은?',
        options: [
            { label: '오히려 좋을 수도', value: 1 },
            { label: '상대에 따라 다름', value: 2 },
            { label: '조금만 거리 좀 주세요', value: 3 }
        ]
    },
    {
        id: 'q12', dim: 'E3',
        text: '어떤 관계든 내 시간과 공간은 꽤 중요한 편이다.',
        options: [
            { label: '가까움과 의존이 더 중요하다', value: 1 },
            { label: '사람 따라 다르다', value: 2 },
            { label: '엄청 중요하다', value: 3 }
        ]
    },
    {
        id: 'q13', dim: 'A1',
        text: '세상 사람들은 결국 기본적으로는 괜찮은 편이라고 생각한다.',
        options: [
            { label: '너무 낙관적인데', value: 1 },
            { label: '상황 따라 다르다', value: 2 },
            { label: '그래도 나는 그렇게 믿는 편', value: 3 }
        ]
    },
    {
        id: 'q14', dim: 'A1',
        text: '길을 가는데 엄청 귀여운 아이가 갑자기 와서 사탕을 하나 준다. 부모는 안 보이고, 그냥 순수한 미소만 있다. 내 반응은?',
        options: [
            { label: '세상 아직 안 망했네', value: 3 },
            { label: '일단 상황 파악이 안 됨', value: 2 },
            { label: '이거 무슨 몰카나 신종 수법 아니야?', value: 1 }
        ]
    },
    {
        id: 'q15', dim: 'A2',
        text: '시험기간이고 보충수업 안 가면 좀 위험한데, 좋아하는 사람이 오늘 밤 롤 듀오하자고 부른다. 어떻게 할래?',
        options: [
            { label: '간다. 하루쯤은 어떻게 되겠지', value: 1 },
            { label: '핑계라도 만들어서 둘 다 챙겨보려 한다', value: 2 },
            { label: '지금은 보충수업이 우선', value: 3 }
        ]
    },
    {
        id: 'q16', dim: 'A2',
        text: '정해진 틀 안에 갇히는 걸 싫어하고, 자유롭게 하고 싶다.',
        options: [
            { label: '그렇다', value: 1 },
            { label: '보통이다', value: 2 },
            { label: '그렇지 않다', value: 3 }
        ]
    },
    {
        id: 'q17', dim: 'A3',
        text: '세부 계획은 흔들려도, 삶의 큰 방향감은 어느 정도 있다.',
        options: [
            { label: '그렇지 않다', value: 1 },
            { label: '보통이다', value: 2 },
            { label: '그렇다', value: 3 }
        ]
    },
    {
        id: 'q18', dim: 'A3',
        text: '가끔은 "인생이라는 게 결국 호르몬, 피로, 식욕, 충동이 의미인 척하는 거 아닌가?" 싶다.',
        options: [
            { label: '진짜 딱 그 생각함', value: 1 },
            { label: '날에 따라 다름', value: 2 },
            { label: '그건 너무 냉소적이다', value: 3 }
        ]
    },
    {
        id: 'q19', dim: 'Ac1',
        text: '나는 귀찮음이나 리스크 회피보다, 성장이나 성과 쪽에 더 끌리는 편이다.',
        options: [
            { label: '그렇지 않다', value: 1 },
            { label: '보통이다', value: 2 },
            { label: '그렇다', value: 3 }
        ]
    },
    {
        id: 'q20', dim: 'Ac1',
        text: '화장실에 30분째 앉아 있는데 아무 일도 안 일어난다. 이제 이건 의지의 싸움이다. 내 쪽은?',
        options: [
            { label: '좀 더 버티면 뭔가 될 수도 있다', value: 1 },
            { label: '스스로에게 이상한 동기부여 연설을 한다', value: 2 },
            { label: '현실적인 해결책 쓰고 빨리 끝낸다', value: 3 }
        ]
    },
    {
        id: 'q21', dim: 'Ac2',
        text: '나는 결정을 비교적 빨리 내리고, 질질 끄는 걸 별로 안 좋아한다.',
        options: [
            { label: '그렇지 않다', value: 1 },
            { label: '보통이다', value: 2 },
            { label: '그렇다', value: 3 }
        ]
    },
    {
        id: 'q22', dim: 'Ac2',
        text: '이 질문에는 의미가 없습니다. 그냥 감으로 고르세요.',
        options: [
            { label: '왠지 A가 맞는 느낌', value: 1 },
            { label: '그냥 B로 간다', value: 2 },
            { label: '고민될 땐 C', value: 3 }
        ]
    },
    {
        id: 'q23', dim: 'Ac3',
        text: '"너 실행력 좋다"는 말을 들었을 때, 속마음은 어느 쪽에 가까워?',
        options: [
            { label: '몰릴 때만 갑자기 폭발하는 타입임', value: 1 },
            { label: '가끔은 그렇지', value: 2 },
            { label: '그냥 일은 앞으로 가야 하잖아', value: 3 }
        ]
    },
    {
        id: 'q24', dim: 'Ac3',
        text: '나는 보통 계획을 세운다. 그런데 그 다음은…',
        options: [
            { label: '현실이 바로 박살냄', value: 1 },
            { label: '될 때도 있고 안 될 때도 있다', value: 2 },
            { label: '계획 깨지면 꽤 짜증난다', value: 3 }
        ]
    },
    {
        id: 'q25', dim: 'So1',
        text: '발로란트에서 친해진 사람들이 오프 모임 하자고 한다. 첫 반응은?',
        options: [
            { label: '게임에서 친한 거랑 현실은 다르지', value: 1 },
            { label: '분위기 보고 생각해본다', value: 2 },
            { label: '옷도 챙겨 입고 꽤 적극적으로 나간다', value: 3 }
        ]
    },
    {
        id: 'q26', dim: 'So1',
        text: '친구가 자기 친구를 데리고 나왔다. 이럴 때 내 모드는?',
        options: [
            { label: '일단 초반엔 살짝 거리 둔다', value: 1 },
            { label: '분위기 괜찮으면 자연스럽게 섞인다', value: 2 },
            { label: '친구의 친구면 거의 우리 편이지', value: 3 }
        ]
    },
    {
        id: 'q27', dim: 'So2',
        text: '사람이 너무 가까이 들어오면 자동으로 경보가 울리는 편이다.',
        options: [
            { label: '그렇다', value: 3 },
            { label: '보통이다', value: 2 },
            { label: '그렇지 않다', value: 1 }
        ]
    },
    {
        id: 'q28', dim: 'So2',
        text: '믿는 사람과는 꽤 진하고 가까운 관계를 원한다.',
        options: [
            { label: '그렇다', value: 1 },
            { label: '보통이다', value: 2 },
            { label: '그렇지 않다', value: 3 }
        ]
    },
    {
        id: 'q29', dim: 'So3',
        text: '사실은 부정적인 생각이 있었는데 끝내 말하지 않았다. 보통 이유는?',
        options: [
            { label: '애초에 그런 상황이 별로 없다', value: 1 },
            { label: '분위기 망치기 싫다', value: 2 },
            { label: '내 어두운 속마음까지 보여주긴 싫다', value: 3 }
        ]
    },
    {
        id: 'q30', dim: 'So3',
        text: '나는 사람마다 보여주는 모습이 꽤 다르다.',
        options: [
            { label: '그렇지 않다', value: 1 },
            { label: '보통이다', value: 2 },
            { label: '그렇다', value: 3 }
        ]
    }
];

const specialQuestions = [
    {
        id: 'drink_gate_q1',
        special: true,
        kind: 'drink_gate',
        text: '평소 내 분위기에 가장 가까운 건?',
        options: [
            { label: '먹고 자고 버티기', value: 1 },
            { label: '예술/취미 생활', value: 2 },
            { label: '술', value: 3 },
            { label: '운동/헬스', value: 4 }
        ]
    },
    {
        id: 'drink_gate_q2',
        special: true,
        kind: 'drink_trigger',
        text: '술과의 관계를 솔직하게 말하면?',
        options: [
            { label: '적당히 즐기는 편이다', value: 1 },
            { label: '술이 거의 감정용 외장하드다', value: 2 }
        ]
    }
];

const TYPE_LIBRARY = {
    CTRL: { code: 'CTRL', name: '판 짜는 사람', intro: '네, 당신이 저장 버튼 들고 있네요.', desc: '판이 무너지기 시작하면 이상하게 당신 손으로 정리됩니다. 규칙도 계획도 당신 앞에서는 "일단 수정 가능한 문서" 정도로 취급돼요. 시끄럽게 나서진 않는데, 결국 다 수습되어 있습니다. 그게 좀 무섭습니다.' },
    'ATM-er': { code: 'ATM-er', name: '계속 내주는 사람', intro: '제가 그렇게까지 여유 있어 보였나요?', desc: '돈이든 시간, 체력, 배려, 마지막 남은 멘탈이든 계속 뭔가를 내주고 있는 타입입니다. 믿음직해서 사람들이 자꾸 기대고, 당신은 또 어찌저찌 다 감당해요. 착한데 내구도 관리가 시급합니다.' },
    'Dior-s': { code: 'Dior-s', name: '지하실 철학자', intro: '이 정체기, 사실 제 세계관입니다.', desc: '게으르다기보다 현대 사회의 성공 패키지를 별로 안 믿는 사람입니다. 자기계발, 생산성, 경쟁 서사를 한 바퀴 보고 나서 "그거 진짜 행복 보장 맞나?" 하고 조용히 의심하는 타입이죠.' },
    BOSS: { code: 'BOSS', name: '운전대 잡는 사람', intro: '핸들 이쪽으로 주세요.', desc: '책임감, 추진력, 판단력이 전반적으로 강한 편입니다. 뭔가 흐트러지면 끝없이 말만 하기보다 "그냥 내가 할게"로 수습해버립니다. 사람을 끌고 간다기보다, 결과적으로 다들 따라오게 되는 타입입니다.' },
    'THAN-K': { code: 'THAN-K', name: '감사 발전기', intro: '이 막히는 길에도 뭔가 배울 점이 있겠지.', desc: '보통 사람이라면 짜증낼 상황에서도 묘하게 숨통을 찾는 타입입니다. 단순 긍정왕이라기보다 회복탄력성이 이상하게 높아요. 그리고 그 공기를 주변에도 나눠줘서, 옆에 있으면 은근히 살립니다.' },
    'OH-NO': { code: 'OH-NO', name: '불길함 예보관', intro: '잠깐, 이거 느낌이 너무 안 좋은데?', desc: '작은 이상 신호만 봐도 최악의 시나리오까지 몇 수 앞을 읽습니다. 컵 하나가 책상 끝에 있어도 엎어짐, 고장, 수습, 비용까지 한 번에 떠올라요. 예민하다고 볼 수도 있고, 유능하다고도 볼 수 있습니다. 사실 둘 다 맞습니다.' },
    GOGO: { code: 'GOGO', name: '밀어붙이는 사람', intro: '좋아, 일단 간다.', desc: '생각하고 움직이는 게 아니라, 움직이면서 생각하는 타입입니다. 할 일이 남아 있는 상태를 정신적으로 못 견뎌요. 남들이 아직 상황 파악 중일 때 이미 당신은 다음 단계로 넘겨버렸을 가능성이 큽니다.' },
    SEXY: { code: 'SEXY', name: '분위기 장악형', intro: '안타깝게도 당신 아우라가 먼저 입장했습니다.', desc: '노력해서 시선을 끄는 게 아니라, 그냥 존재만으로 눈에 띄는 타입입니다. 사람들은 당신을 자꾸 보고, 해석하고, 가끔 혼자서 의미 부여도 합니다. 존재 자체가 콘텐츠인 사람.' },
    'LOVE-R': { code: 'LOVE-R', name: '사랑 과몰입형', intro: '감정 용량이 너무 큽니다.', desc: '가벼운 호감을 가볍게 넘기기 어려운 타입입니다. 작은 장면도 의미가 생기고, 감정이 곧 서사가 됩니다. 낭만과 여운과 상상이 풍부해서, 자기 마음이 자기를 제일 힘들게 할 때도 있어요.' },
    MUM: { code: 'MUM', name: '돌봄 담당자', intro: '물 줄까? 위로해줄까? 둘 다 가능.', desc: '사람의 기분 변화나 분위기 차이를 빨리 읽고, 어느새 돌보는 쪽으로 가 있는 타입입니다. 같이 있으면 이상하게 안심돼요. 문제는 그 다정함을 자기 자신한테 쓰는 양은 늘 부족하다는 점입니다.' },
    FAKE: { code: 'FAKE', name: '적응형 카멜레온', intro: '상황별 페르소나 교체가 너무 빠름.', desc: '환경 적응이 빨라서 보는 사람마다 당신을 다르게 기억합니다. 친한 친구 모드, 회사 모드, 연애 모드, 초면 모드가 전부 달라요. 가식적이라기보다, 그 공간에 맞는 자아를 즉시 꺼내는 능력이 강한 사람입니다.' },
    OJBK: { code: 'OJBK', name: '아무거나 제왕', intro: '"아무거나"가 진심인 사람.', desc: '뭐 먹을지, 어디 앉을지, 몇 시에 볼지 같은 문제에 큰 에너지를 쓰지 않습니다. 무관심하다기보다 그런 사소한 선택에 감정을 태우는 게 귀찮은 거예요. 이상하게 왕 같은 여유가 있습니다.' },
    MALO: { code: 'MALO', name: '장난기 생존종', intro: '문명 쪽이 아직 당신을 못 따라온 것뿐.', desc: '질서나 상식에 필요 이상으로 경외심을 갖지 않는 타입입니다. 장난기와 반사신경으로 살고, 지루함을 강하게 싫어하죠. 너무 반듯한 공간에 들어가면 살짝 흔들어보고 싶어집니다.' },
    'JOKE-R': { code: 'JOKE-R', name: '슬픈 분위기 메이커', intro: '농담으로 넘길 수 있을 때까진 괜찮다.', desc: '분위기를 살리고, 웃기고, 어색함을 걷어내는 데 능합니다. 그런데 정작 본인이 제일 많은 걸 품고 있을 확률도 높아요. 유머가 갑옷처럼 작동하는 타입입니다.' },
    'WOC!': { code: 'WOC!', name: '헐 담당', intro: '헐, 진짜 왜 이게 나야?', desc: '겉으로는 크게 반응하지만 속은 의외로 차분한 편입니다. 놀라는 와중에도 흐름을 읽고 있어요. 혼란스러워 보이는데 실제로는 꽤 정확하게 핵심을 잡는 사람입니다.' },
    'THIN-K': { code: 'THIN-K', name: '생각 과부하형', intro: '잠시만요. 머릿속 회의가 아직 안 끝났습니다.', desc: '정보를 그냥 받아들이지 않고 거의 감사하듯 들여다보는 타입입니다. 논리, 전제, 편향, 구조, 말하는 사람의 의도까지 자꾸 보게 돼요. 멍해 보일 때도 머릿속에선 품질검사가 한창입니다.' },
    SHIT: { code: 'SHIT', name: '욕은 하지만 유능함', intro: '다 별로야. 근데 결국 내가 한다.', desc: '입으로는 세상과 일을 욕하면서도 막상 제일 깔끔하게 정리하는 타입입니다. 말투는 종말론자인데 행동은 프로젝트 매니저예요. 분위기는 피곤한데 결과는 잘 나옵니다.' },
    ZZZZ: { code: 'ZZZZ', name: '절전모드 각성형', intro: '자는 거였지, 죽은 건 아니었습니다.', desc: '평소에는 메시지든 마감이든 잘 미루다가도, 진짜 마지막 순간에 이상한 집중력이 나옵니다. 미루기 체질과 벼락 화력이 위험하게 공존하는 타입이죠. 다루긴 어려워도 결과는 꽤 냅니다.' },
    POOR: { code: 'POOR', name: '한점집중 레이저', intro: '리소스 부족이 아니라 압축 중입니다.', desc: '여러 곳에 넓게 에너지를 뿌리기보다, 중요한 한 지점에 몰아넣는 타입입니다. 멀리서 보면 여유 없어 보이지만, 사실은 지나치게 집중한 것뿐입니다. 꽂힌 대상에는 엄청 강합니다.' },
    MONK: { code: 'MONK', name: '경계선 수도승', intro: '속세와는 이 정도 거리 두겠습니다.', desc: '혼자 있는 시간과 자기 영역을 꽤 소중하게 여기는 타입입니다. 차갑다기보다 고요함이 필요한 거예요. 충분한 거리가 있어야 관계도 오래 간다고 생각하는 쪽에 가깝습니다.' },
    IMSB: { code: 'IMSB', name: '내면 대환장 파티', intro: '잠깐, 나 그렇게까지 망한 건가?', desc: '마음속에 "가라!"와 "하지 마!"가 동시에 상주합니다. 좋아하는 사람, 기회, 말 꺼낼 타이밍 같은 모든 것 앞에서 머릿속 회의가 너무 길어요. 못난 사람은 아닌데, 내면 상영시간이 유독 깁니다.' },
    SOLO: { code: 'SOLO', name: '고슴도치형', intro: '왜 이렇게까지 들켰지?', desc: '상처받기 싫어서 먼저 거리를 두거나, 조금 차갑게 보이도록 굴기 쉬운 타입입니다. 사람이 싫다기보다, 가까워지면 내가 더 흔들릴까 봐 방어하는 거예요. 가시는 진짜지만 이유도 있습니다.' },
    FUCK: { code: 'FUCK', name: '야생성 과다', intro: '아니 이 결과 너무 세잖아.', desc: '욕망, 충동, 기세, 생명력이 전부 센 타입입니다. 사회 규칙을 절대적인 것으로 받아들이지 않고, 감정 스위치도 꽤 물리적으로 움직입니다. "간다 / 안 간다"가 확실해서 묘하게 본능적인 매력이 있습니다.' },
    DEAD: { code: 'DEAD', name: '영혼 로그아웃 직전', intro: '나 아직 로그인된 거 맞아?', desc: '자극이나 욕망으로부터 한 발 떨어져 있는 감각이 강합니다. 세상의 과열된 분위기를 살짝 밖에서 보는 사람 같아요. 무기력하다기보다, 많은 걸 본 뒤 온도가 조금 내려간 타입입니다.' },
    IMFW: { code: 'IMFW', name: '말랑한 피격체질', intro: '잠깐, 내가 이렇게까지 상처 잘 받나?', desc: '사람을 빠르게 믿고, 의미를 빨리 부여하는 타입입니다. 약하다기보다 반응이 정직한 거예요. 누가 대충 대하면 실제로 크게 데미지를 입는, 섬세하고 성실한 사람입니다.' },
    HHHH: { code: 'HHHH', name: '시스템 파괴형', intro: '하하... 아니 잠깐 이게 뭐야.', desc: '축하합니다. 당신은 표준 성격 라이브러리를 고장 냈습니다. 답변 패턴이 너무 독특해서 일반 분류로는 처리가 안 됩니다. 설명은 어렵고, 존재감은 강하고, 시스템은 포기했습니다.' },
    DRUNK: { code: 'DRUNK', name: '술버릇 숨은캐', intro: '숨겨진 인격이 해금되었습니다.', desc: '이 결과는 술의 존재감이 너무 강할 때만 열리는 히든 루트입니다. 평소의 이성이나 정합성은 알코올에 의해 덮어쓰기되었습니다. 텐션, 실수, 쓸데없는 자신감이 한 덩어리로 움직이고 있습니다. 물 좀 마시세요.' }
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
    S1: { L: '자기 자신에게 꽤 가혹한 편입니다.', M: '자신감이 상황과 컨디션 영향을 많이 받습니다.', H: '자기 가치를 비교적 잘 알고 쉽게 무너지지 않습니다.' },
    S2: { L: '내가 누구인지 감이 흐려질 때가 잦습니다.', M: '평소엔 알지만 기분 따라 놓칠 때가 있습니다.', H: '자신의 욕구, 패턴, 한계를 꽤 잘 파악하고 있습니다.' },
    S3: { L: '성장보다 안정과 편안함을 더 우선하기 쉽습니다.', M: '달리고 싶은 마음과 쉬고 싶은 마음이 늘 동시에 있습니다.', H: '목표, 성장, 의미가 당신을 꽤 강하게 밀어줍니다.' },
    E1: { L: '관계 경보 시스템이 상당히 민감합니다.', M: '믿고 싶은 마음과 의심이 반반쯤 공존합니다.', H: '작은 흔들림만으로 관계 전체를 불신하진 않습니다.' },
    E2: { L: '감정 투자는 신중파입니다. 문은 안 닫았지만 꽤 무겁습니다.', M: '마음을 주긴 하지만 비상구도 조금 열어둡니다.', H: '한번 마음이 가면 꽤 진심으로 깊게 들어갑니다.' },
    E3: { L: '관계의 온기와 밀착감을 중요하게 여깁니다.', M: '가까움도 필요하고 거리도 필요합니다.', H: '아무리 가까워도 내 영역은 필요합니다.' },
    A1: { L: '세상을 볼 때 일단 경계부터 켜집니다.', M: '순진하지도, 완전 음모론자도 아닌 관찰형입니다.', H: '사람과 세상에 선의의 여지를 남겨두는 편입니다.' },
    A2: { L: '편안함이나 자유를 위해 규칙을 쉽게 굽힐 수 있습니다.', M: '지킬 땐 지키고, 깰 땐 깹니다.', H: '질서와 절차가 있는 편이 마음이 편합니다.' },
    A3: { L: '삶의 의미가 조금 얇게 느껴질 수 있습니다.', M: '목적이 분명한 날도 있고, 영혼이 출근 안 한 날도 있습니다.', H: '내가 어디로 가고 싶은지 비교적 잘 느끼는 편입니다.' },
    Ac1: { L: '성과보다 먼저 "망하지 말자"가 켜집니다.', M: '이기고 싶은 날도 있고, 그냥 편하고 싶은 날도 있습니다.', H: '전진, 성장, 성취감에 불이 잘 붙습니다.' },
    Ac2: { L: '결정 전에 머릿속 탭이 너무 많이 열립니다.', M: '생각은 하지만 완전 멈춰버리진 않습니다.', H: '결정은 빠른 편이고, 계속 되짚는 걸 싫어합니다.' },
    Ac3: { L: '마감과 실행력이 위험한 공생 관계입니다.', M: '될 때는 되지만 타이밍과 기분 영향도 큽니다.', H: '일이 안 끝난 상태를 꽤 거슬려합니다.' },
    So1: { L: '사교에는 예열 시간이 필요합니다.', M: '분위기에 맞출 순 있지만 먼저 판을 여는 편은 아닙니다.', H: '내가 먼저 말을 걸고 흐름을 여는 데 큰 저항이 없습니다.' },
    So2: { L: '믿는 사람과는 꽤 가까운 거리까지 들어가고 싶어 합니다.', M: '가까워지고 싶은 마음과 숨 쉴 공간 욕구가 같이 있습니다.', H: '대인 경계선이 비교적 단단합니다.' },
    So3: { L: '속마음이 비교적 그대로 새어 나오는 편입니다.', M: '진실과 분위기 사이 균형을 보며 말합니다.', H: '상대와 상황에 따라 보여주는 자아를 꽤 잘 조절합니다.' }
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
        console.warn('한국어 버전 이미지 로딩에 실패했습니다.', error);
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
    if (q.special) return '추가 질문';
    return app.previewMode ? dimensionMeta[q.dim].name : '차원 비공개';
}

function renderQuestions() {
    const visibleQuestions = getVisibleQuestions();
    questionList.innerHTML = '';

    visibleQuestions.forEach((q, index) => {
        const card = document.createElement('article');
        card.className = 'question';
        card.innerHTML = `
          <div class="question-meta">
            <div class="badge">${index + 1}번 문항</div>
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
        ? '전부 답했습니다. 이제 전자 영혼을 결과 페이지에 제출하시면 됩니다.'
        : '끝까지 다 답해야 합니다. 여기까지 왔으면 완주하세요.';
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
    let modeKicker = '당신의 메인 타입';
    let badge = `일치도 ${bestNormal.similarity}% · 15차원 중 ${bestNormal.exact}개 정확 일치`;
    let sub = '15개 차원의 응답을 기준으로 지금의 당신과 가장 가까운 유형입니다.';
    let special = false;
    let secondaryType = null;

    if (drunkTriggered) {
        finalType = TYPE_LIBRARY.DRUNK;
        secondaryType = bestNormal;
        modeKicker = '숨겨진 인격이 발동했습니다';
        badge = '일치도 100% · 현재 알코올이 운전대를 잡고 있습니다';
        sub = '술 관련 설정이 기본 성격 판정 라인을 덮어썼습니다.';
        special = true;
    } else if (bestNormal.similarity < 60) {
        finalType = TYPE_LIBRARY.HHHH;
        modeKicker = '시스템 강제 보정';
        badge = `일반 성격 라이브러리 최고 일치도는 ${bestNormal.similarity}%였습니다`;
        sub = '기본 타입 라이브러리가 당신의 답변 패턴을 감당하지 못해 HHHH로 강제 배정했습니다.';
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
              <div class="dim-item-score">${level} / ${result.rawScores[dim]}점</div>
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
        ? '이 테스트는 완전히 재미용입니다. 숨겨진 인격과 보정 타입도 일부러 넣은 장치입니다. 심리학, 의학, 영적 해석, 인생 판단의 근거로 쓰지 마세요.'
        : '이 테스트는 재미용입니다. 진단, 채용, 연애, 이별, 인생의 중대 결정에 사용하지 마세요. 웃고 넘기는 게 정답입니다.';

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
