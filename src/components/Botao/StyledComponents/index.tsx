import styled from 'styled-components';

interface IBotaoContainerProps {
background: string,
color: string
}
export const BotaoContainer = styled.button<IBotaoContainerProps>`
    background: ${(props) => props.background};
    color: ${(props) => props.color};
    midth: 50px;
    height: 50px;
    border: 0;
    border-radius: 8px;
    font-size: 25px;

`