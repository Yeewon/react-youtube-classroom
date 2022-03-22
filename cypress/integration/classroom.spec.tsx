/// <reference types="cypress" />
// @ts-check
/* eslint-disable jest/valid-expect */

import { FETCH_VIDEO_COUNT } from "../../src/constants/classroom";

describe("나만의 유튜브 강의실", () => {
  const keyword = "TypeScript";

  it("successfully loads", () => {
    cy.exec("npm start");
    cy.visit("/");
  });

  it("동영상을 검색하면 결과를 사용자에게 보여준다.", () => {
    cy.searchVideo(keyword);
    cy.get('button[type="submit"]')
      .click()
      .then(() => {
        cy.get("iframe").should("have.length", FETCH_VIDEO_COUNT);
      });
  });

  it("최근 검색 키워드 버튼 생성을 생성한다.", () => {
    cy.get("#keyword-button").should("have.text", keyword);
  });
});
