const createMenuPage = () => {
  let content = document.getElementById("content");

  let menuContainer = document.createElement("div");
  menuContainer.classList.add("menu");

  addDish("Oysters", "Raw oysters with lemon and hot sauce on ice.");
  addDish(
    "Salad",
    "A colorful and healthy salad with fresh greens and vegetables."
  );
  addDish(
    "Egg",
    "Eggs Benedict features poached eggs, ham, and hollandaise sauce."
  );
  addDish("Beef", "Juicy grilled beef seasoned with herbs and spices.");
  addDish("Chicken", "Tender grilled chicken with a smoky flavor.");
  addDish(
    "Shashlik",
    "Grilled shashlik with marinated meat and vegetables on skewers."
  );
  addDish(
    "Bowl",
    "A nourishing veggie bowl with quinoa, avocado, and roasted vegetables."
  );
  addDish(
    "Brownie",
    "Fudgy and decadent chocolate brownie, perfect with ice cream."
  );
  addDish(
    "Pudding",
    "Creamy chocolate pudding with a smooth texture and rich flavor."
  );
  addDish(
    "Macaron",
    "Delicate French macarons with a crispy shell and soft filling."
  );

  content.appendChild(menuContainer);

  function addDish(name, description) {
    let dishDiv = document.createElement("div");
    dishDiv.classList.add("dish");

    let dishImg = document.createElement("img");
    dishImg.src = `../dist/images/${name.toLowerCase()}.jpeg`;

    let dishName = document.createElement("h2");
    dishName.innerHTML = `${name}`;

    let dishDescription = document.createElement("p");
    dishDescription.innerHTML = `${description}`;

    dishDiv.appendChild(dishImg);
    dishDiv.appendChild(dishName);
    dishDiv.appendChild(dishDescription);

    menuContainer.appendChild(dishDiv);
  }
};

export { createMenuPage };
