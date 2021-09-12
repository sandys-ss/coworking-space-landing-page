//responsive
const btn = document.querySelector("button.btn-mobile");
const menu = document.querySelector(".btn-menu");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    } );
