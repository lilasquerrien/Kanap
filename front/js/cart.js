// Récuperer les données dans le local storage
let customerCart = JSON.parse(localStorage.getItem("Canapé"));

// Déclarer les variables nécessaires
let totalPrice = [];
let totalQuantity = [];

/* FONCTION POUR AFFICHER LES PRODUITS SÉLECTIONNÉS DANS LE PANIER */
function displayItems() {
// Si le panier est vide alors on affiche un message d'alerte
    if (customerCart === null || customerCart.lenght == 0) {
        alert("Votre panier est vide!");
    } else {
// Trouver la section #cart__items dans cart.html et modifier son contenu 
// Avec une boucle pour parcourir tous les produits du panier
    for (i = 0 ; i < customerCart.length ; i += 1) {
        document.querySelector("#cart__items").innerHTML += `<article class="cart__item" data-id="${customerCart[i].id}">
                                                                <div class="cart__item__img">
                                                                    <img src="${customerCart[i].image}" alt="${customerCart[i].alt}">
                                                                </div>
                                                                <div class="cart__item__content">
                                                                    <div class="cart__item__content__titlePrice">
                                                                        <h2>${customerCart[i].name}</h2>
                                                                        <p>${customerCart[i].price * customerCart[i].quantity}€</p>
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
// Déclarer les variables quantité et prix et transformer leurs valeurs en nombre                                                 
    let quantityNumber = Number(customerCart[i].quantity);
    let priceNumber = Number(customerCart[i].price * customerCart[i].quantity);
// Envoyer les quantités et prix dans le local storage
        totalQuantity.push(quantityNumber);
        totalPrice.push(priceNumber);                          
    }}
}
// Appel de la fonction
displayItems();

/* FONCTION POUR OBTENIR LES TOTAUX DES QUANTITÉS ET PRIX DES ARTICLES DU PANIER */
function displayTotals() {
// Constante pour ajouter les chiffres entre eux
    const total = (accumulator, currentValue) => accumulator + currentValue;
// Additionner les quantités totales de chaque produit du panier
    const grandTotalQuantity = totalQuantity.reduce(total, 0);
// Additionner les prix totaux de chaque produit du panier      
    const grandTotalPrice = totalPrice.reduce(total, 0);
// Modifier le contenu HTML correspondant pour l'affichage        
        document.querySelector("#totalQuantity").innerHTML += `${grandTotalQuantity}`;
        document.querySelector("#totalPrice").innerHTML += `${grandTotalPrice}`;
}
// Appel de la fonction
displayTotals();

/* FONCTION POUR MODIFIER LA QUANTITÉ DES ARTICLES DU PANIER */
function modifyQuantities() {
    let newQuantity = document.querySelectorAll(".itemQuantity");
// Boucle pour modifier la quantité
    for (let i = 0; i < newQuantity.length; i++) {
        const modifyQuantity = newQuantity[i];
// Pour chacun des articles on active l'écoute du bouton modifier la quantité
        modifyQuantity.addEventListener("change", (event) =>{
// Modification du contenu HTML
            newQuantity.innerHTML += `<input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${event.target.value}">`;
// Convertir la nouvelle quantité de produit(s) en nombre
        customerCart[i].quantity = Number(modifyQuantity.value);
// Envoi des nouvelles données vers le local storage
        localStorage.setItem("Canapé", JSON.stringify(customerCart));
// Message d'alerte
            alert("Le nombre d'article(s) a bien été mis à jour dans votre panier!");
            window.location.reload();
        })
    }
}
// Appel de la fonction  
modifyQuantities();
    
/* FONCTION POUR SUPPRIMER DES ARTICLES DU PANIER */
function deleteItems() {
    let deleteItem = document.querySelectorAll(".deleteItem");
// Pour chacun des articles du panier on active l'écoute du bouton supprimer
    for (let i = 0; i < deleteItem.length; i++) {
        deleteItem[i].addEventListener("click", (event) => {
// Variables pour cibler le produit à supprimer
            let itemId = customerCart[i].id;
            let itemColor = customerCart[i].color;
// Filtrer le panier pour ne garder que les produits non sélectionnés
    customerCart = customerCart.filter(customerCart => customerCart.id !== itemId || customerCart.color !== itemColor);
// Envoi des données au local storage
        localStorage.setItem("Canapé", JSON.stringify(customerCart))
// Message d'alerte
            alert("L'article a bien été supprimé de votre panier!");
            window.location.reload();
        })
    }
}
// Appel de la fonction
deleteItems();

