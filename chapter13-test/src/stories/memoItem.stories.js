import MemoList from "../memoList";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "MemoItem Component",
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
};

function createContainer() {
  const el = document.createElement("div");
  el.style.width = "350px";

  return el;
}

export const memoItemWithContent = () => {
  const el = createContainer();
  const memoList = new MemoList(el);

  memoList.addMemoItem("Lorem ipsum is placeholder text");

  return el;
};
