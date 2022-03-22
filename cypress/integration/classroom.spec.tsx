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

  it("동영상을 저장하면 강의실에서 확인할 수 있다.", () => {
    cy.saveVideo([0, 1, 2]);
    cy.get('[data-testid="CloseIcon"]').click();
    cy.checkClassroomVideoCount(3);
  });

  it("본 영상으로 체크하면 영상이 필터링되어 보여진다.", () => {
    cy.get("#isWatched").click();
    cy.checkClassroomVideoCount(2);

    cy.contains("본 영상").click();
    cy.checkClassroomVideoCount(1);
  });

  it("볼 영상으로 체크하면 영상이 필터링되어 보여진다.", () => {
    cy.get("#isWatched").click();
    cy.checkClassroomVideoCount(0);

    cy.contains("볼 영상").click();
    cy.checkClassroomVideoCount(3);
  });

  it("좋아요 버튼을 클릭하면 좋아요 한 영상 목록에 추가된다..", () => {
    cy.get("#isLiked").click();

    cy.contains("👍🏻 좋아요 한 영상").click();
    cy.checkClassroomVideoCount(1);
  });

  it("좋아요를 취소하면 좋아요 한 영상 목록에서 제거된다.", () => {
    cy.get("#isLiked").click();

    cy.contains("👍🏻 좋아요 한 영상").click();
    cy.checkClassroomVideoCount(0);
  });
});
