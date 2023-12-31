"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  Icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  Icon,
  outline,
  small,
}) => {
  return (
    <button
      disabled={disabled}
      className={`
          relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 w-full transition
          ${
            outline ? "bg-white border-black text-black" : "bg-main  text-white"
          }
          ${
            small
              ? "py-1 text-sm font-light border-[1px]"
              : "py-3 text-md font-semibold border-2"
          }
          `}
      onClick={onClick}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export default Button;
