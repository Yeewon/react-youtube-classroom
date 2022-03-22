declare namespace Cypress {
  interface Chainable<Subject> {
    searchVideo(keyword: string): Cypress.Chainable<void>;
    saveVideo(idList: number[]): Cypress.Chainable<void>;
    checkClassroomVideoCount(expectedCount: number): Cypress.Chainable<void>;
  }
}

Cypress.Commands.add("searchVideo", keyword => {
  cy.contains("동영상 검색").click();
  cy.get('input[name="keyword"]').type(keyword);
});

Cypress.Commands.add("saveVideo", idList => {
  idList.forEach(id => {
    cy.get(`[data-id=${id}]`).contains("⬇️ 저장").click();
  });
});

Cypress.Commands.add("checkClassroomVideoCount", expectedCount => {
  cy.get("#saved-video-list")
    .find(".saved-video")
    .should("have.length", expectedCount);
});
