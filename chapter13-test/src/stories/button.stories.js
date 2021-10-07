import Button from "../button";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "Button Component",
  argTypes: {
    classNames: { control: "array" },
    textContent: { control: "text" },
    attributes: { control: "object" },
  },
};

function createContainer() {
  const el = document.createElement("div");
  el.style.width = "100%";

  return el;
}

const Template = (args) => {
  const el = createContainer();
  const button = new Button(el, { ...args });

  return el;
};

export const addMemoButton = Template.bind({});
addMemoButton.args = {
  classNames: ["btn", "btn-primary"],
  textContent: "Add Memo",
  attributes: { id: "1" },
};

export const deleteMemoButton = Template.bind({});
deleteMemoButton.args = {
  classNames: ["btn", "btn-danger", "btn-sm"],
  textContent: "X",
  attributes: { "data-item-id": "btn-id-1" },
};
