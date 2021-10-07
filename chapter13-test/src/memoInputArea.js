import { addClass } from "./util/dom";
import Button from "./button";

export default class MemoInputArea {
  constructor(el, props) {
    this.el = el;
    this.props = props;
    this.render();
  }

  render() {
    const inputAreaEl = document.createElement("div");

    addClass(inputAreaEl, "border-bottom", "mb-3", "pb-3");

    this.inputAreaEl = inputAreaEl;
    this.renderTextarea();
    this.renderAddMemoBtn();

    this.el.append(inputAreaEl);
  }

  renderAddMemoBtn() {
    const wrapper = document.createElement("div");

    this.button = new Button(wrapper, {
      classNames: ["btn", "btn-primary"],
      textContent: "Add Memo",
      onClick: this.addMemoItem,
    });

    addClass(wrapper, "d-flex", "justify-content-end", "mt-3");

    this.inputAreaEl.append(wrapper);
  }

  renderTextarea() {
    const wrapper = document.createElement("div");
    const textArea = document.createElement("textarea");
    const label = document.createElement("label");

    addClass(wrapper, "form-floating");
    addClass(textArea, "form-control");

    textArea.style.height = "100px";
    textArea.id = "memo";

    label.setAttribute("for", "memo");
    label.textContent = "메모 작성하기";

    this.textArea = textArea;

    wrapper.append(textArea);
    wrapper.append(label);

    this.inputAreaEl.append(wrapper);
  }

  addMemoItem = () => {
    this.props.addMemoItem(this.textArea.value);
    this.textArea.value = "";
  };
}
