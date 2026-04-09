const dimensionMeta = {
    S1: { name: 'S1 Autoestima', model: 'Modelo do eu' },
    S2: { name: 'S2 Clareza pessoal', model: 'Modelo do eu' },
    S3: { name: 'S3 Força interior', model: 'Modelo do eu' },
    E1: { name: 'E1 Segurança afetiva', model: 'Modelo emocional' },
    E2: { name: 'E2 Investimento emocional', model: 'Modelo emocional' },
    E3: { name: 'E3 Limites e dependência', model: 'Modelo emocional' },
    A1: { name: 'A1 Visão do mundo', model: 'Modelo de atitude' },
    A2: { name: 'A2 Regras vs liberdade', model: 'Modelo de atitude' },
    A3: { name: 'A3 Sentido de vida', model: 'Modelo de atitude' },
    Ac1: { name: 'Ac1 Tipo de motivação', model: 'Modelo de ação' },
    Ac2: { name: 'Ac2 Forma de decidir', model: 'Modelo de ação' },
    Ac3: { name: 'Ac3 Modo de execução', model: 'Modelo de ação' },
    So1: { name: 'So1 Iniciativa social', model: 'Modelo social' },
    So2: { name: 'So2 Distância interpessoal', model: 'Modelo social' },
    So3: { name: 'So3 Expressão e autenticidade', model: 'Modelo social' }
};

