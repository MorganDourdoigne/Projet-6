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


// fermeture en cliquant sur l'icone X - Modale 2
document.getElementById('close_modale2').addEventListener("click", function(e) {
  document.getElementById("window2").style.display = "none";
  document.getElementById("window1").style.display = "none";
})


// clic en dehors de la modale
// const backgroundModal = document.querySelector("#window1");
// backgroundModal.addEventListener("click", function(myEvent) {
//   myEvent.preventDefault();
//   closeModal();
// });


// flèche pour passer de window2 à window1
function arrowLeft() {
const arrowLeft = document.querySelector(".arrowLeft");
arrowLeft.addEventListener("click", function(e) {
  document.getElementById("window2").style.display = "none";
  document.getElementById("window1").style.display = "block";
  e.preventDefault();   
})
}
arrowLeft();

// ouverture de la modale2 en cliquant sur "ajouter photo" modale1
document.getElementById("add_photo1").addEventListener("click", function(){
  document.getElementById("window2").style.display = "block";
});



// mise en place de la gallerie dans la modale en javascript
// const galleryMini = document.getElementById("galleryMini");
// fetch("http://localhost:5678/api/works")
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(work => {
//       const sizeImg = document.createElement("div");
//       sizeImg.classList.add("size_img");

//       const container = document.createElement("div");
//       container.classList.add("container");

//       const img = document.createElement("img");
//       img.src = work.imageUrl;
//       img.alt = work.title;
//       container.appendChild(img);

//       const edit = document.createElement("div");
//       edit.classList.add("edit");
//       const editText = document.createTextNode("éditer");
//       edit.appendChild(editText);
//       container.appendChild(edit);

//       const trash = document.createElement("i");
//       trash.classList.add("fa-regular", "fa-trash-can", "icon");
//       container.appendChild(trash);
// // fonction lors du clic pour retirer l'élément dans l'api  par ID
//       trash.addEventListener("click", () => {
//   deleteWork(work.id, trash);
//   sizeImg.remove();
// });
//      sizeImg.appendChild(container);

//       galleryMini.appendChild(sizeImg);
//     });
//   })

  function createGallery (){
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
    // fonction lors du clic pour retirer l'élément dans l'api  par ID
          trash.addEventListener("click", (e) => {
            e.preventDefault();
      deleteWork(work.id, trash);
      sizeImg.remove();
      const gallery = document.querySelector(".gallery");
      gallery.innerHTML = "";
      fetchWorks();
    });
         sizeImg.appendChild(container);
    
          galleryMini.appendChild(sizeImg);
        });
      })
    
  }





  function fetchWorks (){
    fetch("http://localhost:5678/api/works")
// envoi d'une demande pour avoir un retour en format JSon
  .then(response => response.json())
  .then(data => {
    // sélection de la class gallery qui contient les images
    const gallery = document.querySelector(".gallery");
    // boucle "for" "in" qui parcourt chaque élément dans le retour json
    for (let i in data) {
      const figure = document.createElement("figure");
      gallery.appendChild(figure);
      /*"img" et figcaption", même procédé:
       -création des variables "img" et "figcaption", 
       -recherche dans le array de l'api 
       -rattachement des 2 éléments à la class parent "gallery"*/
      const img = document.createElement("img");
      img.src = data[i].imageUrl;
     figure.appendChild(img);

      const figcaption = document.createElement("figcaption");
      figcaption.innerHTML = data[i].title;
      figure.appendChild(figcaption);
    }
  });
  }
  
  
    // fonction qui annule en faisant un fetch un id 
     function deleteWork(id) {   
      const token = localStorage.getItem('token')
      fetch(`http://localhost:5678/api/works/${id}`, {
        method: "DELETE",
        headers: {
          accept: "*/*",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    }

    

// enregistrer des images dans mon inner html
const input = document.querySelector('input[type="file"]');
input.addEventListener('change', function (event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
  document.querySelector('.carre_back').innerHTML = '<img src="' + reader.result + '">';
  };
});


// transmission des données vers l'api
/* récupération de l'image dans le localstorage +la valeur de la cat' 
+ la valeur du titre avec un écouteur d'évenemnt sur le bouton "valider"*/
function sendAPI() {
  const formData = new FormData();
  formData.append('title', document.getElementsByName('title')[0].value);
  formData.append('category', document.getElementById('category').value);
  const image = input.files[0];
  // const blob = new Blob([imageString], { type: 'image/png/jpeg' });    
  formData.append('image', image);
  const token = localStorage.getItem("token");

  fetch('http://localhost:5678/api/works', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'accept': 'application / json'
    },
    body: formData
   }).then(response => {
    if (response.ok) {
            alert("L'image a été envoyée avec succès!");
            const gallery = document.querySelector(".gallery");
            const galleryMini = document.getElementById("galleryMini");
            const form = document.getElementById("form");
            gallery.innerHTML = "";
            galleryMini.innerHTML = "";
            document.querySelector('.carre_back').innerHTML ="";
            fetchWorks();
            form.reset();
            createGallery();
    } 
  })
}
document.getElementById('click_post').addEventListener('click', sendAPI);


/*fonction qui fera passer au background vert le boutton "valider" lorsque
les 3 inputs sont remplis*/
function changeButton() {
  let title = document.getElementsByName("title")[0].value;
  let category = document.getElementById("category").value;
  let image = input.files[0];
  
  if (title && (category == "1" || category == "2" || category == "3") && image) {
    document.getElementById("add_photo").style.backgroundColor = "#1D6154";
  } else {
    document.getElementById("add_photo").style.backgroundColor = "";
  }
}

document.getElementsByName("title")[0].addEventListener("input", changeButton);
document.getElementById("category").addEventListener("input", changeButton);
document.querySelector('input[type=file]').addEventListener("input", changeButton);

createGallery();
