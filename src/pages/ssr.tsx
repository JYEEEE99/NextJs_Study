import { GetServerSideProps, NextPage } from "next";
import { Content } from "next/font/google";
import Head from "next/head";

type SSRProps = {
  message: string;
};
const SSR: NextPage<SSRProps> = (props) => {
  const { message } = props;
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          이 페이지는 서버 사이드 렌더링을 통해 접근 시에 서버에 그려진
          페이지입니다.
        </p>
      </main>
    </div>
  );
};
//getServerSideProps는 페이지로의 요청이 있을 때마다 실행된다
export const getServerSideProps: GetServerSideProps<SSRProps> = async (
  content
) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}에 이페이지의 getServerSideProps가 실행됐습니다.`;
  console.log(message);
  return {
    props: {
      message,
    },
  };
};

export default SSR;
