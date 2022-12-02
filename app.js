const decreaseBTN = document.querySelector("#decreaseBTN");
const ResetBTN = document.querySelector("#ResetBTN");
const increaseBTN = document.querySelector("#increaseBTN");
const Number = document.querySelector("#Number");
const BTn = document.querySelectorAll(".BTn");
let count = 0;

BTn.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", (event) => {
    let chosenBTn = event.currentTarget.classList;
    if (chosenBTn.contains("decrease")) {
      count--;
    } else if (chosenBTn.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count < 0) {
      Number.style.color = "red";
    }
    if (count > 0) {
      Number.style.color = "green";
    }
    if (count === 0) {
      Number.style.color = "black";
    }
    Number.textContent = count;
  });
});
// ==============================================================
// --------------Second page script starts here-------------
const facebookBTn = document.querySelector("#facebook_link");
const tiktokBTn = document.querySelector("#Tiktok_link");
const watsappBTn = document.querySelector("#Watsapp_link");

facebookBTn.addEventListener("click", () => {
  location.href = "https://www.facebook.com/profile.php?id=100049157563724";
});

tiktokBTn.addEventListener("click", () => {
  location.href = "https://www.tiktok.com/@_apii_";
});

watsappBTn.addEventListener("click", () => {
  location.href = "https://wa.me/252907006342";
});
