const id = new URLSearchParams(document.location.search);
const orderNb = id.get("orderId");

const orderId = document.querySelector("#orderId");
orderId.innerHTML = `</br></br>${orderNb}`;