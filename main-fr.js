const dimensionMeta = {
    S1: { name: "S1 Estime de soi", model: "Modele de soi" },
    S2: { name: "S2 Clarte personnelle", model: "Modele de soi" },
    S3: { name: "S3 Moteur profond", model: "Modele de soi" },
    E1: { name: "E1 Securite affective", model: "Modele emotionnel" },
    E2: { name: "E2 Intensite emotionnelle", model: "Modele emotionnel" },
    E3: { name: "E3 Limites et dependance", model: "Modele emotionnel" },
    A1: { name: "A1 Vision du monde", model: "Modele d'attitude" },
    A2: { name: "A2 Regles vs liberte", model: "Modele d'attitude" },
    A3: { name: "A3 Sens et direction", model: "Modele d'attitude" },
    Ac1: { name: "Ac1 Style de motivation", model: "Modele d'action" },
    Ac2: { name: "Ac2 Style de decision", model: "Modele d'action" },
    Ac3: { name: "Ac3 Mode execution", model: "Modele d'action" },
    So1: { name: "So1 Initiative sociale", model: "Modele social" },
    So2: { name: "So2 Distance relationnelle", model: "Modele social" },
    So3: { name: "So3 Expression et authenticite", model: "Modele social" }
};

const questions = [
    {
        id: "q1", dim: "S1",
        text: "Tu n'es pas juste celibataire. Tu es un PNJ anxieux avec une estime de toi bancale et un doctorat en delire romantique. Dans ta tete, ta jeunesse ressemble a un film que tu n'as jamais vraiment vecu, pendant que tout le monde avait l'air normal sur Insta. Honnetement, est-ce que ca pique un peu ?",
        options: [
            { label: "C'est beaucoup trop specifique", value: 1 },
            { label: "Oula... c'est violent", value: 2 },
            { label: "Non, pas du tout moi", value: 3 }
        ]
    },
    {
        id: "q2", dim: "S1",
        text: "J'ai souvent l'impression que les autres sont plus impressionnants que moi.",
        options: [
            { label: "Oui, clairement", value: 1 },
            { label: "Parfois", value: 2 },
            { label: "Pas vraiment", value: 3 }
        ]
    },
    {
        id: "q3", dim: "S2",
        text: "J'ai une idee assez claire de qui je suis vraiment.",
        options: [
            { label: "Pas d'accord", value: 1 },
            { label: "Neutre", value: 2 },
            { label: "D'accord", value: 3 }
        ]
    },
    {
        id: "q4", dim: "S2",
        text: "Au fond, je sais ce qui compte sincerement pour moi.",
        options: [
            { label: "Pas d'accord", value: 1 },
            { label: "Neutre", value: 2 },
            { label: "D'accord", value: 3 }
        ]
    },
    {
        id: "q5", dim: "S3",
        text: "J'ai vraiment envie d'evoluer et de devenir une version plus solide de moi-meme.",
        options: [
            { label: "Pas d'accord", value: 1 },
            { label: "Neutre", value: 2 },
            { label: "D'accord", value: 3 }
        ]
    },
    {
        id: "q6", dim: "S3",
        text: "L'avis des autres ne pilote pas vraiment toute ma vie.",
        options: [
            { label: "Pas d'accord", value: 1 },
            { label: "Neutre", value: 2 },
            { label: "D'accord", value: 3 }
        ]
    },
    {
        id: "q7", dim: "E1",
        text: "Ton ou ta partenaire n'a pas repondu depuis 5 heures et dit avoir eu une intoxication alimentaire. Ta premiere pensee ?",
        options: [
            { label: "Cinq heures ? Cette histoire sent un peu bizarre.", value: 1 },
            { label: "J'hesite entre confiance et suspicion.", value: 2 },
            { label: "Peut-etre que la personne va vraiment mal.", value: 3 }
        ]
    },
    {
        id: "q8", dim: "E1",
        text: "En amour, j'ai souvent peur d'etre abandonne.",
        options: [
            { label: "Oui", value: 1 },
            { label: "Parfois", value: 2 },
            { label: "Non", value: 3 }
        ]
    },
    {
        id: "q9", dim: "E2",
        text: "Quand je dis que je prends l'amour au serieux, je le pense vraiment.",
        options: [
            { label: "Franchement, pas toujours", value: 1 },
            { label: "Bof, ca depend", value: 2 },
            { label: "Oui, completement", value: 3 }
        ]
    },
    {
        id: "q10", dim: "E2",
        text: "Imagine une personne incroyablement gentille, drole, mature, brillante, fidele, sublime, et en plus tres amoureuse de toi. Qu'est-ce qui se passe ?",
        options: [
            { label: "Je ne me laisserais quand meme pas aller a fond.", value: 1 },
            { label: "Je serais quelque part entre les deux.", value: 2 },
            { label: "Je tomberais dedans tres fort, evidemment.", value: 3 }
        ]
    },
    {
        id: "q11", dim: "E3",
        text: "Tu commences a sortir avec quelqu'un et la personne devient tres collante. Ta reaction honnete ?",
        options: [
            { label: "En vrai, j'aime plutot bien ca.", value: 1 },
            { label: "Ca depend du contexte.", value: 2 },
            { label: "S'il te plait, laisse-moi respirer.", value: 3 }
        ]
    },
    {
        id: "q12", dim: "E3",
        text: "Dans n'importe quelle relation, mon espace perso compte beaucoup.",
        options: [
            { label: "Je prefere la fusion et la dependance mutuelle.", value: 1 },
            { label: "Ca depend de la personne.", value: 2 },
            { label: "Oui, c'est non negociable.", value: 3 }
        ]
    },
    {
        id: "q13", dim: "A1",
        text: "La plupart des gens sont globalement corrects.",
        options: [
            { label: "C'est tres optimiste, ca.", value: 1 },
            { label: "Peut-etre.", value: 2 },
            { label: "Oui, j'y crois encore.", value: 3 }
        ]
    },
    {
        id: "q14", dim: "A1",
        text: "Tu marches dans la rue, un enfant absurdement mignon s'approche et te tend une sucette. Aucun adulte visible, juste une energie adorable. Tu reagis comment ?",
        options: [
            { label: "C'est la chose la plus mignonne que j'ai vue cette semaine.", value: 3 },
            { label: "Je suis tres confus.", value: 2 },
            { label: "On dirait le debut d'une arnaque de documentaire.", value: 1 }
        ]
    },
    {
        id: "q15", dim: "A2",
        text: "C'est la semaine des exams, tu dois aller en revision obligatoire, mais ton crush te propose une session League of Legends ce soir. Tu fais quoi ?",
        options: [
            { label: "Je seche. Une soiree ne va pas me tuer.", value: 1 },
            { label: "Je vais probablement tenter une excuse.", value: 2 },
            { label: "Semaine d'exams. Je reste serieux.", value: 3 }
        ]
    },
    {
        id: "q16", dim: "A2",
        text: "J'aime casser la routine et je deteste me sentir enferme.",
        options: [
            { label: "D'accord", value: 1 },
            { label: "Neutre", value: 2 },
            { label: "Pas d'accord", value: 3 }
        ]
    },
    {
        id: "q17", dim: "A3",
        text: "J'ai en general une direction dans la vie, meme si les details restent flous.",
        options: [
            { label: "Pas d'accord", value: 1 },
            { label: "Neutre", value: 2 },
            { label: "D'accord", value: 3 }
        ]
    },
    {
        id: "q18", dim: "A3",
        text: "Parfois je regarde la vie et je me dis que tout ca n'est qu'un melange d'hormones, de fatigue, de faim et de chaos qui essaie de se faire passer pour du sens.",
        options: [
            { label: "Exactement.", value: 1 },
            { label: "Ca depend des jours.", value: 2 },
            { label: "Non, c'est trop cynique.", value: 3 }
        ]
    },
    {
        id: "q19", dim: "Ac1",
        text: "Je suis plus motive par la progression et la reussite que par l'evitement des ennuis.",
        options: [
            { label: "Pas d'accord", value: 1 },
            { label: "Neutre", value: 2 },
            { label: "D'accord", value: 3 }
        ]
    },
    {
        id: "q20", dim: "Ac1",
        text: "Tu es assis aux toilettes depuis 30 minutes, il ne se passe rien, et c'est maintenant un duel psychologique. Tu es plutot du genre a...",
        options: [
            { label: "Rester encore un peu. L'univers va peut-etre cooperer.", value: 1 },
            { label: "Te faire un discours de motivation absurde.", value: 2 },
            { label: "Prendre une solution pratique et avancer.", value: 3 }
        ]
    },
    {
        id: "q21", dim: "Ac2",
        text: "J'ai tendance a prendre des decisions vite et je n'aime pas trop trainer.",
        options: [
            { label: "Pas d'accord", value: 1 },
            { label: "Neutre", value: 2 },
            { label: "D'accord", value: 3 }
        ]
    },
    {
        id: "q22", dim: "Ac2",
        text: "Il n'y a aucune vraie question ici. Choisis au hasard et accepte ton destin.",
        options: [
            { label: "A me semble bizarrement juste.", value: 1 },
            { label: "Bon, allons sur B.", value: 2 },
            { label: "Dans le doute, C.", value: 3 }
        ]
    },
    {
        id: "q23", dim: "Ac3",
        text: "Quand on te dit que tu as une grosse capacite d'execution, ta reaction interieure ressemble a quoi ?",
        options: [
            { label: "Seulement quand la panique et les deadlines s'allient.", value: 1 },
            { label: "Parfois, oui.", value: 2 },
            { label: "Oui. Les choses doivent avancer.", value: 3 }
        ]
    },
    {
        id: "q24", dim: "Ac3",
        text: "Je fais generalement des plans, puis...",
        options: [
            { label: "La realite leur met un tacle glisse direct.", value: 1 },
            { label: "Certains marchent, d'autres non.", value: 2 },
            { label: "Ca m'agace beaucoup quand le plan se fait detruire.", value: 3 }
        ]
    },
    {
        id: "q25", dim: "So1",
        text: "Tu t'es fait des amis sur VALORANT, et maintenant ils veulent te rencontrer en vrai. Ton premier reflexe ?",
        options: [
            { label: "Le vocal, c'est une chose. L'IRL, c'en est une autre.", value: 1 },
            { label: "Pourquoi pas. Je verrai selon l'ambiance.", value: 2 },
            { label: "Je m'habille bien et j'y vais avec energie.", value: 3 }
        ]
    },
    {
        id: "q26", dim: "So1",
        text: "Un ami ramene un de ses amis dans votre groupe. Quelle version de toi apparait ?",
        options: [
            { label: "Je garde instinctivement une petite distance.", value: 1 },
            { label: "Si le feeling passe, ca va.", value: 2 },
            { label: "L'ami de mon ami est deja a moitie dans l'equipe.", value: 3 }
        ]
    },
    {
        id: "q27", dim: "So2",
        text: "Je suis un peu une cloture electrique en forme humaine. Si on s'approche trop, l'alarme sonne.",
        options: [
            { label: "D'accord", value: 3 },
            { label: "Neutre", value: 2 },
            { label: "Pas d'accord", value: 1 }
        ]
    },
    {
        id: "q28", dim: "So2",
        text: "Avec les gens en qui j'ai confiance, je veux une vraie proximite, presque trop familiere.",
        options: [
            { label: "D'accord", value: 1 },
            { label: "Neutre", value: 2 },
            { label: "Pas d'accord", value: 3 }
        ]
    },
    {
        id: "q29", dim: "So3",
        text: "Parfois tu as clairement une opinion negative sur quelque chose, mais tu la gardes pour toi. Pourquoi, generalement ?",
        options: [
            { label: "Ca m'arrive rarement.", value: 1 },
            { label: "Je n'ai pas envie de plomber l'ambiance.", value: 2 },
            { label: "Je prefere ne pas montrer a quel point mes pensees peuvent etre sombres.", value: 3 }
        ]
    },
    {
        id: "q30", dim: "So3",
        text: "Je montre des facettes differentes de moi selon les personnes.",
        options: [
            { label: "Pas d'accord", value: 1 },
            { label: "Neutre", value: 2 },
            { label: "D'accord", value: 3 }
        ]
    }
];

