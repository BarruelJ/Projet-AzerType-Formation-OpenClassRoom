function afficherResultat(score, total) {
    let div = document.querySelector(".affichageScore span p")
    let affichageScore = `${score} / ${total} `

    div.innerText = affichageScore
}

function ecritureValue (input) {

    return input.value
    // input.value = "" //Dans le corrigé, le clear de l'input est intégrer dans le if.
}

function afficherProposition(proposition) {

    let div = document.querySelector(".motProposition")
    div.innerText = proposition
}

function lancerJeu() {

    let i = 0
    let score = 0
    let inputEcriture = document.getElementById("inputEcriture")
   
    
    afficherProposition(listMots[i])
    let boutonValider = document.querySelector(".reponseUser button")
    boutonValider.addEventListener("click", () => {
        const valeurUtilisateur = ecritureValue(inputEcriture)
        inputEcriture.value = ''


        if(listMots[i] === valeurUtilisateur) {
            score++
        }

        i++
        afficherResultat(score, i)
        if (listMots[i] === undefined) {
            let div = document.querySelector(".motProposition")
            div.innerText = ("Jeu Terminé !")
            boutonValider.disabled = true
            inputEcriture.disabled = true
        } else {
        afficherProposition(listMots[i])}


        
        
    })
    
    afficherResultat(score, i)
}


