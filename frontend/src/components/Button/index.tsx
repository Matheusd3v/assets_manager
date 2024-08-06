import { BtnDefault } from "./style";

export interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  color?: "primary";
}

export const Button = ({ children, size, color, onClick }: IButtonProps) => {
  return (
    <BtnDefault size={size} color={color} onClick={onClick}>
      {children}
    </BtnDefault>
  );
};
