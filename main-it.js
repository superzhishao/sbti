const dimensionMeta = {
    S1: { name: 'S1 Autostima', model: 'Modello del se' },
    S2: { name: 'S2 Chiarezza del se', model: 'Modello del se' },
    S3: { name: 'S3 Motore interiore', model: 'Modello del se' },
    E1: { name: 'E1 Sicurezza affettiva', model: 'Modello emotivo' },
    E2: { name: 'E2 Intensita emotiva', model: 'Modello emotivo' },
    E3: { name: 'E3 Confini e dipendenza', model: 'Modello emotivo' },
    A1: { name: 'A1 Visione del mondo', model: 'Modello di atteggiamento' },
    A2: { name: 'A2 Regole vs liberta', model: 'Modello di atteggiamento' },
    A3: { name: 'A3 Senso e direzione', model: 'Modello di atteggiamento' },
    Ac1: { name: 'Ac1 Stile motivazionale', model: "Modello d'azione" },
    Ac2: { name: 'Ac2 Stile decisionale', model: "Modello d'azione" },
    Ac3: { name: 'Ac3 Modalita di esecuzione', model: "Modello d'azione" },
    So1: { name: 'So1 Iniziativa sociale', model: 'Modello sociale' },
    So2: { name: 'So2 Distanza relazionale', model: 'Modello sociale' },
    So3: { name: 'So3 Espressione e autenticita', model: 'Modello sociale' }
};

