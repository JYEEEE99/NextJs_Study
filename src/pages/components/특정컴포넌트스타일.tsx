import { NextPage } from "next";
import Link, { LinkProps } from "next/link";
import styled from "styled-components";

type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
  className?: string;
  children: React.ReactNode;
};

// Next.js의 링크에 스타일을 적용하기 위한 헬퍼 컴포넌트
// 이 컴포넌트를 스타일 컴포넌트에서 사용하려면
// 정의한 스타일에 대응하는 className이 props로서 전달된다

// className을 a 요소에 전달
const BaseLink = (props: BaseLinkProps) => {
  const { className, children, ...rest } = props;
  return (
    <Link {...rest}>
      <a className={className}>{children}</a>
    </Link>
  );
};
const StyleLink = styled(BaseLink)`
  color: #1e90fff;
  font-size: 2em;
`;

const Page: NextPage = () => {
  return (
    <div>
      {/* 파란색 링크를 표시한다 */}
      <StyleLink href="/">Go To Index</StyleLink>
    </div>
  );
};

export default Page;
