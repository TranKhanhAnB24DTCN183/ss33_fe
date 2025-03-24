let button=document.querySelector("button");

button.addEventListener("click",function(){
    let note=document.getElementById("note").value;
    let number=document.getElementById("number");
    let arr=note.split("");
    number.textContent=arr.length ;
 
})
