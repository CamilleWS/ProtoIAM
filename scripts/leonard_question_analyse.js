
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
    "Je suis Léonard de Vinci et je suis né le 15 avril 1452 sur les hauteurs du village de Vinci en Toscane. Je suis le fils illégitime d’une mère servante et paysane et d’un père notaire, aisé et reconnu. Je suis connu pour mes talents d’artiste, d’architecte et de scientifique.",
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
    "Je suis décédé le 2 mai 1519."
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
    ]


]

let unknow_path = [
        require("../assets/videos/leonard_de_vinci/desole_je_sais_pas.mp4"),
        require("../assets/videos/leonard_de_vinci/je_n_est_pas_la_reponse.mp4")
    ]

let keyWords = [
    [["qui", "estu"], ["t'es", "qui"], ["tu", "es", "qui"], ["qui", "etesvous"], ["presente", "toi"], ["presentez", "vous"], ["ou", "ne", "tu"], ["ou", "ne", "vous"], ["qui", "parents"],["quel", "metier"], ["pourquoi", "connu"], ["parle", "de", "toi"]],
    [["qui", "etait", "monalisa"], ["qui", "etait", "mona"], ["qui", "etait", "lisa"], ["parle", "de", "lisa"], ["parle", "de", "mona"], ["florentine lisa gherardini"], ["qui", "est", "monalisa"]],
    [["œuvres"], ["oeuvres"], ["inventions"], ["creations"], ["fier"], ["astu", "fais"], ["tu", "as", "fais"]],

    [
        ["quand", "joconde"], ["quand", "monalisa"], ["parle", "moi", "joconde"], ["parle", "de", "joconde"], ["quesceque", "joconde"], ["quest", "ceque", "joconde"], ["quest", "ce", "que", "joconde"], ["ce", "quest", "joconde"], ["qu", "est", "ce", "que", "joconde"],
        ["parle", "moi", "monalisa"],
        ["la", "plus", "recente", "oeuvre"], ["la", "plus", "recente", "œuvre"],
        ["meilleure", "œuvre"], ["meilleure", "oeuvre"],
        ["connue", "œuvre"], ["connue", "oeuvre"],
        ["populaire", "œuvre"], ["connue", "oeuvre"],

        ["la", "plus", "recente", "creation"], ["derniere", "creation"],
        ["meilleure", "creation"], ["meilleure", "creation"],
        ["connue", "creation"], ["connue", "creation"],
        ["populaire", "creation"], ["connue", "oeuvre"],

        ["la", "plus", "recente", "invention"], ["derniere", "invention"],
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
    [["piller", "cadavre"], ["pillais", "cadavre"], ["etudier", "cadavre"], ["morgue"]],
    [["estu", "decede"], ["estu", "mort"], ["tu", "mort"], ["vous", "mort"], ["etesvous", "mort"]]
]

let already_use = {
    "presentation" : [0, 0],
    "qui-est-la-joconde" : [0],
    "oeuvres-plus-de-succes" : [0],
    "presentation-joconde" : [0],
    "presentation-la-cene" : [0],
    "passion-medecine" : [0],
    "relation-francois1er" : [0],
    "passion-medecine" : [0],
    "assistants" : [0],
    "lieu-expo-joconde" : [0],
    "lieu-enterrement" : [0],
    "question-dissection" : [0],
    "date-deces" : [0],
    "unknow" : [0, 0]
}


import * as Random from 'expo-random';

export function checkQuestion(text)
{
    let variante = Math.floor(Math.random() * Math.floor(already_use["unknow"].length))

    let ret = unknow_path[variante];
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
                // let variante_liaison =  Math.floor(Math.random() * Math.floor(liaisons.length))
                let count = 0
                while (already_use[i][variante]) {
                    variante = Math.floor(Math.random() * Math.floor(videoPath[i].length))
                    if (count == 10 + already_use[i].length)
                        already_use[i].fill(0)
                }
                // console.log(variante)
                // console.log(i)
                //
                // console.log(source[i][variante])
                already_use[i][variante] = 1;

                return ([videoPath[i][variante]])
            }
        }
    }
    let count = 0
    while (already_use["unknow"][variante]) {
        variante = Math.floor(Math.random() * Math.floor(already_use["unknow"].length))
        if (count == 10 + already_use["unknow"].length)
            already_use["unknow"].fill(0)
    }
    already_use["unknow"][variante] = 1;
    for (const key in already_use) {
        var value = already_use[key];
        console.log(value)
    }
    return ([ret])
}


export function questionLeonardByIndex (index)
{
    return questions[index]
}

export function questionLeonard ()
{
    return questions
}
