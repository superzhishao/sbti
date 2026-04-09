const dimensionMeta = {
    S1: { name: 'S1 Selbstwert', model: 'Selbstmodell' },
    S2: { name: 'S2 Selbstklarheit', model: 'Selbstmodell' },
    S3: { name: 'S3 Innerer Antrieb', model: 'Selbstmodell' },
    E1: { name: 'E1 Bindungssicherheit', model: 'Emotionsmodell' },
    E2: { name: 'E2 Emotionale Investition', model: 'Emotionsmodell' },
    E3: { name: 'E3 Grenzen und Abhaengigkeit', model: 'Emotionsmodell' },
    A1: { name: 'A1 Weltbild', model: 'Haltungsmodell' },
    A2: { name: 'A2 Regeln vs Freiheit', model: 'Haltungsmodell' },
    A3: { name: 'A3 Sinngefuehl', model: 'Haltungsmodell' },
    Ac1: { name: 'Ac1 Motivationsstil', model: 'Handlungsmodell' },
    Ac2: { name: 'Ac2 Entscheidungsstil', model: 'Handlungsmodell' },
    Ac3: { name: 'Ac3 Umsetzungsmodus', model: 'Handlungsmodell' },
    So1: { name: 'So1 Soziale Initiative', model: 'Sozialmodell' },
    So2: { name: 'So2 Zwischenmenschliche Distanz', model: 'Sozialmodell' },
    So3: { name: 'So3 Ausdruck und Authentizitaet', model: 'Sozialmodell' }
};

