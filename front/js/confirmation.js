const id = new URLSearchParams(document.location.search);
const orderId = id.get("orderId");

document.querySelector("#orderId").innerHTML +=`${orderId}`;