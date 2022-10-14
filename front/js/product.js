// Récuperer l'id dans l'URL du produit à afficher
const url = new URLSearchParams(document.location.search);
const productId = url.get('id')

// Récupérer les données du produit dans l'API
fetch("http://localhost:3000/api/products/" + productId)

// Promesse  pour récupérer la réponse puis la transformer en json
    .then(response => 
        response.json())
// Promesse  pour modifier les datas des différents produits
    .then(data => {
        let image = document.querySelector(".item__img").innerHTML += `<img src="${data.imageUrl}" alt="${data.altTxt}">`;
        let name = document.querySelector("#title").innerHTML += `<h1 id="title">${data.name}</h1>`;
        let price = document.querySelector("#price").innerHTML += `<span id="price">${data.price}</span>`;
        let description = document.querySelector("#description").innerHTML += `<p id="description">${data.description}}</p>`;
// Boucle pour modifier les couleurs
        let color = document.querySelector("#colors")
            for (i = 0; i < data.colors.length; i++) {
                color.innerHTML += `<option value="">${data.colors[i]}</option>`
            }
    })
// Message d'erreur
    .catch(error => {
        alert("Erreur, veuillez recharger la page")})

// Ajouter les produits au panier

// Définir const sélection quantité et couleur
// Attention une couleur doit être choisie et une quantité entre 1 et 100
// Ajouter un EventListener pour le clic sur le bouton
// Le panier peut-être un array qui contient l'id, la quantité, la couleur
// Accéder au local storage pour accéder à l'array depuis la page panier
// Ajouter un produit à l'array lorsqu'il est ajouté au panier si pas déjà présent
// Si déjà prédent alors alors on incrémente la quantité du produit correspondant
// Ajouter au panier : continuer les achats ?
// Attention la quantité totale par produit/couleur est de 100