const questions = [
    {
        id: 'q1', dim: 'S1',
        text: 'Du bist nicht einfach nur single. Du bist im Grunde ein nervoeser NPC mit geringem Selbstwert und einem Doktortitel in romantischer Selbsttaeuschung. In deinem Kopf laeuft seit Jahren ein Jugendfilm, den du nie wirklich erlebt hast, waehrend auf Instagram alle irgendwie normal wirkten. Hand aufs Herz: trifft dich das ein bisschen zu sehr?',
        options: [
            { label: 'Warum ist das so erschreckend konkret?', value: 1 },
            { label: 'Okay... das war heftig.', value: 2 },
            { label: 'Nee. Absolut nicht ich.', value: 3 }
        ]
    },
    {
        id: 'q2', dim: 'S1',
        text: 'Ich habe oft das Gefuehl, dass die Menschen um mich herum beeindruckender sind als ich.',
        options: [
            { label: 'Ja, ziemlich.', value: 1 },
            { label: 'Manchmal.', value: 2 },
            { label: 'Nicht wirklich.', value: 3 }
        ]
    },
    {
        id: 'q3', dim: 'S2',
        text: 'Ich habe ein ziemlich klares Bild davon, wer ich eigentlich bin.',
        options: [
            { label: 'Stimme nicht zu', value: 1 },
            { label: 'Neutral', value: 2 },
            { label: 'Stimme zu', value: 3 }
        ]
    },
    {
        id: 'q4', dim: 'S2',
        text: 'Tief drin weiss ich, was mir wirklich wichtig ist.',
        options: [
            { label: 'Stimme nicht zu', value: 1 },
            { label: 'Neutral', value: 2 },
            { label: 'Stimme zu', value: 3 }
        ]
    },
    {
        id: 'q5', dim: 'S3',
        text: 'Ich will mich wirklich weiterentwickeln und eine staerkere Version von mir selbst werden.',
        options: [
            { label: 'Stimme nicht zu', value: 1 },
            { label: 'Neutral', value: 2 },
            { label: 'Stimme zu', value: 3 }
        ]
    },
    {
        id: 'q6', dim: 'S3',
        text: 'Die Meinung anderer steuert mein Leben nicht wirklich.',
        options: [
            { label: 'Stimme nicht zu', value: 1 },
            { label: 'Neutral', value: 2 },
            { label: 'Stimme zu', value: 3 }
        ]
    },
    {
        id: 'q7', dim: 'E1',
        text: 'Dein Partner oder deine Partnerin antwortet seit 5 Stunden nicht und sagt spaeter, es sei eine Lebensmittelvergiftung gewesen. Was denkst du zuerst?',
        options: [
            { label: 'Fuenf Stunden? Klingt nicht ganz sauber.', value: 1 },
            { label: 'Ich schwanke zwischen Vertrauen und Misstrauen.', value: 2 },
            { label: 'Vielleicht ging es der Person wirklich richtig schlecht.', value: 3 }
        ]
    },
    {
        id: 'q8', dim: 'E1',
        text: 'In Beziehungen habe ich oft Angst, zurueckgelassen zu werden.',
        options: [
            { label: 'Ja', value: 1 },
            { label: 'Manchmal', value: 2 },
            { label: 'Nein', value: 3 }
        ]
    },
    {
        id: 'q9', dim: 'E2',
        text: 'Wenn ich sage, dass ich Liebe ernst nehme, dann meine ich das wirklich.',
        options: [
            { label: 'Ehrlich gesagt nicht immer.', value: 1 },
            { label: 'Vielleicht?', value: 2 },
            { label: 'Ja. Voll und ganz.', value: 3 }
        ]
    },
    {
        id: 'q10', dim: 'E2',
        text: 'Stell dir vor, dein Gegenueber ist absurd freundlich, emotional reif, witzig, schlau, attraktiv, loyal und trotzdem total auf dich fixiert. Was passiert dann?',
        options: [
            { label: 'Ich wuerde mich trotzdem nicht komplett fallen lassen.', value: 1 },
            { label: 'Ich waere irgendwo dazwischen.', value: 2 },
            { label: 'Ich wuerde komplett verliebt hineinkippen.', value: 3 }
        ]
    },
    {
        id: 'q11', dim: 'E3',
        text: 'Du datest jemanden und die Person wird extrem anhaenglich. Deine ehrliche Reaktion?',
        options: [
            { label: 'Ehrlich? Ich finde das irgendwie sogar gut.', value: 1 },
            { label: 'Kommt auf die Person an.', value: 2 },
            { label: 'Bitte gib mir etwas Raum, bevor ich verschwinde.', value: 3 }
        ]
    },
    {
        id: 'q12', dim: 'E3',
        text: 'Persoenlicher Freiraum ist mir in jeder Beziehung sehr wichtig.',
        options: [
            { label: 'Ich bevorzuge Naehe und gegenseitige Abhaengigkeit.', value: 1 },
            { label: 'Kommt auf die Person an.', value: 2 },
            { label: 'Absolut. Nicht verhandelbar.', value: 3 }
        ]
    },
    {
        id: 'q13', dim: 'A1',
        text: 'Die meisten Menschen sind im Grunde ganz okay.',
        options: [
            { label: 'Das klingt ziemlich naiv.', value: 1 },
            { label: 'Vielleicht.', value: 2 },
            { label: 'Ja, daran glaube ich noch.', value: 3 }
        ]
    },
    {
        id: 'q14', dim: 'A1',
        text: 'Du gehst die Strasse entlang und ein absurd suesses Kind kommt auf dich zu und drueckt dir einen Lolli in die Hand. Kein Haken, keine Eltern in Sicht, nur pure Niedlichkeit. Wie reagierst du?',
        options: [
            { label: 'Das ist das Suesseste, was ich diese Woche gesehen habe.', value: 3 },
            { label: 'Ich bin maximal verwirrt.', value: 2 },
            { label: 'Das wirkt wie der Anfang einer Betrugsdoku.', value: 1 }
        ]
    },
    {
        id: 'q15', dim: 'A2',
        text: 'Pruefungswoche. Eigentlich musst du zum verpflichtenden Lerntermin, aber dein Crush fragt, ob du heute Abend League of Legends mitspielst. Was machst du?',
        options: [
            { label: 'Ich schwaenze. Ein Abend wird mich nicht ruinieren.', value: 1 },
            { label: 'Ich wuerde wahrscheinlich irgendeine Ausrede basteln.', value: 2 },
            { label: 'Es ist Pruefungswoche. Ich bleibe vernuenftig.', value: 3 }
        ]
    },
    {
        id: 'q16', dim: 'A2',
        text: 'Ich mag es, Routinen zu durchbrechen und hasse es, mich eingeengt zu fuehlen.',
        options: [
            { label: 'Stimme zu', value: 1 },
            { label: 'Neutral', value: 2 },
            { label: 'Stimme nicht zu', value: 3 }
        ]
    },
    {
        id: 'q17', dim: 'A3',
        text: 'Ich habe meistens ein Gefuehl fuer meine Richtung im Leben, auch wenn die Details chaotisch sind.',
        options: [
            { label: 'Stimme nicht zu', value: 1 },
            { label: 'Neutral', value: 2 },
            { label: 'Stimme zu', value: 3 }
        ]
    },
    {
        id: 'q18', dim: 'A3',
        text: 'Manchmal schaue ich auf das Leben und denke: Eigentlich ist das alles nur eine Mischung aus Hormonen, Hunger, Erschoepfung und Chaos, die so tut, als waere sie Sinn.',
        options: [
            { label: 'Exakt.', value: 1 },
            { label: 'Kommt auf den Tag an.', value: 2 },
            { label: 'Nein, das ist mir zu zynisch.', value: 3 }
        ]
    },
    {
        id: 'q19', dim: 'Ac1',
        text: 'Ich werde eher von Wachstum und Erfolg angetrieben als davon, Risiken und Stress zu vermeiden.',
        options: [
            { label: 'Stimme nicht zu', value: 1 },
            { label: 'Neutral', value: 2 },
            { label: 'Stimme zu', value: 3 }
        ]
    },
    {
        id: 'q20', dim: 'Ac1',
        text: 'Du sitzt seit 30 Minuten auf der Toilette, nichts passiert, und jetzt ist es ein Willenskampf. Was passt am ehesten zu dir?',
        options: [
            { label: 'Noch etwas laenger bleiben. Vielleicht braucht das Universum nur einen Moment.', value: 1 },
            { label: 'Dir selbst eine voellig entgleiste Motivationsrede halten.', value: 2 },
            { label: 'Die praktische Loesung nutzen und weitermachen.', value: 3 }
        ]
    },
    {
        id: 'q21', dim: 'Ac2',
        text: 'Ich treffe Entscheidungen eher schnell und mag es nicht, Dinge ewig hinauszuziehen.',
        options: [
            { label: 'Stimme nicht zu', value: 1 },
            { label: 'Neutral', value: 2 },
            { label: 'Stimme zu', value: 3 }
        ]
    },
    {
        id: 'q22', dim: 'Ac2',
        text: 'Hier gibt es keine echte Frage. Waehle blind und akzeptiere dein Schicksal.',
        options: [
            { label: 'A fuehlt sich seltsam richtig an.', value: 1 },
            { label: 'Dann eben B.', value: 2 },
            { label: 'Im Zweifel C.', value: 3 }
        ]
    },
    {
        id: 'q23', dim: 'Ac3',
        text: 'Wenn Leute sagen, du haettest starke Umsetzungskraft, welche innere Reaktion passt am ehesten?',
        options: [
            { label: 'Nur wenn Panik und Deadline sich verbuenden.', value: 1 },
            { label: 'Manchmal schon.', value: 2 },
            { label: 'Ja. Dinge sollten vorankommen.', value: 3 }
        ]
    },
    {
        id: 'q24', dim: 'Ac3',
        text: 'Ich mache meistens Plaene, und dann...',
        options: [
            { label: 'grillt die Realitaet sie sofort weg.', value: 1 },
            { label: 'manche klappen, manche nicht.', value: 2 },
            { label: 'macht es mich ziemlich fertig, wenn sie zerstoert werden.', value: 3 }
        ]
    },
    {
        id: 'q25', dim: 'So1',
        text: 'Du hast ueber VALORANT eine Gruppe Online-Freunde kennengelernt und jetzt wollen sie sich im echten Leben treffen. Was ist dein erster Impuls?',
        options: [
            { label: 'Online-Gequatsche ist das eine. IRL ist etwas ganz anderes.', value: 1 },
            { label: 'Kann gut werden. Ich schaue mal, wie sich die Stimmung anfuehlt.', value: 2 },
            { label: 'Ich ziehe mich gut an und komme mit Energie. Vielleicht wird das ikonisch.', value: 3 }
        ]
    },
    {
        id: 'q26', dim: 'So1',
        text: 'Ein Freund oder eine Freundin bringt noch jemanden mit. Welche Version von dir taucht dann auf?',
        options: [
            { label: 'Ich halte erstmal instinktiv etwas Abstand.', value: 1 },
            { label: 'Wenn die Vibes stimmen, passt das schon.', value: 2 },
            { label: 'Freund von Freunden ist fuer mich fast schon Teammitglied.', value: 3 }
        ]
    },
    {
        id: 'q27', dim: 'So2',
        text: 'Ich bin so etwas wie ein Elektrozaun in Menschengestalt. Wenn jemand zu nah kommt, geht der Alarm los.',
        options: [
            { label: 'Stimme zu', value: 3 },
            { label: 'Neutral', value: 2 },
            { label: 'Stimme nicht zu', value: 1 }
        ]
    },
    {
        id: 'q28', dim: 'So2',
        text: 'Mit Menschen, denen ich vertraue, will ich echte Naehe, also fast schon aggressiv vertraute Inner-Circle-Naehe.',
        options: [
            { label: 'Stimme zu', value: 1 },
            { label: 'Neutral', value: 2 },
            { label: 'Stimme nicht zu', value: 3 }
        ]
    },
    {
        id: 'q29', dim: 'So3',
        text: 'Manchmal hast du klar eine negative Meinung zu etwas, behaeltst sie aber fuer dich. Warum meistens?',
        options: [
            { label: 'Das passiert mir selten.', value: 1 },
            { label: 'Ich will die Stimmung nicht unangenehm machen.', value: 2 },
            { label: 'Ich will lieber nicht zeigen, wie dunkel meine Gedanken eigentlich werden koennen.', value: 3 }
        ]
    },
    {
        id: 'q30', dim: 'So3',
        text: 'Ich zeige unterschiedlichen Menschen unterschiedliche Seiten von mir.',
        options: [
            { label: 'Stimme nicht zu', value: 1 },
            { label: 'Neutral', value: 2 },
            { label: 'Stimme zu', value: 3 }
        ]
    }
];

