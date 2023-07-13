/* lors de la saisie des champs "e-mail" et "mot de passe" soit:
 ok = ouverture de la page "index.html" 
 soit:
 = faux un pop-up s'affiche avec un message personnalisé */

// lors du clic sur le bouton "se connecter" la fonction est activée
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
// récupération des données "emails" et "password"
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
// "emails" et "password" dans un objet
    const data = { email, password };
// soumission des données (data) vers l'API 
    fetch('http://localhost:5678/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
         },
      body: JSON.stringify(data)
    })
// retour de la réponse si OK ouverture sur "index.html"
    .then(response => {
      if (response.ok) {
        return response.json();
// sinon pop-up erreur avec message
      } else {
        throw new Error('Oups! Adresse e-mail ou mot de passe incorrect');
      }
    })
    .then(data => {
      const token = data.token;
      localStorage.setItem('token', token);
      window.location.href = 'index.html';
    })
    .catch(error => {
      alert(error.message);
    })
    });

    
