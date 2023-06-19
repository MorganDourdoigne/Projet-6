const photo1 = document.getElementById("image1")

/* Test fetch pour tester l'échange avec l'API (sous forme
  de tableau "table"*/
fetch('http://localhost:5678/api/works')
  .then(response => response.json())
  .then(data => console.table(data));

  
/*test récupération image "image1"*/
fetch("http://localhost:5678/images/abajour-tahina1651286843956.png")
.then(response => {return response.blob();})
.then(function(myBlob) {
  const objectURL = URL.createObjectURL(myBlob);
  photo1.src = objectURL;});

  fetch("http://localhost:5678/api/works")
  .then(response => response.json())
  .then(data => {
    const title = data[0].title;
    document.getElementById("title1").textContent = title;
  });
