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
// console.log(nav_icone);
let nav_links = document.querySelector(".right-nav-links");
//console.log(nav_links);

nav_icone.forEach((btn) => {
  btn.addEventListener("click", () => {
    let attribute = btn.getAttribute("data-icon");
    if (attribute == "menu") {
      nav_links.style.left = "2vw"
    }
    else if (attribute == "close") {
      nav_links.style.left = "-500%";
    }
  });
});



//menu

let menu = document.querySelectorAll(".menu-btn");
let a = document.querySelector(".aa");
//console.log(a.textContent);

menu.forEach((el) => {
  el.addEventListener("click", () => {
    // console.log(el.textContent);
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

// carousel 1

let nextBtns = document.querySelectorAll(".next");
// let previousBtns = document.querySelectorAll(".previous");
let containers = document.querySelectorAll(".carousel-container");

let currentIndex = 0;
const slideImage = (index, myBtn) => {
  let carouselBtnAttribute = myBtn.getAttribute("carouselBtn");
  //console.log(carouselBtnAttribute);

  containers.forEach((container) => {
    if (container.id == carouselBtnAttribute) {
      let slides = container.querySelectorAll(".slide");
      let camera = container.querySelector(".box-carousel");
      let slideWidth = slides[0].clientWidth;
      //let indicators = container.querySelectorAll(".indicator");

      if (index < 0) {
        index = slides.length - 1;
        //console.log(index);
      } else if (index >= slides.length) {
        index = 0;
        //console.log(index);
      }

      // indicators.forEach((indicator) => {
      //  indicator.classList.remove("activeIndicator");
      // });
      // indicators[index].classList.add("activeIndicator");

      camera.style.transform = `translateX(-${slideWidth * index}px)`;
      currentIndex = index;
    }
  });
};

nextBtns.forEach((next) => {
  next.addEventListener("click", (e) => {
    slideImage(currentIndex + 1, e.target);
    //console.log(event.target);
    //console.log(currentIndex + 1);
  });
});


//* auto slide
containers.forEach((container) => {
  if (container.getAttribute("autoslide")) {
    let nextBtn = container.querySelector(".next");
    setInterval(() => {
      nextBtn.click();
    }, 3000);
  }
});



// carousel 2
let nextBtns2 = document.querySelectorAll(".next2");
let containers2 = document.querySelectorAll(".carousel-container2");
let currentIndex2 = 0;


const slideImage2 = (index, myBtn) => {
  let carouselBtnAttribute2 = myBtn.getAttribute("carouselBtn2");
  //console.log(carouselBtnAttribute);

  containers2.forEach((container) => {
    if (container.id == carouselBtnAttribute2) {
      let slides = container.querySelectorAll(".slide2");
      let camera = container.querySelector(".box-carousel2");
      let slideWidth = slides[0].clientWidth;
      //let indicators = container.querySelectorAll(".indicator");

      if (index < 0) {
        index = slides.length - 1;
        //console.log(index);
      } else if (index >= slides.length) {
        index = 0;
        //console.log(index);
      }
      camera.style.transform = `translateX(-${slideWidth * index}px)`;
      currentIndex = index;
    }
  });
};

nextBtns2.forEach((next) => {
  next.addEventListener("click", (e) => {
    slideImage2(currentIndex + 1, e.target);
    //console.log(event.target);
    //console.log(currentIndex + 1);
  });
});

//* auto slide
containers2.forEach((container) => {
  if (container.getAttribute("autoslide")) {
    let nextBtn = container.querySelector(".next2");
    setInterval(() => {
      nextBtn.click();
    }, 3000);
  }
});
