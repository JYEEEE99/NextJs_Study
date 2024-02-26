import { useRouter } from "next/router";

const router = useRouter();
const onsubmit = () => {
  // ssr로 이동
  router.push("/ssr");
  // 문자열 대신 객체로 지정할 수 있음
  // /ssg?keyword=hello로 이동
  router.push({
    pathname: "/ssg",
    query: { keyword: "hello" },
  });
};
// 호출하면 페이지가 리로드 된다
router.reload();

// 호출하면 이전 페이지로 돌아간다
router.back();

// 이동 시작시의 이벤트를 구동한다
router.events.on("routeChangeStart", (url, { shallow }) => {
  // url에는 이동 대상지의 경로를 부여할 수 있다
  // shallow는 얕은 라우팅(경로만 치환해서 이동)의 경우에는 true가 된다
});
// 이동 완료시의 이벤트를 구독한다
router.events.on("routeChangeComplete", (url, { shallow }) => {
  //url에는 이동 대상지의 경로를 부여할 수 있다
  // shallow는 얕은 라우팅(경로만 치환해서 이동)의 경우에는 true가 된다
});
