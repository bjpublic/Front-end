import MemoItem from "../../src/memoItem";

describe("MemoItem", () => {
  let memoItem, el;

  beforeEach(() => {
    el = document.createElement("div");
    const content = "item content";

    memoItem = new MemoItem(el, { content });
  });

  it("memoItem 요소가 렌더링된다.", () => {
    expect(el).toContainElement(memoItem.itemEl);
  });

  it("memoItem 요소는 스냅샷과 일치해야 한다.", () => {
    expect(memoItem.itemEl).toMatchSnapshot();
  });

  it("destroy() 메서드 호출 시 삭제된다.", () => {
    memoItem.destroy();

    expect(el).not.toContainElement(memoItem.itemEl);
  });
});
