
let questions = [
    "Qui es-tu ?",
    "Qui est Mona Lisa ?",
    "Parle moi de tes plus belles inventions ?",
    "Parle moi de la Joconde.",
    "Parle moi de la Cène.",
    "Parle moi de ta passion pour la médecine ?",
    "Parle moi de ta relation avec François Premier.",
    "As tu eu des assistants ?",
    "Où se trouve la Joconde ?",
    "Où se trouve la Cène?",
    "Où es tu enterré ?",
    "Pillais-tu vraiment des morgues pour étudier des cadavres ?",
    "Quand es-tu décédé ?"
]

let answers = [
    "Je suis Léonard de Vinci et je suis né le 15 avril 1452 sur les hauteurs du village de Vinci en Toscane.",
    "La théorie la plus répandue est que Mona Lisa serait la représentation de la Florentine Lisa Gherardini, épouse de Francesco del Giocondo.",
    "Je suis particulièrement fier de mes œuvres 'La Joconde' et 'La Cene'",
    "La Joconde, ou Portrait de Mona Lisa, est un tableau que j’ai réalisé entre 1503 et 1506 ou entre 1513 et 1516, je ne me souviens plus vraiment.",
    "La Cène est une peinture murale que j’ai réalisée de 1495 à 1498 pour le réfectoire du couvent Dominicain de Santa Maria delle Grazie à Milan.",
    "J’ai commencé à m’initier à l'anatomie du corps lors de mon apprentissage avec Andrea del Verrocchio, mon maître. Comme artiste, je suis rapidement devenu un expert de l’anatomie topographique, notamment après mes nombreuses études des muscles, des tendons et d'autres caractéristiques anatomiques visibles",
    "François premier fut mon dernier mécène. Il reconnut ma valeur et m’invita à résider dans le splendide château du Clos Lucé, où je passa le reste de ma vie.",
    "J’ai eu plusieurs assistants, mais le plus connu reste Salai. D’ailleurs, certains pensent que Salai est le modèle qui m’a servi à réaliser La Joconde !",
    "La Joconde se trouve actuellement au Louvre.",
    "La Cène est exposée à l’Église Santa Maria delle Grazie de Milan.",
    "Je repose à la Chapelle Saint-Hubert à Amboise.",
    "Oui, mais bien que cela soit mal vue cela m’a permis d’étudier en profondeur l’anatomie du corps humain afin d’en comprendre les mécanismes.",
    "Je suis décédé le 2 mai 1519.",
    "Désolé, je n'ai pas compris votre question."
]

let liaisons = [
    "Ensuite",
    "Pour aller plus en profondeur",
    "Plus Précisement",
    "Pour être plus précis",
    "Et donc",
    "Et bien",
    "Biensur",
    "Evidement",
    "Bien Evidement",
    "Alors"
]

// let test = [ ["lol", "xd"] ]

let linkPath = [
    [
        require("../assets/videos/leonard_de_vinci/liaisons/alors.mov")
    ],
    [
        require("../assets/videos/leonard_de_vinci/liaisons/bien-evidemment.mov")
    ],
    [
        require("../assets/videos/leonard_de_vinci/liaisons/bien-sur.mov")
    ],
    [
        require("../assets/videos/leonard_de_vinci/liaisons/eh-donc.mov")
    ],
    [
        require("../assets/videos/leonard_de_vinci/liaisons/ensuite.mov")
    ],
    [
        require("../assets/videos/leonard_de_vinci/liaisons/evidemment.mov")
    ],
    [
        require("../assets/videos/leonard_de_vinci/liaisons/plus-precisement.mov")
    ],
    [
        require("../assets/videos/leonard_de_vinci/liaisons/pour-aller-plus-en-profondeur.mov")
    ],
    [
        require("../assets/videos/leonard_de_vinci/liaisons/pour-etre-plus-recis.mov")
    ]
]

let videoPath = [
    [
        require("../assets/videos/leonard_de_vinci/presentation-2.mov"),
        require("../assets/videos/leonard_de_vinci/presentation-1.mov")
    ],
    [
        require("../assets/videos/leonard_de_vinci/qui-est-la-joconde.mov")
    ],
    [
        require("../assets/videos/leonard_de_vinci/oeuvres-plus-de-succes.mov")
    ],
    [
        require("../assets/videos/leonard_de_vinci/presentation-joconde.mov")
    ],
    [
        require("../assets/videos/leonard_de_vinci/presentation-la-cene.mov")
    ],
    [
        require("../assets/videos/leonard_de_vinci/passion-medecine.mov")
    ],
    [
        require("../assets/videos/leonard_de_vinci/relation-francois1er.mov")
    ],
    [
        require("../assets/videos/leonard_de_vinci/assistants.mov")
    ],
    [
        require("../assets/videos/leonard_de_vinci/lieu-expo-joconde.mov")
    ],
    [
        require("../assets/videos/leonard_de_vinci/lieu-expo-cene.mov")
    ],
    [
        require("../assets/videos/leonard_de_vinci/lieu-enterrement.mov")
    ],
    [
        require("../assets/videos/leonard_de_vinci/question-dissection.mov")
    ],
    [
        require("../assets/videos/leonard_de_vinci/date-deces.mov")
    ],
    [
        require("../assets/videos/leonard_de_vinci/desole_je_sais_pas.mp4"),
        require("../assets/videos/leonard_de_vinci/je_n_est_pas_la_reponse.mp4")
    ]

]


