import * as commonFunctions from "./modules/functions.js";
import { slider } from "./modules/slider.js";
import { modalWindow } from "./modules/modal.js";
import { persons } from "./modules/personsData.js";
import { tabs } from "./modules/tabs.js";
import { addPersonsCards } from "./modules/addPersonCards.js";

commonFunctions.isWebp();

document.addEventListener("DOMContentLoaded", () => {
  //burger menu
  document.querySelector(".burger").addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".burger__nav").classList.toggle("open");
  });

  //slider
  slider({
    lineSelector: ".header__slider-inner",
    wrapperSelector: ".header__slider",
    itemSelector: ".header__slider-item img",
  });

  // modal window
  modalWindow({
    openSelector: "[data-opensign]",
    // closeSelector: "[data-modalclosetwo]",
    parentSelector: ".form",
    itemSelector: ".form__signin",
  });

  //change register form in modal window
  const formSignUp = document.querySelector("#signup");
  const formSignIn = document.querySelector("#signin");
  const linkSignUp = document.querySelector(".signup");
  const linkSignIn = document.querySelector(".signin");

  linkSignUp.addEventListener("click", () => {
    formSignUp.style.display = "none";
    formSignIn.style.display = "block";
    console.log("open formSignIn");
  });

  linkSignIn.addEventListener("click", () => {
    formSignUp.style.display = "block";
    formSignIn.style.display = "none";
    console.log("open formSignUp");
  });

  // tabs in about section
  tabs({
    selectorContent: ".tab-content__container",
    selectorTab: ".tab-btn",
    selectorParent: ".tab-content",
    activeClass: "nav-active",
  });

  // add persons cards to the DOM
  persons.forEach((person) => {
    addPersonsCards(person, ".tab-content__container");
  });
});
