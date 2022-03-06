import { Label } from "components/label";
import { useState } from "react";
import styled from "styled-components";
import colors from "utils/colors.json";
const Wrapper = styled.div`
  display: flex;
  cursor: pointer !important;
`;
const Input = styled.div`
  min-height: 1.5rem;
  min-width: 1.5rem;
  max-height: 1.5rem;
  max-width: 1.5rem;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-right: 0.5rem;
  padding: 0.1rem;
`;
const Fill = styled.div`
  flex: 1;
  ${(props) => `
    background: ${props.isActive ? colors["light-green-color"] : "white"}
  `}
`;
export const Checkbox = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleChecked = () => {
    if (props.onChange) props.onChange(!isChecked);
    setIsChecked(!isChecked);
  };
  return (
    <Wrapper onClick={toggleChecked}>
      <Input>
        <Fill isActive={isChecked} />
      </Input>
      <Label>{props.label}</Label>
    </Wrapper>
  );
};
