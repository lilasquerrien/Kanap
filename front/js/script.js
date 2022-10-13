// Récupérer les données de l'API

fetch("http://localhost:3000/api/products")
// Promesse  pour récupérer la réponse puis la transformer en json
    .then(response => response.json())
// Promesse  pour récupérer les data
    .then(data => {
      displayProducts(data);
    })
// Message d'erreur
    .catch(error => {
      alert("Erreur, veuillez recharger la page");
    });

// Afficher les produits

function displayProducts(data) {
// Boucle pour chaque product de data
  for (product of data) {
// Trouver la section avec l'ID items dans index.html et modifier son contenu
        let items = document.querySelector("#items").innerHTML += `<a href="./product.html?id=${product._id}">
                                                                    <article>
                                                                      <img src="${product.imageUrl}" alt="${product.altTxt}">
                                                                      <h3 class="productName">${product.name}</h3>
                                                                      <p class="productDescription">${product.description}</p>
                                                                    </article>
                                                                  </a>`;     
  }      
}
