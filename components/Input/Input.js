import { Main, InputInsert, AddButton, FadeBanner } from './Input.module';
import React from "react";

export function Input({ addTodo }) {
  const [value, setValue] = React.useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  const closeModal = () => {
    var op = 1;
    var timer = setInterval(function () {
      if (op <= 0.1) {
        clearInterval(timer);
        document.getElementById("inputMain").style.display = 'none';
        document.getElementById("inputHover").style.display = 'none';
      }
      document.getElementById("inputMain").style.opacity = op;
      document.getElementById("inputMain").style.filter = 'alpha(opacity=' + op * 100 + ")";
      document.getElementById("inputHover").style.opacity = op;
      document.getElementById("inputHover").style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.1;
    }, 10);

  };
  return (
    <>
      <FadeBanner id="inputHover" onClick={() => closeModal()}></FadeBanner>
      <Main id="inputMain" onSubmit={handleSubmit}>
        <InputInsert type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Digite"></InputInsert>
        <AddButton type="submit"><img src="../ic-add.png" /></AddButton>
      </Main>
    </>

  )
}

export default Input;