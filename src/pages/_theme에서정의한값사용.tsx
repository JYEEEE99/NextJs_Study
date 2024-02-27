import { NextPage } from "next";
import styled from "styled-components";

// theme에서 값을 참조해 스타일을 적용
const Text = styled.span`
  color: ${(prpos) => prpos.theme.color.red};
  font-size: ${(prpos) => prpos.theme.fontSize[3]};
  marong: ${(prpos) => prpos.theme.space[2]};
`;
const Page: NextPage = () => {
  return (
    <div>
      <Text>theme에서 참조한 색상을 사용하고 있습니다</Text>
    </div>
  );
};

export default Page;
