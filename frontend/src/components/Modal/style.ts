import styled from "styled-components";

export const ModalStyle = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;

  .modalBox {
    position: relative;
    padding: 2rem;
  }

  .modal-button {
    position: relative;
    top: 20px;
    left: 242px;
    border-radius: 5px;
    border: 1px solid black;
    cursor: pointer;
  }
`;
