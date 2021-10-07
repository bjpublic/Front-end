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
