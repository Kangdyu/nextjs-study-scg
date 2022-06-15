import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";

const StyledButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: #2ed573;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: #28bb65;
  }

  &:active {
    background-color: #239e56;
  }
`;

const stretchStyle = css`
  width: 100%;
`;

type ButtonType = "wrap" | "stretch";

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  type?: ButtonType;
}

function Button({ type = "wrap", children, ...props }: Props) {
  return (
    <StyledButton css={type === "stretch" && stretchStyle} {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;