let keyWords = [
    [["qui", "estu"], ["t'es", "qui"], ["tu", "es", "qui"], ["qui", "etesvous"], ["presente", "toi"], ["presentez", "vous"], ["ou", "ne", "tu"], ["ou", "ne", "vous"], ["quand", "ne", "tu"], ["quand", "ne", "vous"], ["ou", "ne", "vous"], ["qui", "parents"],["quel", "metier"], ["pourquoi", "connu"], ["parle", "de", "toi"]],
    [["qui", "etait", "monalisa"], ["qui", "etait", "mona"], ["qui", "etait", "lisa"], ["parle", "de", "lisa"], ["parle", "de", "mona"], ["florentine lisa gherardini"], ["qui", "est", "monalisa"]],
    [["œuvres"], ["oeuvres"], ["inventions"], ["creations"], ["fier"], ["astu", "fais"], ["tu", "as", "fais"]],

    [
        ["quand", "joconde"], ["quand", "monalisa"], ["parle", "moi", "joconde"], ["parle", "moi", "monalisa"],
        ["la", "plus", "recente", "oeuvre"], ["la", "plus", "recente", "œuvre"],
        ["meilleure", "œuvre"], ["meilleure", "oeuvre"],
        ["connue", "œuvre"], ["connue", "oeuvre"],
        ["populaire", "œuvre"], ["connue", "oeuvre"],

        ["la", "plus", "recente", "creation"], ["derner", "creation"],
        ["meilleure", "creation"], ["meilleure", "creation"],
        ["connue", "creation"], ["connue", "creation"],
        ["populaire", "creation"], ["connue", "oeuvre"],

        ["la", "plus", "recente", "invention"], ["dernier", "invention"],
        ["meilleure", "invention"],
        ["connue", "invention"],
        ["populaire", "invention"]

    ],

    [["pourquoi", "cene"], ["quand", "cene"], ["raison", "cène"], ["parle", "moi", "cene"], ["explique", "cene"]],
    [["hobby"], ["passion"], ["medecine"], ["anatomie"], ["corps", "humain"], ["muscles"], ["tendons"], ["anatomique"]],
    [["dernier", "mecene"], ["francois", "premier"], ["françois", "premier"]],
    [["assistant"], ["salai"]],
    [["ou", "joconde"], ["ou", "monalisa"]],
    [["ou", "cene"]],﻿
    [["ou", "enterre"], ["ou", "tombe"]],
    [["piller", "cadavre"], ["pillais", "cadavre"], ["etudi", "cadavre"], ["morgue"]],
    [["estu", "decede"], ["estu", "mort"], ["tu", "mort"], ["vous", "mort"], ["etesvous", "mort"]]
]

import * as Random from 'expo-random';

export function checkLeonardQuestion(text)
{
    text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    text = text.replace(/[-_?!. ]/gi, '');
    let variante = Math.floor(Math.random() * Math.floor(videoPath[videoPath.length - 1].length))

    let ret = videoPath[videoPath.length - 1][variante];
    for (let i = 0; i < questions.length; i++) {
        for (let j = 0; j < keyWords[i].length; j++) {
            let goodKeyWord = 0;
            for (let k = 0; k < keyWords[i][j].length; k++) {
                let regexStr = keyWords[i][j][k]
                let regexp = new RegExp(regexStr, "gi")
                if (text.match(regexp)) {
                    goodKeyWord += 1
                }

            }
            if (goodKeyWord == keyWords[i][j].length) {
                let source = videoPath;
                let variante_liaison =  Math.floor(Math.random() * Math.floor(liaisons.length))
                variante = Math.floor(Math.random() * Math.floor(source[i].length))
                return (source[i][variante])
            }
        }
    }
    return (ret)
}

export function getLeonardAnswerStr(text)
{
    text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    text = text.replace(/[-_?!. ]/gi, '');

    let ret = answers[answers.length - 1];
    for (let i = 0; i < questions.length; i++) {
        for (let j = 0; j < keyWords[i].length; j++) {
            let goodKeyWord = 0;
            for (let k = 0; k < keyWords[i][j].length; k++) {
                let regexStr = keyWords[i][j][k]
                let regexp = new RegExp(regexStr, "gi")
                if (text.match(regexp)) {
                    goodKeyWord += 1
                }

            }
            if (goodKeyWord == keyWords[i][j].length) {
                return (answers[i])
            }
        }
    }
    return (ret)
}


export function questionLeonardByIndex (index)
{
    return questions[index]
}

export function questionLeonard ()
{
    return questions
}