const specialQuestions = [
    {
        id: "drink_gate_q1",
        special: true,
        kind: "drink_gate",
        text: "Laquelle te ressemble le plus au quotidien ?",
        options: [
            { label: "Manger, dormir, survivre", value: 1 },
            { label: "Des loisirs un peu artistiques", value: 2 },
            { label: "Boire", value: 3 },
            { label: "Le sport", value: 4 }
        ]
    },
    {
        id: "drink_gate_q2",
        special: true,
        kind: "drink_trigger",
        text: "Ton rapport a l'alcool, honnetement ?",
        options: [
            { label: "Un ou deux verres, c'est sympa. J'ai des limites.", value: 1 },
            { label: "Je traite l'alcool comme un disque dur emotionnel externe.", value: 2 }
        ]
    }
];

const TYPE_LIBRARY = {
    CTRL: { code: "CTRL", name: "Le pilote", intro: "Oui. Tu tiens vraiment la sauvegarde.", desc: "Quand la vie commence a buguer, on finit souvent par t'appeler. Les regles te semblent negotiables, les plans modifiables, et le chaos devient etrangement gerable quand tu poses la main dessus. Tu n'es pas forcement bruyant, juste redoutablement efficace." },
    "ATM-er": { code: "ATM-er", name: "Le portefeuille humain", intro: "J'ai une tete a payer pour tout le monde ?", desc: "Tu n'es pas litteralement fait d'argent, mais tu es quand meme souvent celui ou celle qui paie: en temps, en patience, en energie, en charge mentale, parfois meme avec ton dernier neurone encore fonctionnel. Tu distribues de la stabilite comme si c'etait gratuit." },
    "Dior-s": { code: "Dior-s", name: "Le philosophe de cave", intro: "Ma periode de loose, c'est un systeme de pensee.", desc: "Tu n'es pas paresseux. Tu es juste spirituellement peu convaincu par le discours de vente de la vie moderne. Tu as regarde la culture du hustle, l'obsession de la productivite et les jeux de statut, puis tu as conclu en silence qu'une bonne partie de tout ca ressemble a de la prison avec un meilleur branding." },
    BOSS: { code: "BOSS", name: "Le conducteur", intro: "Donne-moi le volant. Je gere.", desc: "Tu degages une energie de chef meme quand tu n'essaies pas. Tu aimes la direction, le mouvement et la competence. Quand quelque chose part en vrille, ton instinct n'est pas d'en parler trois heures. Ton instinct, c'est de reprendre le volant et d'atterrir le truc." },
    "THAN-K": { code: "THAN-K", name: "La machine a gratitude", intro: "Je remercie l'academie et aussi ce bouchon.", desc: "Tu arrives a trouver des lueurs positives dans des situations qui donneraient envie a d'autres de lancer une chaussure. Certains appellent ca de l'optimisme. D'autres trouvent ca suspect. Dans tous les cas, tu sais produire de l'oxygene emotionnel dans un air rassis." },
    "OH-NO": { code: "OH-NO", name: "La sirene d'alerte", intro: "Oh non. Pourquoi c'est si precis ?", desc: "Tu es un service de gestion des risques deguisé en personne. Un verre mal pose et tu as deja simule les degats des eaux, la panne electrique, l'appel a l'assurance et la facture. Penible ? Peut-etre. Utile ? Absolument." },
    GOGO: { code: "GOGO", name: "Le bulldozer", intro: "Bon. On avance.", desc: "Tu crois a l'elan comme d'autres croient a la religion. Tu n'es pas la pour sur-analyser l'ambiance. Tu es la pour faire avancer la liste des choses a faire. Pendant que les autres sont encore en train de process, toi tu as deja pousse la situation a l'etape suivante." },
    SEXY: { code: "SEXY", name: "Le personnage principal", intro: "Malheureusement, ton aura est entree dans la piece avant toi.", desc: "Tu attires l'attention d'une facon qui ressemble moins a un effort qu'a un phenomene meteo. Les gens te remarquent, projettent sur toi, et buguent parfois a proximite. Tu n'as meme pas besoin de performer. Exister suffit souvent." },
    "LOVE-R": { code: "LOVE-R", name: "Le romantique catastrophe", intro: "Ta bande passante emotionnelle est franchement excessive.", desc: "Tu n'as pas ete concu pour les ambiances casual. Tu as ete concu pour le manque, la projection, le symbolisme et les playlists devastatrices. Une feuille qui tombe peut devenir une metaphore. Un crush peut devenir une civilisation interieure." },
    MUM: { code: "MUM", name: "Le parent reconfort", intro: "Tu veux de l'eau, de la validation, ou les deux ?", desc: "Tu as une energie de bain chaud pour systeme nerveux. Les gens se sentent vite en securite avec toi parce que tu captes rapidement la meteo emotionnelle et tu passes instinctivement en mode soin. Le souci, c'est que tu reserves souvent plus de douceur aux autres qu'a toi-meme." },
    FAKE: { code: "FAKE", name: "Le metamorphe", intro: "Il y a des couches ici. Beaucoup trop de couches.", desc: "Tu t'adaptes au contexte a un niveau presque inquietant. Mode amis, mode travail, mode charme, mode indisponibilite emotionnelle: tu switches vite et proprement. Certains te trouvent faux. Le plus souvent, tu es juste absurdement conscient de la piece." },
    OJBK: { code: "OJBK", name: "Le monarque du bof", intro: "J'ai dit 'comme tu veux', et je le pensais.", desc: "Tu traverses la vie avec le niveau d'implication emotionnelle d'une personne royale qui observe des conflits paysans. Riz ou pates ? Terrasse ou interieur ? Ta reponse est souvent une version elegante de: tout cela est en dessous de moi." },
    MALO: { code: "MALO", name: "Le gremlin du chaos", intro: "La civilisation n'a pas ete concue pour ton esprit.", desc: "Une partie de toi n'est jamais vraiment descendue de la branche. Tu es joueur, ingouvernable, et tu te mefies de tout ce qui est trop lisse ou trop serieux. Si la vie ressemble a un jeu mal designé, ton reflexe est de sauter le tutoriel et grimper sur le decor." },
    "JOKE-R": { code: "JOKE-R", name: "Le clown triste", intro: "En fait, la vanne etait un mecanisme de defense.", desc: "Tu es drole comme une tempete peut etre belle: bruyant, theatral, legerement inquietant. Tu maintiens les pieces en vie a coups de blagues et de timing, mais l'humour fait souvent aussi office d'armure. Si les gens rient assez fort, personne ne demande ce qu'il y a dessous." },
    "WOC!": { code: "WOC!", name: "La personne 'mais quoi ?'", intro: "Mais quoi ? Comment j'ai eu celui-la ?", desc: "Tu reagis fort, mais tu penses en silence. A l'exterieur: chaos, exclamations, incredulite. A l'interieur: reconnaissance de schemas tres nette. Tu reperes vite ce qui ne tient pas debout, et tu l'exprimes souvent par un grand bruit tres sincere." },
    "THIN-K": { code: "THIN-K", name: "Le cerveau en suranalyse", intro: "Merci de patienter. Analyse toujours en cours.", desc: "Ton cerveau ne navigue pas, il audite. Tu ne consommes pas juste l'information; tu inspectes les premisses, les biais, la structure, l'intention, et tu te demandes meme si l'auteur devrait etre autorise a approcher un clavier. Penser n'est pas un hobby chez toi. C'est le systeme d'exploitation." },
    SHIT: { code: "SHIT", name: "La personne competentement furieuse", intro: "Tout est nul. Je vais quand meme le reparer.", desc: "Tu rales comme si le monde t'avait personnellement offense, puis tu te retournes et tu nettoies le desastre mieux que tout le monde. Le ton emotionnel dit apocalypse; le comportement dit chef de projet avec une rage pas entierement resolue." },
    ZZZZ: { code: "ZZZZ", name: "L'artiste de l'extinction", intro: "Je ne suis pas mort. Je suis en mode economie d'energie.", desc: "Tu peux ignorer quatre-vingt-dix-neuf notifications, trois deadlines et une crise sociale, puis ressusciter au dernier moment et sortir quelque chose d'etonnamment correct. Ta relation avec l'urgence est toxique, mais etrangement productive." },
    POOR: { code: "POOR", name: "Le rayon laser", intro: "Je ne suis pas en manque de ressources. Je suis concentre.", desc: "Tu as l'air sous-alimente en energie seulement parce que tu refuses de te disperser. Pendant que les autres eparpillent leurs efforts partout, toi tu les compresses en un seul faisceau et tu transperces ce qui compte. De loin, ca ressemble a une penurie. De pres, c'est du focus." },
    MONK: { code: "MONK", name: "Le moine des frontieres", intro: "Non, je n'ai pas de besoins mondains tout de suite.", desc: "Tu traites ton espace personnel comme un lieu sacre. La solitude n'est pas pour toi un signe de casse. C'est de l'entretien, de la clarte, du calme, parfois meme de la survie. Tu peux aimer profondement sans vouloir quelqu'un dans ton salon psychique 24h sur 24." },
    IMSB: { code: "IMSB", name: "La fonte interieure", intro: "Soyons honnetes. Je suis cuit, non ?", desc: "Deux ennemis immortels vivent en toi: l'un veut se lancer, l'autre veut ecrire ton avis d'enterrement social a l'avance. Tu n'es pas condamne. Tu projettes juste une quantite catastrophique de cinema interieur avant chaque decision emotionnellement importante." },
    SOLO: { code: "SOLO", name: "Le herisson", intro: "Pourquoi je me fais autant afficher ?", desc: "Tu te proteges en paraissant plus dur, plus froid et plus detache que ce que tu ressens souvent. Les piquants sont reels, mais ils ne sont pas la parce que tu detestes la proximite. Ils sont la parce que la proximite te parait risquee quand tu tiens trop." },
    FUCK: { code: "FUCK", name: "Le sauvage", intro: "C'est quoi ce resultat, serieusement ?", desc: "Tu es impulse brute, chaos, appetit et force vitale avec un petit probleme de controle. Les regles sociales te semblent souvent decoratives. Tu oscillles fort entre 'grave oui' et 'absolument hors de question', et quand tu es pleinement vivant, tu ressembles a une personne qu'aucune cloture n'a jamais ete capable de contenir." },
    DEAD: { code: "DEAD", name: "Le spirituellement hors ligne", intro: "Est-ce que je suis encore connecte emotionnellement ?", desc: "Tu donnes l'impression de quelqu'un qui a trop joue et n'est plus tres impressionne par la carte. Le desir est baisse, le spectacle est baisse, et le bruit du monde ressemble souvent a du parasite. Tu n'es pas forcement vide. Tu es juste profondement peu convaincu." },
    IMFW: { code: "IMFW", name: "La cible tendre", intro: "Attends... je suis vraiment aussi facile a blesser ?", desc: "Tu t'attaches vite, tu fais confiance fort, et tu attribues du sens avant meme que ton equipe de securite ait verifie le batiment. Tu n'es pas faible. Tu es juste tendre dans un monde qui prend trop souvent la tendresse pour une autorisation a etre negligent." },
    HHHH: { code: "HHHH", name: "Le gremlin de bug", intro: "Ha. Ha ha. Qu'est-ce que tu es, exactement ?", desc: "Felicitations. Tu as casse le systeme. Tes reponses etaient si joliment etranges que la bibliotheque standard des personnalites a quitte son poste, depose une plainte, puis t'a laisse le titre honorifique de gremlin de bug. On respecte ca, on craint ca, et on n'a pas d'explication fiable." },
    DRUNK: { code: "DRUNK", name: "Le gobelin de l'alcool", intro: "La personnalite cachee vient d'entrer dans le chat.", desc: "Ce resultat n'apparait que quand le gobelin de l'alcool prend le controle. La logique normale de ta personnalite a ete remplacee par un melange de chaos fermente, de confiance liquide et d'un rapport un peu trop passionnel aux mauvaises idees. Bois de l'eau et evite d'ecrire a ton ex." }
};

