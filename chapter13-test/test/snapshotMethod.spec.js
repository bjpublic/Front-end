function getHelloButtonHtml() {
  return "<button>Hello</button>";
}

describe("snapshot 메서드 테스트", () => {
  it("toMatchInlineSnapshot()은 파일 내부에 스냅샷을 기록한다.", () => {
    expect(getHelloButtonHtml()).toMatchInlineSnapshot(`
      <button>
        Hello
      </button>
    `);
  });

  it("toMatchSnapshot()은 파일 외부에 스냅샷을 기록한다.", () => {
    expect(getHelloButtonHtml()).toMatchSnapshot();
  });
});
