import styled from "styled-components";

const Wrapper = styled.h2``;

export const H2 = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};
