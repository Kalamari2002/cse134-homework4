const nameInput = document.querySelector('#contact-name');
const nameErr = document.querySelector(`output[name='name-error-output']`);
const nameInfo = document.querySelector(`output[name='name-info-output']`);

const emailInput = document.querySelector('#contact-email');
const emailErr = document.querySelector(`output[name='email-error-output']`);
const emailInfo = document.querySelector(`output[name='email-info-output']`);

const commentsTextArea = document.querySelector('textarea');
const commentsInfo = document.querySelector(`output[name='comments-info-output']`);
const commentsErr = document.querySelector(`output[name='comments-error-output']`);

const flashKeyFrames = [{backgroundColor: "#ec9595"}, {backgroundColor: "#eeeccf"}];
const flashTiming = { duration: 2000 };

const fadeoutFrames = [{opacity: 1}, {opacity: 1}, {opacity: 1}, {opacity: 1}, {opacity: 0}];
const fadeoutTiming = { duration: 4000 };

console.log(nameInput);
nameInput.addEventListener("input", (event)=>{
    nameInput.setCustomValidity("");
    console.log(nameInput.value.length);
    const currCount = nameInput.value.length;
    const maxCount = nameInput.getAttribute("maxlength");
    nameInfo.innerHTML =  `${currCount}/${maxCount}`;
    if(!nameInput.checkValidity()){
        console.log("NAME ERROR");
        // nameInput.animate(flashKeyFrames,flashTiming);
        // nameErr.animate(fadeoutFrames, fadeoutTiming);
        // nameInfo.animate(fadeoutFrames, fadeoutTiming);
    }else{
        //nameInfo.hidden = true;
    }
});

emailInput.addEventListener("input", (event)=>{
    emailInput.setCustomValidity("");
    console.log(emailInput.value.length);
    const currCount = emailInput.value.length;
    const maxCount = emailInput.getAttribute("maxlength");
    emailInfo.innerHTML =  `${currCount}/${maxCount}`;
    if(!emailInput.checkValidity()){
        // nameInput.animate(flashKeyFrames,flashTiming);
        // nameErr.animate(fadeoutFrames, fadeoutTiming);
        // nameInfo.animate(fadeoutFrames, fadeoutTiming);
    }else{
        //nameInfo.hidden = true;
    }
});

commentsTextArea.addEventListener("input", (event)=>{
    const currCount = commentsTextArea.value.length;
    const maxCount = commentsTextArea.getAttribute("maxlength");
    console.log(commentsInfo);
    commentsErr.style.opacity = 0;
    commentsInfo.innerHTML = `${currCount}/${maxCount}`;
    if(currCount < 400) {
        commentsInfo.style.color="#eeeccf";
        commentsTextArea.style.backgroundColor = "#eeeccf";
    } else if(currCount >= 400 && currCount < 500) {
        commentsInfo.style.color="#f0a74f";
        commentsTextArea.style.backgroundColor = "#f0a74f";
    } else {
        commentsInfo.style.color = "#ec9595";
        commentsTextArea.style.backgroundColor = "#ec9595";
        commentsErr.innerHTML = "Character limit reached!"
        commentsErr.style.opacity = 1;
    }
    //#db9642
});


function ValidateInputs(){
    if(!nameInput.checkValidity()){
        nameInput.setCustomValidity("Please only include letters, spaces and periods on your name.");
    }else{
        nameInput.setCustomValidity('');
    }
}