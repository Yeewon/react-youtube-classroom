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

  it("동영상 저장 버튼을 클릭하면 취소 버튼으로 바뀌고 저장된 영상 갯수가 갱신된다.", () => {
    cy.get("[data-id=0]").contains("⬇️ 저장").click();
    cy.get("[data-id=0]").should("have.text", "↪️ 저장 취소");
    cy.get("#saved-video-count").should("have.text", "저장된 영상 갯수: 1/100");
  });

  it("동영상 저장 취소 버튼을 클릭하면 저장 버튼으로 바뀌고 저장된 영상 갯수가 갱신된다.", () => {
    cy.get("[data-id=0]").contains("↪️ 저장 취소").click();
    cy.get("[data-id=0]").should("have.text", "⬇️ 저장");
    cy.get("#saved-video-count").should("have.text", "저장된 영상 갯수: 0/100");
  });

  it("최근 검색 키워드를 클릭하면 해당 키워드로 동영상이 검색된다.", () => {
    cy.get("#keyword-button")
      .click()
      .then(() => {
        cy.get("iframe").should("have.length", FETCH_VIDEO_COUNT);
      });
  });
});
