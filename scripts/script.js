function afficherResultat(score, total) {
    let div = document.querySelector(".affichageScore p")
    let affichageScore = `${score} / ${total} `

    div.innerText = affichageScore
}

function ecritureValue (input) {

    console.log(input.value)
    input.value = ""
}

function afficherProposition(listMots, i) {

    let div = document.querySelector(".motProposition")
    div.innerHTML = `<p> ${listMots[i]} </p>`

}

function lancerJeu() {

    let i = 0
    let score = 0
    let total = 0
    
    let inputEcriture = document.getElementById("inputEcriture")
    inputEcriture.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            ecritureValue(inputEcriture)
            i++
            afficherProposition(listMots, i)
            
        }
    })

    let boutonValider = document.querySelector(".reponseUser button")
    boutonValider.addEventListener("click", () => {
        ecritureValue(inputEcriture)
        i++
        afficherProposition(listMots, i)
        
    })
    afficherProposition(listMots, i)
    afficherResultat(score, total)
    
}


