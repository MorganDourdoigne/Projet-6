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


//   fetch pour chercher mes données et mettre dans modal1

const galleryMini = document.getElementById("galleryMini");

fetch("http://localhost:5678/api/works")
  .then(response => response.json())
  .then(data => {
    data.forEach(work => {
      const sizeImg = document.createElement("div");
      sizeImg.classList.add("size_img");

      const container = document.createElement("div");
      container.classList.add("container");

      const img = document.createElement("img");
      img.src = work.imageUrl;
      img.alt = work.title;
      container.appendChild(img);

      const edit = document.createElement("div");
      edit.classList.add("edit");
      const editText = document.createTextNode("éditer");
      edit.appendChild(editText);
      container.appendChild(edit);

      const trashCan = document.createElement("i");
      trashCan.classList.add("fa-regular", "fa-trash-can", "icon");
      container.appendChild(trashCan);

      sizeImg.appendChild(container);

      galleryMini.appendChild(sizeImg);
    });
  })