const questions = [
    {
        id: 'q1', dim: 'S1',
        text: "Non sei solo single. Sei praticamente un NPC ansioso con poca autostima e un dottorato in delirio romantico. Nella tua testa la giovinezza sembra un film che non hai mai vissuto davvero, mentre tutti gli altri su Instagram sembravano perfettamente normali. Sii onesto: questa cosa ti colpisce un po' troppo?",
        options: [
            { label: 'Perche sembra un attacco personale?', value: 1 },
            { label: 'Ok... questa era pesante.', value: 2 },
            { label: 'No, non sono io.', value: 3 }
        ]
    },
    {
        id: 'q2', dim: 'S1',
        text: 'Spesso ho la sensazione che le persone intorno a me siano piu impressionanti di me.',
        options: [
            { label: 'Si, parecchio.', value: 1 },
            { label: 'A volte.', value: 2 },
            { label: 'Non molto.', value: 3 }
        ]
    },
    {
        id: 'q3', dim: 'S2',
        text: "Ho un'idea abbastanza chiara di chi sono davvero.",
        options: [
            { label: "Non sono d'accordo", value: 1 },
            { label: 'Neutro', value: 2 },
            { label: "Sono d'accordo", value: 3 }
        ]
    },
    {
        id: 'q4', dim: 'S2',
        text: 'In fondo so bene cosa conta davvero per me.',
        options: [
            { label: "Non sono d'accordo", value: 1 },
            { label: 'Neutro', value: 2 },
            { label: "Sono d'accordo", value: 3 }
        ]
    },
    {
        id: 'q5', dim: 'S3',
        text: 'Voglio davvero migliorarmi e diventare una versione piu forte di me.',
        options: [
            { label: "Non sono d'accordo", value: 1 },
            { label: 'Neutro', value: 2 },
            { label: "Sono d'accordo", value: 3 }
        ]
    },
    {
        id: 'q6', dim: 'S3',
        text: "L'opinione degli altri non governa davvero la mia vita.",
        options: [
            { label: "Non sono d'accordo", value: 1 },
            { label: 'Neutro', value: 2 },
            { label: "Sono d'accordo", value: 3 }
        ]
    },
    {
        id: 'q7', dim: 'E1',
        text: "Il tuo partner non risponde da 5 ore e poi dice che aveva un'intossicazione alimentare. Qual e il tuo primo pensiero?",
        options: [
            { label: 'Cinque ore? Questa storia non torna.', value: 1 },
            { label: 'Sono combattuto tra fiducia e sospetto.', value: 2 },
            { label: 'Forse stava davvero malissimo.', value: 3 }
        ]
    },
    {
        id: 'q8', dim: 'E1',
        text: 'Nelle relazioni temo spesso di essere lasciato indietro.',
        options: [
            { label: 'Si', value: 1 },
            { label: 'A volte', value: 2 },
            { label: 'No', value: 3 }
        ]
    },
    {
        id: 'q9', dim: 'E2',
        text: "Quando dico che prendo l'amore sul serio, lo intendo davvero.",
        options: [
            { label: 'Onestamente non sempre.', value: 1 },
            { label: 'Forse?', value: 2 },
            { label: 'Si, totalmente.', value: 3 }
        ]
    },
    {
        id: 'q10', dim: 'E2',
        text: 'Immagina una persona incredibilmente gentile, matura, divertente, brillante, bella, leale e pure super presa da te. Che succede?',
        options: [
            { label: 'Comunque non mi lascerei andare del tutto.', value: 1 },
            { label: 'Mi piazzerei piu o meno nel mezzo.', value: 2 },
            { label: 'Mi ci butterei dentro malissimo.', value: 3 }
        ]
    },
    {
        id: 'q11', dim: 'E3',
        text: 'Cominci a uscire con qualcuno e questa persona diventa super appiccicosa. Reazione sincera?',
        options: [
            { label: 'Onestamente? Potrebbe pure piacermi.', value: 1 },
            { label: 'Dipende dalla persona.', value: 2 },
            { label: 'Ti prego, lasciami respirare.', value: 3 }
        ]
    },
    {
        id: 'q12', dim: 'E3',
        text: 'In qualsiasi relazione, il mio spazio personale conta tantissimo.',
        options: [
            { label: 'Preferisco vicinanza e dipendenza reciproca.', value: 1 },
            { label: 'Dipende dalla persona.', value: 2 },
            { label: 'Assolutamente. Non si discute.', value: 3 }
        ]
    },
    {
        id: 'q13', dim: 'A1',
        text: 'La maggior parte delle persone, in fondo, e decente.',
        options: [
            { label: 'Suona fin troppo ottimista.', value: 1 },
            { label: 'Forse.', value: 2 },
            { label: 'Si, ci credo ancora.', value: 3 }
        ]
    },
    {
        id: 'q14', dim: 'A1',
        text: 'Stai camminando per strada e un bambino adorabile ti corre incontro e ti da una caramella. Nessun trucco, nessun genitore in vista, solo pura dolcezza. Come reagisci?',
        options: [
            { label: 'E la cosa piu tenera che abbia visto questa settimana.', value: 3 },
            { label: 'Sono profondamente confuso.', value: 2 },
            { label: "Sembra l'inizio di una truffa documentaristica.", value: 1 }
        ]
    },
    {
        id: 'q15', dim: 'A2',
        text: 'E settimana di esami, dovresti andare a una sessione obbligatoria di studio, ma il tuo crush ti scrive per una serata su EA Sports FC. Che fai?',
        options: [
            { label: 'Salto tutto. Una sera non mi uccide.', value: 1 },
            { label: 'Probabilmente invento una scusa.', value: 2 },
            { label: 'E settimana di esami. Resto serio.', value: 3 }
        ]
    },
    {
        id: 'q16', dim: 'A2',
        text: 'Mi piace spezzare la routine e odio sentirmi incastrato.',
        options: [
            { label: "Sono d'accordo", value: 1 },
            { label: 'Neutro', value: 2 },
            { label: "Non sono d'accordo", value: 3 }
        ]
    },
    {
        id: 'q17', dim: 'A3',
        text: 'Di solito ho un senso della direzione nella vita, anche se i dettagli sono un casino.',
        options: [
            { label: "Non sono d'accordo", value: 1 },
            { label: 'Neutro', value: 2 },
            { label: "Sono d'accordo", value: 3 }
        ]
    },
    {
        id: 'q18', dim: 'A3',
        text: 'A volte guardo la vita e penso: ma alla fine non e tutto un miscuglio di ormoni, fame, stanchezza e caos che finge di essere significato?',
        options: [
            { label: 'Esattamente.', value: 1 },
            { label: 'Dipende dal giorno.', value: 2 },
            { label: 'No, e troppo cinico.', value: 3 }
        ]
    },
    {
        id: 'q19', dim: 'Ac1',
        text: 'Di solito sono piu spinto dalla crescita e dai risultati che dal desiderio di evitare rischi e sbatti.',
        options: [
            { label: "Non sono d'accordo", value: 1 },
            { label: 'Neutro', value: 2 },
            { label: "Sono d'accordo", value: 3 }
        ]
    },
    {
        id: 'q20', dim: 'Ac1',
        text: 'Sei seduto sul water da 30 minuti, non succede nulla e ormai e una guerra di nervi. Tu cosa fai di solito?',
        options: [
            { label: "Resto ancora un po'. Magari l'universo si decide.", value: 1 },
            { label: 'Mi faccio un discorso motivazionale completamente fuori di testa.', value: 2 },
            { label: 'Uso la soluzione pratica e vado avanti.', value: 3 }
        ]
    },
    {
        id: 'q21', dim: 'Ac2',
        text: "Tendo a prendere decisioni in fretta e non amo trascinare le cose all'infinito.",
        options: [
            { label: "Non sono d'accordo", value: 1 },
            { label: 'Neutro', value: 2 },
            { label: "Sono d'accordo", value: 3 }
        ]
    },
    {
        id: 'q22', dim: 'Ac2',
        text: "Qui non c'e una vera domanda. Scegli a caso e accetta il tuo destino.",
        options: [
            { label: 'A mi sembra inspiegabilmente giusta.', value: 1 },
            { label: 'Andiamo di B.', value: 2 },
            { label: 'Nel dubbio, C.', value: 3 }
        ]
    },
    {
        id: 'q23', dim: 'Ac3',
        text: 'Quando ti dicono che hai una grande capacita di esecuzione, quale risposta interiore ti somiglia di piu?',
        options: [
            { label: 'Solo quando panico e scadenze si alleano contro di me.', value: 1 },
            { label: 'A volte si.', value: 2 },
            { label: 'Si. Le cose devono andare avanti.', value: 3 }
        ]
    },
    {
        id: 'q24', dim: 'Ac3',
        text: 'Di solito faccio dei piani, e poi...',
        options: [
            { label: 'la realta li stende subito con un tackle.', value: 1 },
            { label: 'alcuni funzionano, altri no.', value: 2 },
            { label: 'mi irrita parecchio quando saltano.', value: 3 }
        ]
    },
    {
        id: 'q25', dim: 'So1',
        text: 'Hai conosciuto un gruppo di amici online su VALORANT e adesso vogliono vedersi dal vivo. Il tuo primo istinto?',
        options: [
            { label: 'Le battute online sono una cosa, dal vivo e un altro mondo.', value: 1 },
            { label: "Potrebbe andare bene. Vedro che vibe c'e.", value: 2 },
            { label: 'Mi vesto bene e ci vado con energia. Potrebbe essere iconico.', value: 3 }
        ]
    },
    {
        id: 'q26', dim: 'So1',
        text: 'Un amico porta con se un altro suo amico. Quale versione di te entra in scena?',
        options: [
            { label: "Tengo istintivamente un po' di distanza.", value: 1 },
            { label: "Se il feeling c'e, va bene.", value: 2 },
            { label: "L'amico del mio amico e praticamente gia nel team.", value: 3 }
        ]
    },
    {
        id: 'q27', dim: 'So2',
        text: "Sono tipo una recinzione elettrica in forma umana. Se qualcuno si avvicina troppo, parte l'allarme.",
        options: [
            { label: "Sono d'accordo", value: 3 },
            { label: 'Neutro', value: 2 },
            { label: "Non sono d'accordo", value: 1 }
        ]
    },
    {
        id: 'q28', dim: 'So2',
        text: 'Con le persone di cui mi fido voglio una vicinanza vera, quasi aggressivamente da cerchia ristretta.',
        options: [
            { label: "Sono d'accordo", value: 1 },
            { label: 'Neutro', value: 2 },
            { label: "Non sono d'accordo", value: 3 }
        ]
    },
    {
        id: 'q29', dim: 'So3',
        text: "A volte hai chiaramente un'opinione negativa su qualcosa, ma te la tieni per te. Di solito perche?",
        options: [
            { label: 'Mi capita raramente.', value: 1 },
            { label: 'Non voglio rendere tutto imbarazzante.', value: 2 },
            { label: 'Preferisco non mostrare quanto possono essere dark i miei pensieri.', value: 3 }
        ]
    },
    {
        id: 'q30', dim: 'So3',
        text: 'Mostro lati diversi di me a seconda delle persone con cui sono.',
        options: [
            { label: "Non sono d'accordo", value: 1 },
            { label: 'Neutro', value: 2 },
            { label: "Sono d'accordo", value: 3 }
        ]
    }
];

