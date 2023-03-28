const myNum = document.querySelector("#myNum");
const comNum = document.querySelector("#comNum");
const btn = document.querySelector("#btn");
const select = document.querySelector("#selectNum");
const result = document.querySelector('#result');

function comparison() {
  const compareNum = Math.ceil(Math.random()*comNum.value);
  const score = myNum.value;
  select.innerHTML = `You chose: ${score}, the machine chose: ${compareNum}`;
 
  if(score>compareNum){
        result.innerHTML= "You won!"
  }else{
    result.innerHTML="You lost!"
  }
   
}
btn.addEventListener("click", comparison);

