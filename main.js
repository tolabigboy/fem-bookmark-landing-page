console.log("Hello");
const toggleNav = document.querySelector(".toggle-bar");
const asideNavBox = document.querySelector(".toggle-aside-box");
const closeToggleNav = document.querySelector(".close-toggle");
const body = document.querySelector("body");

toggleNav.addEventListener("click", () => {
  asideNavBox.classList.toggle("active");
  body.classList.toggle("no-scroll");
  toggleNav.style.display = "none";
});
closeToggleNav.addEventListener("click", () => {
  asideNavBox.classList.toggle("active");
  body.classList.toggle("no-scroll");
  toggleNav.style.display = "block";
});
// carousel section-------------------
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const borderNav = document.querySelector(".feature-carousel-nav");
const borders = Array.from(borderNav.children);
// slides position------------------
const slideWidth = slides[0].getBoundingClientRect().width;
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);
// moving to slide ---------------
const movToSLide = (
  track,
  currentSlide,
  targetSlide,
  currentBorder,
  targetBorder
) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
  currentBorder.classList.remove("current-slide");
  targetBorder.classList.add("current-slide");
};
// event click for moving and selecting slides-------------
borderNav.addEventListener("click", (e) => {
  const targetBorder = e.target.closest("div");
  if (!targetBorder) return;
  const currentBorder = borderNav.querySelector(".current-slide");
  const currentSlide = track.querySelector(".current-slide");
  const targetIndex = borders.findIndex((border) => border === targetBorder);
  const targetSlide = slides[targetIndex];
  movToSLide(track, currentSlide, targetSlide, currentBorder, targetBorder);
});
// section for accordion----------------------
const arrowImage = document.querySelector(".arrow");
const accordTag = document.querySelectorAll(".accords");
const accordAnswer = document.querySelectorAll(".accord-answer");

accordTag.forEach((acc) => {
  acc.addEventListener("click", (e) => {
    accordAnswer.forEach((ans) => {
      if (
        e.target.nextElementSibling !== ans &&
        ans.classList.contains("online-answer")
      ) {
        ans.classList.remove("online-answer");
        accordTag.forEach((acc) => acc.classList.remove("online-answer"));
      }
    });
    const panel = acc.nextElementSibling;
    acc.classList.toggle("online-answer");
    panel.classList.toggle("online-answer");
    arrowImage.classList.toggle("online-answer");
  });
});
// })
//
// for (let i = 0; i < accordTag.length; i++) {
//   accordTag[i].addEventListener("click", () => {
//     accordAnswer.classList.toggle("online-answer");
//     arrowChange(arrowImage);
//   });
// }

// accordTag.addEventListener("click", () => {
//   answer.classList.toggle("online-answer");
//   arrowChange(arrowImage);
// });

// email-validation section -------------------------------

// const contact = document.querySelector(".contact-us");

// contact.addEventListener("click", () => {
//   const mail = document.querySelector(".text").value;
//   console.log(mail);
//   const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
//   if (mail.match(regx)) {
//     alert("valid mail");
//     return true;
//   } else {
//     alert("invalid");
//     return false;
//   }
// });
const form = document.querySelector("form");
const mail = document.querySelector(".text");
const errorMsg = document.querySelector(".error-msg");
const emailValidation = function (input) {
  const regx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.value.match(regx)) {
    input.value.toLowerCase();
    // mail = "";
    // return true;
    errorMsg.style.display = "none";
    alert("Email valid");
  } else {
    errorMsg.style.display = "block";
    return false;
  }
  mail.value = "";
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  emailValidation(mail);

  console.log(mail.value);
});

// function validate() {
//   var mail = document.querySelector(".text").value;
//   var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

//   if (regx.text(mail)) {
//     alert("You have entered a valid email");
//     return true;
//   } else {
//     alert("Sorry! You have entered invalid email id");
//     return false;
//   }
// }
