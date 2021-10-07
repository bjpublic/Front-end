import MemoItem from "./memoItem";
import { addClass } from "./util/dom";

export default class MemoList {
  constructor(el) {
    this.el = el;
    this.memoItems = [];
    this.render();
  }

  render() {
    const list = document.createElement("ul");

    addClass(list, "list-group");
    list.addEventListener("click", this.removeMemoItem);

    this.list = list;

    this.el.append(list);
  }

  addMemoItem(content) {
    this.memoItems.push(new MemoItem(this.list, { content }));
  }

  removeMemoItem = (ev) => {
    const { itemId } = ev.target.dataset;

    if (itemId) {
      const index = this.memoItems.findIndex(
        (item) => item.id === Number(itemId)
      );

      if (index !== -1) {
        this.memoItems[index].destroy();
        this.memoItems.splice(index, 1);
      }
    }
  };
}
