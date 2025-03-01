const form = document.querySelector("form");

const nameInput = document.querySelector('#contact-name');
const nameErr = document.querySelector(`output[name='name-error-output']`);
const nameInfo = document.querySelector(`output[name='name-info-output']`);

const emailInput = document.querySelector('#contact-email');
const emailErr = document.querySelector(`output[name='email-error-output']`);
const emailInfo = document.querySelector(`output[name='email-info-output']`);

const commentsTextArea = document.querySelector('textarea');
const commentsInfo = document.querySelector(`output[name='comments-info-output']`);
const commentsErr = document.querySelector(`output[name='comments-error-output']`);

const NAME_REGEXP = /[A-Za-z .]+/;
const EMAIL_REGEXP = /[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/;
const COMMENTS_REGEXP = /[A-Za-z0-9 .,?!;:"'()]+/
const form_errors = [
    {
        'field':"contact-name",
        'errors':[]
    },
    {
        'field':"contact-email",
        'errors':[]
    },
    {
        'field':"comments",
        'errors':[]
    }
];

// nameInput.addEventListener("input", (event)=>{
//     nameInput.setCustomValidity("");
//     console.log(nameInput.value.length);
//     const currCount = nameInput.value.length;
//     const maxCount = nameInput.getAttribute("maxlength");
//     nameInfo.innerHTML =  `${currCount}/${maxCount}`;
//     if(!nameInput.checkValidity()){
//         console.log("NAME ERROR");
//     }else{
//         //nameInfo.hidden = true;
//     }
// });

// form.addEventListener("submit",event=>{
//     event.preventDefault();
//     const formData = new FormData(form);
//     formData.append('form-errors',{});

//     fetch('https://httpbin.org/post', {
//         method:"POST",
//         body:formData
//     })
//     .then(response => response.json())
//     .then(response => {
//         console.log(response);
//     });

// });


form.addEventListener("submit",event=>{
    const errorData = document.createElement('input');
    errorData.type = 'hidden';
    errorData.name = "form-errors";       
    errorData.value = JSON.stringify(form_errors);
    form.appendChild(errorData);

});

console.log(nameInput);
nameInput.addEventListener("keydown", event => {
    nameInput.setCustomValidity("");
    if(!NAME_REGEXP.test(event.key)){
        form_errors[0]['errors'].push(nameInput.value + event.key);
        console.log("ERROR: ", form_errors[0]['errors']);
        event.preventDefault();
        flashError(nameInput,nameErr);
    }
});
nameInput.addEventListener("input", event => {
    const currCount = nameInput.value.length;
    const maxCount = nameInput.getAttribute("maxlength");
    nameInfo.innerHTML =  `${currCount}/${maxCount}`;
})

emailInput.addEventListener("input", (event)=>{
    emailInput.setCustomValidity("");
    const currCount = emailInput.value.length;
    const maxCount = emailInput.getAttribute("maxlength");
    emailInfo.innerHTML =  `${currCount}/${maxCount}`;
});

commentsTextArea.addEventListener("keydown", event => {
    commentsTextArea.setCustomValidity("");
    if(commentsTextArea.value.length == 500){
        return;
    }

    if(!COMMENTS_REGEXP.test(event.key)){
        form_errors[2]['errors'].push(commentsTextArea.value + event.key);
        console.log("ERROR: ", form_errors[2]['errors']);
        event.preventDefault();
        flashError(commentsTextArea,commentsErr,"Please don't type non-punctuation characters.");
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
});


function flashError(inputElement,errorOutput,message){
    const flashKeyFrames = [{backgroundColor: "#ec9595"}, {backgroundColor: "#eeeccf"}];
    const flashTiming = { duration: 2000 };

    const fadeoutFrames = [{opacity: 1}, {opacity: 1}, {opacity: 1}, {opacity: 1}, {opacity: 0}];
    const fadeoutTiming = { duration: 4000 };

    inputElement.animate(flashKeyFrames,flashTiming);
    if(message)
        errorOutput.innerHTML = message;
    errorOutput.opacity = 1;
    errorOutput.animate(fadeoutFrames, fadeoutTiming);
}

function ValidateInputs(){
    if(!nameInput.checkValidity()){
        nameInput.setCustomValidity("Please only include letters, spaces and periods on your name.");
        form_errors[0]['errors'].push(nameInput.value);
        console.log(form_errors);
    }else{
        nameInput.setCustomValidity('');
    }

    if(!emailInput.checkValidity()){
        emailInput.setCustomValidity("Please insert a valid email.");
        form_errors[1]['errors'].push(emailInput.value);
        console.log(form_errors);
    }else{
        emailInput.setCustomValidity('');
    }

    if(!commentsTextArea.checkValidity()){
        commentsTextArea.setCustomValidity("Please include a comment!");
        form_errors[2]['errors'].push(commentsTextArea.value);
    }else{
        commentsTextArea.setCustomValidity('');
    }
}