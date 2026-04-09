const dimensionMeta = {
    S1: { name: 'S1 Self-worth', model: 'Self model' },
    S2: { name: 'S2 Self-clarity', model: 'Self model' },
    S3: { name: 'S3 Core drive', model: 'Self model' },
    E1: { name: 'E1 Attachment security', model: 'Emotion model' },
    E2: { name: 'E2 Emotional investment', model: 'Emotion model' },
    E3: { name: 'E3 Boundaries and dependence', model: 'Emotion model' },
    A1: { name: 'A1 Worldview', model: 'Attitude model' },
    A2: { name: 'A2 Rules vs freedom', model: 'Attitude model' },
    A3: { name: 'A3 Sense of meaning', model: 'Attitude model' },
    Ac1: { name: 'Ac1 Motivation style', model: 'Action model' },
    Ac2: { name: 'Ac2 Decision style', model: 'Action model' },
    Ac3: { name: 'Ac3 Execution mode', model: 'Action model' },
    So1: { name: 'So1 Social initiative', model: 'Social model' },
    So2: { name: 'So2 Interpersonal boundaries', model: 'Social model' },
    So3: { name: 'So3 Expression and authenticity', model: 'Social model' }
};

const questions = [
    {
        id: 'q1', dim: 'S1',
        text: "I’m not just single. I’m basically an NPC with anxiety, low self-esteem, and a PhD in romantic delusion. I’ve never had a real relationship. My entire youth feels like one long montage of imagining a life I never got to live while everybody else somehow looked normal on Instagram. Be honest: does this hit a little too hard?",
        options: [
            { label: "Why does this feel personal?", value: 1 },
            { label: "Okay... that was a lot.", value: 2 },
            { label: "Nope. Couldn’t be me.", value: 3 }
        ]
    },
    {
        id: 'q2', dim: 'S1',
        text: "I often feel like the people around me are just more impressive than I am.",
        options: [
            { label: "Yeah, pretty much.", value: 1 },
            { label: "Sometimes.", value: 2 },
            { label: "Not really.", value: 3 }
        ]
    },
    {
        id: 'q3', dim: 'S2',
        text: "I have a pretty clear sense of who I actually am.",
        options: [
            { label: "Disagree", value: 1 },
            { label: "Neutral", value: 2 },
            { label: "Agree", value: 3 }
        ]
    },
    {
        id: 'q4', dim: 'S2',
        text: "Deep down, I know what I genuinely care about.",
        options: [
            { label: "Disagree", value: 1 },
            { label: "Neutral", value: 2 },
            { label: "Agree", value: 3 }
        ]
    },
    {
        id: 'q5', dim: 'S3',
        text: "I really want to keep leveling up and become a stronger version of myself.",
        options: [
            { label: "Disagree", value: 1 },
            { label: "Neutral", value: 2 },
            { label: "Agree", value: 3 }
        ]
    },
    {
        id: 'q6', dim: 'S3',
        text: "Other people’s opinions don’t really run my life.",
        options: [
            { label: "Disagree", value: 1 },
            { label: "Neutral", value: 2 },
            { label: "Agree", value: 3 }
        ]
    },
    {
        id: 'q7', dim: 'E1',
        text: "Your partner hasn’t replied for 5 hours and says they had food poisoning. What’s your first thought?",
        options: [
            { label: "Five hours? That story is not adding up.", value: 1 },
            { label: "I’m torn between trust and suspicion.", value: 2 },
            { label: "Maybe they really do feel awful today.", value: 3 }
        ]
    },
    {
        id: 'q8', dim: 'E1',
        text: "In relationships, I often worry that I’ll be left behind.",
        options: [
            { label: "Yes", value: 1 },
            { label: "Sometimes", value: 2 },
            { label: "No", value: 3 }
        ]
    },
    {
        id: 'q9', dim: 'E2',
        text: "When I say I take love seriously, I actually mean it.",
        options: [
            { label: "Honestly, not always.", value: 1 },
            { label: "Maybe?", value: 2 },
            { label: "Yes. Fully and sincerely.", value: 3 }
        ]
    },
    {
        id: 'q10', dim: 'E2',
        text: "Imagine your partner is absurdly kind, emotionally mature, funny, smart, gorgeous, loyal, insightful, charming, and somehow still obsessed with you. What happens next?",
        options: [
            { label: "I still wouldn’t let myself go all in.", value: 1 },
            { label: "I’d land somewhere in the middle.", value: 2 },
            { label: "I’d treasure them and probably go full lovesick idiot.", value: 3 }
        ]
    },
    {
        id: 'q11', dim: 'E3',
        text: "You start dating someone and they become extremely clingy. Your honest reaction?",
        options: [
            { label: "Honestly? I kind of love that.", value: 1 },
            { label: "I can work with either vibe.", value: 2 },
            { label: "Please give me space before I evaporate.", value: 3 }
        ]
    },
    {
        id: 'q12', dim: 'E3',
        text: "Personal space matters a lot to me in any relationship.",
        options: [
            { label: "I prefer closeness and mutual dependence.", value: 1 },
            { label: "Depends on the person.", value: 2 },
            { label: "Absolutely. Non-negotiable.", value: 3 }
        ]
    },
    {
        id: 'q13', dim: 'A1',
        text: "Most people are basically decent.",
        options: [
            { label: "That sounds wildly optimistic.", value: 1 },
            { label: "Maybe.", value: 2 },
            { label: "Yeah, I still believe that.", value: 3 }
        ]
    },
    {
        id: 'q14', dim: 'A1',
        text: "You’re walking down the street and an absurdly adorable kid runs up and hands you a lollipop. No catch, no parents in sight, just pure cuteness. What’s your reaction?",
        options: [
            { label: "That is the sweetest thing I’ve seen all week.", value: 3 },
            { label: "I am deeply confused.", value: 2 },
            { label: "This feels like the opening scene of a scam documentary.", value: 1 }
        ]
    },
    {
        id: 'q15', dim: 'A2',
        text: "It’s finals week, your school expects you at mandatory study hall, but your crush wants to play Fortnite with you tonight. What do you do?",
        options: [
            { label: "Skip it. One night won’t kill me.", value: 1 },
            { label: "I’d probably try to come up with an excuse.", value: 2 },
            { label: "It’s finals week. I’m staying put.", value: 3 }
        ]
    },
    {
        id: 'q16', dim: 'A2',
        text: "I like breaking routine and hate feeling boxed in.",
        options: [
            { label: "Agree", value: 1 },
            { label: "Neutral", value: 2 },
            { label: "Disagree", value: 3 }
        ]
    },
    {
        id: 'q17', dim: 'A3',
        text: "I usually have a sense of direction in life, even if the details are messy.",
        options: [
            { label: "Disagree", value: 1 },
            { label: "Neutral", value: 2 },
            { label: "Agree", value: 3 }
        ]
    },
    {
        id: 'q18', dim: 'A3',
        text: "Sometimes I look at life and think: wow, this whole thing is basically hormones, appetite, exhaustion, and chaos pretending to be meaning.",
        options: [
            { label: "Exactly.", value: 1 },
            { label: "Maybe. Depends on the day.", value: 2 },
            { label: "No, that is way too cynical.", value: 3 }
        ]
    },
    {
        id: 'q19', dim: 'Ac1',
        text: "I’m usually driven more by growth and achievement than by avoiding risk and hassle.",
        options: [
            { label: "Disagree", value: 1 },
            { label: "Neutral", value: 2 },
            { label: "Agree", value: 3 }
        ]
    },
    {
        id: 'q20', dim: 'Ac1',
        text: "You’ve been sitting on the toilet for 30 minutes, nothing is happening, and this is now a battle of wills. What are you most like?",
        options: [
            { label: "Stay longer. Maybe the universe just needs a minute.", value: 1 },
            { label: "Give yourself an unhinged motivational speech.", value: 2 },
            { label: "Use the practical solution and move on with your life.", value: 3 }
        ]
    },
    {
        id: 'q21', dim: 'Ac2',
        text: "I tend to make decisions quickly and don’t love dragging things out.",
        options: [
            { label: "Disagree", value: 1 },
            { label: "Neutral", value: 2 },
            { label: "Agree", value: 3 }
        ]
    },
    {
        id: 'q22', dim: 'Ac2',
        text: "There is no question here. Pick blindly and accept your fate.",
        options: [
            { label: "A feels weirdly correct?", value: 1 },
            { label: "Let’s just go with B.", value: 2 },
            { label: "When in doubt, C.", value: 3 }
        ]
    },
    {
        id: 'q23', dim: 'Ac3',
        text: 'When people call you "high execution," which inner response feels closest?',
        options: [
            { label: "Only when panic and deadlines team up on me.", value: 1 },
            { label: "Sometimes, sure.", value: 2 },
            { label: "Yes. Things should move forward.", value: 3 }
        ]
    },
    {
        id: 'q24', dim: 'Ac3',
        text: "I usually make plans, and then...",
        options: [
            { label: "Reality body-slams them immediately.", value: 1 },
            { label: "Some work out, some don’t.", value: 2 },
            { label: "I get deeply annoyed when the plan gets wrecked.", value: 3 }
        ]
    },
    {
        id: 'q25', dim: 'So1',
        text: "You made a bunch of online friends through Valorant, and now they want to meet up in real life. What’s your first instinct?",
        options: [
            { label: "Online banter is one thing. IRL is another level.", value: 1 },
            { label: "Could be fine. I’ll see how the vibe feels.", value: 2 },
            { label: "I’m dressing well and showing up with energy. What if this is iconic?", value: 3 }
        ]
    },
    {
        id: 'q26', dim: 'So1',
        text: "A friend brings one of their friends along to hang out. Which version of you shows up?",
        options: [
            { label: "I instinctively keep some distance.", value: 1 },
            { label: "If the vibe is good, I’m good.", value: 2 },
            { label: "A friend of my friend is basically already on the team.", value: 3 }
        ]
    },
    {
        id: 'q27', dim: 'So2',
        text: "I’m kind of an electric fence in human form. Get too close and the alarm goes off.",
        options: [
            { label: "Agree", value: 3 },
            { label: "Neutral", value: 2 },
            { label: "Disagree", value: 1 }
        ]
    },
    {
        id: 'q28', dim: 'So2',
        text: "I want real closeness with people I trust, like aggressively familiar inner-circle closeness.",
        options: [
            { label: "Agree", value: 1 },
            { label: "Neutral", value: 2 },
            { label: "Disagree", value: 3 }
        ]
    },
    {
        id: 'q29', dim: 'So3',
        text: "Sometimes you clearly have a negative opinion about something, but you keep it to yourself. Why, usually?",
        options: [
            { label: "That rarely happens.", value: 1 },
            { label: "I don’t want to make things awkward.", value: 2 },
            { label: "I’d rather not reveal how dark my thoughts actually are.", value: 3 }
        ]
    },
    {
        id: 'q30', dim: 'So3',
        text: "I show different sides of myself around different people.",
        options: [
            { label: "Disagree", value: 1 },
            { label: "Neutral", value: 2 },
            { label: "Agree", value: 3 }
        ]
    }
];