const questions = [
    {
        id: 'q1', dim: 'S1',
        text: 'Eu não sou só solteiro. Sou praticamente um NPC ansioso, com autoestima baixa e doutoramento em ilusões românticas. Nunca tive uma relação a sério e uma parte da minha juventude parece um filme interno sobre a vida que eu imaginava, enquanto toda a gente parecia normal no Instagram. Sê honesto: isto bateu demasiado perto?',
        options: [
            { label: 'Isto foi pessoal demais', value: 1 },
            { label: 'Foi forte, mas pronto', value: 2 },
            { label: 'Não, nada a ver comigo', value: 3 }
        ]
    },
    {
        id: 'q2', dim: 'S1',
        text: 'Muitas vezes sinto que as pessoas à minha volta são simplesmente mais impressionantes do que eu.',
        options: [
            { label: 'Sim, muitas vezes', value: 1 },
            { label: 'Às vezes', value: 2 },
            { label: 'Nem por isso', value: 3 }
        ]
    },
    {
        id: 'q3', dim: 'S2',
        text: 'Tenho uma noção bastante clara de quem sou de verdade.',
        options: [
            { label: 'Discordo', value: 1 },
            { label: 'Neutro', value: 2 },
            { label: 'Concordo', value: 3 }
        ]
    },
    {
        id: 'q4', dim: 'S2',
        text: 'Lá no fundo, sei bem aquilo que realmente me importa.',
        options: [
            { label: 'Discordo', value: 1 },
            { label: 'Neutro', value: 2 },
            { label: 'Concordo', value: 3 }
        ]
    },
    {
        id: 'q5', dim: 'S3',
        text: 'Quero mesmo evoluir e tornar-me uma versão mais forte de mim.',
        options: [
            { label: 'Discordo', value: 1 },
            { label: 'Neutro', value: 2 },
            { label: 'Concordo', value: 3 }
        ]
    },
    {
        id: 'q6', dim: 'S3',
        text: 'A opinião dos outros não manda assim tanto na minha vida.',
        options: [
            { label: 'Discordo', value: 1 },
            { label: 'Neutro', value: 2 },
            { label: 'Concordo', value: 3 }
        ]
    },
    {
        id: 'q7', dim: 'E1',
        text: 'A tua cara-metade não responde há 5 horas e depois diz que estava com uma intoxicação alimentar. Qual é o teu primeiro pensamento?',
        options: [
            { label: 'Cinco horas? Essa conversa não me convence', value: 1 },
            { label: 'Fico dividido entre confiar e desconfiar', value: 2 },
            { label: 'Se calhar esteve mesmo mal disposto', value: 3 }
        ]
    },
    {
        id: 'q8', dim: 'E1',
        text: 'Nas relações, tenho medo de ser deixado para trás.',
        options: [
            { label: 'Sim', value: 1 },
            { label: 'Às vezes', value: 2 },
            { label: 'Não', value: 3 }
        ]
    },
    {
        id: 'q9', dim: 'E2',
        text: 'Quando digo que levo o amor a sério, estou mesmo a falar a sério.',
        options: [
            { label: 'Se for honesto, nem sempre', value: 1 },
            { label: 'Mais ou menos', value: 2 },
            { label: 'Sim, completamente', value: 3 }
        ]
    },
    {
        id: 'q10', dim: 'E2',
        text: 'Imagina que a tua pessoa é absurdamente querida, madura, engraçada, inteligente, gira, fiel e ainda por cima obcecada contigo. O que acontece a seguir?',
        options: [
            { label: 'Mesmo assim não me entregava totalmente', value: 1 },
            { label: 'Ficava algures a meio', value: 2 },
            { label: 'Ia entrar em modo completamente apaixonado', value: 3 }
        ]
    },
    {
        id: 'q11', dim: 'E3',
        text: 'Começas a sair com alguém e essa pessoa fica extremamente pegajosa. Reação honesta?',
        options: [
            { label: 'Se calhar até gosto disso', value: 1 },
            { label: 'Depende muito da pessoa', value: 2 },
            { label: 'Preciso de espaço antes de evaporar', value: 3 }
        ]
    },
    {
        id: 'q12', dim: 'E3',
        text: 'O meu espaço pessoal é muito importante em qualquer relação.',
        options: [
            { label: 'Prefiro mais proximidade e dependência mútua', value: 1 },
            { label: 'Depende da situação', value: 2 },
            { label: 'Sim, isso não se negocia', value: 3 }
        ]
    },
    {
        id: 'q13', dim: 'A1',
        text: 'No geral, a maioria das pessoas é decente.',
        options: [
            { label: 'Isso soa otimista demais', value: 1 },
            { label: 'Talvez', value: 2 },
            { label: 'Sim, ainda acredito nisso', value: 3 }
        ]
    },
    {
        id: 'q14', dim: 'A1',
        text: 'Vais na rua e uma criança ridiculamente querida corre até ti e oferece-te um chupa-chupa. Sem pais à vista, sem explicação, só pura fofura. Qual é a tua reação?',
        options: [
            { label: 'Isto é a coisa mais fofa da semana', value: 3 },
            { label: 'Fico muito confuso', value: 2 },
            { label: 'Isto parece o início de um esquema qualquer', value: 1 }
        ]
    },
    {
        id: 'q15', dim: 'A2',
        text: 'É época de exames, tens uma sessão de estudo obrigatória, mas o teu crush quer jogar EA Sports FC contigo hoje à noite. O que fazes?',
        options: [
            { label: 'Vou jogar. Uma noite não muda tudo', value: 1 },
            { label: 'Tentava arranjar uma desculpa', value: 2 },
            { label: 'Não, agora fico a estudar', value: 3 }
        ]
    },
    {
        id: 'q16', dim: 'A2',
        text: 'Gosto de quebrar a rotina e odeio sentir-me preso em regras.',
        options: [
            { label: 'Concordo', value: 1 },
            { label: 'Neutro', value: 2 },
            { label: 'Discordo', value: 3 }
        ]
    },
    {
        id: 'q17', dim: 'A3',
        text: 'Normalmente tenho alguma noção da direção da minha vida, mesmo que os detalhes estejam uma confusão.',
        options: [
            { label: 'Discordo', value: 1 },
            { label: 'Neutro', value: 2 },
            { label: 'Concordo', value: 3 }
        ]
    },
    {
        id: 'q18', dim: 'A3',
        text: 'Às vezes olho para a vida e penso: isto é basicamente hormonas, fome, cansaço e caos a fingir que é significado.',
        options: [
            { label: 'Exatamente', value: 1 },
            { label: 'Depende do dia', value: 2 },
            { label: 'Não, isso já é demasiado cínico', value: 3 }
        ]
    },
    {
        id: 'q19', dim: 'Ac1',
        text: 'Costumo ser mais movido por crescimento e conquista do que por evitar chatices.',
        options: [
            { label: 'Discordo', value: 1 },
            { label: 'Neutro', value: 2 },
            { label: 'Concordo', value: 3 }
        ]
    },
    {
        id: 'q20', dim: 'Ac1',
        text: 'Estás sentado na sanita há 30 minutos, nada acontece e isto já virou uma batalha de ego. Qual és tu?',
        options: [
            { label: 'Fico mais um bocado. Talvez o universo precise de tempo', value: 1 },
            { label: 'Faço um discurso motivacional a mim próprio', value: 2 },
            { label: 'Uso a solução prática e sigo com a vida', value: 3 }
        ]
    },
    {
        id: 'q21', dim: 'Ac2',
        text: 'Costumo tomar decisões depressa e não gosto de arrastar tudo para sempre.',
        options: [
            { label: 'Discordo', value: 1 },
            { label: 'Neutro', value: 2 },
            { label: 'Concordo', value: 3 }
        ]
    },
    {
        id: 'q22', dim: 'Ac2',
        text: 'Aqui não há pergunta nenhuma. Escolhe às cegas e aceita o teu destino.',
        options: [
            { label: 'O A parece estranhamente certo', value: 1 },
            { label: 'Pronto, vai B', value: 2 },
            { label: 'Na dúvida, C', value: 3 }
        ]
    },
    {
        id: 'q23', dim: 'Ac3',
        text: 'Quando te chamam muito eficaz, qual destas respostas internas faz mais sentido?',
        options: [
            { label: 'Só quando o pânico e o prazo se juntam contra mim', value: 1 },
            { label: 'Às vezes, sim', value: 2 },
            { label: 'Sim. As coisas têm de andar', value: 3 }
        ]
    },
    {
        id: 'q24', dim: 'Ac3',
        text: 'Normalmente faço planos, e depois...',
        options: [
            { label: 'A realidade entra a pés juntos e destrói tudo', value: 1 },
            { label: 'Uns resultam, outros não', value: 2 },
            { label: 'Fico irritado quando o plano descarrila', value: 3 }
        ]
    },
    {
        id: 'q25', dim: 'So1',
        text: 'Fizeste amigos online através de Valorant e agora querem combinar algo ao vivo. Qual é o teu primeiro instinto?',
        options: [
            { label: 'No online é uma coisa. Ao vivo já é outro campeonato', value: 1 },
            { label: 'Pode correr bem. Vejo o ambiente primeiro', value: 2 },
            { label: 'Já estou a pensar no outfit. Isto pode ser icónico', value: 3 }
        ]
    },
    {
        id: 'q26', dim: 'So1',
        text: 'Um amigo leva outro amigo para sair convosco. Que versão tua aparece?',
        options: [
            { label: 'Mantenho logo alguma distância', value: 1 },
            { label: 'Se o ambiente for bom, eu também estou bem', value: 2 },
            { label: 'Amigo de amigo entra logo na equipa', value: 3 }
        ]
    },
    {
        id: 'q27', dim: 'So2',
        text: 'Sou basicamente uma cerca elétrica em forma humana. Se alguém se aproxima demais, o alarme dispara.',
        options: [
            { label: 'Concordo', value: 3 },
            { label: 'Neutro', value: 2 },
            { label: 'Discordo', value: 1 }
        ]
    },
    {
        id: 'q28', dim: 'So2',
        text: 'Com pessoas em quem confio mesmo, quero uma proximidade muito forte, quase de círculo interno absoluto.',
        options: [
            { label: 'Concordo', value: 1 },
            { label: 'Neutro', value: 2 },
            { label: 'Discordo', value: 3 }
        ]
    },
    {
        id: 'q29', dim: 'So3',
        text: 'Às vezes tens claramente uma opinião negativa, mas guardas para ti. Porquê, normalmente?',
        options: [
            { label: 'Isso raramente acontece. Eu digo', value: 1 },
            { label: 'Não quero criar constrangimento', value: 2 },
            { label: 'Prefiro não mostrar o quão sombrios podem ser os meus pensamentos', value: 3 }
        ]
    },
    {
        id: 'q30', dim: 'So3',
        text: 'Mostro lados diferentes de mim a pessoas diferentes.',
        options: [
            { label: 'Discordo', value: 1 },
            { label: 'Neutro', value: 2 },
            { label: 'Concordo', value: 3 }
        ]
    }
];

