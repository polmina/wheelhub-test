import styled, { keyframes } from "styled-components";
import colors from "utils/colors.json";
import SpinnerIcon from "assets/icons/spinner-white-128.png";
const colorSchema = {
  primary: {
    backgroundActive: colors["dark-green-color"],
    backgroundHover: colors["green-color"],
    backgroundDisabled: "rgba(0,0,0,0.3)",
    color: "white",
    colorHover: "white",
  },
  secondary: {
    backgroundActive: "transparent",
    backgroundHover: "transparent",
    backgroundDisabled: "transparent",
    color: "rgba(0,0,0, 0.9)",
    colorHover: "rgba(0,0,0,1)",
  },
};
const Wrapper = styled.div`
  display: inline-flex;
  color: white;
  padding: 0.5rem;
  transition: 0.1s;
  > * {
    margin: auto;
  }
  ${(props) => `
  background:${
    props.isActive
      ? props.schema.backgroundActive
      : props.schema.backgroundDisabled
  };
    cursor:${props.isActive ? "pointer" : "default"};
    color:${props.schema.color};
    &:hover{
      background:${
        props.isActive
          ? props.schema.backgroundHover
          : props.schema.backgroundDisabled
      };
      color:${props.schema.colorHover};
    }
  `}
`;
const Text = styled.div`
  color: inherit;
`;
const Icon = styled.img`
  object-fit: contain;
  height: 1rem;
`;
const rotate = keyframes`
100% { transform:rotate(360deg);  } 
`;
const Loading = styled.img`
  object-fit: contain;
  height: 1rem;
  animation: ${rotate} 2s linear infinite;
`;
export const Button = (props) => {
  const onClick = () => {
    if (props.onClick) props.onClick();
  };
  return (
    <Wrapper
      isActive={props.isActive ?? true}
      schema={colorSchema[props.type ?? "primary"]}
      onClick={onClick}
    >
      <Text>{props.value}</Text>
      {props.icon ? <Icon src={props.icon} /> : null}
      {props.isLoading ? <Loading src={SpinnerIcon} /> : null}
    </Wrapper>
  );
};
