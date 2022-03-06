import { useState } from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  font-size: 1rem;
`;
const Area = styled.textarea`
  resize: none;
  width: 100%;
  padding: 0.5rem 1rem;
`;
const Counter = styled.div`
  text-align: right;
`;
const MAX_LENGTH = 60;
export const TextArea = (props) => {
  const onChange = (e) => {
    const value = e.target.value?.slice(0, MAX_LENGTH);
    if (props.onChange) props.onChange(props.id, value);
  };
  return (
    <Wrapper>
      <Area
        onChange={onChange}
        value={props.value ?? ""}
        placeholder={props.placeholder}
        rows="1"
      />
      <Counter>
        {props.value?.length ?? 0}/{MAX_LENGTH}
      </Counter>
    </Wrapper>
  );
};