const specialQuestions = [
    {
        id: 'drink_gate_q1',
        special: true,
        kind: 'drink_gate',
        text: 'Welche Antwort klingt am meisten nach deinem normalen Vibe?',
        options: [
            { label: 'Essen, schlafen, ueberleben', value: 1 },
            { label: 'Kuenstlerische Hobbys', value: 2 },
            { label: 'Trinken', value: 3 },
            { label: 'Fitness', value: 4 }
        ]
    },
    {
        id: 'drink_gate_q2',
        special: true,
        kind: 'drink_trigger',
        text: 'Wie ist dein Verhaeltnis zu Alkohol, ganz ehrlich?',
        options: [
            { label: 'Ein oder zwei Drinks sind nett. Ich habe Grenzen.', value: 1 },
            { label: 'Ich benutze Alkohol wie emotionale Zusatzhardware.', value: 2 }
        ]
    }
];

const TYPE_LIBRARY = {
    CTRL: { code: 'CTRL', name: 'Der Lenker', intro: 'Ja. Du hast wirklich die Save-Datei.', desc: 'Wenn das Leben anfaengt zu laggen, bist du die Person, die man anruft. Regeln wirken fuer dich optional, Plaene editierbar, und Chaos wird ploetzlich erstaunlich handhabbar, sobald du es anfasst. Nicht laut, nicht dramatisch, einfach unheimlich effektiv.' },
    'ATM-er': { code: 'ATM-er', name: 'Der Zahler', intro: 'Sehe ich fuer dich aus wie reich?', desc: 'Vielleicht bestehst du nicht buchstaeblich aus Geld, aber irgendwie bist du trotzdem immer die Person, die zahlt: mit Zeit, Geduld, Energie, emotionaler Arbeit oder deiner letzten halbwegs funktionierenden Hirnzelle. Du verteilst Stabilitaet, als waere sie kostenlos.' },
    'Dior-s': { code: 'Dior-s', name: 'Der Kellerphilosoph', intro: 'Meine Flop-Phase ist eigentlich eine Weltanschauung.', desc: 'Du bist nicht faul. Du bist nur spirituell nicht ueberzeugt vom Verkaufsgespraech des modernen Lebens. Hustle-Kultur, Produktivitaetskult und Statusspiele hast du angesehen und still beschlossen, dass viel davon einfach Gefaengnis mit besserem Branding ist.' },
    BOSS: { code: 'BOSS', name: 'Der Fahrer', intro: 'Gib mir das Lenkrad. Ich mache das.', desc: 'Du strahlst Fuehrungsenergie aus, selbst wenn du es gar nicht willst. Du magst Richtung, Bewegung und Kompetenz. Wenn etwas vom Kurs abkommt, ist dein Impuls nicht, drei Stunden darueber zu reden. Dein Impuls ist, das Ding zu greifen und sicher zu landen.' },
    'THAN-K': { code: 'THAN-K', name: 'Die Dankbarkeitsmaschine', intro: 'Ich moechte der Akademie und diesem Stau danken.', desc: 'Du findest noch Silberstreifen in Situationen, in denen andere Leute bereits einen Schuh werfen wuerden. Manche nennen das Optimismus. Andere finden es verdaechtig. So oder so bist du erschreckend gut darin, emotionale Luft in abgestandene Raeume zu bringen.' },
    'OH-NO': { code: 'OH-NO', name: 'Die Katastrophenvorhersage', intro: 'Oh nein. Warum ist das so treffend?', desc: 'Du bist eine Risikoabteilung in Menschengestalt. Ein schlecht platzierter Becher und du hast schon Wasserschaden, Kurzschluss, Versicherungsstress und eine teuer bezahlte Lektion durchsimuliert. Nervig? Vielleicht. Nuetzlich? Absolut.' },
    GOGO: { code: 'GOGO', name: 'Der Bulldozer', intro: 'Alles klar. Wir bewegen uns jetzt.', desc: 'Du glaubst an Momentum so wie andere an Religion. Du bist nicht hier, um die Stimmung totzudiskutieren. Du bist hier, um die To-do-Liste abzuraeumen. Waehren andere noch die Lage verarbeiten, hast du sie schon in die naechste Phase geschoben.' },
    SEXY: { code: 'SEXY', name: 'Die Hauptfigur', intro: 'Leider ist deine Aura schon vor dir im Raum angekommen.', desc: 'Du ziehst Aufmerksamkeit an auf eine Art, die weniger nach Anstrengung und mehr nach Wetterphaenomen aussieht. Menschen bemerken dich, projizieren auf dich und funktionieren gelegentlich in deiner Naehe kurz nicht mehr richtig. Du musst nicht mal performen. Existenz reicht.' },
    'LOVE-R': { code: 'LOVE-R', name: 'Der hoffnungslose Romantiker', intro: 'Deine emotionale Bandbreite ist ehrlich gesagt uebertrieben.', desc: 'Du bist nicht fuer lockere Vibes gebaut. Du bist fuer Sehnsucht, Projektion, Symbolik und emotional verheerende Playlists gebaut. Ein fallendes Blatt kann zur Metapher werden. Ein Crush kann zu einer inneren Zivilisation anwachsen.' },
    MUM: { code: 'MUM', name: 'Der Komfort-Elternteil', intro: 'Brauchst du Wasser, Bestätigung oder beides?', desc: 'Du hast die Art Nervensystem-Energie, die sich wie ein warmes Bad anfuehlt. Menschen fuehlen sich schnell sicher bei dir, weil du emotionale Wetterwechsel frueh bemerkst und instinktiv in den Versorgungsmodus gehst. Der Haken: Mit anderen bist du oft sanfter als mit dir selbst.' },
    FAKE: { code: 'FAKE', name: 'Der Gestaltwandler', intro: 'Hier gibt es Schichten. Zu viele Schichten.', desc: 'Du passt dich so gut an Kontexte an, dass es fast unheimlich wird. Freundesmodus, Arbeitsmodus, Charme-Modus, emotional nicht verfuegbar-Modus: Du wechselst schnell und sauber. Manche halten dich fuer falsch. Meistens bist du einfach absurd aufmerksam fuer den Raum.' },
    OJBK: { code: 'OJBK', name: 'Der Egal-Monarch', intro: 'Ich habe "ist mir egal" gesagt, und ich meinte das auch so.', desc: 'Du bewegst dich durchs Leben mit dem emotionalen Investitionslevel einer koeniglichen Person, die Bauernstreitigkeiten beoebachtet. Reis oder Pasta? Drinnen oder draussen? Deine Antwort ist oft eine elegante Variante von: All das steht unter mir.' },
    MALO: { code: 'MALO', name: 'Der Chaos-Gremlin', intro: 'Die Zivilisation wurde nicht fuer deinen Geist gebaut.', desc: 'Ein Teil von dir hat den Ast nie wirklich verlassen. Du bist verspielt, unregierbar und misstrauisch gegenueber allem, was zu glatt oder zu ernst ist. Wenn das Leben wie ein schlecht designtes Spiel wirkt, ist dein Reflex nicht das Tutorial, sondern das Klettern auf der Kulisse.' },
    'JOKE-R': { code: 'JOKE-R', name: 'Der traurige Clown', intro: 'Turns out, der Witz war emotionale Selbstverteidigung.', desc: 'Du bist auf die Art lustig, wie Stuerme schoen sein koennen: laut, theatralisch, leicht besorgniserregend. Du haeltst Raeume mit Timing und Witzen am Leben, aber der Humor ist oft auch Ruestung. Wenn alle laut genug lachen, fragt vielleicht niemand, was darunter liegt.' },
    'WOC!': { code: 'WOC!', name: 'Die "Heilige Scheisse"-Person', intro: 'Heilige Scheisse, wie bin ich bei dem gelandet?', desc: 'Du reagierst laut, aber denkst leise. Aussen: Chaos, Ausrufe, Unglauben. Innen: ziemlich klare Mustererkennung. Du merkst schnell, wenn etwas kompletter Unsinn ist, und drueckst das meistens mit einem herrlich ehrlichen Laut aus.' },
    'THIN-K': { code: 'THIN-K', name: 'Der Overthinker', intro: 'Bitte warten. Analyse laeuft noch.', desc: 'Dein Gehirn scrollt nicht. Es auditet. Du konsumierst Informationen nicht einfach, du pruefst Praemissen, Bias, Struktur, Motiv und ob die schreibende Person eigentlich Tastaturverbot haben sollte. Denken ist fuer dich kein Hobby. Es ist dein Betriebssystem.' },
    SHIT: { code: 'SHIT', name: 'Die wuetend kompetente Person', intro: 'Alles ist schrecklich. Ich repariere es trotzdem.', desc: 'Du beschwerst dich so, als haette dich die Welt persoenlich beleidigt, und drehst dich dann um, um das Chaos sauberer wegzuraeumen als alle anderen. Dein emotionaler Ton sagt Untergang; dein Verhalten sagt Projektleitung mit ungeheilter Wut. Irgendwie funktioniert es.' },
    ZZZZ: { code: 'ZZZZ', name: 'Der Shutdown-Kuenstler', intro: 'Ich bin nicht tot. Ich bin im Energiesparmodus.', desc: 'Du kannst neunundneunzig Benachrichtigungen, drei Deadlines und eine soziale Krise ignorieren, dann aber im letzten Alarmmoment aus dem Grab steigen und etwas seltsam Solides abliefern. Deine Beziehung zu Dringlichkeit ist toxisch, aber erschreckend produktiv.' },
    POOR: { code: 'POOR', name: 'Der Laserstrahl', intro: 'Ich habe keine geringen Ressourcen. Ich bin konzentriert.', desc: 'Du wirkst nur deshalb unterversorgt, weil du dich weigerst, dich zu zerstreuen. Waehren andere ihren Einsatz auf hundert kleine Dinge verteilen, komprimierst du deinen Fokus zu einem Strahl und brennst dich durch das, was zaehlt. Aus der Ferne sieht es nach Mangel aus. Aus der Naehe nach Fokus.' },
    MONK: { code: 'MONK', name: 'Der Grenzmoench', intro: 'Nein, ich habe gerade keine weltlichen Beduerfnisse.', desc: 'Du behandelst deinen persoenlichen Raum wie heiligen Boden. Alleinsein ist fuer dich kein Zeichen von Schaden. Es ist Wartung, Klarheit, Ruhe und manchmal schlicht Ueberleben. Du kannst tief fuehlen, ohne jemanden 24/7 in deinem seelischen Wohnzimmer haben zu wollen.' },
    IMSB: { code: 'IMSB', name: 'Der innere Nervenzusammenbruch', intro: 'Seien wir ehrlich. Bin ich komplett durch?', desc: 'In dir leben zwei unsterbliche Feinde: Einer will es einfach wagen, der andere will im Voraus schon deinen sozialen Nachruf schreiben. Du bist nicht wirklich verloren. Du produzierst nur vor jeder emotional relevanten Entscheidung ein katastrophales Mass an innerem Kino.' },
    SOLO: { code: 'SOLO', name: 'Der Igel', intro: 'Warum werde ich hier so hart entlarvt?', desc: 'Du schuetzt dich, indem du haerter, kaelter und distanzierter wirkst, als du dich oft fuehlst. Die Stacheln sind echt, aber sie sind nicht da, weil du Naehe hasst. Sie sind da, weil Naehe riskant wirkt, wenn dir etwas zu viel bedeutet.' },
    FUCK: { code: 'FUCK', name: 'Der Wilde', intro: 'Was zur Hoelle ist das fuer ein Ergebnis?', desc: 'Du bist roher Impuls, Chaos, Appetit und Lebenskraft mit einem Problem bei der Pulsregulierung. Soziale Regeln wirken auf dich oft eher dekorativ. Du schwingst hart zwischen "auf jeden Fall" und "absolut nicht", und wenn du voll im Leben bist, wirkst du wie jemand, den nie ein Zaun halten konnte.' },
    DEAD: { code: 'DEAD', name: 'Spirituell offline', intro: 'Bin ich emotional ueberhaupt noch eingeloggt?', desc: 'Du wirkst wie jemand, der das Spiel zu oft gespielt hat und von der Karte nicht mehr beeindruckt ist. Verlangen gedimmt, Spektakel gedimmt, der Larm der Welt oft nur noch weisses Rauschen. Du bist nicht unbedingt leer. Du bist nur tiefgehend unueberzeugt.' },
    IMFW: { code: 'IMFW', name: 'Das weiche Ziel', intro: 'Warte... bin ich wirklich so leicht verletzbar?', desc: 'Du bindest dich schnell, vertraust intensiv und gibst Bedeutung, bevor dein Sicherheitsteam das Gebaeude gecheckt hat. Du bist nicht schwach. Du bist nur weich in einer Welt, die Weichheit oft mit einer Einladung zur Nachlaessigkeit verwechselt.' },
    HHHH: { code: 'HHHH', name: 'Der Glitch-Goblin', intro: 'Ha. Ha ha. Was bist du eigentlich?', desc: 'Glueckwunsch. Du hast das System kaputtgemacht. Deine Antworten waren so schoen seltsam, dass die Standard-Persoenlichkeitsbibliothek ausgestempelt, Beschwerde eingereicht und dir ehrenhalber den Titel Glitch-Goblin ueberlassen hat. Wir respektieren es, fuerchten es und koennen es nicht verlaesslich erklaeren.' },
    DRUNK: { code: 'DRUNK', name: 'Der Alkohol-Goblin', intro: 'Die versteckte Persoenlichkeit ist dem Chat beigetreten.', desc: 'Dieses Ergebnis taucht nur auf, wenn der Alkohol-Goblin wach wird. Normale Persoenlichkeitslogik wurde von fermentiertem Chaos, fluessigem Selbstbewusstsein und einer fragwuerdig intensiven Beziehung zu schlechten Ideen ueberschrieben. Bitte Wasser trinken und dem Ex nicht schreiben.' }
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
    S1: { L: 'Du bist haerter zu dir selbst, als es die meisten Feinde ueberhaupt waeren.', M: 'Dein Selbstvertrauen haengt stark von Timing, Kontext und Wetterlage ab.', H: 'Du kennst deinen Wert ziemlich gut und brichst nicht so leicht zusammen.' },
    S2: { L: 'Dein inneres Signal wird manchmal unscharf. Identitaets-Buffering kommt vor.', M: 'Du erkennst dich meistens selbst, ausser wenn deine Stimmung kurz das Login uebernimmt.', H: 'Du liest deine eigenen Motive, Grenzen und Muster ziemlich klar.' },
    S3: { L: 'Komfort und Sicherheit stehen bei dir oft ueber grosser Ambition.', M: 'Ein Teil von dir will wachsen, ein anderer will eine Decke und keine Mails.', H: 'Ziele, Fortschritt und Sinn treiben dich deutlich nach vorne.' },
    E1: { L: 'Dein Beziehungs-Alarmsystem ist absurd sensibel.', M: 'Halb Vertrauen, halb Misstrauen. Dein Herz verhandelt oft mit sich selbst.', H: 'Du vertraust eher der Bindung, statt bei jeder Stoerung in Panik zu geraten.' },
    E2: { L: 'Du investierst vorsichtig. Die Tuer ist nicht zu, nur aggressiv gesichert.', M: 'Du kannst dich binden, aber meistens mit emotionalem Backup-Plan.', H: 'Wenn du fuehlst, dann fuehlst du richtig. Energie und Emotion gehen voll rein.' },
    E3: { L: 'Waerme, Naehe und emotionale Verfuegbarkeit sind dir sehr wichtig.', M: 'Du willst Intimitaet und Unabhaengigkeit in anpassbaren Mischungen.', H: 'Selbst in Liebe brauchst du ein klares Gebiet, das nur dir gehoert.' },
    A1: { L: 'Du begegnest der Welt zuerst mit defensivem Misstrauen.', M: 'Du bist weder naiv noch komplett verschworenheitsbereit.', H: 'Du laesst noch Raum dafuer, dass Menschen und Welt okay sein koennten.' },
    A2: { L: 'Du biegst Regeln leicht, wenn Komfort oder Freiheit auf dem Spiel stehen.', M: 'Du kannst Struktur folgen, bist aber nicht ihr Sklave.', H: 'Ordnung und Prozesse ergeben fuer dich Sinn. Improvisiertes Chaos weniger.' },
    A3: { L: 'Sinn kann sich duenn anfuehlen. Vieles im Leben wirkt seltsam performativ.', M: 'An manchen Tagen hast du Richtung. An anderen bist du spirituell im Feierabend.', H: 'Du spuerts eher eine klare Richtung und persoenliche Bedeutung.' },
    Ac1: { L: 'Dein erster Impuls ist oft Risikokontrolle, nicht Ruhm.', M: 'Manchmal willst du gewinnen. Manchmal willst du einfach nur weniger Stress.', H: 'Ergebnisse, Wachstum und Vorwaertsdrang machen dich schnell wach.' },
    Ac2: { L: 'Entscheidungen bedeuten bei dir oft zu viele offene Tabs im Kopf.', M: 'Du denkst Dinge durch, aber nicht bis zum Systemausfall.', H: 'Du entscheidest schnell und magst endloses Rueckwaertsdenken nicht.' },
    Ac3: { L: 'Dein Umsetzungsdrang fuehrt eine toxische, aber leidenschaftliche Beziehung mit Deadlines.', M: 'Du kannst handeln, aber Timing und Stimmung zaehlen stark.', H: 'Wenn etwas unfertig bleibt, kratzt das ziemlich an deinem Gehirn.' },
    So1: { L: 'Soziale Initiative braucht bei dir Anlauf und vielleicht ein Gebet.', M: 'Du kannst die Stimmung mitgehen, aber selten den Raum von selbst aufreissen.', H: 'Du bist eher bereit, Interaktion selbst zu eroeffnen.' },
    So2: { L: 'Wenn du vertraust, kann sich Naehe fuer dich sehr natuerlich anfuehlen.', M: 'Du willst Naehe und Luft zum Atmen in wechselnden Mengen.', H: 'Dein Grenzsystem ist stark. Du gehst einen Schritt zurueck, bevor du dich eingeengt fuehlst.' },
    So3: { L: 'Du bist direkter als kuratiert. Wenn du etwas fuehlst, sickert es raus.', M: 'Du balancierst Wahrheit und soziale Glattheit je nach Kontext.', H: 'Du kannst verschiedene Schichten von dir in verschiedenen Raeumen zeigen.' }
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
        console.warn('Bilder fuer die deutsche Version konnten nicht geladen werden.', error);
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
    if (q.special) return 'Bonusfrage';
    return app.previewMode ? dimensionMeta[q.dim].name : 'Dimension verborgen';
}

