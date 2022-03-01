import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 100%;
`;
const Button = styled.button`
  height: 36px;
  min-width: 64px;
  margin-left: 10px;
  padding: 0 16px;
  border-radius: 4px;
  outline: 0;
  border-style: none;
  cursor: pointer;
  background-color: rgb(0, 188, 212);
`;

const SearchForm = () => {
  return (
    <Form>
      <Input />
      <Button>검색</Button>
    </Form>
  );
};

export default SearchForm;
