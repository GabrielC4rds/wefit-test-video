import styled from 'styled-components'

export const Main = styled.form`
  align-items: center;
  background: #fff;
  border-radius: 2px;
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
  display: none;
  height: 80px;
  justify-content: space-between;
  padding: 0 20px;
  position:absolute;
  top: 15vh;
  width: 352px;
  z-index: 99;

`;

export const FadeBanner = styled.div`
  align-items: center;
  background: rgba(0,0,0,0.2);
  display: none;
  height: 400px;
  justify-content: space-between;
  position:absolute;
  top: 0;
  width: 400px;
  z-index: 9;
`;

export const InputInsert = styled.input`
  border: none;
  height: 70px;
  width: 352px;
  &:focus{
      outline: none;
  }
`;

export const AddButton = styled.button`
  align-items: center;
  background: #40d9b8;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 48px;
  justify-content: center;
  width: 60px;
  img{
    width: 24px;
    height: 24px;
  }
`;