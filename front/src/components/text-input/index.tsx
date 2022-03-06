import styled from "styled-components";
const Wrapper = styled.div``;
const Input = styled.input`
  padding: 0.5rem 1rem;
  width: 100%;
  font-size: 1rem;
  ${(props) => `
    border:${props.isError ? "2px solid red" : "1px solid rgba(0, 0, 0, 0.5);"}
  `};
`;
const Error = styled.div`
  color: red;
`;
export const TextInput = (props) => {
  const onChange = (e) => {
    if (props.onChange) props.onChange(props.id, e.target.value);
  };
  return (
    <Wrapper>
      <Input
        onChange={onChange}
        value={props.value ?? ""}
        placeholder={props.placeholder}
        isError={props.error}
      />
      {props.error ? <Error>{props.error}</Error> : null}
    </Wrapper>
  );
};