const specialQuestions = [
    {
        id: 'drink_gate_q1',
        special: true,
        kind: 'drink_gate',
        text: 'Quale risposta somiglia di piu alla tua vibe abituale?',
        options: [
            { label: 'Mangiare, dormire, sopravvivere', value: 1 },
            { label: 'Hobby artistici', value: 2 },
            { label: 'Bere', value: 3 },
            { label: 'Fitness', value: 4 }
        ]
    },
    {
        id: 'drink_gate_q2',
        special: true,
        kind: 'drink_trigger',
        text: "Che rapporto hai con l'alcol, onestamente?",
        options: [
            { label: 'Uno o due drink mi stanno bene. Ho dei limiti.', value: 1 },
            { label: "Tratto l'alcol come hardware di supporto emotivo.", value: 2 }
        ]
    }
];

const TYPE_LIBRARY = {
    CTRL: { code: 'CTRL', name: 'Quello che gestisce tutto', intro: 'Si. In pratica hai tu il file di salvataggio.', desc: 'Quando la vita comincia a bufferizzare, la persona che chiamano sei tu. Le regole per te sembrano opzionali, i piani modificabili, e il caos diventa stranamente gestibile appena ci metti mano. Non fai casino, non fai scena, sei solo spaventosamente efficace.' },
    'ATM-er': { code: 'ATM-er', name: 'Quello che paga sempre', intro: 'Scusa, ma ti sembro cosi ricco?', desc: "Magari non sei fatto letteralmente di soldi, ma in qualche modo finisci sempre per pagare: con il tempo, con la pazienza, con l'energia, con il lavoro emotivo, forse anche con l'ultima cellula cerebrale ancora accesa. Distribuisci stabilita come se fosse gratis." },
    'Dior-s': { code: 'Dior-s', name: 'Il filosofo da seminterrato', intro: 'Il mio periodo flop e, tecnicamente, una visione del mondo.', desc: 'Non sei pigro. Sei solo spiritualmente poco convinto dalla campagna marketing della vita moderna. Hai guardato hustle culture, culto della produttivita e giochi di status e hai concluso in silenzio che una buona parte di tutto questo e solo prigione con un branding migliore.' },
    BOSS: { code: 'BOSS', name: 'Il guidatore', intro: 'Dammi il volante. Ci penso io.', desc: "Emani energia da capo anche quando non ci provi. Ti piacciono direzione, movimento e competenza. Se qualcosa sta andando fuori rotta, il tuo istinto non e parlarne all'infinito. Il tuo istinto e prendere il volante e far atterrare il tutto." },
    'THAN-K': { code: 'THAN-K', name: 'La macchina della gratitudine', intro: "Vorrei ringraziare l'accademia e pure questo traffico.", desc: "Riesci a trovare spiragli di luce in situazioni che farebbero lanciare una scarpa alla maggior parte delle persone. Alcuni lo chiamano ottimismo. Altri lo trovano sospetto. In ogni caso hai un talento assurdo per creare ossigeno emotivo nell'aria stantia." },
    'OH-NO': { code: 'OH-NO', name: "La sirena d'allarme", intro: 'Oh no. Perche questa roba e cosi precisa?', desc: "Sei un ufficio gestione rischi travestito da essere umano. Basta un bicchiere messo male e tu hai gia simulato allagamento, corto circuito, telefonata all'assicurazione e lezione costosissima. Fastidioso? Forse. Utilissimo? Assolutamente." },
    GOGO: { code: 'GOGO', name: 'Il bulldozer', intro: 'Bene. Si va.', desc: "Tu credi nello slancio come altri credono nella religione. Non sei qui per discutere all'infinito dell'atmosfera. Sei qui per spazzare via la lista delle cose da fare. Mentre gli altri stanno ancora processando, tu hai gia spinto la situazione allo step successivo." },
    SEXY: { code: 'SEXY', name: 'Il protagonista', intro: 'Purtroppo la tua aura entra in stanza prima di te.', desc: 'Attiri attenzione in un modo che sembra meno sforzo e piu fenomeno atmosferico. Le persone ti notano, proiettano su di te, e ogni tanto vanno pure leggermente in tilt. Non devi nemmeno performare. Esistere basta.' },
    'LOVE-R': { code: 'LOVE-R', name: 'Il romantico senza speranza', intro: 'La tua larghezza di banda emotiva e sinceramente eccessiva.', desc: "Tu non sei fatto per le vibes casual. Sei fatto per la nostalgia, la proiezione, il simbolismo e le playlist emotivamente devastanti. Una foglia che cade puo diventare una metafora. Un crush puo diventare un'intera civilta interiore." },
    MUM: { code: 'MUM', name: 'Il genitore di conforto', intro: 'Ti serve acqua, validazione o tutte e due?', desc: "Hai quell'energia da bagno caldo per il sistema nervoso. Le persone si sentono stranamente al sicuro con te perche capisci in fretta il meteo emotivo e vai subito in modalita accudimento. Il problema e che di solito sei molto piu morbido con gli altri che con te stesso." },
    FAKE: { code: 'FAKE', name: 'Il mutaforma', intro: 'Qui ci sono strati. Troppi strati.', desc: 'Ti adatti al contesto cosi bene che a tratti e inquietante. Modalita amici, modalita lavoro, modalita affascinante, modalita emotivamente irraggiungibile: cambi in fretta e senza sbavature. Qualcuno potrebbe pensare che tu sia finto. Piu spesso sei solo absurdamente consapevole della stanza.' },
    OJBK: { code: 'OJBK', name: 'Il monarca del fa uguale', intro: 'Ho detto "per me e uguale" e lo intendevo davvero.', desc: 'Ti muovi nella vita con il livello di coinvolgimento emotivo di una persona reale che osserva dispute contadine. Riso o pasta? Dentro o fuori? La tua risposta spesso e una variazione elegante di: tutto questo e al di sotto di me.' },
    MALO: { code: 'MALO', name: 'Il gremlin del caos', intro: 'La civilta non e stata progettata per il tuo spirito.', desc: 'Una parte di te non e mai scesa davvero dal ramo. Sei giocoso, ingestibile e sospettoso verso tutto cio che e troppo lucido o troppo serio. Se la vita sembra un gioco progettato male, il tuo istinto non e seguire il tutorial ma arrampicarti sulla scenografia.' },
    'JOKE-R': { code: 'JOKE-R', name: 'Il clown triste', intro: 'Alla fine la battuta era autodifesa emotiva.', desc: "Sei divertente come una tempesta puo essere bella: rumoroso, teatrale, leggermente preoccupante. Tieni in vita le stanze a colpi di battute e tempismo, ma la comicita spesso fa anche da armatura. Se gli altri ridono abbastanza forte, magari nessuno chiede cosa c'e sotto." },
    'WOC!': { code: 'WOC!', name: 'La persona del ma che cazzo', intro: 'Ma che cazzo, come ho fatto a ottenere questo?', desc: 'Reagisci forte ma pensi in silenzio. Fuori: caos, esclamazioni, incredulita. Dentro: riconoscimento dei pattern molto chiaro. Capisci in fretta quando qualcosa non sta in piedi e di solito lo esprimi con un suono gloriosamente sincero.' },
    'THIN-K': { code: 'THIN-K', name: 'Quello che pensa troppo', intro: 'Attendere prego. Analisi ancora in corso.', desc: "Il tuo cervello non scorre, controlla. Non consumi semplicemente informazioni: ispezioni premesse, bias, struttura, intenzioni e pure se l'autore meriterebbe di stare lontano da una tastiera. Pensare non e un hobby per te. E il sistema operativo di base." },
    SHIT: { code: 'SHIT', name: 'Quello incazzato ma competente', intro: 'Fa tutto schifo. Lo sistemo comunque io.', desc: 'Ti lamenti come se il mondo ti avesse offeso sul personale, poi ti giri e rimetti a posto il casino meglio di tutti gli altri. Il tono emotivo dice apocalisse; il comportamento dice project manager con rabbia irrisolta. Eppure le cose si fanno.' },
    ZZZZ: { code: 'ZZZZ', name: "L'artista dello spegnimento", intro: 'Non sono morto. Sono in risparmio energetico.', desc: "Puoi ignorare novantanove notifiche, tre scadenze e una crisi sociale, ma nel momento dell'ultimo allarme esci dalla tomba e produci qualcosa di sorprendentemente decente. Il tuo rapporto con l'urgenza e tossico, ma stranamente produttivo." },
    POOR: { code: 'POOR', name: 'Il raggio laser', intro: 'Non ho poche risorse. Sono concentrato.', desc: 'Sembri sottodotato solo perche ti rifiuti di disperderti. Mentre gli altri spalmano energie su cento cose, tu le comprimi in un unico fascio e bruci dritto verso cio che conta. Da lontano sembra scarsita. Da vicino e focus puro.' },
    MONK: { code: 'MONK', name: 'Il monaco dei confini', intro: 'No, al momento non ho bisogni mondani.', desc: 'Tratti il tuo spazio personale come un luogo sacro. La solitudine per te non e segno di danno. E manutenzione, chiarezza, pace e forse anche sopravvivenza. Puoi volere bene tantissimo senza voler qualcuno nel tuo salotto psichico ventiquattro ore su ventiquattro.' },
    IMSB: { code: 'IMSB', name: 'Il meltdown interiore', intro: 'Sii onesto. Sono cotto, vero?', desc: "Dentro di te vivono due nemici immortali: uno vuole buttarsi, l'altro vuole scrivere in anticipo il tuo necrologio sociale. Non sei davvero spacciato. Stai solo proiettando una quantita catastrofica di cinema interiore prima di ogni scelta emotivamente rilevante." },
    SOLO: { code: 'SOLO', name: 'Il riccio', intro: 'Perche mi sento cosi smascherato?', desc: 'Ti proteggi sembrando piu duro, freddo e distaccato di quanto spesso ti senti davvero. Gli aculei sono reali, ma non perche odi la vicinanza. Sono li perche la vicinanza sembra rischiosa quando tieni troppo a qualcosa.' },
    FUCK: { code: 'FUCK', name: 'Il selvatico', intro: 'Ma che tipo di risultato sarebbe questo?', desc: 'Sei impulso grezzo, caos, appetito e forza vitale con un problema di controllo del polso. Le regole sociali ti sembrano spesso decorative. Oscilli forte tra "assolutamente si" e "col cavolo", e quando sei davvero vivo sembri una persona che nessuna recinzione e mai riuscita a contenere.' },
    DEAD: { code: 'DEAD', name: 'Spiritualmente offline', intro: 'Sono ancora connesso emotivamente oppure no?', desc: "Dai l'impressione di qualcuno che ha giocato troppe volte e non e piu impressionato dalla mappa. Desiderio abbassato, spettacolo abbassato, il rumore del mondo spesso sembra solo statico. Non sei per forza vuoto. Sei solo profondamente poco convinto." },
    IMFW: { code: 'IMFW', name: 'Il bersaglio morbido', intro: 'Aspetta... sono davvero cosi facile da ferire?', desc: "Ti leghi in fretta, ti fidi forte e dai significato alle cose prima ancora che il tuo team sicurezza abbia controllato l'edificio. Non sei debole. Sei solo tenero in un mondo che scambia spesso la tenerezza per un invito a essere negligente." },
    HHHH: { code: 'HHHH', name: 'Il goblin del glitch', intro: 'Ah. Ah ah. Ma tu cosa sei esattamente?', desc: "Congratulazioni. Hai rotto il sistema. Le tue risposte erano cosi splendidamente strane che la libreria standard delle personalita ha timbrato l'uscita, ha lasciato un reclamo e ti ha assegnato il titolo onorifico di goblin del glitch. Lo rispettiamo, lo temiamo e non sappiamo davvero spiegarlo." },
    DRUNK: { code: 'DRUNK', name: "Il goblin dell'alcol", intro: 'La personalita nascosta e appena entrata in chat.', desc: "Questo risultato appare solo quando si sveglia il goblin dell'alcol. La normale logica della personalita e stata sostituita da caos fermentato, sicurezza liquida e una relazione un po' troppo intensa con le pessime idee. Bevi acqua e non scrivere al tuo ex." }
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
    S1: { L: 'Sei piu duro con te stesso di quanto la maggior parte dei tuoi nemici riuscirebbe a essere.', M: 'La tua fiducia dipende parecchio da momento, contesto e meteo interiore.', H: 'Conosci abbastanza bene il tuo valore e non crolli cosi facilmente.' },
    S2: { L: 'Il tuo segnale interno a volte si sfoca. Il buffering identitario e piuttosto frequente.', M: "Di solito ti riconosci, a meno che l'umore non ti rubi temporaneamente l'accesso.", H: 'Hai una lettura piuttosto solida delle tue motivazioni, dei tuoi limiti e dei tuoi schemi.' },
    S3: { L: 'Comodita e sicurezza spesso battono la grande ambizione.', M: "Una parte di te vuole crescere, un'altra vuole una coperta e zero email.", H: 'Obiettivi, progresso e significato ti spingono in avanti con una certa forza.' },
    E1: { L: "Il tuo sistema d'allarme relazionale e assurdamente sensibile.", M: 'Meta fiducia, meta sospetto. Il tuo cuore negozia spesso con se stesso.', H: 'Tendi a fidarti del legame piu che a farti prendere dal panico a ogni scossa.' },
    E2: { L: 'Investi con cautela. La porta non e chiusa, e solo blindata in modo aggressivo.', M: 'Puoi impegnarti, ma di solito con un piano di emergenza emotivo.', H: 'Quando tieni a qualcuno, ci metti davvero dentro energia e sentimento.' },
    E3: { L: 'Calore, vicinanza e disponibilita emotiva contano molto per te.', M: 'Vuoi intimita e indipendenza in proporzioni regolabili.', H: 'Anche in amore hai bisogno di un territorio chiaramente tuo.' },
    A1: { L: 'Ti avvicini al mondo con sospetto difensivo come impostazione iniziale.', M: 'Non sei ingenuo, ma nemmeno completamente complottista.', H: "Lasci ancora spazio all'idea che le persone e il mondo possano essere decenti." },
    A2: { L: 'Pieghi facilmente le regole se in gioco ci sono comfort o liberta.', M: 'Sai seguire una struttura, ma non sei uno schiavo della struttura.', H: 'Ordine e processo per te hanno senso. Il caos improvvisato molto meno.' },
    A3: { L: 'Il significato puo sembrarti sottile. Molte cose della vita ti sembrano stranamente performative.', M: 'Alcuni giorni hai uno scopo. Altri sei spiritualmente in modalita fuori ufficio.', H: 'Tendi a sentire con piu chiarezza direzione e significato personale.' },
    Ac1: { L: 'Il tuo primo istinto e spesso controllo del rischio, non gloria.', M: 'A volte vuoi vincere. A volte vuoi solo meno problemi.', H: 'Risultati, crescita e slancio ti accendono in fretta.' },
    Ac2: { L: 'Prendere decisioni per te spesso significa avere troppe schede aperte in testa.', M: 'Rifletti, ma non fino al collasso totale del sistema.', H: "Decidi in fretta e di solito non ami tornare indietro all'infinito." },
    Ac3: { L: 'La tua esecuzione ha una relazione tossica ma passionale con le scadenze.', M: 'Sai agire, ma umore e tempismo contano parecchio.', H: 'Quando qualcosa resta incompiuto, ti gratta il cervello.' },
    So1: { L: "Prendere l'iniziativa socialmente richiede un riscaldamento e forse anche una preghiera.", M: 'Sai stare al vibe del gruppo, ma raramente forzi tu la stanza.', H: "Sei piu disposto a essere tu ad aprire l'interazione." },
    So2: { L: 'Quando ti fidi, la vicinanza puo sembrarti profondamente naturale.', M: 'Vuoi vicinanza e aria in quantita variabili.', H: 'Il tuo sistema di confini e piuttosto forte. Ti ritrai prima di sentirti in trappola.' },
    So3: { L: "Sei piu diretto che filtrato. Se senti qualcosa, un po' trapela.", M: 'Bilanci verita e fluidita sociale a seconda del contesto.', H: 'Sai mostrare strati diversi di te in stanze diverse.' }
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
        console.warn('Impossibile caricare le immagini per la versione italiana.', error);
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
    if (q.special) return 'Domanda bonus';
    return app.previewMode ? dimensionMeta[q.dim].name : 'Dimensione nascosta';
}

