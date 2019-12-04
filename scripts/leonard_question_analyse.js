
export function checkQuestion(text)
{

    let keyWords = [
        [["qui", "estu"], ["qui", "etesvous"], ["presente", "toi"], ["presentez", "vous"], ["ou", "ne", "tu"], ["ou", "ne", "vous"], ["qui", "parents"],["quel", "metier"], ["pourquoi", "connu"]],
        [["qui", "etait", "monalisa"], ["florentine lisa gherardini"], ["qui", "est", "monalisa"]],
        [["œuvres"], ["oeuvres"], ["inventions"], ["fier"]],
        [["quand", "joconde"], ["quand", "monalisa"], ["parle", "moi", "joconde"], ["parle", "moi", "monalisa"]],
        [["pourquoi", "cene"], ["quand", "cene"], ["raison", "cène"], ["parle", "moi", "cene"], ["explique", "cene"]],
        [["hobby"], ["passion"], ["medecine"], ["anatomie"], ["corps", "humain"], ["muscles"], ["tendons"], ["anatomique"]],
        [["dernier", "mecene"], ["francois", "premier"], ["françois", "premier"]],
        [["assistant"], ["salai"]],
        [["ou", "joconde"], ["ou", "monalisa"]],
        [["ou", "cene"]],
        [["ou", "enterre"], ["ou", "tombe"]],
        [["piller", "cadavre"], ["pillais", "cadavre"], ["etudier", "cadavre"], ["morgue"]]
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
        "Oui, mais bien que cela soit mal vue cela m’a permis d’étudier en profondeur l’anatomie du corps humain afin d’en comprendre les mécanismes."
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
        "Pillais-tu vraiment des morgues pour étudier des cadavres ?"
    ]

    let videoPath = [
        require("../assets/videos/leonard_de_vinci/presentation-2.mov"),
        require("../assets/videos/leonard_de_vinci/qui-est-la-joconde.mov"),
        require("../assets/videos/leonard_de_vinci/oeuvres-plus-de-succes.mov"),
        require("../assets/videos/leonard_de_vinci/presentation-joconde.mov"),
        require("../assets/videos/leonard_de_vinci/presentation-la-cene.mov"),
        require("../assets/videos/leonard_de_vinci/passion-medecine.mov"),
        require("../assets/videos/leonard_de_vinci/relation-francois1er.mov"),
        require("../assets/videos/leonard_de_vinci/assistants.mov"),
        require("../assets/videos/leonard_de_vinci/lieu-expo-joconde.mov"),
        require("../assets/videos/leonard_de_vinci/lieu-expo-cene.mov"),
        require("../assets/videos/leonard_de_vinci/lieu-enterrement.mov"),
        require("../assets/videos/leonard_de_vinci/question-dissection.mov")
    ]

    for (let i = 0; i < questions.length; i++) {
        for (let j = 0; j < keyWords[i].length; j++) {
            let goodKeyWord = 0;
            for (let k = 0; k < keyWords[i][j].length; k++) {
                goodKeyWord += 1
                let regexStr = "/("
                regexStr += keyWords[i][j][k]
                regexStr += ")/gi"
                let regexp = new RegExp(regexStr)
                if (text.match(regexp))
                    goodKeyWord += 1
            }
            if (goodKeyWord == keyWords[i][j].length)
                return (videoPath[i])
        }
    }
    return (null)
}
