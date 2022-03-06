import styled from "styled-components";
import colors from "utils/colors.json";
const Wrapper = styled.div`
  display: flex;
`;
const First = styled.h1`
  border-bottom: 0.2rem solid ${colors["light-green-color"]};
  padding-bottom: 0.5rem;
  margin-right: 0.5rem;
`;
const Rest = styled.h1``;
export const H1 = (props) => {
  const arr = props.children.split(" ");

  const first = arr[0];
  arr.shift();
  const rest = arr.join(" ");

  return (
    <Wrapper>
      <First>{first}</First> <Rest>{rest}</Rest>
    </Wrapper>
  );
};