const specialQuestions = [
    {
        id: 'drink_gate_q1',
        special: true,
        kind: 'drink_gate',
        text: 'Which one sounds most like your usual vibe?',
        options: [
            { label: 'Eating, sleeping, and surviving', value: 1 },
            { label: 'Artsy hobbies', value: 2 },
            { label: 'Drinking', value: 3 },
            { label: 'Fitness', value: 4 }
        ]
    },
    {
        id: 'drink_gate_q2',
        special: true,
        kind: 'drink_trigger',
        text: 'What is your relationship with alcohol, honestly?',
        options: [
            { label: 'A drink or two is nice. I have limits.', value: 1 },
            { label: 'I treat liquor like emotional support hardware.', value: 2 }
        ]
    }
];

const TYPE_LIBRARY = {
    CTRL: { code: 'CTRL', name: 'The Handler', intro: 'Yep. You really do have the save file.', desc: 'You are the person people call when life starts buffering. Rules look optional to you, plans feel editable, and chaos somehow becomes manageable when you touch it. Your superpower is controlled intervention: not loud, not dramatic, just terrifyingly effective.' },
    'ATM-er': { code: 'ATM-er', name: 'The Payer', intro: 'Do I look rich to you?', desc: 'You may not literally be made of money, but somehow you are always the one paying in some form: time, patience, energy, emotional labor, maybe your last functional brain cell. You are reliable to a fault and somehow keep handing out stability like it is free.' },
    'Dior-s': { code: 'Dior-s', name: 'The Basement Philosopher', intro: 'My flop era is a worldview, actually.', desc: 'You are not lazy. You are spiritually unconvinced by the sales pitch of modern life. You have looked at hustle culture, productivity worship, and status games, and quietly concluded that a lot of it is just prison with nicer branding.' },
    BOSS: { code: 'BOSS', name: 'The Driver', intro: 'Give me the wheel. I’ll handle it.', desc: 'You radiate executive energy even when you are absolutely not trying to. You like direction, movement, and competence. If something is drifting off course, your instinct is not to discuss it forever. Your instinct is to grab the wheel and land the thing.' },
    'THAN-K': { code: 'THAN-K', name: 'The Gratitude Machine', intro: 'I would like to thank the academy and this traffic jam.', desc: 'You can find silver linings in situations that would make other people throw a shoe. Some call it optimism. Others call it suspicious. Either way, you are weirdly gifted at finding emotional oxygen in stale air.' },
    'OH-NO': { code: 'OH-NO', name: 'The Catastrophizer', intro: 'Oh no. Why is this so accurate?', desc: 'You are a risk management department disguised as a person. One poorly placed cup and you have already simulated water damage, electrical failure, insurance calls, and a very expensive lesson. Annoying? Maybe. Useful? Absolutely.' },
    GOGO: { code: 'GOGO', name: 'The Bulldozer', intro: 'All right. We move.', desc: 'You believe in momentum the way some people believe in religion. You are not here to over-discuss the vibe. You are here to clear the task list. When other people are still processing the situation, you have already pushed it into the next phase.' },
    SEXY: { code: 'SEXY', name: 'The Main Character', intro: 'Unfortunately, your aura has entered the room first.', desc: 'You attract attention in a way that feels less like effort and more like weather. People notice you, project onto you, and occasionally malfunction around you. You do not even have to perform. Existing is usually enough.' },
    'LOVE-R': { code: 'LOVE-R', name: 'The Hopeless Romantic', intro: 'Your emotional bandwidth is frankly excessive.', desc: 'You were not built for casual vibes. You were built for yearning, projection, symbolism, and emotionally devastating playlists. A falling leaf can become a metaphor. A crush can become an internal civilization.' },
    MUM: { code: 'MUM', name: 'The Comfort Parent', intro: 'Do you need water, validation, or both?', desc: 'You have warm-bath nervous system energy. People feel oddly safe around you because you pick up emotional weather fast and instinctively shift into care mode. The catch is that you are usually more generous with softness toward others than toward yourself.' },
    FAKE: { code: 'FAKE', name: 'The Shapeshifter', intro: 'There are layers here. Too many layers.', desc: 'You adapt to context so well it can get eerie. Friend mode, work mode, charming mode, emotionally unavailable mode: you switch fast and clean. Sometimes people think you are fake. More often, you are just absurdly aware of the room.' },
    OJBK: { code: 'OJBK', name: 'The Whatever Monarch', intro: 'I said “whatever,” and I meant it.', desc: 'You move through life with the emotional investment level of royalty reviewing peasant disputes. Rice or pasta? Indoor or outdoor seating? Your answer is often some elegant variation of: all of this is beneath me.' },
    MALO: { code: 'MALO', name: 'The Chaos Gremlin', intro: 'Civilization was not designed for your spirit.', desc: 'A part of you never left the tree branch. You are playful, ungovernable, and suspicious of anything too polished or too serious. If life feels like a badly designed game, your instinct is to ignore the tutorial and start climbing the scenery.' },
    'JOKE-R': { code: 'JOKE-R', name: 'The Sad Clown', intro: 'Turns out the bit was emotional self-defense.', desc: 'You are funny in the way storms can be beautiful: loud, theatrical, slightly concerning. You keep rooms alive with jokes and timing, but the comedy often doubles as armor. If people laugh hard enough, maybe nobody asks what is under it.' },
    'WOC!': { code: 'WOC!', name: 'The “Holy Crap” Person', intro: 'Holy crap, how did I get this one?', desc: 'You react loudly but think quietly. On the outside: chaos, exclamations, disbelief. On the inside: extremely clear pattern recognition. You know when something is nonsense, and you usually express it with one gloriously heartfelt noise.' },
    'THIN-K': { code: 'THIN-K', name: 'The Overthinker', intro: 'Please hold. Analysis still in progress.', desc: 'Your brain does not browse. It audits. You do not just consume information; you inspect premises, bias, structure, motive, and whether the writer should be allowed near a keyboard. Thought is not a hobby for you. It is your default operating system.' },
    SHIT: { code: 'SHIT', name: 'The Furious Competent One', intro: 'Everything is terrible. I will fix it anyway.', desc: 'You complain like the world personally offended you, then turn around and clean up the mess better than anyone else. Your emotional tone says doom; your behavior says project manager with unresolved rage. Somehow, things still get done.' },
    ZZZZ: { code: 'ZZZZ', name: 'The Shutdown Artist', intro: 'I am not dead. I am in energy-saving mode.', desc: 'You may ignore ninety-nine notifications, three deadlines, and a social crisis, but the second the final alarm goes off, you rise from the grave and produce something weirdly decent. Your relationship with urgency is toxic, but strangely productive.' },
    POOR: { code: 'POOR', name: 'The Laser Beam', intro: 'I’m not low-resource. I’m concentrated.', desc: 'You look underpowered only because you refuse to spread yourself thin. While other people scatter effort across a hundred little things, you compress yours into one beam and burn through what matters. It reads as scarcity from far away. Up close, it is focus.' },
    MONK: { code: 'MONK', name: 'The Boundary Monk', intro: 'No, I do not have worldly needs right now.', desc: 'You treat personal space like sacred ground. Solitude is not a sign of damage to you. It is maintenance, clarity, peace, and maybe survival. You can care deeply without wanting somebody in your psychic living room 24/7.' },
    IMSB: { code: 'IMSB', name: 'The Internal Meltdown', intro: 'Be honest. Am I cooked?', desc: 'Inside you live two immortal enemies: one wants to shoot your shot, the other wants to write your social obituary in advance. You are not actually doomed. You are just running a catastrophic amount of internal cinema before every emotionally relevant choice.' },
    SOLO: { code: 'SOLO', name: 'The Hedgehog', intro: 'Why am I getting dragged like this?', desc: 'You protect yourself by acting harder, colder, and more detached than you often feel. The spikes are real, but they are not there because you hate closeness. They are there because closeness feels risky when you care too much.' },
    FUCK: { code: 'FUCK', name: 'The Feral One', intro: 'What the hell kind of result is this?', desc: 'You are raw impulse, chaos, appetite, and life force with a pulse check problem. Social rules often feel decorative to you. You swing hard between “hell yes” and “absolutely not,” and when fully alive, you feel like a person no fence was ever built to contain.' },
    DEAD: { code: 'DEAD', name: 'The Spiritually Offline', intro: 'Am I still emotionally logged in?', desc: 'You give the impression of someone who played the game too many times and stopped being impressed by the map. Desire is muted, spectacle is muted, and the noise of the world often feels like static. You are not necessarily empty. You are just profoundly unconvinced.' },
    IMFW: { code: 'IMFW', name: 'The Soft Target', intro: 'Wait... am I actually this easy to hurt?', desc: 'You bond fast, trust hard, and attach meaning before your security team has cleared the building. You are not weak. You are just tender in a world that often mistakes tenderness for an invitation to be careless.' },
    HHHH: { code: 'HHHH', name: 'The Glitch Goblin', intro: 'Ha. Ha ha. Hahaha. What are you?', desc: 'Congratulations. You broke the system. Your answers were so beautifully strange that the standard personality library clocked out, filed a complaint, and left you with the honorary title of Glitch Goblin. We respect it, fear it, and cannot confidently explain it.' },
    DRUNK: { code: 'DRUNK', name: 'The Booze Goblin', intro: 'The hidden persona has entered the chat.', desc: 'This result only appears when the alcohol goblin wakes up. Normal personality logic has been overridden by fermented chaos, liquid confidence, and a suspiciously strong emotional relationship with bad ideas. Please hydrate and stop texting your ex.' }
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
    S1: { L: 'You are harder on yourself than most enemies would bother being.', M: 'Your confidence depends heavily on timing, context, and weather conditions.', H: 'You more or less know your own worth and do not crumble that easily.' },
    S2: { L: 'Your internal signal can get fuzzy. Identity buffering is common.', M: 'You usually recognize yourself, unless your mood temporarily steals the login.', H: 'You have a solid read on your own motives, limits, and patterns.' },
    S3: { L: 'Comfort and safety often outrank grand ambition.', M: 'Part of you wants growth; part of you wants a blanket and no emails.', H: 'Goals, progress, and meaning tend to push you forward pretty hard.' },
    E1: { L: 'Your relationship alarm system is absurdly sensitive.', M: 'Half trust, half suspicion. Your heart is often negotiating with itself.', H: 'You are more likely to trust the bond than panic over every disturbance.' },
    E2: { L: 'You invest carefully. The door is not closed, just aggressively secured.', M: 'You can commit, but usually with an emotional backup plan.', H: 'Once you care, you care for real. Energy and feeling go in fully.' },
    E3: { L: 'Warmth, closeness, and emotional availability matter a lot to you.', M: 'You want intimacy and independence in adjustable proportions.', H: 'Even in love, you need some territory that is unmistakably yours.' },
    A1: { L: 'You approach the world with defensive suspicion first.', M: 'You are not naive, but not fully conspiratorial either.', H: 'You still leave room for people and the world to be decent.' },
    A2: { L: 'You bend rules easily if comfort or freedom is on the line.', M: 'You can follow structure, but you are not a slave to it.', H: 'Order and process make sense to you. Improvised chaos does not.' },
    A3: { L: 'Meaning can feel thin. A lot of life looks weirdly performative.', M: 'Some days you have purpose. Some days you are spiritually off-duty.', H: 'You tend to feel a clearer sense of direction and personal meaning.' },
    Ac1: { L: 'Your first instinct is often risk control, not glory.', M: 'Sometimes you want to win. Sometimes you just want less trouble.', H: 'Results, growth, and forward motion light you up quickly.' },
    Ac2: { L: 'Decision-making often involves too many tabs open in your brain.', M: 'You think things through, but not to total system failure.', H: 'You decide fast and usually dislike circling back endlessly.' },
    Ac3: { L: 'Your execution drive has a toxic but passionate bond with deadlines.', M: 'You can act, but timing and mood matter a lot.', H: 'If something stays unfinished, it scratches at your brain.' },
    So1: { L: 'Social initiation takes a warm-up period and maybe a prayer.', M: 'You can match the vibe, but rarely force the room.', H: 'You are more willing to open the interaction yourself.' },
    So2: { L: 'When you trust someone, closeness can feel deeply natural to you.', M: 'You want closeness and breathing room in shifting amounts.', H: 'Your boundary system is strong. You step back before you feel cornered.' },
    So3: { L: 'You are more direct than curated. If you feel it, it leaks out.', M: 'You balance truth and social smoothness depending on context.', H: 'You are skilled at showing different layers of yourself in different rooms.' }
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
        console.warn('Could not load poster images for English version.', error);
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
    if (q.special) return 'Bonus question';
    return app.previewMode ? dimensionMeta[q.dim].name : 'Dimension hidden';
}

