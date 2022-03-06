import styled from "@emotion/styled";

const SkeletonArticle = styled.article``;

const PreviewContainer = styled.div`
  height: 120px;
  background-image: linear-gradient(
    90deg,
    #e0e0e0 0px,
    #ededed 30px,
    #e0e0e0 60px
  );
  animation: refresh 2s infinite ease-out;
`;

const ContentContainer = styled.div``;

const TitleSkeleton = styled.div`
  width: 50%;
  height: 16px;
  background-image: linear-gradient(
    90deg,
    #e0e0e0 0px,
    #ededed 30px,
    #e0e0e0 60px
  );
  animation: refresh 2s infinite ease-out;
  margin-top: 10px;
`;

const ContentSkeleton = styled.div`
  width: 80%;
  height: 16px;
  background-image: linear-gradient(
    90deg,
    #e0e0e0 0px,
    #ededed 30px,
    #e0e0e0 60px
  );
  animation: refresh 2s infinite ease-out;
  margin-top: 10px;
`;

const VideoSkeleton = () => {
  return (
    <SkeletonArticle>
      <PreviewContainer />
      <ContentContainer>
        <TitleSkeleton></TitleSkeleton>
        <ContentSkeleton></ContentSkeleton>
      </ContentContainer>
    </SkeletonArticle>
  );
};

export default VideoSkeleton;
