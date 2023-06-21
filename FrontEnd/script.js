// const photo1 = document.getElementById("image1")


// const tableau = [
//   { id: 1, title: 'Abajour Tahina', imageUrl: 'http://localhost:5678/images/abajour-tahina1651286843956.png', categoryId: 1, userId: 1 },
//   { id: 2, title: 'Appartement Paris V', imageUrl: 'http://localhost:5678/images/appartement-paris-v1651287270508.png', categoryId: 2, userId: 1 },
//   { id: 3, title: 'Restaurant Sushisen - Londres', imageUrl: 'http://localhost:5678/images/restaurant-sushisen-londres1651287319271.png', categoryId: 3, userId: 1 },
//   { id: 4, title: 'Villa “La Balisiere” - Port Louis', imageUrl: 'http://localhost:5678/images/la-balisiere1651287350102.png', categoryId: 2, userId: 1 },
//   { id: 5, title: 'Structures Thermopolis', imageUrl: 'http://localhost:5678/images/structures-thermopolis1651287380258.png', categoryId: 1, userId: 1 },
//   { id: 6, title: 'Appartement Paris X', imageUrl: 'http://localhost:5678/images/appartement-paris-x1651287435459.png', categoryId: 2, userId: 1 },
//   { id: 7, title: 'Pavillon “Le coteau” - Cassis', imageUrl: 'http://localhost:5678/images/le-coteau-cassis1651287469876.png', categoryId: 2, userId: 1 },
//   { id: 8, title: 'Villa Ferneze - Isola d’Elba', imageUrl:'http://localhost :5678/images/villa-ferneze1651287511604.png', categoryId :2 , userId :1},
// { id :9 ,title :'Appartement Paris XVIII' ,imageUrl :'http://localhost :5678/images/appartement-paris-xviii1651287541053.png' ,categoryId :2 ,userId :1},
// { id :10 ,title :'Bar “Lullaby” - Paris' ,imageUrl :'http://localhost :5678/images/bar-lullaby-paris1651287567130.png' ,categoryId :3 ,userId :1},
// { id :11 ,title :'Hotel First Arte - New Delhi' ,imageUrl :'http://localhost :5678/images/hotel-first-arte-new-delhi1651287605585.png' ,categoryId :3 ,userId :1}
// ];




/* Test fetch pour tester l'échange avec l'API (sous forme
  de tableau "table"*/
fetch('http://localhost:5678/api/works')
  .then(response => response.json())
  .then(data => console.table(data));

  
// /*test récupération image "image1"*/
// fetch("http://localhost:5678/images/abajour-tahina1651286843956.png")
// .then(response => {return response.blob();})
// .then(function(myBlob) {
//   const objectURL = URL.createObjectURL(myBlob);
//   photo1.src = objectURL;});

//   /*récupération du titre de l'image en utilisant la position dans
//    le tableau [0]*/
//   fetch("http://localhost:5678/api/works")
//   .then(response => response.json())
//   .then(data => {
//     const title = data[0].title;
//     document.getElementById("title1").textContent = title;
//   });


// let figcaption  = document.createElement("figcaption")


// figcaption.innerHTML = data[1].title

// const gallery = document.querySelector('.gallery');
// gallery.appendChild(figcaption);


let gallery = document.querySelector(".gallery");

let img = document.createElement("img");
gallery.appendChild(img);

let figcaption = document.createElement("figcaption");
gallery.appendChild(figcaption);

fetch("http://localhost:5678/api/works")
  .then(response => response.json())
  .then(data => {
    const title = data[0].title;
    figcaption.innerHTML = data[0].title
  });
 