let num1=document.querySelector("#num1");
let num2=document.querySelector("#num2");
let total=document.querySelector("#total");


function addition(){
  let result  =  (+ num1.value ) + (+num2.value)
    total.innerHTML= " Total  " +result;
    num1.value="";
    num2.value="";

}
function subraction(){
    let result  =  (+ num1.value ) - (+num2.value)
      total.innerHTML= " Total  " +result;
      num1.value="";
      num2.value="";
  
  }
  function Multiplcation(){
    let result  =  (+ num1.value ) * (+num2.value)
      total.innerHTML= " The Product is " +result;
      num1.value="";
      num2.value="";
  
  }
  function divison(){
    let result  =  (+ num1.value ) / (+num2.value)
      total.innerHTML= " Total  " +result;
      num1.value="";
      num2.value="";
  
  }