import styled, { css } from "styled-components";

const Variants = {
  primary: {
    color: "#ffffff",
    backgroundColor: "#1d3461",
    border: "none",
  },
  success: {
    color: "#ffffff",
    backgroundColor: "#5ab203",
    border: "none",
  },
  transparent: {
    color: "#111111",
    backgroundColor: "transparent",
    border: "1px solid black",
  },
} as const;
type StyedButtonProps = {
  variant: keyof typeof Variants;
};
export const StyledButton = styled.button<StyedButtonProps>`
  ${({ variant }) => {
    // variant에 주어진 키를 기반으로, 대응할 스타일을 얻는다
    const style = Variants[variant];
    // css를 사용해 여러 스타일을 반환
    return css`
      color: ${style.color};
      background-color: ${style.backgroundColor};
      border: ${style.border};
    `;
  }}
  border-radius: 12px;
  font-size: 14px;
  height: 38px;
  line-height: 22px;
  letter-spacing: 0;
  cursor: pointer;

  $:focus {
    outline: none;
  }
`;
