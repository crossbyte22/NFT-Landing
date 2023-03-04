const burgerTrigger = document.querySelector(".header__burger"),
  burgerClose = document.querySelector(".header__burger--close"),
  burgerItem = document.querySelector(".header__inner"),
  body = document.querySelector("body"),
  headerLink = document.querySelectorAll("header__link");

burgerTrigger.addEventListener("click", (e) => {
  burgerItem.classList.add("active");
  body.classList.add("active");
  burgerTrigger.style.display = "none";
  burgerClose.style.display = "block";
});

burgerClose.addEventListener("click", (e) => {
  burgerItem.classList.remove("active");
  body.classList.remove("active");
  burgerClose.style.display = "none";
  burgerTrigger.style.display = "block";
});

headerLink.forEach((item) => {
  item.addEventListener("click", (e) => {
    burgerItem.classList.remove("active");
    body.classList.remove("active");
    burgerClose.style.display = "none";
    burgerTrigger.style.display = "block";
  });
});
