import FrameworkCard from "./frameworkCard";

export function makeFrameworkModel(res) {
  return res.map((frameworkInfo) => new FrameworkCard(frameworkInfo));
}

export function renderCard(cards) {
  const el = document.getElementById("card-area");

  cards.forEach((card) => {
    el.appendChild(card.makeCardElement());
  });
}

export function bindCardEvent(cards, event) {
  const cardContainer = document.querySelector("#card-area");

  cardContainer.addEventListener("click", (e) => {
    const card = getCardByEventTarget(e.target, cards);
    event(card);
  });
}

function getCardByEventTarget(target, cards) {
  let id = "";

  while (target) {
    if (target.id.length) {
      id = target.id;
      break;
    }

    target = target.parentElement;
  }

  return findCardById(id, cards);
}

function findCardById(id, cards) {
  return cards.find(({ name }) => id === name);
} 