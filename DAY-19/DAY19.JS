                                      //DAY 19 JAVASCRIPT

const dropdown=document.querySelector("#fruits");
const Button=document.querySelector("#showbtn");
const Output=document.querySelector("#output");
Button.addEventListener("click",()=>{
      const SelectValue=dropdown.value;
      output.textContent=`This is ${SelectValue} fruit`;
}
);