function afficherResultat(score, total) {
    let div = document.querySelector(".affichageScore p")
    let affichageScore = `${score} / ${total} `

    div.innerText = affichageScore
}


function lancerJeu() {


    let score = 0
    let total = 0

    let boutonValider = document.querySelector(".reponseUser button")
    boutonValider.addEventListener("click", () => {
        console.log(inputEcriture.value)
    })
    afficherResultat(score, total)
}

let inputEcriture = document.getElementById("inputEcriture")
