import styled from "styled-components";

const Wrapper = styled.h3``;

export const H3 = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};
