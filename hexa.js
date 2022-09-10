var btn1 =document.getElementById("btn1");
var text1 = document.getElementById("text1");

const hexa=()=>{
 
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
     text1.style.color = "#" + randomColor;
    
    }
    btn1.addEventListener("click",hexa);
    