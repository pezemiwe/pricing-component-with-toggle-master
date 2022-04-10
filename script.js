const toggle = document.querySelector(".pricing__toggle");
const button = document.querySelector(".pricing__switch");
const basic = document.getElementById("basic");
const pro = document.getElementById("professional");
const master = document.getElementById("master");

toggle.addEventListener("click", () => {
  button.classList.toggle("pricing__switch--active");
  toggle.classList.toggle("pricing__toggle--active");
  basic.innerText = "$199.99" ? "$19.99" : "$199.99";
  pro.innerText = "$249.99" ? "$24.99" : "$249.99";
  master.innerText = "$399.99" ? "$39.99" : "$399.99";
});
