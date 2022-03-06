import styled from "styled-components";
import colors from "utils/colors.json";
import CheckIcon from "assets/icons/check-white-128.png";
const Wrapper = styled.div`
  background: ;
  width: 100%;
  height: 5rem;
  background: ${colors["light-green-color"]};
  display: flex;
  position: relative;
  overflow: hidden;
`;
const StepsWrapper = styled.div`
  display: flex;
  margin: auto;
  > * {
    margin: auto 0;
  }
`;
const Step = styled.div`
  color: ${colors["white"]};
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  align-items: center;
  &:after {
    content: "";
    height: 2rem;
    width: 2rem;
    background: white;
    position: absolute;
    bottom: 0;
    transform: translate(0%, 2.7rem) rotate(45deg);
  }
  justify-content: center;
  ${(props) => `
    background: ${
      props.isActive || props.isPassed
        ? colors["dark-green-color"]
        : colors["step-color"]
    };
    transform:${props.isActive ? "scale(1.2)" : "scale(1)"};
    &:after{
      display: ${props.isActive ? "block" : "none"}
    }
  `};
`;
const Line = styled.div`
  height: 0.2rem;
  width: 3rem;
  background: ${colors["step-color"]};
  ${(props) => `
  background: ${
    props.isActive ? colors["dark-green-color"] : colors["step-color"]
  } 
`}
`;
const Icon = styled.img`
  object-fit: contain;
  width: 1.5rem;
`;
export const StepsBar = (props) => {
  const loadSteps = () => {
    let steps: any = [];
    for (let i = 0; i < props.wizardStepsCount; i++) {
      steps.push(
        <Step
          key={"step" + i}
          isActive={i === props.currentStep}
          isPassed={i < props.currentStep}
        >
          {i < props.currentStep ? <Icon src={CheckIcon} /> : i + 1}
        </Step>
      );

      steps.push(<Line isActive={i < props.currentStep} key={"line" + i} />);
    }
    steps.pop();

    return steps;
  };

  return (
    <Wrapper>
      <StepsWrapper>{loadSteps()}</StepsWrapper>
    </Wrapper>
  );
};
