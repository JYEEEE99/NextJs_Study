import { NextPage } from "next";
import styled from "styled-components";

type ButtonProps = {
  color: string;
  backgroudColor: string;
};
// 문자 색상과 배경 색상을 props를 통해 변경할 수 있는 버튼 컴포넌트
// 타입 인수에 props 타입을 전달
// color, backgroud, border-color은 props에서 전달한다
const Button = styled.button<ButtonProps>`
  color: ${(props) => props.color};
  backgroud: ${(props) => props.backgroudColor};
  border: 2px solid ${(props) => props.color};
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 8px;
  cursor: pointer;
`;
const Page: NextPage = () => {
  return (
    <div>
      {/* 빨간색 문자, 투명한 배경의 버튼을 표시한다 */}
      <Button backgroudColor="transparent" color="#FF0000">
        Hello
      </Button>
      <Button backgroudColor="#1E90FF" color="white">
        World
      </Button>
    </div>
  );
};

export default Page;
