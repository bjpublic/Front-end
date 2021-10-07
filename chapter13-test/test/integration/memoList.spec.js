import { screen } from "@testing-library/dom";
import MemoList from "../../src/memoList";

describe("MemoList", () => {
  let memoList, el;

  beforeEach(() => {
    el = document.createElement("div");

    memoList = new MemoList(el);

    document.body.append(el);
  });

  afterEach(() => {
    el.remove();
  });

  it("memoList 요소가 렌더링된다.", () => {
    expect(document.body).toContainElement(memoList.list);
  });

  it("memoList 요소는 스냅샷과 일치해야 한다.", () => {
    expect(memoList.list).toMatchSnapshot();
  });

  it("addMemoItem() 메서드 호출 시 메모 항목이 순서대로 추가된다.", () => {
    memoList.addMemoItem("memo1");
    memoList.addMemoItem("memo2");

    const firstMemo = screen.getByText("memo1");
    const secondMemo = screen.getByText("memo2");

    expect(memoList.list.childNodes[0]).toContainElement(firstMemo);
    expect(memoList.list.childNodes[1]).toContainElement(secondMemo);
  });

  it("메모 리스트의 삭제 버튼 클릭 시 해당 메모 항목이 삭제된다.", () => {
    memoList.addMemoItem("memo1");

    const memo = screen.getByText("memo1");

    const deleteBtn = screen.getByText("X");
    deleteBtn.click();

    expect(memoList.list).not.toContainElement(memo);
  });
});
