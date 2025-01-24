const ul = document.querySelector(".ul");
const form = document.querySelector(".form");
const btn = document.querySelector(".btn");
const inp = document.querySelector(".inp");
let value;

ul.innerHTML = localStorage.getItem("ul") ? localStorage.getItem("ul") : "";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.reset();
});

btn.addEventListener("click", () => {
  ul.innerHTML += `
        <li class="li uncheked" onclick="cls(this)">
        <img  src="./img/uncheked.png" width="25" /> ${inp.value}
        <p hidden>1</p>
          <span onclick="cls_p(this)" class="span">&#10005;</span>
        </li>
        `;
  saqla();
});

function saqla() {
  localStorage.setItem("ul", ul.innerHTML);
}

function cls(e) {
  e.classList.toggle("cheked");

  e.children[1].innerHTML = parseInt(e.children[1].innerHTML) + 1;

  if (parseInt(e.children[1].innerHTML) % 2 == 0) {
    e.firstElementChild.src = "./img/cheked.png";
  } else {
    e.firstElementChild.src = "./img/uncheked.png";
  }
  saqla();
}

function cls_p(e) {
  e.parentElement.remove();
  saqla();
}
