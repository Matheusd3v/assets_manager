import { ReactNode } from "react";
import { LineStyle } from "./style";
import { FaTrash } from "react-icons/fa";

interface LineProps {
  children: ReactNode;
  hiddenBtn?: boolean;
  callback?: () => void;
}

export const Line = ({ children, hiddenBtn = false, callback }: LineProps) => {
  return (
    <LineStyle>
      <section className="line-section">{children}</section>

      {!hiddenBtn && (
        <button onClick={callback} className="trash">
          <FaTrash className="card-icon" />
        </button>
      )}
    </LineStyle>
  );
};
