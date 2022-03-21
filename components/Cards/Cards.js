import {Main,Title, DeleteButton} from './Cards.module';

const Cards = ({ todo, index, removeTodo }) => {
    return(
        <Main id="note">
            <Title>{todo}</Title>
            <DeleteButton onClick={() => removeTodo(index)}>
                <img src="../ic-delete.png"/>
            </DeleteButton>
        </Main>
    )
  }
  
  export default Cards;