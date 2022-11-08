// Récupérer l'id dans l'URL
const id = new URLSearchParams(document.location.search);
// Créer la constante qui contient l'id
const orderId = id.get("orderId");
// Injecter l'id dans le contenu HTML
document.querySelector("#orderId").innerHTML +=`${orderId}`;
// Vider le local storage
localStorage.clear();