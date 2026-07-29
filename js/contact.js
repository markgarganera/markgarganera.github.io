const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const serviceInput = document.getElementById("service");
const messageInput = document.getElementById("message");

const statusBox = document.getElementById("formStatus");
const charCount = document.getElementById("charCount");

function showError(input, message){

    input.classList.add("input-error");
    input.classList.remove("input-success");

    input.parentElement.querySelector(".error").textContent = message;

}

function showSuccess(input){

    input.classList.remove("input-error");
    input.classList.add("input-success");

    input.parentElement.querySelector(".error").textContent = "";

}

function validateEmail(email){

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}

function validatePhone(phone){

    if(phone.trim()==="") return true;

    return /^[0-9()+\-\s]{7,20}$/.test(phone);

}

messageInput.addEventListener("input",()=>{

    charCount.textContent =
    `${messageInput.value.length} / 500`;

});

form.addEventListener("submit",function(e){

    e.preventDefault();

    let valid=true;

    if(nameInput.value.trim().length<3){

        showError(nameInput,"Please enter your full name.");

        valid=false;

    }else{

        showSuccess(nameInput);

    }

    if(!validateEmail(emailInput.value)){

        showError(emailInput,"Please enter a valid email.");

        valid=false;

    }else{

        showSuccess(emailInput);

    }

    if(!validatePhone(phoneInput.value)){

        showError(phoneInput,"Invalid phone number.");

        valid=false;

    }else{

        showSuccess(phoneInput);

    }

    if(serviceInput.value===""){

        showError(serviceInput,"Please select a service.");

        valid=false;

    }else{

        showSuccess(serviceInput);

    }

    if(messageInput.value.trim().length<20){

        showError(messageInput,"Message must contain at least 20 characters.");

        valid=false;

    }else{

        showSuccess(messageInput);

    }

    if(!valid){

        statusBox.textContent="Please correct the highlighted fields.";

        statusBox.className="failed";

        return;

    }

    form.classList.add("loading");

    setTimeout(()=>{

        form.classList.remove("loading");

        statusBox.textContent="Your message is ready to be sent.";

        statusBox.className="success";

    },1200);

});

const form = document.getElementById("contactForm");

const submitBtn = document.getElementById("submitBtn");

const spinner = document.querySelector(".spinner");

const counter = document.getElementById("counter");

const message = document.getElementById("message");

message.addEventListener("input", () => {

counter.innerHTML =
`${message.value.length} / 500`;

});

function validateEmail(email){

return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}

function validatePhone(phone){

if(phone==="") return true;

return /^[0-9()+-\s]{7,20}$/.test(phone);

}

function setError(input,message){

input.classList.add("input-error");

input.parentElement
.querySelector(".error")
.innerHTML=message;

}

function clearError(input){

input.classList.remove("input-error");

input.parentElement
.querySelector(".error")
.innerHTML="";

}

form.addEventListener("submit",function(e){

let valid=true;

const name=document.getElementById("name");

const email=document.getElementById("email");

const phone=document.getElementById("phone");

const service=document.getElementById("service");

if(name.value.trim().length<3){

setError(name,"Please enter your full name.");

valid=false;

}else{

clearError(name);

}

if(!validateEmail(email.value)){

setError(email,"Please enter a valid email.");

valid=false;

}else{

clearError(email);

}

if(!validatePhone(phone.value)){

setError(phone,"Invalid phone number.");

valid=false;

}else{

clearError(phone);

}

if(service.value===""){

setError(service,"Please choose a service.");

valid=false;

}else{

clearError(service);

}

if(message.value.trim().length<20){

setError(message,"Please enter at least 20 characters.");

valid=false;

}else{

clearError(message);

}

if(!valid){

e.preventDefault();

return;

}

/* Loading */

submitBtn.disabled=true;

submitBtn.classList.add("loading");

spinner.style.display="block";

});