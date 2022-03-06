import styled from "styled-components";

const Wrapper = styled.label`
  cursor: inherit;
`;

export const Label = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};
