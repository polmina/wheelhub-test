import { useState, Suspense } from "react";
import styled from "styled-components";

import { StepsBar } from "components/steps-bar";
import { Welcome } from "./components/welcome";
import { Form } from "./components/form";
import { Success } from "./components/success";
const WIZART_STEPS = 3;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
`;
export const Signup = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const updateCurrentStep = (val) => {
    setCurrentStep(val);
  };

  return (
    <Suspense fallback="loading">
      <Wrapper>
        <StepsBar wizardStepsCount={WIZART_STEPS} currentStep={currentStep} />
        <MainWrapper>
          {
            {
              0: <Welcome updateCurrentStep={updateCurrentStep} />,
              1: <Form updateCurrentStep={updateCurrentStep} />,
              2: <Success updateCurrentStep={updateCurrentStep} />,
            }[currentStep]
          }
        </MainWrapper>
      </Wrapper>
    </Suspense>
  );
};
