const nameError=document.querySelector("#name-error")
const phoneError=document.querySelector("#phone-error")
const emailError=document.querySelector("#email-error")
const msgError=document.querySelector("#msg-error")
const submitError=document.querySelector("#submit-error")


let inputName=document.querySelector('#contact-name')
inputName.addEventListener('keyup',validName)
function validName(){
    let name=inputName.value;
    if(name.length>0){
        if(!name[0].match(/^[A-Z]{1}$/)){
            nameError.innerHTML='First character is capital';
            return false;
        }
    }
    if(name.length==0){
        nameError.innerHTML='Name is required'
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='Write Full Name';
        return false
    }
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

let inputPhone=document.querySelector('#contact-phone')
inputPhone.addEventListener('keyup',validPhone)
function validPhone(){
    var number=inputPhone.value
    if(number.length==0){
        phoneError.innerHTML='Phone Number is required';
        return false;
    }
    if(number.length!=10){
        phoneError.innerHTML='Phone Number should be 10 digits';
        return false;
    }
    if(!number.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='Only digits required';
        return false;
    }
    phoneError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}



let inputEmail=document.querySelector('#contact-email')
inputEmail.addEventListener('keyup',validEmail)
function validEmail(){
    var email=inputEmail.value

    if(email.length==0){
        emailError.innerHTML='Email is required';
        return false;
    }
    if(!email.match(/^[a-z\._\-[0-9]*[@][a-z]*[\.][a-z]{3}$/)){
        emailError.innerHTML='Email Invalid';
        return false;
    }
    emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}


let inputMsg=document.querySelector('#contact-msg')
inputMsg.addEventListener('keyup',validMsg)

function validMsg(){
    var msg=inputMsg.value;
    let required=30;
    var left=required-msg.length
    
    if(msg.length==0){
        msgError.innerHTML='Msg is required';
        return false;
    }
    if(left>0){
        msgError.innerHTML=left+"more characters required";
        return false
    }
    msgError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validForm() {
    if (!validName() || !validPhone() || !validEmail() || !validMsg()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix the errors to submit';
        setTimeout(() => {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }
}








