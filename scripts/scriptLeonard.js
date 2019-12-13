
export class Answear {
  constructor() {
    this.str = "";
    this.question = "";
    this.video_link = "";
  }
}

let ret = new Answear()

let keyWords = [
    [["bonjour"],["qui", "estu"], ["t'es", "qui"], ["tu", "es", "qui"], ["qui", "etesvous"], ["presente", "toi"], ["presentez", "vous"], ["ou", "ne", "tu"], ["ou", "ne", "vous"], ["quand", "ne", "tu"], ["quand", "ne", "vous"], ["ou", "ne", "vous"], ["qui", "parents"],["quel", "metier"], ["pourquoi", "connu"], ["parle", "de", "toi"], ["te", "connaitre"]],
    [["qui", "etait", "monalisa"], ["qui", "etait", "mona"], ["qui", "etait", "lisa"], ["parle", "de", "lisa"], ["parle", "de", "mona"], ["florentine lisa gherardini"], ["qui", "est", "monalisa"], ["qui", "est", "joconde"], ["qui", "etait", "joconde"]],
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
    [["piller", "cadavre"], ["pillais", "cadavre"], ["etudi", "cadavre"], ["morgue"]],
    [["estu", "decede"], ["estu", "mort"], ["quand", "tu", "mort"], ["quand", "vous", "mort"], ["annee", "vous", "mort"], ["annee", "tu", "mort"], ["etesvous", "mort"]]
]

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
    ["Moi, je suis Léonard de Vinci et je suis né le 15 avril 1452 sur les hauteurs du village de Vinci en Toscane.", "Je suis Léonard de Vinci et je suis né le 15 avril 1452 sur les hauteurs du village de Vinci en Toscane."],
    ["La théorie la plus répandue est que Mona Lisa serait la représentation de la Florentine Lisa Gherardini, épouse de Francesco del Giocondo."],
    ["Je suis particulièrement fier de mes œuvres 'La Joconde' et 'La Cene'"],
    ["La Joconde, ou Portrait de Mona Lisa, est un tableau que j’ai réalisé entre 1503 et 1506 ou entre 1513 et 1516, je ne me souviens plus vraiment."],
    ["Aaaah oui la Cène. C'est une peinture murale que j’ai réalisée de 1495 à 1498 pour le réfectoire du couvent Dominicain de Santa Maria delle Grazie à Milan."],
    ["J’ai commencé à m’initier à l'anatomie du corps lors de mon apprentissage avec Andrea del Verrocchio, mon maître. Comme artiste, je suis rapidement devenu un expert de l’anatomie topographique, notamment après mes nombreuses études des muscles, des tendons et d'autres caractéristiques anatomiques visibles"],
    ["François premier fut mon dernier mécène. Il reconnut ma valeur et m’invita à résider dans le splendide château du Clos Lucé, où je passa le reste de ma vie."],
    ["J’ai eu plusieurs assistants, mais le plus connu reste Salai. D’ailleurs, certains pensent que Salai est le modèle qui m’a servi à réaliser La Joconde !"],
    ["La Joconde se trouve actuellement au Louvre."],
    ["La Cène est exposée à l’Église Santa Maria delle Grazie de Milan."],
    ["Je repose à la Chapelle Saint-Hubert à Amboise."],
    ["Oui, mais bien que cela soit mal vue cela m’a permis d’étudier en profondeur l’anatomie du corps humain afin d’en comprendre les mécanismes."],
    ["Je suis décédé le 2 mai 1519."]
]

let unknwow_answers = [
    "Désolé, je n'ai pas compris votre question."
]

