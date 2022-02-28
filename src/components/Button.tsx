import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
};

const ButtonItem = styled.button`
  height: 36px;
  min-width: 64px;
  padding: 0 16px;
  border-radius: 4px;
  outline: 0;
  border-style: none;
  cursor: pointer;
`;

const Button = ({ children }: Props) => {
  return <ButtonItem>{children}</ButtonItem>;
};

export default Button;