function renderQuestions() {
    const visibleQuestions = getVisibleQuestions();
    questionList.innerHTML = '';

    visibleQuestions.forEach((q, index) => {
        const card = document.createElement('article');
        card.className = 'question';
        card.innerHTML = `
          <div class="question-meta">
            <div class="badge">Frage ${index + 1}</div>
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
        ? 'Fertig. Du darfst jetzt deine digitale Seele an die Ergebnisseite uebergeben.'
        : 'Kein Entkommen. Bitte alles beantworten.';
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
    let modeKicker = 'Dein Kerntyp';
    let badge = `Trefferquote ${bestNormal.similarity}% · exakte Treffer ${bestNormal.exact}/15`;
    let sub = 'Das ist aktuell deine staerkste Uebereinstimmung auf Basis der fuenfzehn Dimensionen.';
    let special = false;
    let secondaryType = null;

    if (drunkTriggered) {
        finalType = TYPE_LIBRARY.DRUNK;
        secondaryType = bestNormal;
        modeKicker = 'Versteckte Persoenlichkeit freigeschaltet';
        badge = 'Trefferquote 100% · Ethanol hat das Steuer uebernommen';
        sub = 'Deine Alkohol-Einstellungen haben die normale Persoenlichkeits-Pipeline ueberschrieben.';
        special = true;
    } else if (bestNormal.similarity < 60) {
        finalType = TYPE_LIBRARY.HHHH;
        modeKicker = 'System-Notmodus';
        badge = `Das beste Standard-Match kam nur auf ${bestNormal.similarity}%`;
        sub = 'Die normale Typenbibliothek hat bei deinem Gehirn aufgegeben und dich stattdessen HHHH zugewiesen.';
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
              <div class="dim-item-score">${level} / ${result.rawScores[dim]} Pkt</div>
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
        ? 'Dieser Test ist nur zum Spass. Versteckte Persoenlichkeiten und Notfalltypen wurden absichtlich fuer mehr Chaos eingebaut. Bitte behandle das nicht als Psychologie, Medizin, spirituelle Wahrheit oder juristischen Beweis.'
        : 'Dieser Test ist nur zum Spass. Bitte nicht fuer Diagnosen, Bewerbungen, Dating, Trennungen, Seancen oder grosse Lebensentscheidungen verwenden.';

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
