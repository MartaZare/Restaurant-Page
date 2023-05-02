import { createHomePage } from "./home-page.js";
import { createMenuPage } from "./menu-page.js";
import { createContactPage } from "./contact-page.js";

const nav = document.createElement("div");
nav.classList.add("nav");

const homeTab = document.createElement("a");
homeTab.textContent = "Home";
nav.appendChild(homeTab);

const menuTab = document.createElement("a");
menuTab.textContent = "Menu";
nav.appendChild(menuTab);

const contactTab = document.createElement("a");
contactTab.textContent = "Contact";
nav.appendChild(contactTab);

document.body.appendChild(nav);

homeTab.addEventListener("click", function () {
  content.innerHTML = "";
  createHomePage();
});

menuTab.addEventListener("click", function () {
  content.innerHTML = "";
  createMenuPage();
});

contactTab.addEventListener("click", function () {
  content.innerHTML = "";
  createContactPage();
});

createHomePage();
