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

let nextBtns = document.querySelectorAll(".next");
let previousBtns = document.querySelectorAll(".previous");
let containers = document.querySelectorAll(".sec6-carousel");


//* sliding function
let currentIndex = 0;
const slideImage = (index, myBtn) => {
  let carouselBtnAttribute = myBtn.getAttribute("carouselBtn");
  console.log(carouselBtnAttribute);

  containers.forEach((container) => {
    if (container.id == carouselBtnAttribute) {
      //! variables  sal7in  ghir  l lelement  li mt7a9a9 fih chart dyalna
      let slides = container.querySelectorAll(".slide");
      let camera = container.querySelector(".box-carousel");
      let slideWidth = slides[0].clientWidth;
      //let indicators = container.querySelectorAll(".indicator");

      //* clikit 3la previous  o ana  aslan f awel image  khasni nmchi  l image lakhra
      if (index < 0) {
        index = slides.length - 1;
        //console.log(index);
      } else if (index >= slides.length) {
        //* clikit 3la next o ana  aslan f akhir image khasni nrje3  l image lewla
        index = 0;
        //console.log(index);
      }

      //indicators.forEach((indicator) => {
      //  indicator.classList.remove("activeIndicator");
      //});
      //indicators[index].classList.add("activeIndicator");

      //* hna bach n7arek l camera dyal lcarousel
      camera.style.transform = `translateX(-${slideWidth * index}px)`;
      currentIndex = index;
    }
  });
};

//* btn dyal next
nextBtns.forEach((next) => {
  next.addEventListener("click", (event) => {
    slideImage(currentIndex + 1, event.target);
    //console.log(event.target);
    //console.log(currentIndex + 1);
  });
});

//* btn dyal previous
previousBtns.forEach((previous) => {
  previous.addEventListener("click", (event) => {
    slideImage(currentIndex - 1, event.target);
    //console.log(event.target);
    //console.log(currentIndex - 1);
  });
});

//* auto slide
containers.forEach((container) => {
  //* check wach  l element 3ando attribute auto slide
  if (container.getAttribute("autoslide")) {
    let nextBtn = container.querySelector(".next");
    setInterval(() => {
      //* method  kanwarek  biha  3la  btn
      nextBtn.click();
    }, 3000);
  }
});