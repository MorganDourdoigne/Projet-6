//Fonction pour ouvrir la modale
let openModal = function (e) {
    e.preventDefault()
    const modal = document.querySelector('#window1');
    modal.removeAttribute("aria-hidden")
    modal.setAttribute("aria-modal","true")
    modal.style.display = "block"
}
// ouverture en cliquant sur une div "modifier"
const open = document.querySelector(".modify_button");
open.addEventListener("click",openModal);


// fermeture de la modale
const modal = document.querySelector("#window1");
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
const backgroundModal = document.querySelector("#window1");
backgroundModal.addEventListener("click", function(myEvent) {
    myEvent.preventDefault();
    closeModal();
  });
  


// flèche pour passer de window1 à window2
function arrowLeft() {
    const arrowLeft = document.querySelector(".arrowLeft");
    arrowLeft.addEventListener('click', function (e) {
        openModal();
        });
  }
  arrowLeft()