const userInput=document.querySelector(".username-input");
const passInput=document.querySelector(".password-input");
const userMSG=document.querySelector(".username-msg");
const passMSG=document.querySelector(".password-msg");
const singInBTN=document.querySelector(".sing-in");
const singStaus=document.querySelector(".singin-status");
singInBTN.addEventListener("click",singIN)
function singIN(event){
    event.preventDefault();
   const usernameValue=userInput.value;
   const passwordVlue=passInput.value;
   let ifSendData=true;
   if (usernameValue.length === 0 || usernameValue.indexOf("@") === -1  || usernameValue.indexOf(".") === -1 ){
    userMSG.innerText="Please enter a valid E-mail"
        ifSendData=false;
   }
   if(passwordVlue.length === 0){
    passMSG.innerText="Please enter a valid password"
        ifSendData=false;
   }else if ( passwordVlue.length <= 4){
    passMSG.innerText="Your password is too short"
        ifSendData=false;
   }
   if (ifSendData){
    const body =JSON.stringify({
        username:usernameValue,
        password:passwordVlue,
    })
    const header={
        "Content-type" : "application/json"
    }
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:"POST",
        body:body,
        headers:header
    })
    .then(response=>{
        if(response.ok){
            singStaus.innerText="Data send successfully"
        }
    })
   }
}