const specialQuestions = [
    {
        id: 'drink_gate_q1',
        special: true,
        kind: 'drink_gate',
        text: 'Qual destas opções parece mais o teu modo normal?',
        options: [
            { label: 'Comer, dormir e sobreviver', value: 1 },
            { label: 'Hobbies artísticos', value: 2 },
            { label: 'Beber', value: 3 },
            { label: 'Treinar', value: 4 }
        ]
    },
    {
        id: 'drink_gate_q2',
        special: true,
        kind: 'drink_trigger',
        text: 'Honestamente, como é a tua relação com o álcool?',
        options: [
            { label: 'Gosto de beber, mas tenho limites', value: 1 },
            { label: 'Às vezes trato a bebida como apoio emocional líquido', value: 2 }
        ]
    }
];

const TYPE_LIBRARY = {
    CTRL: { code: 'CTRL', name: 'O Desenrascado', intro: 'Sim, afinal o save file está contigo.', desc: 'Tu és a pessoa a quem ligam quando a vida começa a falhar. As regras parecem opcionais, os planos são editáveis e o caos, estranhamente, torna-se gerível quando lhe metes as mãos. Não és necessariamente o mais barulhento, mas és perigosamente eficaz.' },
    'ATM-er': { code: 'ATM-er', name: 'O Pagador', intro: 'Tenho cara de multibanco ilimitado?', desc: 'Talvez não sejas literalmente feito de dinheiro, mas acabas sempre a pagar de alguma forma: com tempo, energia, paciência, atenção ou o último resto da tua bateria mental. És fiável até demais e distribuis estabilidade como se viesse de graça.' },
    'Dior-s': { code: 'Dior-s', name: 'O Filósofo da Cave', intro: 'A minha fase de flop é, na verdade, uma visão do mundo.', desc: 'Tu não és preguiçoso, és espiritualmente pouco convencido pelo marketing da vida moderna. Olhaste para a cultura da produtividade, para a adoração do estatuto e para a obsessão com performance e pensaste: isto é prisão com branding mais bonito.' },
    BOSS: { code: 'BOSS', name: 'O Condutor', intro: 'Dá-me o volante. Eu trato disto.', desc: 'Tens energia de chefia mesmo quando não estás a tentar. Gostas de direção, de movimento e de competência. Quando uma situação começa a fugir do rumo, o teu instinto não é debater eternamente. É agarrar no volante e endireitar a coisa.' },
    'THAN-K': { code: 'THAN-K', name: 'A Máquina de Gratidão', intro: 'Queria agradecer à academia e também a este trânsito infernal.', desc: 'Consegues encontrar pontos de luz em situações que fariam outra pessoa atirar um sapato à parede. Uns chamam-lhe otimismo. Outros acham suspeito. Seja como for, tens talento para encontrar oxigénio emocional em ambientes abafados.' },
    'OH-NO': { code: 'OH-NO', name: 'O Catastrofista', intro: 'Ai não. Porque é que isto está tão certo?', desc: 'Tu és basicamente um departamento de gestão de risco em forma humana. Um copo mal pousado e já simulaste danos de água, curto-circuito, chamadas para a seguradora e uma lição de vida caríssima. Irritante? Às vezes. Útil? Muito.' },
    GOGO: { code: 'GOGO', name: 'O Bulldozer', intro: 'Pronto. Bora andar.', desc: 'Tu acreditas em impulso quase como outras pessoas acreditam em religião. Não estás aqui para discutir o ambiente durante três horas. Estás aqui para mexer na lista de tarefas. Quando os outros ainda estão a processar, tu já empurraste tudo para a fase seguinte.' },
    SEXY: { code: 'SEXY', name: 'O Protagonista', intro: 'Infelizmente, a tua aura entrou na sala antes de ti.', desc: 'Chamas atenção de uma forma que parece menos esforço e mais fenómeno meteorológico. As pessoas notam-te, projetam coisas em ti e por vezes deixam de funcionar à tua volta. Nem precisas de representar grande coisa. Muitas vezes basta existires.' },
    'LOVE-R': { code: 'LOVE-R', name: 'O Romântico Perdido', intro: 'A tua largura de banda emocional é um exagero.', desc: 'Tu não foste feito para casual vibes. Foste feito para saudade, projeção, simbolismo e playlists emocionalmente devastadoras. Uma folha a cair vira metáfora. Uma paixão vira civilização interior.' },
    MUM: { code: 'MUM', name: 'O Colo Humano', intro: 'Queres água, um abraço ou validação?', desc: 'Tens energia de banho quente para o sistema nervoso. As pessoas sentem-se seguras ao teu lado porque lês a meteorologia emocional depressa e passas intuitivamente para modo cuidado. O problema é que és quase sempre mais meigo com os outros do que contigo.' },
    FAKE: { code: 'FAKE', name: 'O Camaleão', intro: 'Há camadas aqui. Demasiadas camadas.', desc: 'Adaptas-te tão bem ao contexto que chega a ser inquietante. Modo amigos, modo trabalho, modo charmoso, modo indisponível, trocas tudo com rapidez e limpeza. Há quem te ache falso. Na maior parte das vezes és só absurdamente consciente do ambiente.' },
    OJBK: { code: 'OJBK', name: 'O Monarca do Tanto Faz', intro: 'Eu disse tanto faz e era mesmo isso.', desc: 'Andas pela vida com o nível de investimento emocional de quem observa uma disputa menor a partir de um trono. Arroz ou massa, dentro ou fora, assim ou assado. A tua resposta costuma ser uma variação elegante de: isso para mim é irrelevante.' },
    MALO: { code: 'MALO', name: 'O Gremlin do Caos', intro: 'A civilização não foi desenhada para o teu espírito.', desc: 'Há uma parte de ti que nunca saiu do ramo da árvore. És brincalhão, indomável e desconfiado de tudo o que seja demasiado polido ou demasiado sério. Se a vida parece um jogo mal desenhado, o teu instinto é ignorar o tutorial e subir ao cenário.' },
    'JOKE-R': { code: 'JOKE-R', name: 'O Palhaço Triste', intro: 'Afinal a piada era autodefesa emocional.', desc: 'És engraçado da mesma forma que uma tempestade pode ser bonita: alto, teatral e ligeiramente preocupante. Manténs o ambiente vivo com timing e humor, mas a comédia funciona muitas vezes como armadura. Se toda a gente ri o suficiente, ninguém pergunta o que está por baixo.' },
    'WOC!': { code: 'WOC!', name: 'O Que Raio', intro: 'Mas como é que eu fui sacar este?', desc: 'Reages alto, mas pensas com clareza. Por fora: caos, exclamações, incredulidade. Por dentro: excelente leitura de padrões. Sabes quando uma coisa é parva e normalmente expressas isso com um som muito sentido.' },
    'THIN-K': { code: 'THIN-K', name: 'O Overthinker', intro: 'Espera. A análise ainda está a carregar.', desc: 'O teu cérebro não faz scroll, faz auditorias. Não consumes informação, inspecionas premissas, enviesamentos, estrutura, motivo e até se o autor devia ter tocado num teclado. Pensar não é um passatempo para ti. É o sistema operativo.' },
    SHIT: { code: 'SHIT', name: 'O Competente Furioso', intro: 'Está tudo péssimo. Eu resolvo na mesma.', desc: 'Tu queixas-te como se o mundo te tivesse ofendido pessoalmente e depois vais arrumar a confusão melhor do que toda a gente. O teu tom diz apocalipse. O teu comportamento diz gestor de projeto com raiva acumulada. E, apesar disso, as coisas acabam feitas.' },
    ZZZZ: { code: 'ZZZZ', name: 'O Rei da Suspensão', intro: 'Eu não estou morto. Estou em modo poupança.', desc: 'Podes ignorar noventa e nove notificações, três prazos e um pequeno incêndio social, mas no instante do último alarme levantas-te do túmulo e entregas algo surpreendentemente decente. A tua relação com a urgência é tóxica, mas estranhamente funcional.' },
    POOR: { code: 'POOR', name: 'O Laser', intro: 'Eu não sou pobre em recursos. Sou concentrado.', desc: 'Só pareces com pouca energia porque te recusas a espalhá-la. Enquanto os outros dispersam esforço por cem pequenas coisas, tu comprimes o teu numa só linha e atravessas o que interessa. Visto de longe parece escassez. Visto de perto é foco.' },
    MONK: { code: 'MONK', name: 'O Monge das Fronteiras', intro: 'Não, neste momento não tenho necessidades mundanas.', desc: 'Tratas o espaço pessoal como solo sagrado. A solidão não te parece um defeito, mas manutenção, clareza, paz e talvez sobrevivência. Consegues gostar muito de alguém sem querer essa pessoa no teu salão psíquico vinte e quatro horas por dia.' },
    IMSB: { code: 'IMSB', name: 'O Colapso Interno', intro: 'Sê sincero: eu estou mesmo frito?', desc: 'Dentro de ti vivem dois inimigos eternos: um quer arriscar e avançar, o outro quer escrever antecipadamente o teu obituário social. Tu não estás condenado. Só produzes cinema interno em quantidade catastrófica antes de qualquer decisão emocionalmente relevante.' },
    SOLO: { code: 'SOLO', name: 'O Ouriço', intro: 'Porque é que isto me arrastou tão bem?', desc: 'Proteges-te parecendo mais duro, mais frio e mais distante do que muitas vezes és. Os espinhos são reais, mas não existem porque odeias proximidade. Existem porque a proximidade parece perigosa quando te importas demais.' },
    FUCK: { code: 'FUCK', name: 'O Feral', intro: 'Mas que raio de resultado é este?', desc: 'Tu és impulso cru, caos, apetite e força vital com problemas de contenção. As regras sociais parecem-te muitas vezes decorativas. Oscilas com força entre claro que sim e nem pensar, e quando estás vivo a sério pareces alguém que nunca foi suposto caber dentro de uma vedação.' },
    DEAD: { code: 'DEAD', name: 'O Espiritualmente Offline', intro: 'Ainda estou ligado emocionalmente ou já não?', desc: 'Dás a sensação de alguém que jogou este mapa vezes demais e deixou de se impressionar. O desejo está mais baixo, o espetáculo está mais baixo e o ruído do mundo aparece como estática. Não estás necessariamente vazio. Estás profundamente pouco convencido.' },
    IMFW: { code: 'IMFW', name: 'O Alvo Fácil', intro: 'Espera... eu sou mesmo assim tão fácil de magoar?', desc: 'Tu ligas-te depressa, confias a sério e dás significado às coisas antes de a tua equipa de segurança interna autorizar a entrada. Isso não é fraqueza. É ternura num mundo que confunde ternura com convite à negligência.' },
    HHHH: { code: 'HHHH', name: 'O Goblin do Glitch', intro: 'Ha. Ha ha. Então e tu, afinal, és o quê?', desc: 'Parabéns. Tu avariaste o sistema. As tuas respostas foram tão magnificamente estranhas que a biblioteca normal de personalidades se demitiu, apresentou queixa e deixou-te com o título honorário de Goblin do Glitch. Respeitamos, tememos e não conseguimos explicar bem.' },
    DRUNK: { code: 'DRUNK', name: 'O Goblin do Álcool', intro: 'A personalidade escondida entrou no chat.', desc: 'Este resultado só aparece quando acorda o goblin do álcool. A lógica normal da personalidade foi temporariamente substituída por caos fermentado, confiança líquida e uma relação emocional suspeitamente forte com más ideias. Bebe água e não mandes mensagem ao ex.' }
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
    S1: { L: 'És mais duro contigo do que a maioria dos inimigos se daria ao trabalho de ser.', M: 'A tua confiança depende muito do contexto, do timing e do estado do dia.', H: 'Tens noção do teu valor e não te desmanchas assim tão facilmente.' },
    S2: { L: 'O teu sinal interno pode ficar meio desfocado. A identidade às vezes entra em buffering.', M: 'Normalmente reconheces quem és, a não ser que o humor te roube a sessão.', H: 'Tens uma leitura sólida das tuas motivações, limites e padrões.' },
    S3: { L: 'Conforto e segurança costumam pesar mais do que grandes ambições.', M: 'Uma parte de ti quer crescer; outra quer uma manta e paz.', H: 'Objetivos, progresso e sentido empurram-te com bastante força.' },
    E1: { L: 'O teu sistema de alarme relacional é absurdamente sensível.', M: 'Metade confiança, metade suspeita. O teu coração vive em negociação.', H: 'Tens mais tendência para confiar na ligação do que para entrar em pânico a cada falha.' },
    E2: { L: 'Tu investes com cautela. A porta não está fechada, está só muito trancada.', M: 'Consegues comprometer-te, mas normalmente com um plano emocional de emergência.', H: 'Quando gostas de alguém, gostas mesmo e pões energia nisso.' },
    E3: { L: 'Calor, proximidade e disponibilidade emocional importam-te bastante.', M: 'Queres intimidade e independência em proporções ajustáveis.', H: 'Mesmo apaixonado, precisas de um território teu e bem teu.' },
    A1: { L: 'Entras no mundo primeiro com desconfiança defensiva.', M: 'Não és ingénuo, mas também não vives em teoria da conspiração total.', H: 'Ainda deixas espaço para as pessoas e o mundo serem decentes.' },
    A2: { L: 'Dobras regras com facilidade se a liberdade ou o conforto estiverem em causa.', M: 'Consegues seguir estrutura, mas não és escravo dela.', H: 'Ordem e processo fazem-te sentido. Caos improvisado não.' },
    A3: { L: 'O sentido pode parecer fino e a vida demasiado performativa.', M: 'Nuns dias tens direção. Noutros, estás espiritualmente de folga.', H: 'Tendes a sentir um rumo mais claro e um sentido pessoal mais firme.' },
    Ac1: { L: 'O teu primeiro instinto é muitas vezes controlar risco, não correr para a glória.', M: 'Às vezes queres ganhar. Outras só queres menos problemas.', H: 'Resultados, crescimento e avanço acendem-te depressa.' },
    Ac2: { L: 'Decidir para ti implica muitas vezes demasiados separadores abertos na cabeça.', M: 'Tu pensas as coisas, mas sem chegar sempre a colapso total.', H: 'Decides rápido e não gostas de andar sempre a revisitar tudo.' },
    Ac3: { L: 'A tua execução tem uma ligação tóxica, mas apaixonada, com prazos finais.', M: 'Consegues agir, mas o timing e o humor contam muito.', H: 'Se algo fica por acabar, isso fica a raspar-te no cérebro.' },
    So1: { L: 'A iniciativa social precisa de aquecimento e talvez uma oração.', M: 'Consegues acompanhar o ambiente, mas raramente forças a sala.', H: 'Tens mais facilidade em abrir a interação por ti mesmo.' },
    So2: { L: 'Quando confias em alguém, a proximidade pode parecer-te muito natural.', M: 'Queres proximidade e ar em quantidades variáveis.', H: 'O teu sistema de limites é forte. Afastas-te antes de te sentires encurralado.' },
    So3: { L: 'És mais direto do que filtrado. Se sentes, isso acaba por sair.', M: 'Equilibras verdade e suavidade social consoante o contexto.', H: 'És bom a mostrar camadas diferentes de ti em contextos diferentes.' }
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
        console.warn('Não foi possível carregar os cartazes da versão portuguesa.', error);
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
    if (q.special) return 'Pergunta bónus';
    return app.previewMode ? dimensionMeta[q.dim].name : 'Dimensão oculta';
}

