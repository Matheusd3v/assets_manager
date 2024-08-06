import { ReactNode, useEffect, useRef } from "react";
import { ModalStyle } from "./style";

interface IModalProps {
  children: ReactNode;
  setIsOpen: (param: boolean) => void;
  callback?: () => void;
}

export const Modal = ({ children, setIsOpen, callback }: IModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutClick = (event: Event) => {
      if (!modalRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutClick);

    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  useEffect(() => {
    return () => callback && callback();
  }, []);

  return (
    <ModalStyle>
      <div ref={modalRef} className="modalBox">
        <button onClick={() => setIsOpen(false)} className="modal-button">
          Fechar
        </button>
        {children}
      </div>
    </ModalStyle>
  );
};
