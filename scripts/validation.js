const nameInput = document.querySelector('#contact-name');
const nameErr = document.querySelector(`output[name='name-error-output']`);
const nameInfo = document.querySelector(`output[name='name-info-output']`);

const flashKeyFrames = [{backgroundColor: "#ec9595"}, {backgroundColor: "#eeeccf"}];
const flashTiming = { duration: 2000 };

const fadeoutFrames = [{opacity: 1}, {opacity: 1}, {opacity: 1}, {opacity: 1}, {opacity: 0}];
const fadeoutTiming = { duration: 4000 };

console.log(nameInput);
nameInput.addEventListener("input", (event)=>{
    nameInput.setCustomValidity("");

    if(!nameInput.checkValidity()){
        console.log("NAME ERROR");
        // nameInput.animate(flashKeyFrames,flashTiming);
        // nameErr.animate(fadeoutFrames, fadeoutTiming);
        // nameInfo.animate(fadeoutFrames, fadeoutTiming);
    }else{
        //nameInfo.hidden = true;

    }
});

function ValidateInputs(){
    if(!nameInput.checkValidity()){
        nameInput.setCustomValidity("Please only include letters, spaces and periods on your name.");
    }else{
        nameInput.setCustomValidity('');
    }
}