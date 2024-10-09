"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var modeSwitch = document.querySelector(".mode-switch");

  modeSwitch.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
    modeSwitch.classList.toggle("active");
  });
});

VanillaTilt.init(document.querySelectorAll(".box"), {
  max: 15,
  speed: 300,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  scale: 1.05,
});