function renderQuestions() {
    const visibleQuestions = getVisibleQuestions();
    questionList.innerHTML = '';

    visibleQuestions.forEach((q, index) => {
        const card = document.createElement('article');
        card.className = 'question';
        card.innerHTML = `
          <div class="question-meta">
            <div class="badge">Pergunta ${index + 1}</div>
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
        ? 'Tudo respondido. Já podes entregar a tua alma digital à página de resultado.'
        : 'Não dá para fugir. Acaba o teste até ao fim. O mundo já está confuso o suficiente.';
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
    let modeKicker = 'O teu tipo principal';
    let badge = `Correspondência ${bestNormal.similarity}% · acertos exatos ${bestNormal.exact}/15`;
    let sub = 'Esta é a tua correspondência mais forte nas quinze dimensões.';
    let special = false;
    let secondaryType = null;

    if (drunkTriggered) {
        finalType = TYPE_LIBRARY.DRUNK;
        secondaryType = bestNormal;
        modeKicker = 'Personalidade escondida desbloqueada';
        badge = 'Correspondência 100% · o etanol assumiu o volante';
        sub = 'As tuas definições alcoólicas sobrepuseram-se temporariamente à personalidade normal.';
        special = true;
    } else if (bestNormal.similarity < 60) {
        finalType = TYPE_LIBRARY.HHHH;
        modeKicker = 'Modo de emergência do sistema';
        badge = `A melhor correspondência normal só chegou a ${bestNormal.similarity}%`;
        sub = 'A biblioteca normal de tipos desistiu do teu cérebro e atirou-te para HHHH.';
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
              <div class="dim-item-score">${level} / ${result.rawScores[dim]} pts</div>
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
        ? 'Este teste é só para diversão. Personalidades escondidas e tipos de emergência foram adicionados de propósito para criar caos. Não o trates como psicologia, medicina, verdade espiritual ou prova jurídica.'
        : 'Este teste é só para diversão. Não o uses para diagnósticos, contratações, relações, separações, sessões espíritas ou grandes decisões de vida. Ri com responsabilidade.';

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
