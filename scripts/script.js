function afficherResultat(score, total) {
    let div = document.querySelector(".affichageScore p")
    let affichageScore = `${score} / ${total} `

    div.innerText = affichageScore
}

function ecritureValue (input) {

    console.log(input.value)
    input.value = ""
}

function afficherProposition(proposition) {

    let div = document.querySelector(".motProposition")
    div.innerText = proposition
}

function lancerJeu() {

    let i = 0
    let score = 0
    let total = 0
    let inputEcriture = document.getElementById("inputEcriture")
    
    afficherProposition(listMots[i])
    let boutonValider = document.querySelector(".reponseUser button")
    boutonValider.addEventListener("click", () => {
        ecritureValue(inputEcriture)
        i++
        afficherProposition(listMots[i])

        if (listMots[i] === undefined) {
            let div = document.querySelector(".motProposition")
            div.innerText = ("Jeu Terminé !")
            boutonValider.disabled = true
            inputEcriture.disabled = true
        }
        
    })
    afficherResultat(score, total)
    
}


