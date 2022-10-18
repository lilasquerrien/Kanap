// Récuperer l'id du produit à afficher
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

/* FONCTION POUR AFFICHER LES DÉTAILS DE CHAQUE PRODUIT */
function getProductDetails(){
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
        }})
// Message d'erreur
        .catch(error => {
            alert("Erreur, veuillez recharger la page!")
        })
}
// Appel de la fonction
getProductDetails();

/* FONCTION POUR AJOUTER LES PRODUITS AU PANIER */
function addProductToCart() {
// Écoute du bouton Ajouter au panier
    addToCart.addEventListener("click", () => {
// Obliger le client à choisir une couleur
        if (color.value === "" ) {
            alert("Veuillez choisir une couleur!");
        }
// Obliger le client à choisir une quantité entre 1 et 100
        if (quantity.value < 1 || quantity.value > 100 ) {
            alert("Veuillez choisir une quantité entre 1 et 100!");
        }

// Message de confirmation d'ajout du produit au panier: continuer les achats?
        if (color.value != "" && quantity.value >= 1 || quantity.value <= 100 ) {
            alert("Votre article a été ajouté au panier, cliquez sur OK pour continuer vos achats!");

        }
// Données à enregistrer dans le local storage
    const customerChoice = {
        id: productId,
        color: color.value,
        quantity: quantity.value,
    }
        console.log(customerChoice);

// Convertir JSON customerChoice en chaîne de charactères et stocker les données dans le local storage
window.localStorage.setItem("customerChoice", JSON.stringify(customerChoice));
// Récuperer les données dans le local storage
let newCustomerChoice = window.localStorage.getItem("customerChoice");
console.log(JSON.parse(newCustomerChoice));


    // Ajouter un produit à l'array lorsqu'il est ajouté au panier si pas déjà présent

    // Si déjà prédent alors alors on incrémente la quantité du produit correspondant




})};
// Appel de la fonction
addProductToCart();