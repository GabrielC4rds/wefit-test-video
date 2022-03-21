import { Main, Title} from './ShowInput.module';

const ShowInput = () => {
const show =() =>{
  var op = 0.1;  // initial opacity
    document.getElementById("inputMain").style.display = 'flex';
    document.getElementById("inputHover").style.display = 'flex';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        document.getElementById("inputMain").style.opacity = op;
        document.getElementById("inputMain").style.filter = 'alpha(opacity=' + op * 100 + ")";
        document.getElementById("inputHover").style.opacity = op;
        document.getElementById("inputHover").style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);

}
  return (
    
    <Main id="inputMain" onClick={() => show()}>
      <Title>Adicionar item</Title>
    </Main>
  )
}

export default ShowInput;