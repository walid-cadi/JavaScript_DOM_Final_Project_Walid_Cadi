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

//menu

let menu = document.querySelectorAll(".menu-btn");
let a = document.querySelector(".aa");
console.log(a.textContent);

menu.forEach((el) => {
  el.addEventListener("click", () => {
    console.log(el.textContent);
    if (el.textContent == "Starters") {
      a.textContent = "Starters";
    } else if (el.textContent == "Breakfast") {
      a.textContent = "Breakfast";
    } else if (el.textContent == "Lunch") {
      a.textContent = "Lunch";
    } else if (el.textContent == "Dinner") {
      a.textContent = "Dinner";
    }
  });
});
