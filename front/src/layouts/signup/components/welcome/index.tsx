import { useState } from "react";
import styled from "styled-components";
import RightIcon from "assets/icons/right-white-128.png";
import LogoImage from "assets/images/Logotipo-Vertical-Verde-Alta.png";
import { useTranslation } from "react-i18next";

import { H1 } from "components/h1";
import { H2 } from "components/h2";
import { P } from "components/p";
import { Checkbox } from "components/checkbox";
import { Separation } from "components/separation";
import { Button } from "components/button";

const Wrapper = styled.div`
  padding: 1rem 1rem;
  width: 60%;
  margin: 0 auto;
`;
const ButtonWrapper = styled.div`
  text-align: right;
`;
const Logo = styled.img`
  width: 20rem;
  margin: 0 auto;
  object-fit: contain;
`;
export const Welcome = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const { t } = useTranslation();

  const nextStep = () => {
    if (isChecked) props.updateCurrentStep(1);
  };
  const onCheckChange = (val) => {
    setIsChecked(val);
  };
  return (
    <Wrapper>
      <H1>{t("welcome.title")}</H1>
      <Logo src={LogoImage} />
      <H2>{t("welcome.whatWillYouDo")}</H2>
      <P>{t("welcome.p1")}</P>
      <P>{t("welcome.p2")}</P>
      <P>{t("welcome.p3")}</P>
      <Checkbox label={t("welcome.checkbox")} onChange={onCheckChange} />
      <Separation />
      <ButtonWrapper>
        <Button
          value={t("welcome.button")}
          isActive={isChecked}
          onClick={nextStep}
          icon={RightIcon}
        />
      </ButtonWrapper>
    </Wrapper>
  );
};
