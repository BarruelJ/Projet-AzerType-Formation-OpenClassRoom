const btnPartager = document.querySelector (".btnPartager button")
const btnEnvoyer = document.getElementById ("btnEnvoyerEmail")
const btnRetour = document.getElementById ("btnRetour")
const inputNom = document.getElementById ("nom")
const inputEmail = document.getElementById ("email")
const form = document.querySelector ("form")
const main = document.querySelector("main")
let popup = document.querySelector (".popupBackground")


form.addEventListener("submit", (event) => {
        // On empêche le comportement par défaut
        event.preventDefault()
})        

btnPartager.addEventListener("click", () => {
    popup.classList.add('active')
    main.style.display = "none"
})

btnEnvoyer.addEventListener("click", () => {

    const nom = inputNom.value.trim()
    const email = inputEmail.value.trim()

    let valid = true

    if (nom.length < 2) {

        inputNom.style.border = "1px solid red"
        valid = false
    } 
    
    else {
        
        inputNom.style.border = ""
    }

    if (!email || !inputEmail.checkValidity()) {
        
        inputEmail.style.border = "1px solid red"
        valid = false
    }

    else {

        inputEmail.style.border = ""
    }

    if (valid) {

        console.log(inputNom.value)
        console.log(inputEmail.value)
        popup.classList.remove('active')
        main.style.display = "block"
    }


} )

btnRetour.addEventListener ("click", ()=> {
    
    popup.classList.remove('active')
    main.style.display = "block"

})

