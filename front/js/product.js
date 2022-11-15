// Récuperer l'id du produit à afficher dans l'URL
const url = new URLSearchParams(document.location.search);
const productId = url.get("id");

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
            response.json()
        )
// Promesse  pour modifier les datas des différents produits
        .then(data => {
            image.innerHTML += `<img src="${data.imageUrl}" alt="${data.altTxt}">`;
            imageUrl = `${data.imageUrl}`;
            altTxt = `${data.altTxt}`;
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
            alert("Erreur, veuillez recharger la page!")
        })
}
// Appel de la fonction
displayProductDetails();

/* FONCTION POUR STOCKER LES PRODUITS DANS LE LOCAL STORAGE */
function storeProductInLocalStorage() {
// Écoute du bouton Ajouter au panier
    addToCart.addEventListener("click", (event) => {
        event.preventDefault(event);
// Et si la quantité choisie n'est pas entre 1 et 100 alors on affiche un message d'erreur
        if (quantity.value < 1 || quantity.value > 100 && color.value === "" ) {
            alert("Veuillez choisir une couleur et quantité d'article(s) entre 1 et 100!");
// Si pas de couleur choisie alors on affiche un message d'erreur
        } else if (color.value === "" ) {
            alert("Veuillez choisir une couleur!");
// Et si la quantité choisie n'est pas entre 1 et 100 alors on affiche un message d'erreur
        } else if (quantity.value < 1 || quantity.value > 100 ) {
            alert("Veuillez choisir une quantité d'article(s) entre 1 et 100!");
// Autrement si couleur et quantité OK alors on envoie les données au local storage
        } else { 
            alert(`Vous avez ajouté ${quantity.value} ${title.textContent} ${color.value} au panier, cliquez sur OK pour aller au panier!`)
            window.location.href = "cart.html";
// Données à enregistrer dans le local storage
            const customerSelection = {
                id: productId,
                image: imageUrl,
                alt: altTxt,
                color: color.value,
                quantity: quantity.value,
                name: title.textContent,
                price: price.textContent,
            };
// Récuperer les données dans le local storage
    let customerCart = JSON.parse(localStorage.getItem("product"));
// Si le panier est vide alors on push les données de customerSelection dans le local storage sous forme de tableau
                if (customerCart === null) {
                    customerCart = [];
                    customerCart.push(customerSelection);
                    localStorage.setItem("product", JSON.stringify(customerCart));
// Si le panier n'est pas vide: 2 options
                } else {
// Définir la constante si le produit est déjà présent dans le panier: trouver par id et couleur
    const alreadyInCart = customerCart.find(element => element.id == customerSelection.id && element.color == customerSelection.color);
// Si le produit n'est pas déjà dans le panier alors on push les données
                if (alreadyInCart == undefined) {
                    customerCart.push(customerSelection);
                    localStorage.setItem("product", JSON.stringify(customerCart));
// Si le produit (id+couleur identiques) est déjà prédent dans le panier alors on incrémente la quantité
                } else {
                    let newProductQuantityInCart = parseInt(customerSelection.quantity) + parseInt(productInCart.quantity);
                    productInCart.quantity = newProductQuantityInCart;
                    localStorage.setItem("product", JSON.stringify(customerCart));
                }
            }
        }
    })
}
// Appel de la fonction
storeProductInLocalStorage();



 

