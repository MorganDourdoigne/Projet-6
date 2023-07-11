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
const close = document.querySelector(".fa-x");
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

  // ouverture de la modale2 en cliquant sur "ajouter photo" modale1
  document.getElementById("add_photo").addEventListener("click", function(){
    document.getElementById("window2").style.display = "block";
  });
 


// mise en place de la gallerie dans la modale en javascript
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
  
        const trash = document.createElement("i");
        trash.classList.add("fa-regular", "fa-trash-can", "icon");
        container.appendChild(trash);
  // fonction lors du clique pour retirer l'élément dans la l'api ID
        trash.addEventListener("click", () => {
          deleteWork(work.id, trash);
          sizeImg.remove();
        });
  
        sizeImg.appendChild(container);
  
        galleryMini.appendChild(sizeImg);
      });
    })
  
    // fonction qui annule en faisant un fetch un id 
  function deleteWork(id) {
    fetch(`http://localhost:5678/api/works/${id}`, {
      method: "DELETE",
      headers: {
        accept: "*/*",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }
  