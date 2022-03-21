
import styles from '../styles/Home.module.css'
import { Input } from '../components/Input/Input.js'
import Cards from "../components/Cards/Cards.js";
import EmptyCard from '../components/EmptyCard/EmptyCard';
import ShowInput from '../components/ShowInput/ShowInput';
import React from "react";


export default function Home() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className={styles.container}>
      <Input id="mainInput" addTodo={addTodo}></Input>
      {
        todos.length === 0 ? <EmptyCard id="emptyCard" /> :
          todos.map((item, index) => (
            <Cards key={index}
              index={index}
              todo={item.text}
              removeTodo={removeTodo}>
            </Cards>
          ))
      }
      <ShowInput />
    </div>
  )
}
