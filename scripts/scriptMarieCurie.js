
let questions = [
    "Qui êtes-vous ?",
    "Quels sont vos travaux ?",
    "Comment êtes-vous morte ?",
    "Où se situe votre sépulture ?",
]

let answers = [
    "Je m'appelle Marie Curie, je suis née le 7 novembre 1867 à Varsovie et je suis, encore aujourd'hui, la seule détentrice de 2 prix Nobel, en Physique et en Chimie.",
    "J’ai travaillé avec mon mari, Pierre, sur le phénomène de radiation. Plus tard, nous avons découvert le polonium et le radium qui sont la source de la radioactivité moderne et des réactions nucléaires.",
    "A force de travailler avec des éléments chimiques, j’ai eu des problèmes de santé. Je suis morte en 1934 d’une anémie aplasique.",
    "Je suis actuellement enterrée au Panthéon, j’y ai été transférée en 1995.",
    "Désolée, je n'ai pas compris votre question."
]

let videoPath = [
    [
        require("../assets/videos/marie_curie/video1.mp4"),
    ],
    [
        require("../assets/videos/marie_curie/video2.mp4")
    ],
    [
        require("../assets/videos/marie_curie/video3.mp4")
    ],
    [
        require("../assets/videos/marie_curie/video4.mp4")
    ],
    [
        require("../assets/videos/leonard_de_vinci/desole_je_sais_pas.mp4"),
        require("../assets/videos/leonard_de_vinci/je_n_ai_pas_la_reponse.mp4")
    ]

]


let keyWords = [
    [["presenter"], ["presentez"], ["presente"], ["etesvous"], ["estu"]],
    [["sujet"], ["travail"], ["travaux"]],
    [["deces"], ["decede"], ["mort"]],
    [["enterre"], ["entere"], ["tombe"], ["sepulture"]],
]

import * as Random from 'expo-random';

export function checkMarieCurieQuestion(text)
{
    text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    text = text.replace(/[-_?!. ]/gi, '');

    let ret = videoPath[videoPath.length - 1][0];
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
            if (goodKeyWord == keyWords[i][j].length)
                return (videoPath[i][0])
        }
    }
    return (ret)
}

export function getMarieCurieAnswerStr(text)
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
