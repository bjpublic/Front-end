import { response } from "./response";
import { makeFrameworkModel, renderCard, bindCardEvent } from "./card";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

const frontEndFrameworkCards = makeFrameworkModel(response);

renderCard(frontEndFrameworkCards);