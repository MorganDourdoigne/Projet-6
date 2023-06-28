/* Test fetch pour tester l'échange avec l'API (sous forme
  de tableau "table"*/
fetch('http://localhost:5678/api/works')
  .then(response => response.json())
  .then(data => console.table(data));

  
// méthode fetch pou récupérer les images et les"titles" dans l'API
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


/*partie filtre addeventlisteners*/
/*récupération de tous les boutons à l'intérieur de "filter-container"*/
const buttons = document.querySelectorAll(".filter-container button");
/*fonction quand un bouton est cliqué tous les boutons deviennent
 blanc sauf le bouton cliqué qui prend le css vert*/
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Réinitialise les styles de tous les boutons
    buttons.forEach((btn) => {
      btn.style.backgroundColor = "white";
      btn.style.color = "black";
    });
    // donne un style css au bouton cliqué
    btn.style.backgroundColor = "#1D6154";
    btn.style.color = "white";
  });
});





/*addeventlisteners sur les filtres */


// test
   /*clic sur #Appartements pour trouver les datas dans l'api*/
   const appartmentsButton = document.querySelector('#appartments');
   appartmentsButton.addEventListener('click', () => {
     fetch('http://localhost:5678/api/categories')
       .then(response => response.json())
        .then(data => {
        const category2 = data.find(category => category.id === 2);
        console.log(category2);
      }) }); 
   
      
      /*clic sur #restaurants pour trouver les datas dans l'api*/
      const restaurantsButton = document.querySelector('#restaurants');
      restaurantsButton.addEventListener('click', () => {
        fetch('http://localhost:5678/api/categories')
          .then(response => response.json())
           .then(data => {
           const category3 = data.find(category => category.id === 3);
           console.log(category3);
         })   
      }); 



      /*clic sur #objets pour trouver les datas dans l'api */
      const objectsButton = document.querySelector('#objects');
      objectsButton.addEventListener('click', () => {
        fetch('http://localhost:5678/api/categories')
          .then(response => response.json())
          .then(data => {
            const category1 = data.filter(category => category.id === 1);
            const gallery = document.querySelector('.gallery'); 
            for (let i in category1) {
      
              const figure = document.createElement("figure");
              gallery.appendChild(figure);
              const img = document.createElement("img");
              img.src = category1[i].imageUrl;
              figure.appendChild(img);  
              const figcaption = document.createElement("figcaption");
              figcaption.innerHTML = category1[i].title;
              figure.appendChild(figcaption);
            }
          });
      });
      
      
