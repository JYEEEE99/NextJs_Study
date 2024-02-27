import { useCallback, useState } from "react";
import { Button } from "./프레젠테이션컴포넌트";

//팝업을 표시하기 위한 훅
const usePopup = () => {
  // 주어진 텍스트를 표시하는 팝업을 표시하는 함수
  const cd = useCallback((text: string) => {
    prompt(text);
  }, []);
  return cd;
};
type CountButtonProps = {
  label: string;
  maximum: number;
};
// 클릭된 횟수를 표시하는 버튼을 표시하는 컴포넌트
export const CountButton = (props: CountButtonProps) => {
  const { label, maximum } = props;
  // 얼럿을 표시하기 위한 훅을 사용
  const displayPopup = usePopup();

  // 카운트를 저장하는 상태를 정의
  const [count, setCount] = useState(0);

  // 버튼이 클릭됐을때의 작동을 정의
  const onClick = useCallback(() => {
    // 카운트를 업데이트한다
    const newCount = count + 1;
    setCount(newCount);

    if (newCount >= maximum) {
      // 얼럿을 낸다
      displayPopup(`You've clicked ${newCount} times`);
    }
  }, [count, setCount]);

  // 상태를 기반으로 표시에 필요한 데이터를 구한다
  return (
    <div>
      <Button disabled={disabled} onClick={onClick} label={label} text={text} />
      ;
    </div>
  );
};
