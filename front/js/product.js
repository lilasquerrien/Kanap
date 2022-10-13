// Récuperer l'id dans l'URL du produit à afficher

const url = new URLSearchParams(document.location.search);
const productId = url.get('id')

// Récupérer les données du produit dans l'API

fetch("http://localhost:3000/api/products/" + productId)
// Promesse  pour récupérer la réponse puis la transformer en json
    .then(response => response.json())
// Promesse  pour récupérer les data des différents produits
    .then(data => {
        let image = document.querySelector(".item__img").innerHTML += `<img src="${data.imageUrl}" alt="${data.altTxt}">`;
        let name = document.querySelector("#title").innerHTML += `<h1 id="title">${data.name}</h1>`;
        let price = document.querySelector("#price").innerHTML += `<span id="price">${data.price}</span>`;
        let description = document.querySelector("#description").innerHTML += `<p id="description">${data.description}}</p>`;
// Boucle pour récupérer chacune des couleurs
        let color = document.querySelector("#colors");
        for (i = 0; i < data.colors.length; i++) {
            color.innerHTML += `<option value="">${data.colors[i]}</option>`;
        }
    })
// Message d'erreur
    .catch(error => {
        alert("Erreur, veuillez recharger la page");
    });