const NORMAL_TYPES = [
    { code: "CTRL", pattern: "HHH-HHH-HHH-HHH-HHH" },
    { code: "ATM-er", pattern: "LMH-HHM-MMM-LMM-MLH" },
    { code: "Dior-s", pattern: "LLM-MML-LLL-LLM-LHM" },
    { code: "BOSS", pattern: "HMH-MHH-HHM-HHH-MHM" },
    { code: "THAN-K", pattern: "MMH-HMH-HHH-MMM-HLM" },
    { code: "OH-NO", pattern: "MLM-LMM-MHH-LMM-HHH" },
    { code: "GOGO", pattern: "MMH-MHM-HMH-HHH-HLH" },
    { code: "SEXY", pattern: "MHM-HMH-HHH-HHM-HHM" },
    { code: "LOVE-R", pattern: "MLH-LHL-HLH-MLM-MLH" },
    { code: "MUM", pattern: "MMH-MHL-HMM-LMM-HLL" },
    { code: "FAKE", pattern: "HLM-MML-MLM-MLM-HLH" },
    { code: "OJBK", pattern: "MMH-MMM-HML-LMM-MML" },
    { code: "MALO", pattern: "MLH-MHM-MLH-MLH-LMH" },
    { code: "JOKE-R", pattern: "LLH-LHL-LML-LLL-MLM" },
    { code: "WOC!", pattern: "HHL-HMH-MMH-HHM-LHH" },
    { code: "THIN-K", pattern: "HHL-HMH-MLH-MHM-LHH" },
    { code: "SHIT", pattern: "HHL-HLH-LMM-HHM-LHH" },
    { code: "ZZZZ", pattern: "MHL-MLH-LML-MML-LHM" },
    { code: "POOR", pattern: "HHL-MLH-LMH-HHH-LHL" },
    { code: "MONK", pattern: "HHL-LLH-LLM-MML-LHM" },
    { code: "IMSB", pattern: "LLM-LMM-LLL-LLL-MLM" },
    { code: "SOLO", pattern: "LML-LLH-LHL-LML-LHM" },
    { code: "FUCK", pattern: "MLL-LHL-LLM-MLL-HLH" },
    { code: "DEAD", pattern: "LLL-LLM-LML-LLL-LHM" },
    { code: "IMFW", pattern: "LLH-LHL-LML-LLL-MLL" }
];