let videoPath = [
    [
        require("../assets/videos/leonard_de_vinci/presentation-2.mp4"),
        require("../assets/videos/leonard_de_vinci/presentation-1.mp4")
    ],
    [
        require("../assets/videos/leonard_de_vinci/qui-est-la-joconde.mp4")
    ],
    [
        require("../assets/videos/leonard_de_vinci/oeuvres-plus-de-succes.mp4")
    ],
    [
        require("../assets/videos/leonard_de_vinci/presentation-joconde.mp4")
    ],
    [
        require("../assets/videos/leonard_de_vinci/presentation-la-cene.mp4")
    ],
    [
        require("../assets/videos/leonard_de_vinci/passion-medecine.mp4")
    ],
    [
        require("../assets/videos/leonard_de_vinci/relation-francois1er.mp4")
    ],
    [
        require("../assets/videos/leonard_de_vinci/assistants.mp4")
    ],
    [
        require("../assets/videos/leonard_de_vinci/lieu-expo-joconde.mp4")
    ],
    [
        require("../assets/videos/leonard_de_vinci/lieu-expo-cene.mp4")
    ],
    [
        require("../assets/videos/leonard_de_vinci/lieu-enterrement.mp4")
    ],
    [
        require("../assets/videos/leonard_de_vinci/question-dissection.mp4")
    ],
    [
        require("../assets/videos/leonard_de_vinci/date-deces.mp4")
    ],
    [
        require("../assets/videos/leonard_de_vinci/desole_je_sais_pas.mp4"),
        require("../assets/videos/leonard_de_vinci/je_n_ai_pas_la_reponse.mp4")
    ]


]

let unknow_path = [
        require("../assets/videos/leonard_de_vinci/desole_je_sais_pas.mp4"),
        require("../assets/videos/leonard_de_vinci/je_n_ai_pas_la_reponse.mp4")
    ]



let repeat_triggers = [
    ["repete"], ["mal", "entendu"], ["pas", "compris"], ["hein"], ["peux", "tu", "repeter"], ["quoi"]
]

let already_use = [
    [0, 0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0, 0],
    [0, 0]
]


import * as Random from 'expo-random';

export function checkRepeat(text)
{
    for (let j = 0; j < repeat_triggers.length; j++) {
        let goodKeyWord = 0;
        for (let k = 0; k < repeat_triggers[j].length; k++) {
            let regexStr = repeat_triggers[j][k]
            let regexp = new RegExp(regexStr, "gi")
            if (text.match(regexp)) {
                goodKeyWord += 1
            }

        }

        if (goodKeyWord == repeat_triggers[j].length) {
            return true
        }
    }
    return false
}

export function checkLeonardQuestion(text)
{
    let variante = Math.floor(Math.random() * Math.floor(already_use[already_use.length - 1].length))
    text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    text = text.replace(/[-_?!. ]/gi, '');


    if (!checkRepeat(text)) {
        ret.video_path = unknow_path[variante];
        ret.str = unknwow_answers[0]
        ret.question = text
    } else {
        text = ret.question
    }

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
                let count = 0
                variante = Math.floor(Math.random() * Math.floor(videoPath[i].length))
                while (already_use[i][variante]) {
                    variante = Math.floor(Math.random() * Math.floor(videoPath[i].length))
                    if (count == 10 + already_use[i].length)
                        already_use[i].fill(0)
                    count += 1
                }
                already_use[i][variante] = 1;
                console.log(variante)
                ret.video_path = videoPath[i][variante];
                ret.str = answers[i][variante]
                ret.question = questions[i]
                return (ret.video_path)
            }
        }
    }
    let count = 0
    while (already_use[already_use.length - 1][variante]) {
        variante = Math.floor(Math.random() * Math.floor(already_use[already_use.length - 1].length))
        if (count == 10 + already_use[already_use.length - 1].length)
            already_use[already_use.length - 1].fill(0)
        count++;
    }
    already_use[already_use.length - 1][variante] = 1;
    for (const key in already_use) {
        var value = already_use[key];
    }
    return (ret.video_path)
}


export function getLeonardAnswerStr(text)
{
    // text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // text = text.replace(/[-_?!. ]/gi, '');
    //
    // let ret = answers[answers.length - 1];
    // for (let i = 0; i < questions.length; i++) {
    //     for (let j = 0; j < keyWords[i].length; j++) {
    //         let goodKeyWord = 0;
    //         for (let k = 0; k < keyWords[i][j].length; k++) {
    //             let regexStr = keyWords[i][j][k]
    //             let regexp = new RegExp(regexStr, "gi")
    //             if (text.match(regexp)) {
    //                 goodKeyWord += 1
    //             }
    //
    //         }
    //         if (goodKeyWord == keyWords[i][j].length) {
    //             return (answers[i])
    //         }
    //     }
    // }
    return (ret.str)
}

export function questionLeonardByIndex (index)
{
    return questions[index]
}

export function questionLeonard ()
{
    return questions
}
