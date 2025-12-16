function choisirPhrasesOuMots() {

    let choix = prompt("Veuillez choix la liste : Mots ou Phrases")
    while (choix !== "Mots" && choix !== "Phrases") {
        choix = prompt("Veuillez choix la liste : Mots ou Phrases")
    }
    return choix
}

function afficherResultat(score, total) {
    let div = document.querySelector(".affichageScore p")
    let affichageScore = `${score} / ${total} `

    div.innerText = affichageScore
}

function lancerBoucleDeJeu (listProposition){
    let score = 0
    for (let i = 0; i < listProposition.length; i++) {
        let motUtilisateur = prompt("Entrez le mot " + listProposition[i])
        if (motUtilisateur === listProposition[i]) {
            score++
        }
        else {
            console.log("Vous avez écrit " + motUtilisateur + " au lieu de " + listProposition[i])
        }
    }
    return score
}

function lancerJeu() {

    let choix = choisirPhrasesOuMots()
    let score = 0
    if (choix === "Mots"){
        score = lancerBoucleDeJeu(listMots)
        total = listMots.length
    }
    else  {
        score = lancerBoucleDeJeu(listPhrases)
        total = listPhrases.length
    }
    afficherResultat(score, total)
}
