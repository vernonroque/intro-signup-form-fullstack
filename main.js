const form = document.querySelector('.actual-form');
const submitButton= document.querySelector('.submit-button');

///im getting all the inputFields here
const inputFields = document.querySelectorAll("input");

///getting all the error spans underneath each input field
const errorFirstMessage = document.getElementById("errorFirstName");
const errorLastMessage = document.getElementById("errorLastName");
const errorEmailMessage = document.getElementById("errorEmail");
const errorPasswordMessage = document.getElementById("errorPassword");

///getting each input field to help produce the error message
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");


//form submit event listener
form.addEventListener('submit',(e)=> {
    e.preventDefault();
    console.log("you submitted the form");
    resetErrors();

    //i am running certain functions for each input field
    inputFields.forEach((input)=>{
        const inputNameAttribute = input.getAttribute("name");
        const className = input.className;
        console.log("The class name for the input is >>>", className);
        console.log("The class attribute is>>>", inputNameAttribute);

        validateField(className,inputNameAttribute);

    });

});

///this function validates all the input fields
const validateField = (selector,attribute) =>{

    const inputValue = document.querySelector(`.${selector}`).value;
    console.log("The input value is >>>", inputValue);
    const targetClass = document.querySelector(`.${selector}`);
    const className = targetClass.className;


    console.log("classname is >>>", className);

    if(className === "email"){
        if(!inputValue){
            const targetInput = document.querySelector(`.${selector}`);
            console.log("The target input field >>>",targetInput);
            targetInput.classList.add("error");

            console.log("email error");
            errorEmailMessage.innerHTML = `
            <p>${attribute} cannot be empty</p>
            `
        }
        else if(!validateEmail(inputValue)){
            errorEmailMessage.innerHTML = `
            <p>Looks like this is not an ${attribute}</p>
            `
        }
    }

    if(!inputValue){
        const targetInput = document.querySelector(`.${selector}`);
        console.log("The target input field >>>",targetInput);
        targetInput.classList.add("error");

        if(targetInput.className === "firstName error")
            {
                console.log("first name error");
                errorFirstMessage.innerHTML = `
                <p>${attribute} cannot be empty</p>
                `
            }
        if(targetInput.className === "lastName error")
            {
                console.log("last name error");
                errorLastMessage.innerHTML = `
                <p>${attribute} cannot be empty</p>
                `
            }
        if(targetInput.className === "password error")
            {
                console.log("password error");
                errorPasswordMessage.innerHTML = `
                <p>${attribute} cannot be empty</p>
                `
            }
    }

}

//this validates the email
const validateEmail=(email)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


///Added event listeners to each input field to reset the errors in case they had some
inputFields.forEach((input)=>{
    input.addEventListener('input', ()=>{
        resetErrors();
    })

})

///resetting the error messages and styling for each input field
function resetErrors(){
    errorFirstMessage.innerHTML = '';
    firstName.classList.remove("error");

    errorLastMessage.innerHTML = '';
    lastName.classList.remove("error");

    errorEmailMessage.innerHTML = '';
    email.classList.remove("error");

    errorPasswordMessage.innerHTML = '';
    password.classList.remove("error");
}