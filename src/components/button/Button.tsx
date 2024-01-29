import React, { ReactElement } from "react";
import { IButtonProps } from "./button.interface";

const Button = (props: IButtonProps): ReactElement => {
  const {
    label,
  } = props;
  return <button>{label}</button>;
};

export default Button;