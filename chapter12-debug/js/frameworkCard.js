import { showModal } from "./modal";

export default class FrameworkCard {
  constructor(frameworkInfo) {
    const { name, desc, website, imageUrl, index } = frameworkInfo;

    this.name = name;
    this.formattedName = this.formatName(name, index);
    this.desc = desc;
    this.website = website;
    this.imageUrl = imageUrl;

    this.el = this.makeCardElement();
  }

  formatName(name, index) {
    const iconList = ["🦊", "🐶", "🐱"];

    return `${iconList[index]} ${name}`;
  }

  getName() {
    return this.name;
  }

  getDesc() {
    return this.desc;
  }

  getWebsite() {
    return this.website;
  }

  getImageUrl() {
    return this.imageUrl;
  }

  onClickCard() {
    const { name, desc, website } = this;
    showModal({ name, desc, website });
  }

  makeCardElement() {
    const el = document.createElement("div");
    el.className = "card";
    el.id = this.name;
    el.innerHTML = `
      <img src="${this.imageUrl}" class="card-img-top" alt="${this.name} logo"/>
      <div class="card-body">
        <h5 class="card-title">${this.formattedName}</h5>
        <p class="card-text">
          ${this.desc}
        </p>
      </div>
    `;

    el.addEventListener("click", this.onClickCard.bind(this));

    return el;
  }
}