const DIM_EXPLANATIONS = {
    S1: { L: "Tu es plus dur avec toi-meme que la plupart de tes ennemis ne le seraient.", M: "Ta confiance depend beaucoup du timing, du contexte et de la meteo interieure.", H: "Tu connais globalement ta valeur et tu ne t'effondres pas si facilement." },
    S2: { L: "Ton signal interieur peut devenir flou. Le buffering identitaire n'est pas rare.", M: "Tu te reconnais plutot bien, sauf quand ton humeur vole temporairement le mot de passe.", H: "Tu lis assez bien tes propres motivations, limites et schemas." },
    S3: { L: "Le confort et la securite passent souvent avant la grande ambition.", M: "Une partie de toi veut progresser; l'autre veut un plaid et zero mails.", H: "Les objectifs, la progression et le sens te poussent assez fort vers l'avant." },
    E1: { L: "Ton systeme d'alarme relationnel est absurdement sensible.", M: "Moitie confiance, moitie suspicion. Ton coeur negocie souvent avec lui-meme.", H: "Tu fais plus facilement confiance au lien qu'a la panique." },
    E2: { L: "Tu t'investis avec prudence. La porte n'est pas fermee, juste tres securisee.", M: "Tu peux t'engager, mais souvent avec un plan de secours emotionnel.", H: "Quand tu tiens a quelqu'un, tu y mets vraiment de l'energie et du sentiment." },
    E3: { L: "La chaleur, la proximite et la disponibilite emotionnelle comptent beaucoup pour toi.", M: "Tu veux de l'intimite et de l'independance dans des proportions ajustables.", H: "Meme amoureux, tu as besoin d'un territoire clairement a toi." },
    A1: { L: "Tu abordes le monde avec une mefiance defensive en premier.", M: "Tu n'es ni naif ni completement conspirationniste.", H: "Tu laisses encore une place a l'idee que les gens et le monde peuvent etre corrects." },
    A2: { L: "Tu plies facilement les regles si ton confort ou ta liberte est en jeu.", M: "Tu peux suivre un cadre, sans pour autant t'y soumettre completement.", H: "L'ordre et la methode te paraissent assez logiques. Le chaos improvise, moins." },
    A3: { L: "Le sens peut paraitre mince. Beaucoup de choses te semblent etrangement theatrales.", M: "Certains jours tu as un cap. D'autres jours tu es spirituellement en RTT.", H: "Tu ressens plus clairement une direction et un sens personnel." },
    Ac1: { L: "Ton premier reflexe, c'est souvent de gerer le risque plutot que de viser la gloire.", M: "Parfois tu veux gagner. Parfois tu veux juste moins d'emmerdes.", H: "Les resultats, la progression et l'elan t'allument vite." },
    Ac2: { L: "Prendre une decision, chez toi, implique souvent trop d'onglets ouverts en meme temps.", M: "Tu reflechis, mais pas jusqu'a la panne totale du systeme.", H: "Tu decides vite et tu n'aimes generalement pas tourner en rond." },
    Ac3: { L: "Ton execution entretient une relation toxique mais passionnee avec les deadlines.", M: "Tu peux agir, mais l'humeur et le moment comptent beaucoup.", H: "Quand quelque chose reste inacheve, ca te gratte le cerveau." },
    So1: { L: "Prendre l'initiative socialement demande un temps de chauffe et peut-etre une priere.", M: "Tu peux suivre l'ambiance, mais rarement imposer la tienne d'emblee.", H: "Tu es plus volontiers celui ou celle qui ouvre l'interaction." },
    So2: { L: "Quand tu fais confiance, la proximite peut te sembler tres naturelle.", M: "Tu veux de la proximite et de l'air en proportions variables.", H: "Ton systeme de limites est solide. Tu prends du recul avant de te sentir coince." },
    So3: { L: "Tu es plus direct que filtre. Si tu ressens quelque chose, ca fuit facilement.", M: "Tu equilibres verite et fluidite sociale selon les contextes.", H: "Tu sais montrer differentes couches de toi selon les pieces." }
};

