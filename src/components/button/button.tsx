import { FC } from "react";

interface ButtonProps {
  children: any;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  type = "submit",
  onClick,
}) => {
  return (
    <button type={type} onClick={onClick} style={{ marginTop: 10, marginBottom: 10, marginRight: 10 }}>
      {children}
    </button>
  );
};
