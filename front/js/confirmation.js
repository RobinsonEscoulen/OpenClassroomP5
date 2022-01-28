const orderId = getOrderId();
displayOrderId(orderId);
cleanStorage();

function getOrderId() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const orderId = urlParams.get("orderId");
  return orderId;
}
console.log(orderId);

function displayOrderId(orderId) {
  const orderIdElement = document.getElementById("orderId");
  orderIdElement.textContent = orderId;
}

function cleanStorage() {
  const clean = window.localStorage;
  clean.clear();
}
