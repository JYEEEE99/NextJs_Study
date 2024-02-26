import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

// 페이지 컴포넌트인 props의 타입 정의
type SSGProps = {
  message: string;
};
// SSG 는 getStaticProps가 반환한 props를 받을 수 있다
// NextPage<SSGProps>는 Message: string만을 받아 생성된 페이지 타입
// Next.js의 페이지 컴포넌트나 함수 타입은 https://nextjs.org/learn/excel/typescript/nextjs-types 참고
const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props;
  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>이 페이지는 정적 사이트 생성을 통해 빌드시 생성된 페이지 입니다.</p>
        <p>{message}</p>
      </main>
    </div>
  );
};
//getStaticProps는 빌드시 실행된다
//GetStaticProps<SSGProps>는 SSGProps 인수로 받는 getStaticProps 타입
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}에 getStaticProps가 실행됐습니다`;
  console.log(message);
  return {
    props: {
      message,
    },
  };
};

export default SSG;
