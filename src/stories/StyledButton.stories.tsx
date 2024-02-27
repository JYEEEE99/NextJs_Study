import { ComponentMeta } from "@storybook/react";
import { StyledButton } from "../pages/components/StyledButton/index";
import React from "react";

// 파일 안의 스토리 설정(메타데이터 객체)
export default {
  // 그룹명
  title: "StyledButton",
  //사용하는 컴포넌트
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>;

export const Primary = (props) => {
  return (
    <StyledButton {...props} variant="primary">
      Primary
    </StyledButton>
  );
};
export const Success = (props) => {
  return (
    <StyledButton {...props} variant="success">
      Success
    </StyledButton>
  );
};
export const Tarnsparent = (props) => {
  return (
    <StyledButton {...props} variant="transparent">
      Transparent
    </StyledButton>
  );
};
