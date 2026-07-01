import type { ReactNode } from "react";
import "./Button.scss";
import clsx from "clsx";
import ArrowIcon from "~/assets/icons/arrow-right.svg?react";

interface IButton {
  className?: string;
  children: ReactNode;
  variant?: "transparent";
}

const Button = ({ className, children, variant }: IButton) => {
  return (
    <button
      className={clsx("button", className, variant && `button--${variant}`)}
      type="button"
    >
      <ArrowIcon />
      {children}
    </button>
  );
};

export default Button;
