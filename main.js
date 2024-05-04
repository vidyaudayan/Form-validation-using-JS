const username= document.querySelector('.username')
const email= document.querySelector('.email')
const password= document.querySelector('.password')
const conpassword= document.querySelector('.conpassword')
const submit= document.querySelector('.btn')

const nameerrormsg= document.querySelector('.nameerror')
const emailerrormsg= document.querySelector('.emailerror')
const passworderrormsg= document.querySelector('.passworderror')
const conpassworderrormsg= document.querySelector('.conpassworderror')

submit.addEventListener('click',(e)=>{
e.preventDefault();

if(username.value==='' && email.value=== '' && password.value==='' && conpassword.value===''){
    alert("Please fill all the fields")
}

if(username.value===''){
    showMessage(nameerrormsg,"Please enter your username","red")
}else{
    showMessage(nameerrormsg, "Username entered","green")
}


if(email.value===''){
    showMessage(emailerrormsg,"Please enter your email","red")
}else{
    showMessage(emailerrormsg, "Email entered","green")
}


if(password.value===''){
    showMessage(passworderrormsg,"Please enter password","red")
}else{
    showMessage(passworderrormsg, "Valid password","green")
}

if(conpassword.value===''){
    showMessage(conpassworderrormsg," Cofirm password ","red")
}else if(password.value!== conpassword.value){
    showMessage(conpassworderrormsg, "Password do not match","red")
}else{
    showMessage(conpassworderrormsg,"Valid password","green")
}
})


function showMessage(element,msg,color){
    element.style.visibility= "visible"
    element.textContent= msg;
    element.style.color=color;
    element.previousElementSibling.style.border= `2px solid ${color}`;

}