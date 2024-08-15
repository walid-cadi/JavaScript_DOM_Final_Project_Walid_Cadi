// modal
let btns = document.querySelectorAll(".modal-btn");
let modal_containers = document.querySelectorAll(".modal-container");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let btnAttribute = btn.getAttribute("data-modal");
    //console.log(btnAttribute);
    modal_containers.forEach((md) => {
      if (md.id == btnAttribute) {
        md.style.display = "flex";
      }
      md.querySelector(".close-modal").addEventListener("click", () => {
        md.style.display = "none";
      });
      //   md.addEventListener("click", () => {
      //     md.style.display = "none";
      //   });
    });
  });
});

// navbar responsive
let nav_icone = document.querySelectorAll(".ic");
let nav_links = document.querySelectorAll(".right-nav-links");

nav_icone.forEach((icon) => {
  icon.addEventListener("click", () => {
    if (icon.classList.contains("menu")) {
      nav_links.style.top = "0";
    } else if (icon.classList.contains("close")) {
      nav_links.style.top = "-500%";
    }
  });
});
