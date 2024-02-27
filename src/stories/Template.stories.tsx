import { StyledButton } from "../pages/components/StyledButton";
import { ComponentMeta, ComponentStory } from "@storybook/react"; // 수정된 부분

export default {
  title: "StyledButton",
  component: StyledButton,
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["primary", "success", "transparent"],
      },
    },
    children: {
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof StyledButton>;
// 템플릿 컴포넌트를 구현
// 스토리북으로부터 전달된 props를 그대로 Button으로 전달한다
const Template: ComponentStory<typeof StyledButton> = (args) => (
  <StyledButton {...args} />
);
export const TemplateTest = Template.bind({});
// 기본 props를 설정
TemplateTest.args = {
  variant: "primary",
  children: "Primary",
};
