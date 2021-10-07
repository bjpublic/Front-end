import MemoInputArea from "../memoInputArea";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "MemoInputArea Component",
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
};

function createContainer() {
  const el = document.createElement("div");
  el.style.width = "100%";

  return el;
}

export const basic = () => {
  const el = createContainer();
  const memoInputArea = new MemoInputArea(el, { addMemoItem: () => {} });

  return el;
};
