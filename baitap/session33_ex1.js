let icon=document.getElementById("icon");
icon.addEventListener("click",passShow);

function passShow(){
    let password=document.getElementById("password");
    if(password.type==="password"){
        password.type="text";
    }else{
        password.type="password";
    }
}