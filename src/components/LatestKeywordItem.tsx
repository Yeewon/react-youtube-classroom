import styled from "@emotion/styled";

type Props = {
  keyword: string;
  key: number;
};

const KeywordButton = styled.span`
  margin-left: 5px;
  padding: 0 12px;
  background-color: #efefef;
  border-radius: 100px;
  display: inline-flex;
  color: rgba(0, 0, 0, 0.87);
  align-items: center;
  height: 32px;
  font-size: 14px;
  cursor: pointer;
  border: none;
`;

const LatestKeywordItem = ({ keyword }: Props) => {
  return <KeywordButton>{keyword}</KeywordButton>;
};

export default LatestKeywordItem;
