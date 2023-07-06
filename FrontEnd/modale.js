//Fonction pour ouvrir la modale
let openModale = function (e) {
    e.preventDefault()
    const modal = document.querySelector(".js_modale");
    modal.removeAttribute("aria-hidden")
    modal.setAttribute("aria-modal","true")
    modal.style.display = "block"
}
// ouverture en cliquant sur une div "modifier"
const open = document.querySelector(".modify_button");
open.addEventListener("click",openModale);


//fonction pour fermer la modale
const modal = document.querySelector(".js_modale");
const closeModal = function (e){
    if (modal === null) return
    e.preventDefault()
    modal.style.display = "none"
    modal.setAttribute("aria-hidden", "true")
    modal.removeAttribute("aria-modal")
    modal.removeEventListener("click",closeModal)
    
}
// fermeture en cliquant sur l'icone X
const close = document.querySelector(".logoX");
close.addEventListener("click",closeModal);

