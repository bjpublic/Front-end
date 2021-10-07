import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import MemoInputArea from "../../src/memoInputArea";

describe("memoInputArea", () => {
  let memoInputArea, el, spy;

  beforeEach(() => {
    spy = jest.fn();
    el = document.createElement("div");
    memoInputArea = new MemoInputArea(el, { addMemoItem: spy });

    document.body.append(el);
  });

  afterEach(() => {
    el.remove();
  });

  it("MemoInputArea 요소가 렌더링된다.", () => {
    expect(el).toContainElement(memoInputArea.inputAreaEl);
  });

  it("MemoInputArea 요소는 스냅샷과 일치해야 한다.", () => {
    expect(memoInputArea.inputAreaEl).toMatchSnapshot();
  });

  it("Add Memo 버튼을 누를 시 입력된 텍스트 값을 인자로 받는 addMemoItem() 함수가 호출된다.", () => {
    const button = screen.getByText("Add Memo");
    const textarea = screen.getByLabelText("메모 작성하기");

    userEvent.type(textarea, "Bob");
    userEvent.click(button);

    expect(spy).toHaveBeenCalledWith("Bob");
    expect(textarea).toHaveValue("");
  });
});
