import styled from "styled-components";

export const ButtonStyled = styled.button`
    font-size: 1.2rem;
    padding: 10px 20px;
    background-color: transparent;
    color: #fff;
    border: 1px solid #374151;
    border-radius: 15px;
    cursor: pointer;
    display: inline-block;
    transition: all 300ms;

    &:hover {
        background-color: #b47aea;
        color: #111827;
    }
`;