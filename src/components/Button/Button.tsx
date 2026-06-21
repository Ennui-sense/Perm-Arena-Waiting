import type { ReactNode } from "react";
import "./Button.scss";
import clsx from "clsx";
import ArrowIcon from "~/assets/icons/arrow-right.svg?react";

interface IButton {
  className?: string;
  children: ReactNode;
}

const Button = ({ className, children }: IButton) => {
  return (
    <button className={clsx("button", className)} type="button">
      <ArrowIcon />
      {children}
    </button>
  );
};

export default Button;
