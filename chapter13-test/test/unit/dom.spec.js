import { addClass } from "../../src/util/dom";

describe("dom util", () => {
  it("addClass 함수는 전달된 요소에 class를 추가해야 한다.", () => {
    const el = document.createElement("div");

    addClass(el, "my-class1", "my-class2");

    expect(el).toHaveClass("my-class1", "my-class2");
  });
});
