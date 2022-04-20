const toggle = document.querySelector(".pricing__toggle");
const button = document.querySelector(".pricing__switch");
const basic = document.getElementById("basic");
const pro = document.getElementById("professional");
const master = document.getElementById("master");

toggle.addEventListener("click", () => {
  button.classList.toggle("pricing__switch--active");
  toggle.classList.toggle("pricing__toggle--active");
  if (basic.innerText === "$199.99") {
    basic.innerText = "$19.99";
  } else {
    basic.innerText = "$199.99";
  }
  if (pro.innerText === "$249.99") {
    pro.innerText = "$24.99";
  } else {
    pro.innerText = "$249.99";
  }
  if (master.innerText === "$399.99") {
    master.innerText = "$39.99";
  } else {
    master.innerText = "$399.99";
  }
});
