
let questions = [
    "Combien avais-tu d'enfants ?",
    "Quand es-tu né ?",
    "Qui était ta reine ?",
    "Luttiez-vous pour la paix ou la guerre ?",
]

let answers = [
    "Je suis né vers les années -1300 et je suis mort à 92 ans.",
    "J’avais 106 enfants, la plupart était des hommes et une dizaine de femmes.",
    "Neferatari, grande reine d’Égypte. Elle est morte à l’age de 51 ans.",
    "Pour conserver la nubie et l’Égypte, j’ai dû instaurer la paix avec les Hittites.",
    "Désolé, je n'ai pas compris votre question."
]

let videoPath = [
    [
        require("../assets/videos/ramses/video1.mp4"),
    ],
    [
        require("../assets/videos/ramses/video2.mp4")
    ],
    [
        require("../assets/videos/ramses/video3.mp4")
    ],
    [
        require("../assets/videos/ramses/video4.mp4")
    ],
    [
        require("../assets/videos/presentation/ramses_standing.mp4"),
    ]

]


let keyWords = [
    [["quand", "ne"], ["naissance"], ["presenter"], ["presentez"], ["presente"], ["etesvous"], ["estu"]],
    [["famille"], ["origines"], ["enfant"]],
    [["reine"], ["roi"]],
    [["paix"], ["guerre"]],
]

import * as Random from 'expo-random';

export function checkRamsesQuestion(text)
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

export function getRamsesAnswerStr(text)
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
