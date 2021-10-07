import { errorCode, errorMessage } from "./constant/errorCode";
import MemoList from "./memoList";
import MemoInputArea from "./memoInputArea";

function validate(contents) {
  if (contents.length <= 0) {
    return errorCode.TOO_SHORT;
  } else if (contents.length >= 50) {
    return errorCode.TOO_LONG;
  }

  return false;
}

export default class Memo {
  constructor(el) {
    this.el = el;
    this.render();
  }

  render() {
    this.memoInputArea = new MemoInputArea(this.el, {
      addMemoItem: this.addMemoItem,
    });
    this.memoList = new MemoList(this.el);
  }

  addMemoItem = (content) => {
    const errorCode = validate(content);

    if (errorCode) {
      alert(errorMessage[errorCode]);
      return;
    }

    this.memoList.addMemoItem(content);
  };
}
