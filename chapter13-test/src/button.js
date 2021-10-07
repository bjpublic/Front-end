import { addClass } from "./util/dom";

export default class Button {
  constructor(el, props = {}) {
    this.el = el;
    this.props = props;
    this.render();
  }

  render() {
    const button = document.createElement("button");
    const { classNames, attributes, textContent } = this.props;

    if (classNames) {
      addClass(button, ...classNames);
    }

    if (attributes) {
      Object.keys(attributes).forEach((attrName) => {
        button.setAttribute(attrName, attributes[attrName]);
      });
    }

    button.textContent = textContent ?? "";

    Object.keys(this.props)
      .filter((propName) => /^on[A-Z]/.test(propName))
      .forEach((propName) => {
        const eventName = propName.replace(/^on/, "").toLowerCase();

        button.addEventListener(eventName, this.props[propName]);
      });

    this.buttonEl = button;

    this.el.appendChild(button);
  }
}
