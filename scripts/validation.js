const nameInput = document.querySelector('#contact-name');
const nameErr = document.querySelector(`output[name='name-error-output']`);
const nameInfo = document.querySelector(`output[name='name-info-output']`)

console.log(nameErr);
nameInput.addEventListener("input", (event)=>{
    nameInput.setCustomValidity('');

    if(!nameInput.checkValidity()){
        console.log("NAME ERROR");
        nameErr.hidden = false;
        nameInfo.hidden = false;
    }else{
        nameErr.hidden = true;
        nameInfo.hidden = true;
    }
});

function ValidateInputs(){
    if(!nameInput.checkValidity()){
        nameInput.setCustomValidity("Please only include letters, spaces and periods on your name.");
    }else{
        nameInput.setCustomValidity('');
    }
}