import userEvent from "@testing-library/user-event";
import Button from "../../src/button";

describe("button 컴포넌트", () => {
  let el;

  beforeEach(() => {
    el = document.createElement("div");
  });

  it("button 요소가 렌더링된다.", () => {
    const button = new Button(el);

    expect(el).toContainElement(button.buttonEl);
  });

  it("button 요소는 스냅샷과 일치해야 한다.", () => {
    const button = new Button(el);

    expect(button.buttonEl).toMatchSnapshot();
  });

  it("classNames 옵션이 적용되어야 한다.", () => {
    const button = new Button(el, { classNames: ["my-class1", "my-class2"] });

    expect(button.buttonEl).toHaveClass("my-class1");
    expect(button.buttonEl).toHaveClass("my-class2");
  });

  it("attributes 옵션이 적용되어야 한다.", () => {
    const button = new Button(el, {
      attributes: { id: 1, "data-test-id": "test-id" },
    });

    expect(button.buttonEl).toHaveAttribute("id", "1");
    expect(button.buttonEl).toHaveAttribute("data-test-id", "test-id");
  });

  it("textContent 옵션이 적용되어야 한다.", () => {
    const button = new Button(el, { textContent: "test" });

    expect(button.buttonEl).toHaveTextContent("test");
  });

  it("이벤트 리스너가 등록되어야 한다.", () => {
    const spy = jest.fn();
    const button = new Button(el, { onClick: spy });

    userEvent.click(button.buttonEl);

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
