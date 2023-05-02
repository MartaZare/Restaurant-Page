const createHomePage = () => {
  let content = document.getElementById("content");
  content.classList.add("home");

  let img = document.createElement("img");
  img.classList.add("background");
  img.src = "../dist/images/restaurant.jpeg";

  let header = document.createElement("h1");

  header.innerHTML = "EMBER & ASH";

  let text = document.createElement("p");
  text.innerHTML =
    "Ember & Ash is a grill restaurant that promises to ignite your senses and tantalize your taste buds with its mouth-watering menu and exceptional dining experience. From the moment you step through the doors, you'll be enveloped in the warm, inviting atmosphere that embodies the essence of Ember & Ash.";

  content.appendChild(img);
  content.appendChild(header);
  content.appendChild(text);
};

export { createHomePage };
