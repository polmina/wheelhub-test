import { useState } from "react";
import styled from "styled-components";
import EyeIcon from "assets/icons/eye-black-128.png";
import EyeCrossedIcon from "assets/icons/eye-crossed-black-128.png";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  ${(props) => `
  border:${props.isError ? "2px solid red" : "1px solid rgba(0, 0, 0, 0.5);"}
`};
`;
const Input = styled.input`
  border: none;
  padding: 0.5rem 1rem;
  flex: 1;
`;
const Eye = styled.img`
  width: 1.5rem;
  object-fit: contain;
  cursor: pointer;
  margin: 0.5rem 1rem;
`;
const Main = styled.div`
  display: flex;
`;
const ProgressBar = styled.div`
  height: 0.2rem;
  ${(props) => `
    width:${props.perc}%;
    background: ${props.color};

  `}
`;
const passwordStrengthValues = {
  containsNumber: 20,
  containsUpper: 20,
  length8: 20,
  length16: 20,
  length24: 20,
};
const passwordColorValues = {
  low: "red",
  medium: "orange",
  high: "green",
};
const Error = styled.div`
  color: red;
`;
const MAX_LENGTH = 24;
export const PasswordInput = (props) => {
  const [isEyeChecked, setIsEyeChecked] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const calculatePasswordStrength = (pwd) => {
    let total = 0;
    if (pwd.length >= 8) total += passwordStrengthValues.length8;
    if (pwd.length >= 16) total += passwordStrengthValues.length16;
    if (pwd.length >= 24) total += passwordStrengthValues.length24;
    if (pwd.match(/[A-Z]/g)) total += passwordStrengthValues.containsUpper;
    if (pwd.match(/[0-9]/g)) total += passwordStrengthValues.containsNumber;
    setPasswordStrength(total);
  };
  const calculateColorStrenght = (): string => {
    if (passwordStrength >= 0 && passwordStrength < 33) return "low";
    if (passwordStrength > 33 && passwordStrength < 66) return "medium";
    if (passwordStrength >= 66 && passwordStrength <= 100) return "high";
    return "low";
  };
  const onChange = (e) => {
    const value = e.target.value?.slice(0, MAX_LENGTH);
    if (props.onChange) props.onChange(props.id, value);
    calculatePasswordStrength(value);
  };

  const toggleEye = () => setIsEyeChecked(!isEyeChecked);
  return (
    <>
      <Wrapper isError={props.error}>
        <Main>
          <Input
            type={!isEyeChecked ? "password" : "text"}
            onChange={onChange}
            value={props.value ?? ""}
            placeholder={props.placeholder}
          />
          <Eye
            src={!isEyeChecked ? EyeIcon : EyeCrossedIcon}
            onClick={toggleEye}
          />
        </Main>
        <ProgressBar
          perc={passwordStrength}
          color={passwordColorValues[calculateColorStrenght()]}
        />
      </Wrapper>
      {props.error ? <Error>{props.error}</Error> : null}
    </>
  );
};
