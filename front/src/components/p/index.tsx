import styled from "styled-components";

const Wrapper = styled.p`
  padding: 0.5rem 0;
`;

export const P = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};
