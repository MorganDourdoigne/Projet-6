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


// fermeture de la modale
const modal = document.querySelector(".js_modale");
function closeModal (e){
    if (modal === null) return
    modal.style.display = "none"
    modal.setAttribute("aria-hidden", "true")
    modal.removeAttribute("aria-modal")
    modal.removeEventListener("click",closeModal)    
}

// fermeture en cliquant sur l'icone X
const close = document.querySelector(".logoX");
close.addEventListener("click",closeModal);


// clic en dehors de la modale
const backgroundModal = document.querySelector(".js_modale");
backgroundModal.addEventListener("click", function(myEvent) {
    myEvent.preventDefault();
    closeModal();
  });
  



function ArrowLeft() {
    const arrowLeft = document.querySelector(".arrowLeft");
    arrowLeft.addEventListener('click', function (e) {
      e.preventDefault();
      openModale();
    });
  }
