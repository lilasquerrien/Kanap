// Cibler le contenu HTML du numéro d'Id de la commande
const orderId = document.querySelector("#orderId");
// Remplacer le contenu HTML avec le numéro de commande stocké dans le local storage
orderId.innerHTML = localStorage.getItem("OrderId");
// Vider le local storage
localStorage.clear();