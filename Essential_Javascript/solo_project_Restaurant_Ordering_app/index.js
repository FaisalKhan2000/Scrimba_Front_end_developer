const orderDetailsInner = document.getElementById("order-details");
const orderDetailsContainer = document.querySelector(".order-details");
const totalPrice = document.getElementById("total-price");
const completeOrder = document.getElementById("complete-order");
const paymentContainer = document.getElementById("payment-container");
const pay = document.getElementById("pay");
const orderSuccessfullContainer = document.getElementById(
  "order-successfull-container"
);
const form = document.getElementById("form");

paymentContainer.style.display = "none";

const orderDetails = {
  pizza: { name: "pizza", value: [null] },
  burger: { name: "burger", value: [null] },
  beer: { name: "beer", value: [null] },
};

document.addEventListener("click", function (e) {
  if (e.target.dataset.name === "pizzaadd") {
    orderDetails.pizza.value.push(14);
    render();
  } else if (e.target.dataset.name === "burgeradd") {
    orderDetails.burger.value.push(12);
    render();
  } else if (e.target.dataset.name === "beeradd") {
    orderDetails.beer.value.push(12);
    render();
  } else if (
    e.target.dataset.name === "pizzadel" &&
    orderDetails.pizza.value.length > 0
  ) {
    orderDetails.pizza.value.pop();
    render();
  } else if (
    e.target.dataset.name === "burgerdel" &&
    orderDetails.burger.value.length > 0
  ) {
    orderDetails.burger.value.pop();
    render();
  } else if (
    e.target.dataset.name === "beerdel" &&
    orderDetails.beer.value.length > 0
  ) {
    orderDetails.beer.value.pop();
    render();
  }
});

function render() {
  let orderList = ``;
  Object.keys(orderDetails).forEach((key) => {
    if (orderDetails[key].value.length > 1) {
      orderDetailsContainer.style.display = "block";
      orderList += `
        <div class="order-container">
        <div class="order-container-1">
            <h1>${orderDetails[key].name}</h1>
            <button class="remove">remove</button>
            <p >x ${orderDetails[key].value.length - 1}</p>
        </div>
        <div class="order-container-2">${orderDetails[key].value.reduce(
          (total, current) => {
            return total + current;
          },
          0
        )}</div>
        </div>
    `;
    }
  });

  if (Object.values(orderDetails).some((val) => val.value.length > 0)) {
    totalPrice.innerHTML = Object.values(orderDetails).reduce(
      (total, current) => {
        if (current.value.length) {
          return total + current.value.reduce((a, b) => a + b);
        }
        return total;
      },
      0
    );
  } else {
    totalPrice.innerHTML = 0;
  }

  orderDetailsInner.innerHTML = orderList;
}

completeOrder.addEventListener("click", function () {
  paymentContainer.style.display = "block";
});

pay.addEventListener("click", function (e) {
  e.preventDefault();

  paymentContainer.style.display = "none";
  const consentFormData = new FormData(form);
  const name = consentFormData.get("name");
  orderSuccessfullContainer.innerHTML = `
    <div class="text">
        <h1>Thanks, ${name}! Your order is on its way!</h1>
    </div>
     `;
});
