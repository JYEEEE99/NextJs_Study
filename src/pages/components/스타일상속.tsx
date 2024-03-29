import { NextPage } from "next";
import styled from "styled-components";

// 파란색 굵은 문자를 표시하는 컴포넌트
const Text = styled.p`
  color: blue;
  font-weight: bold;
`;
// Text를 상속하고, 경계선 스타일을 추가한 컴포넌트
const BorderRedText = styled(Text)`
  padding: 8px 16px;
  border: 3px solid blue;
  border-radius: 8px;
`;

const Page: NextPage = () => {
  return (
    <div>
      <Text>Hello</Text>
      <BorderRedText>World</BorderRedText>
    </div>
  );
};

export default Page;
