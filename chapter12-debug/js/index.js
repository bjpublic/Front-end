import { response } from "./response";
import { makeFrameworkModel, renderCard, bindCardEvent } from "./card";
import { showModal } from "./modal";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

const frontEndFrameworkCards = makeFrameworkModel(response);

function cardEvent(card) {
  const { name, desc, website } = card;
  showModal({ name, desc, website });
}

renderCard(frontEndFrameworkCards);
bindCardEvent(frontEndFrameworkCards, cardEvent);