function renderQuestions() {
    const visibleQuestions = getVisibleQuestions();
    questionList.innerHTML = '';

    visibleQuestions.forEach((q, index) => {
        const card = document.createElement('article');
        card.className = 'question';
        card.innerHTML = `
          <div class="question-meta">
            <div class="badge">Domanda ${index + 1}</div>
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
        ? 'Perfetto. Ora puoi consegnare la tua anima digitale alla pagina dei risultati.'
        : 'Non si scappa. Rispondi fino in fondo.';
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
    let modeKicker = 'Il tuo tipo principale';
    let badge = `Affinita ${bestNormal.similarity}% · corrispondenze esatte ${bestNormal.exact}/15`;
    let sub = 'Questa e la tua corrispondenza piu forte al momento, basata sulle quindici dimensioni.';
    let special = false;
    let secondaryType = null;

    if (drunkTriggered) {
        finalType = TYPE_LIBRARY.DRUNK;
        secondaryType = bestNormal;
        modeKicker = 'Personalita nascosta sbloccata';
        badge = "Affinita 100% · l'etanolo ha preso il volante";
        sub = 'Le tue impostazioni alcoliche hanno sovrascritto la normale pipeline della personalita.';
        special = true;
    } else if (bestNormal.similarity < 60) {
        finalType = TYPE_LIBRARY.HHHH;
        modeKicker = 'Fallback del sistema';
        badge = `Il miglior match standard e arrivato solo al ${bestNormal.similarity}%`;
        sub = 'La libreria normale dei tipi ha mollato il colpo davanti al tuo cervello e ti ha assegnato HHHH.';
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
              <div class="dim-item-score">${level} / ${result.rawScores[dim]} pt</div>
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
        ? 'Questo test e solo per divertirsi. Personalita nascoste e tipi di emergenza sono stati aggiunti apposta per il caos. Non prenderlo come psicologia, medicina, verita spirituale o prova legale.'
        : 'Questo test e solo per divertirsi. Non usarlo per diagnosi, selezioni, appuntamenti, rotture, sedute spiritiche o grandi decisioni di vita.';

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
