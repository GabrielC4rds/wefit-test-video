import styled from 'styled-components'

export const Main = styled.div`
    align-items: center;
    background: #eeeeee;
    border-radius: 2px;
    display: flex;
    justify-content: space-between;
    margin: 7px 0;
    padding: 0 20px;
    width: 352px;
    height: 32px;
`;

export const Title = styled.label`
    color: #606060;
    font-size: 14px;
 `;

export const DeleteButton = styled.button`
    border-radius: 50%;
    border: none;
    cursor: pointer;
    height: 30px;
    width: 30px;
    img{
        height: 16px;
        width: 12.44px;
    }
`;