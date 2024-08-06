import { css, styled } from "styled-components";
import { IButtonProps } from ".";

export const BtnDefault = styled.button<IButtonProps>`
  width: 100px;
  height: 40px;
  background: rgb(169, 60, 10);
  border: none;
  border-radius: 5px;
  color: #ffffff;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  transition: 1s;
  cursor: pointer;

  ${(props) => {
    if (props.size === "medium") {
      return css`
        width: 150px;
      `;
    }

    if (props.size === "large") {
        return css`
        width: 250px;
      `;
    }
  }}
`;
