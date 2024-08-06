import styled from "styled-components";


export const CardStyle = styled.div`
    width: 200px;
    height: 100px;
    border-radius: 10px;
    background-color: #1a1a1a;
    font-size: 14px;
    padding: 15px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    margin-right: 50px;
    margin-top: 20px;

    h1, h2, h3, p {
        color: #FFF;
        margin: 0;
    }

    section {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .card-icon {
        color: rgb(169, 60, 10);
        width: 20px;
        height: 20px;
    }

    .trash-button {
        cursor: pointer;
        border: none;
        background-color: transparent;
        padding: 0px;
    }

    p {
        font-size: 12px;
        color: rgb(169, 60, 10);
    }

    .ellipsis {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 200px; 
    }

` 