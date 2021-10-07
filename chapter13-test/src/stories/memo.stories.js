import Memo from "../memo";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "Memo App",
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
};

function createContainer() {
  const el = document.createElement("div");
  el.style.width = "100%";

  return el;
}

export const emptyMemoList = () => {
  const el = createContainer();
  const memo = new Memo(el);

  return el;
};

export const withTwoMemoList = () => {
  const el = createContainer();
  const memo = new Memo(el);
  memo.addMemoItem("첫번째 메모입니다.");
  memo.addMemoItem("두번째 메모입니다.");

  return el;
};
