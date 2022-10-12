// Récupérer les données de l'API

fetch("http://localhost:3000/api/products")
// Promesse  pour récupérer la réponse puis la transformer en json
    .then(response => response.json())
// Promesse  pour afficher les données
    .then(data => {
      getAllProducts(data);
    })
// Message d'erreur
    .catch(error => {
      alert("Erreur, veuillez recharger la page");
    });

// Afficher les produits

function getAllProducts(data) {
// Boucle pour chaque product de data
  for (product of data) {
// Trouver l'élément #items dans index.html...
        const items = document.getElementById('items');
// Modifier le contenu dans la section items
        items.innerHTML += `<a href="./product.html?id=${product._id}">
                              <article>
                                <img src="${product.imageUrl}" alt="${product.altTxt}">
                                <h3 class="productName">${product.name}</h3>
                                <p class="productDescription">${product.description}</p>
                              </article>
                            </a>`;     
  }
}
