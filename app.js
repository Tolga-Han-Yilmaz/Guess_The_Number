// element selection
const inputNumber = document.getElementById("input_number");
const check = document.getElementById("input_submit");
const remain = document.getElementById("remain");
const firstValue = document.getElementById("first_value");
const LastValue = document.getElementById("last_value");
const message = document.getElementById("message");
const resim = document.getElementById("resim");
const reset = document.getElementById("input_reset");
const imgLost = document.querySelector("img");
const body = document.querySelector("body");

// random number
const rand = Math.floor(Math.random() * 100) + 1;
console.log(rand);

// button event
check.addEventListener("click", (event) => {
  if (inputNumber.value == "") {
    alert("Please enter a Number");
    window.location.reload(false);
  }

  if (inputNumber.value < rand) {
    remain.innerHTML--;
    firstValue.innerHTML = inputNumber.value;
    inputNumber.value = "";
    if (remain.innerHTML == 0) {
      message.innerText = "You Lost!";
      message.style.color = "red";
      message.style.fontWeight = "900";
      body.setAttribute("style", "background:url(./img/back.gif)");
    }
  } else if (inputNumber.value > rand) {
    remain.innerHTML--;
    LastValue.innerHTML = inputNumber.value;
    inputNumber.value = "";
    if (remain.innerHTML == 0) {
      message.innerText = "You Lost!";
      message.style.color = "red";
      message.style.fontWeight = "900";
    }
  } else if (inputNumber.value == rand) {
    message.innerText = "You Win!";
    message.style.color = "rgb(12, 223, 12)";
    message.style.fontWeight = "900";
    body.setAttribute("style", "background-image:url(./img/konfeti.gif)");
  }

  event.preventDefault();
});

// Reset event --> sayfa yenilenecek
reset.addEventListener("click", (event) => {
  window.location.reload(false);
});