function renderQuestions() {
    const visibleQuestions = getVisibleQuestions();
    questionList.innerHTML = '';

    visibleQuestions.forEach((q, index) => {
        const card = document.createElement('article');
        card.className = 'question';
        card.innerHTML = `
          <div class="question-meta">
            <div class="badge">Question ${index + 1}</div>
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
        ? 'All done. You may now hand your digital soul over to the result page.'
        : 'No escape. Finish every question. The world is messy enough already.';
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
    let modeKicker = 'Your core type';
    let badge = `Match score ${bestNormal.similarity}% · exact hits ${bestNormal.exact}/15`;
    let sub = 'This is your strongest current match based on the fifteen dimensions.';
    let special = false;
    let secondaryType = null;

    if (drunkTriggered) {
        finalType = TYPE_LIBRARY.DRUNK;
        secondaryType = bestNormal;
        modeKicker = 'Hidden persona unlocked';
        badge = 'Match score 100% · ethanol has seized the wheel';
        sub = 'Your alcohol settings overrode the standard personality pipeline.';
        special = true;
    } else if (bestNormal.similarity < 60) {
        finalType = TYPE_LIBRARY.HHHH;
        modeKicker = 'System fallback';
        badge = `Best standard match only reached ${bestNormal.similarity}%`;
        sub = 'The regular type library gave up on your brain and assigned you to HHHH instead.';
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
        ? 'This quiz is for fun. Hidden personas and emergency fallback types were added as deliberate chaos. Please do not treat this as psychology, medicine, spiritual truth, or legal evidence.'
        : 'This quiz is for fun. Please do not use it for diagnosis, hiring, dating, breakups, séances, or major life decisions. Laugh responsibly.';

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
