import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import RightIcon from "assets/icons/right-white-128.png";

import { H1 } from "components/h1";
import { H3 } from "components/h3";
import { TextInput } from "components/text-input";
import { PasswordInput } from "components/password-input";
import { P } from "components/p";
import { TextArea } from "components/text-area";
import { Separation } from "components/separation";
import { Button } from "components/button";
import { checkFormFields } from "./utils";
import { post } from "utils/request";
const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  > div {
    margin: 0.5rem 0;
  }
`;
const InputWrapper = styled.div``;
const PasswordWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  > * {
    flex: 1 1 150px;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
`;
export const Form = (props) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const [state, setState] = useState({
    username: null,
    password: null,
    repeatPassword: null,
    clue: null,
  });
  const [errors, setErrors] = useState({
    username: null,
    password: null,
    repeatPassword: null,
    clue: null,
  });

  const updateState = (key: string, value: string) => {
    setState({ ...state, [key]: value });
  };
  const resetErrors = () => {
    setErrors({
      username: null,
      password: null,
      repeatPassword: null,
      clue: null,
    });
  };
  const sendData = async () => {
    resetErrors();
    const fieldsErrors: any = checkFormFields(state);
    if (fieldsErrors) {
      setErrors(fieldsErrors);
      return;
    }
    try {
      setIsLoading(true);
      let res = await post("", state);
      console.log(res);
      props.updateCurrentStep(2);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Wrapper>
      <H1>{t("form.title")}</H1>
      <InputWrapper>
        <H3>{t("form.username")}</H3>
        <TextInput
          placeholder={t("form.usernamePlaceholder")}
          value={state.username}
          id="username"
          onChange={updateState}
          error={errors.username}
        />
      </InputWrapper>
      <PasswordWrapper>
        <InputWrapper>
          <H3>{t("form.password")}</H3>
          <PasswordInput
            placeholder={t("form.passwordPlaceholder")}
            value={state.password}
            id="password"
            onChange={updateState}
            error={errors.password}
          />
        </InputWrapper>
        <InputWrapper>
          <H3>{t("form.repeatPassword")}</H3>
          <PasswordInput
            placeholder={t("form.repeatPasswordPlaceholder")}
            value={state.repeatPassword}
            id="repeatPassword"
            onChange={updateState}
            error={errors.repeatPassword}
          />
        </InputWrapper>
      </PasswordWrapper>
      <P>{t("form.p")}</P>
      <InputWrapper>
        <H3>{t("form.clue")}</H3>
        <TextArea
          placeholder={t("form.cluePlaceholder")}
          value={state.clue}
          id="clue"
          onChange={updateState}
        />
      </InputWrapper>
      <Separation />
      <ButtonWrapper>
        <Button
          value={t("form.back")}
          type="secondary"
          isActive={true}
          onClick={() => {
            props.updateCurrentStep(0);
          }}
        />
        <Button
          value={t("form.next")}
          isActive={true}
          onClick={sendData}
          icon={RightIcon}
          isLoading={isLoading}
        />
      </ButtonWrapper>
    </Wrapper>
  );
};
