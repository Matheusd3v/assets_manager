import { styled } from "styled-components";

export const LineStyle = styled.div`
  display: flex;
  border-top: 1px #fff solid;
  width: 350px;
  height: 40px;
  justify-content: space-between;

  .line-section {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    font-size: 12px;
    width: 30%;
  }

  svg {
    margin: auto auto;
    width: 20px;
    height: 20px;
    color: rgb(169, 60, 10);
  }

  .trash {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
