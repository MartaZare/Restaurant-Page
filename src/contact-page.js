const createContactPage = () => {
  let content = document.getElementById("content");
  let contactContainer = document.createElement("div");
  contactContainer.classList.add("contact");

  let infoContainer = document.createElement("div");
  infoContainer.classList.add("info");

  let header = document.createElement("h1");
  header.innerHTML = "Contacts";
  contactContainer.appendChild(header);

  let phone = document.createElement("p");
  phone.innerHTML = "123 456 789";
  infoContainer.appendChild(phone);

  let address = document.createElement("p");
  address.innerHTML = "Imaginary Street XX, Thiscity, Mycountry";
  infoContainer.appendChild(address);

  let img = document.createElement("img");
  img.src = "../images/map.jpeg";
  infoContainer.appendChild(img);

  contactContainer.appendChild(infoContainer);
  content.appendChild(contactContainer);
};

export { createContactPage };
