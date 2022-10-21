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
function displayProductDetails(){
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
displayProductDetails();

/* FONCTION POUR AJOUTER LES PRODUITS AU PANIER */
function storeProductDetails() {
// Écoute du bouton Ajouter au panier
    addToCart.addEventListener("click", () => {
// Obliger le client à choisir une couleur
        if (color.value === "" ) {
            alert("Veuillez choisir une couleur!");
        }
// Obliger le client à choisir une quantité entre 1 et 100
        if (quantity.value < 1 || quantity.value > 100 ) {
            alert("Veuillez choisir une quantité d'article(s) entre 1 et 100!");
        }
// Message de confirmation d'ajout du produit au panier: continuer les achats?
        if (color.value != "" && quantity.value >= 1 || quantity.value <= 100 ) {
            alert(`Vous avez ajouté ${quantity.value} ${title.textContent} ${color.value} au panier, cliquez sur OK pour continuer vos achats!`);
        }
// Données à enregistrer dans le local storage
    const customerSelection = {
        id: productId,
        color: color.value,
        quantity: quantity.value,
    }
// Récuperer les données dans le local storage
        let customerCart = JSON.parse(localStorage.getItem("Canapé"));
// Si panier vide alors convertir JSON customerChoice en chaîne de charactères et stocker les données dans le local storage
            if (!customerCart) {
                customerCart = [];
                customerCart.push(customerSelection);
                localStorage.setItem("Canapé", JSON.stringify(customerCart));
// Si déjà prédent alors alors on incrémente la quantité du produit correspondant
            } else {



            }

    })
}
    

// Appel de la fonction
storeProductDetails();



 

