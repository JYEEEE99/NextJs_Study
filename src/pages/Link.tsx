//Link 컴포넌트를 사용하기 위해 next/link에서 임포트
import Link from "next/link";
<>
  {/* /ssr로 이동하기 위한 링크를 작성 */}
  <Link href="/ssr">
    <a>Go To SSR</a>
  </Link>
  ;
  {/* 쿼리 파라미터도 지정하는 경우 href 문자열로 그대로 지정하는 방법 외에 객체를 사용해서 지정할수도 있음 */}
  <Link href="/ssg?keyword=next">
    <a>Go To SSG</a>
  </Link>
  {/* href에 문자열을 지정하는 대신 객체를 지정할 수 있음 */}
  <Link href={{ pathname: "/ssg", query: { keyword: "hello" } }}>
    <a>Go To SSG</a>
  </Link>
  {/* // a 요소 대신 버튼 등을 사용하면 Link의 자식 컴포넌트에 onClick 콜백이 전달되어 콜백이 호출되면 페이지를 이동함 */}
  <Link href="/ssg">
    {/* a대신 button을 사용하면 onClick이 호출되는 시점에 이동함 */}
    <button>Jump To SSG page</button>
  </Link>
</>;
