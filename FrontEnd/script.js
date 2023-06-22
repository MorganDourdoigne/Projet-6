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


  // Addeventlisteners sur les filtres

  



 