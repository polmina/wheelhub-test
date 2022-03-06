import styled from "styled-components";
import { useTranslation } from "react-i18next";
import SuccessImage from "assets/images/success.png";

import { H2 } from "components/h2";
import { P } from "components/p";
import { Separation } from "components/separation";
import { Button } from "components/button";

const Wrapper = styled.div`
  padding: 1rem 1rem;
  width: 60%;
  margin: 0 auto;
`;
const Content = styled.div`
  display: flex;
`;
const Image = styled.img`
  object-fit: contain;
  width: 20rem;
`;
const Main = styled.div`
  margin: 1rem 2rem;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Success = (props) => {
  const { t } = useTranslation();

  const back = () => props.updateCurrentStep(1);
  const toStart = () => props.updateCurrentStep(0);
  return (
    <Wrapper>
      <Content>
        <Image src={SuccessImage} />
        <Main>
          <H2>{t("success.accountCreated")}</H2>
          <P>{t("success.text")}</P>
        </Main>
      </Content>
      <Separation />

      <ButtonWrapper>
        <Button type="secondary" value={t("success.back")} onClick={back} />
        <Button
          type="secondary"
          value={t("success.toStart")}
          onClick={toStart}
        />
      </ButtonWrapper>
    </Wrapper>
  );
};
