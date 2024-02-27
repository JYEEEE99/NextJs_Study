// 이미지 파일 업로드
import Image from "next/image";
import { NextPage } from "next";
import BibleImage from "../public/imges/bible.jpg";
const ImageSample: NextPage<void> = (props) => {
  return (
    <div>
      <h1>이미지 표시 비교</h1>
      <p>img 태그로 표시한 경우</p>
      {/* 일반적인 img 태그를 사용해서 이미지 표시 */}
      <img src="/images/bible.jpg" />
      <p>Image 컴포넌트로 표시한 경우</p>
      {/* Image 컴포넌트를 사용해서 표시 */}
      {/* 경로를 지정하는 대신, 임포트한 이미지 지정 */}
      <Image src={BibleImage} />
      <p>Image로 표시한경우에는 사전 그리기 영역이 확보 됩니다</p>
    </div>
  );
};
export default ImageSample;
