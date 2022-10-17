// Récuperer l'id dans l'URL du produit à afficher
const url = new URLSearchParams(document.location.search);
const productId = url.get('id')

// Déclarer les variables nécessaires
let image = document.querySelector(".item__img");
let title = document.querySelector("#title");
let price = document.querySelector("#price");
let description = document.querySelector("#description");
let color = document.querySelector("#colors");
let quantity = document.querySelector("#quantity");
let addToCart = document.querySelector("#addToCart");

function getProductDatas() {

// Récupérer les données du produit dans l'API
    fetch("http://localhost:3000/api/products/" + productId)
// Promesse  pour récupérer la réponse puis la transformer en json
        .then(response => 
            response.json())
// Promesse  pour modifier les datas des différents produits
        .then(data => {
            image.innerHTML += `<img src="${data.imageUrl}" alt="${data.altTxt}">`;
            title.innerHTML += `<h1 id="title">${data.name}</h1>`;
            price.innerHTML += `<span id="price">${data.price}</span>`;
            description.innerHTML += `<p id="description">${data.description}}</p>`;
// Boucle pour modifier les couleurs
                for (i = 0; i < data.colors.length; i++) {
                    color.innerHTML += `<option value="${data.colors[i]}">${data.colors[i]}</option>`
                }
        })
// Message d'erreur
        .catch(error => {
            alert("Erreur, veuillez recharger la page")
        })

}

// Message de confirmation d'ajout du produit au panier: continuer les achats?

// Ajout du produit au panier

function addProductToCart() {

// Écoute du bouton Ajouter au panier
    addToCart.addEventListener("click", (e) => {
    e.preventDefault();
    // Attention une couleur doit être choisie et une quantité entre 1 et 100


    });

    // Accéder au local storage pour accéder à l'array depuis la page panier

    // Ajouter un produit à l'array lorsqu'il est ajouté au panier si pas déjà présent

    // Si déjà prédent alors alors on incrémente la quantité du produit correspondant

}

// Données enregistrées dans le local storage
    const basket = {
        id: productId,
        image: `${data.imageUrl}`,
        alt: `${data.altTxt}`,
        title: `${data.name}`,
        price: `${data.price}`,
        color: color.value,
        quantity: quantity.value,
        }
        console.log(basket) //save in local storage

// Le panier peut-être un array qui contient l'id, la quantité, la couleur


