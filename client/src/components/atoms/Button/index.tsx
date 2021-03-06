import React from "react";
import * as S from "./style";

export interface Props {
  /** 버튼 내용 또는 엘리먼트 */
  children?: React.ReactElement | string;
  /** 외부 링크 */
  href?: string;
  /** click handler */
  onClick?: () => void;
  /** icon  */
  icon?: string;
  /** fit to size enable */
  submit?: boolean;
  setTodo?:React.Dispatch<React.SetStateAction<string[]>>,
  inputOpen?:boolean;
}

function Button ({
  children,
  href,
  onClick,
  icon,
  submit,
  setTodo,
  inputOpen,
  ...props
}:Props):React.ReactElement {
  // default
  return (
    <S.StyledButton type="button" onClick={onClick}{...props}>
      {children}
    </S.StyledButton>
  );
};

export default Button;
