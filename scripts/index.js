const container = document.querySelector(".page");
const placesList = container.querySelector(".places__list");

const cardTemplate = document.querySelector("#card-template").content;

function addCard(element, deleteCard) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardElement.querySelector(".card__image").src = element.link;
  cardElement.querySelector(".card__image").alt = element.name;
  cardElement.querySelector(".card__title").textContent = element.name;

  deleteButton.addEventListener("click", () => deleteCard(cardElement));

  return cardElement;
}

function deleteCard(card) {
  card.remove();
}

initialCards.forEach((elem) => {
  placesList.append(addCard(elem, deleteCard));
});
