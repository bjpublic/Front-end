beforeEach(() => {
  cy.visit("/");
});

function fillContent(content) {
  cy.findByLabelText("메모 작성하기").type(content);
}

function clickAddMemoBtn() {
  cy.findByText("Add Memo").click();
}

function clickDeleteBtn(text) {
  cy.findByText(text).parent().findByText("X").click();
}

function assertAlertText(text) {
  cy.on("window:alert", (str) => {
    expect(str).to.eq(text);
  });
}

function assertEmptyMemoTextarea(content) {
  cy.findByLabelText("메모 작성하기").should("have.value", "");
}

function assertNotHaveMemoItem(text) {
  cy.findByText(text).should("have.not.exist");
}

function assertOrderedMemoList(textList) {
  const list = cy.get("li");

  cy.get("li").each((el, index) => {
    expect(el.text()).to.contain(textList[index]);
  });
}

describe("Memo App", () => {
  // 사용자가 텍스트를 입력하고, Add Memo 버튼을 눌러 메모를 추가한다.
  // 메모는 순서대로 추가되며, 추가된 후 텍스트는 초기화된다.
  // 사용자가 추가된 메모 항목의 X 버튼을 누르면 해당 메모는 삭제된다.
  it("일반 사용자", () => {
    fillContent("TODO-1");
    clickAddMemoBtn();

    fillContent("TODO-2");
    clickAddMemoBtn();

    assertOrderedMemoList(["TODO-1", "TODO-2"]);
    assertEmptyMemoTextarea();

    clickDeleteBtn("TODO-1");

    assertNotHaveMemoItem("TODO-1");
  });

  // 텍스트를 입력하지 않은 상태로 Add Memo 버튼을 클릭했을 때, 내용을 입력해달라는 경고 창이 뜬다.
  it("메모를 입력하지 않은 사용자", () => {
    clickAddMemoBtn();

    assertAlertText("글을 작성해주세요!");
  });

  // 50자 이상의 글자를 입력한 뒤 Add Memo 버튼을 클릭했을 때 50자 이하로 입력해달라는 경고 창이 뜬다.
  it("메모 입력 조건(50자 이하 입력)을 지키지 않은 사용자", () => {
    fillContent(
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
    );
    clickAddMemoBtn();

    assertAlertText("글은 50자 이하로 입력해야 합니다.");
  });
});
