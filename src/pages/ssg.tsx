import { NextPage } from "next";
import Head from "next/head";

// 페이지 컴포넌트의 props 타입 정의(여기에서는 빔)
type SSGProps = {};
// SSG용 페이지 구현
// NextPage는 Next.js의 pages용 타입
// NextPage<props>에서 props가 들어가는 Page임을 명시
const SSG0: NextPage<SSGProps> = () => {
  return (
    <div>
      {/* Head 컴포넌트로 감싸면, 그 요소는 <head>태그에 배치된다 */}
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>ㅣ 페이지는 정적 사이트 생성을 통해 빌드 시 생성된 페이지입니다.</p>
      </main>
    </div>
  );
};
// 페이지 컴포넌트는 react와 마찬가지로 export dafault로 익스포트 한다
export default SSG0;
