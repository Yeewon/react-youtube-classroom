import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

type Props = {
  onSubmit: (keyword: string) => void;
  selectedKeyword: string;
};

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

const SearchForm = ({ onSubmit, selectedKeyword }: Props) => {
  const [keyword, setKeyword] = useState<string>("");

  useEffect(() => {
    setKeyword(selectedKeyword);
  }, [selectedKeyword]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(keyword);
    setKeyword("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="keyword"
        value={keyword}
        placeholder="검색"
        onChange={onChange}
      />
      <Button type="submit">검색</Button>
    </Form>
  );
};

export default SearchForm;
