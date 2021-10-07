import Button from "./button";
import { addClass } from "./util/dom";

let id = 0;

export default class MemoItem {
  constructor(el, props) {
    this.el = el;
    this.props = props;
    this.id = id++;
    this.render();
  }

  render() {
    const itemEl = document.createElement("li");

    addClass(
      itemEl,
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    this.itemEl = itemEl;
    this.renderContent();
    this.renderDeleteMemoBtn();

    this.el.append(itemEl);
  }

  renderContent() {
    const span = document.createElement("span");
    addClass(span, "text-break");

    span.textContent = this.props.content;

    this.itemEl.append(span);
  }

  renderDeleteMemoBtn() {
    this.button = new Button(this.itemEl, {
      attributes: { "data-item-id": this.id },
      classNames: ["btn", "btn-danger", "btn-sm"],
      textContent: "X",
    });
  }

  destroy() {
    this.itemEl.remove();
  }
}