/* FONCTIONS POUR CONTROLER LE CONTENU DU FORMULAIRE */
// Déclaration des REGEX
let REGEXText = /^[a-zA-Zéêëèîïâäçù ,'-]{3,20}$/;
let REGEXAddress = /^[0-9]{1,3}[a-zA-Zéêëèîïâäçù ,'-]{3,30}$/;
let REGEXEmail = /^(([a-zA-z0-9])+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
// Écoute du prénom
firstName.addEventListener("input", validFirstName) 
    function validFirstName() {
        if (REGEXText.test(firstName.value) == false) {
            firstNameErrorMsg.innerHTML = "Doit contenir un minimum de 3 lettres, les chiffres et caractères spéciaux ne sont pas acceptés";
            return false;
        } else {
            firstNameErrorMsg.innerHTML = "";
            return true;
        }
    }
// Écoute du nom
lastName.addEventListener("input", validLastName)
    function validLastName() {
        if (REGEXText.test(lastName.value) == false) {
            lastNameErrorMsg.innerHTML = "Doit contenir un minimum de 3 lettres, les chiffres et caractères spéciaux ne sont pas acceptéss";
            return false;
        } else {
            lastNameErrorMsg.innerHTML = "";
            return true;
        }
    }
// Écoute de l'addresse
address.addEventListener("input", validAddress) 
    function validAddress() {
        if (REGEXAddress.test(address.value) == false) {
            addressErrorMsg.innerHTML = "Doit indiquer le numéro puis le nom de la rue";
            return false;
        } else {
            addressErrorMsg.innerHTML = "";
            return true;
        }
    }
// Écoute de la ville
city.addEventListener("input", validCity)
    function validCity() {
        if (REGEXText.test(city.value) == false) {
            cityErrorMsg.innerHTML = "Doit contenir un minimum de 3 lettres, les chiffres et caractères spéciaux ne sont pas acceptés";
            return false;
        } else {
            cityErrorMsg.innerHTML = "";
            return true;
        }
    }
// Écoute de l'email
email.addEventListener("input", validEmail)
    function validEmail() {
        if (REGEXEmail.test(email.value) == false) {
            emailErrorMsg.innerHTML = "Doit être au format jane.doe@exemple.fr ou janedoe@exemple.com";
            return false;
        } else {
            emailErrorMsg.innerHTML = "";
            return true;
        }
    }

/* FONCTION POUR ENVOYER LA COMMANDE DANS LE LOCAL STORAGE */
function sendOrderToLocalStorage() {
    let order = document.querySelector("#order");
// Ecoute du bouton Commander
    order.addEventListener("click", (event) => {
// Constante contact contenant les données du formulaire
        const contact = {
            firstName : firstName.value,
            lastName : lastName.value,
            address : address.value,
            city : city.value,
            email : email.value,
        }
// Constante products pour récupérer les ID des articles du panier
        const products = [];
            for (item of customerCart) {
            products.push(item.id);
            }
// Si le formulaire est correctement rempli 
        if (validFirstName(firstName) 
        && validLastName(lastName) 
        && validAddress(address) 
        && validCity(city) 
        && validEmail(email)) {
// Alors on envoie les données
            fetch("http://localhost:3000/api/products/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({contact, products}), 
            })
                .then((response) => {
                    return response.json()
                })
                .then(data => {
                    localStorage.setItem("orderId", data.orderId);
                    window.location.href = `confirmation.html?orderId=${data.orderId}`;
                })
        } else {
            alert("Vos coordonnées sont incorrectes, veuillez les vérifier afin de valider votre commande!");
        }
    })
}
// Appel de la fonction
sendOrderToLocalStorage();