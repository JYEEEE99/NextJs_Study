type ButtonProps = {
  label: string;
  text: string;
  disabled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

// 라벨과 버튼을 표시하는 컴포넌트
export const Button = (props: ButtonProps) => {
  const { label, text, disabled, onClick } = props;

  // props로 전달된 데이터를 기반으로 형태를 구현한다
  return (
    <div className="button-container">
      <span>{label}</span>
      <button disabled={disabled} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
// 형태를 구현하는 컴포넌트, 기본적으로 props로 전달된 데이터를 기반으로
// 적절한 UI부품을 표시하기만 함 스타일 적용도 이 컴포넌트에서 수행
// 프레젠테이션 컴포넌트 안에서는 내부에 상태를 갖지 않고 API호출 등의 부가작용 X