const dimensionOrder = ["S1", "S2", "S3", "E1", "E2", "E3", "A1", "A2", "A3", "Ac1", "Ac2", "Ac3", "So1", "So2", "So3"];
const DRUNK_TRIGGER_QUESTION_ID = "drink_gate_q2";

let TYPE_IMAGES = {};

async function loadTypeImages() {
    try {
        const source = await fetch("./main.js").then((res) => res.text());
        const match = source.match(/const TYPE_IMAGES = (\{[\s\S]*?\n\});/);
        if (match) {
            TYPE_IMAGES = new Function(`return ${match[1]}`)();
        }
    } catch (error) {
        console.warn("Impossible de charger les images de la version francaise.", error);
    }
}

const app = {
    shuffledQuestions: [],
    answers: {},
    previewMode: false
};

const screens = {
    intro: document.getElementById("intro"),
    test: document.getElementById("test"),
    result: document.getElementById("result")
};

const questionList = document.getElementById("questionList");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const submitBtn = document.getElementById("submitBtn");
const testHint = document.getElementById("testHint");

function showScreen(name) {
    Object.entries(screens).forEach(([key, el]) => {
        el.classList.toggle("active", key === name);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    const gateIndex = visible.findIndex((q) => q.id === "drink_gate_q1");
    if (gateIndex !== -1 && app.answers["drink_gate_q1"] === 3) {
        visible.splice(gateIndex + 1, 0, specialQuestions[1]);
    }
    return visible;
}

function getQuestionMetaLabel(q) {
    if (q.special) return "Question bonus";
    return app.previewMode ? dimensionMeta[q.dim].name : "Dimension cachee";
}

function renderQuestions() {
    const visibleQuestions = getVisibleQuestions();
    questionList.innerHTML = "";

    visibleQuestions.forEach((q, index) => {
        const card = document.createElement("article");
        card.className = "question";
        card.innerHTML = `
          <div class="question-meta">
            <div class="badge">Question ${index + 1}</div>
            <div>${getQuestionMetaLabel(q)}</div>
          </div>
          <div class="question-title">${q.text}</div>
          <div class="options">
            ${q.options.map((opt, i) => {
                const code = ["A", "B", "C", "D"][i] || String(i + 1);
                const checked = app.answers[q.id] === opt.value ? "checked" : "";
                return `
                <label class="option">
                  <input type="radio" name="${q.id}" value="${opt.value}" ${checked} />
                  <div class="option-code">${code}</div>
                  <div>${opt.label}</div>
                </label>
              `;
            }).join("")}
          </div>
        `;
        questionList.appendChild(card);
    });

    questionList.querySelectorAll('input[type="radio"]').forEach((input) => {
        input.addEventListener("change", (e) => {
            const { name, value } = e.target;
            app.answers[name] = Number(value);

            if (name === "drink_gate_q1") {
                if (Number(value) !== 3) {
                    delete app.answers["drink_gate_q2"];
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
        ? "C'est bon. Tu peux maintenant remettre ton ame numerique a la page des resultats."
        : "Tu ne t'echappes pas comme ca. Reponds jusqu'au bout.";
}

function sumToLevel(score) {
    if (score <= 3) return "L";
    if (score === 4) return "M";
    return "H";
}

function levelNum(level) {
    return { L: 1, M: 2, H: 3 }[level];
}

function parsePattern(pattern) {
    return pattern.replace(/-/g, "").split("");
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
    let modeKicker = "Ton type principal";
    let badge = `Compatibilite ${bestNormal.similarity}% · correspondance exacte ${bestNormal.exact}/15`;
    let sub = "C'est ton match le plus solide sur les quinze dimensions pour l'instant.";
    let special = false;
    let secondaryType = null;

    if (drunkTriggered) {
        finalType = TYPE_LIBRARY.DRUNK;
        secondaryType = bestNormal;
        modeKicker = "Personnalite cachee debloquee";
        badge = "Compatibilite 100% · l'ethanol a pris le volant";
        sub = "Tes reglages lies a l'alcool ont ecrase le pipeline de personnalite standard.";
        special = true;
    } else if (bestNormal.similarity < 60) {
        finalType = TYPE_LIBRARY.HHHH;
        modeKicker = "Mode secours du systeme";
        badge = `Le meilleur match standard n'a atteint que ${bestNormal.similarity}%`;
        sub = "La bibliotheque standard des types a abandonne face a ton cerveau et t'a range en HHHH.";
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
    const dimList = document.getElementById("dimList");
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
    }).join("");
}

function renderPoster(type) {
    const posterBox = document.getElementById("posterBox");
    const posterImage = document.getElementById("posterImage");
    const imageSrc = TYPE_IMAGES[type.code];
    if (imageSrc) {
        posterImage.src = imageSrc;
        posterImage.alt = `${type.code} (${type.name})`;
        posterBox.classList.remove("no-image");
    } else {
        posterImage.removeAttribute("src");
        posterImage.alt = "";
        posterBox.classList.add("no-image");
    }
}

function renderResult() {
    const result = computeResult();
    const type = result.finalType;

    document.getElementById("resultModeKicker").textContent = result.modeKicker;
    document.getElementById("resultTypeName").textContent = `${type.code} (${type.name})`;
    document.getElementById("matchBadge").textContent = result.badge;
    document.getElementById("resultTypeSub").textContent = result.sub;
    document.getElementById("resultDesc").textContent = type.desc;
    document.getElementById("posterCaption").textContent = type.intro;
    document.getElementById("funNote").textContent = result.special
        ? "Ce test est fait pour rire. Les personnalites cachees et les types de secours ont ete ajoutes exprès pour le chaos. Merci de ne pas prendre ca pour de la psychologie, de la medecine, une verite cosmique ou une preuve juridique."
        : "Ce test est fait pour s'amuser. Merci de ne pas l'utiliser pour un diagnostic, un recrutement, une relation, une rupture, une seance de spiritisme ou une grande decision de vie.";

    renderPoster(type);
    renderDimList(result);
    showScreen("result");
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
    showScreen("test");
}

document.getElementById("startBtn").addEventListener("click", () => startTest(false));
document.getElementById("backIntroBtn").addEventListener("click", () => showScreen("intro"));
document.getElementById("submitBtn").addEventListener("click", renderResult);
document.getElementById("restartBtn").addEventListener("click", () => startTest(false));
document.getElementById("toTopBtn").addEventListener("click", () => showScreen("intro"));

loadTypeImages().then(() => {
    const defaultType = TYPE_LIBRARY.CTRL;
    renderPoster(defaultType);
});
