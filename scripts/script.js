function afficherResultat(score, total) {
    let div = document.querySelector(".affichageScore p")
    let affichageScore = `${score} / ${total} `

    div.innerText = affichageScore
}

function ecritureValue (input) {

    console.log(input.value)
    input.value = ""
}


function lancerJeu() {


    let score = 0
    let total = 0

    let inputEcriture = document.getElementById("inputEcriture")
    inputEcriture.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            ecritureValue(inputEcriture)

        }
    })

    let boutonValider = document.querySelector(".reponseUser button")
    boutonValider.addEventListener("click", () => {
        ecritureValue(inputEcriture)
    })
    afficherResultat(score, total)
}