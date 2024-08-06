import styled from "styled-components";

export const DefaultContainerPageStyle = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  padding: 20px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: start;
  align-content: start;
  box-sizing: border-box;
  overflow-y: scroll;

  .page-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .empty-message {
    color: grey;
    font-weight: 10;
  }
`;
