// Récuperer l'id du produit à afficher

let url = new URLSearchParams(document.location.search);
let id = url.get('id')
console.log(id) 
