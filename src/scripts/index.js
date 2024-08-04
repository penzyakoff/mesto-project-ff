import '../pages/index.css';
import { initialCards } from './cards';

const container = document.querySelector(".page");
const placesList = container.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;

function addCard(element, deleteCard) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = element.link;
  cardImage.alt = element.name;
  cardTitle.textContent = element.name;

  deleteButton.addEventListener("click", () => deleteCard(cardElement));

  return cardElement;
}

function openCard() {
  
}

function deleteCard(card) {
  card.remove();
}

initialCards.forEach((elem) => {
  placesList.append(addCard(elem, deleteCard));
});
