// Récuperer les données dans le local storage
let customerCart = JSON.parse(localStorage.getItem("Canapé"));

/* FONCTION POUR AFFICHER LES PRODUITS DU PANIER */
function displayItems() {
// Si le panier est vide alors on affiche un message d'alerte
    if (customerCart === null || customerCart.lenght == 0) {
        alert("Votre panier est vide!");
    } else {
// Trouver la section #cart__items dans cart.html et modifier son contenu
        for (i = 0 ; i < customerCart.length ; i += 1) {
            document.querySelector("#cart__items").innerHTML += `<article class="cart__item" data-id="${customerCart[i].id}">
                                                                    <div class="cart__item__img">
                                                                        <img src="${customerCart[i].image}" alt="${customerCart[i].alt}">
                                                                    </div>
                                                                    <div class="cart__item__content">
                                                                        <div class="cart__item__content__titlePrice">
                                                                            <h2>${customerCart[i].name}</h2>
                                                                            <p>${customerCart[i].price * customerCart[i].quantity} €</p>
                                                                        </div>
                                                                        <div class="cart__item__content__settings">
                                                                            <div class="cart__item__content__settings__quantity">
                                                                                <p>Couleur : ${customerCart[i].color}</p>
                                                                                <p>Qté : </p>
                                                                                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" canapeId="${customerCart[i].id}" canapeColor="${customerCart[i].color}" value="${customerCart[i].quantity}">
                                                                            </div>
                                                                            <div class="cart__item__content__settings__delete">
                                                                                <p class="deleteItem" canapeId="${customerCart[i].id}" canapeColor="${customerCart[i].color}">Supprimer</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </article>`;
        }
    }
}
// Appel de la fonction
displayItems();