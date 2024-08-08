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

const profileEditPopup = document.querySelector('.popup_type_edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddPopup = document.querySelector('.popup_type_new-card');
const profileAddButton = document.querySelector('.profile__add-button');
const popupCloseButton = document.querySelectorAll('.popup_close');

const handleCloseOnEsc = (evt) => {
  if (evt.key === 'Escape') {
    const openPopup = document.querySelector('.popup_is-opened');
    closePopup(openPopup)
  }
}

const openPopup = (popup) => {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleCloseOnEsc)
}

const closePopup = (popup) => {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleCloseOnEsc)
}

//profileEditButton.addEventListener('click', () => openPopup(profileEditPopup));
//profileAddButton.addEventListener('click', () => openPopup(profileAddPopup));

popupCloseButton.forEach(event => {
  const popup = event.closest('.popup');
  event.addEventListener('click', () => closePopup(popup))
})