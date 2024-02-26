import { useRouter } from "next/router";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter(); // useRouter 사용
  // 주석을 해제하면 /userrouter로 이동하게 됨
  //useEffect(() => {
  //     router.push('/useoruter')
  // })
  return <span>{router.pathname}</span>;
};
export default Page;
