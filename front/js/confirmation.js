const orderId = getOrderId();
displayOrderId(orderId);
// cleanStorage();

function getOrderId() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get("orderId");
}

function displayOrderId(orderId) {
  const orderIdElement = document.getElementById("orderId");
  orderIdElement.textContent = orderId;
}

// function cleanStorage() {
//   const clean = window.localStorage;
//   clean.clear();
// }
