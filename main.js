const form = document.querySelector('.actual-form');
const submitButton= document.querySelector('.submit-button');

///im getting all the inputFields here
const inputFields = document.querySelectorAll("input");

///getting all the error spans underneath each input field
const errorFirstMessage = document.getElementById("errorFirstName");
const errorLastMessage = document.getElementById("errorLastName");

///getting each input field to help produce the error message
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");



form.addEventListener('submit',(e)=> {
    //e.preventDefault();
    console.log("you submitted the form");

})

submitButton.addEventListener('click',(e)=>{
    e.preventDefault(); // you have to put this so the default error messages dont appear
    resetErrors();

    ///getting values for each input field
    const firstNameValue = document.querySelector(".firstName").value;
    const lastNameValue = document.querySelector(".lastName").value;

    const firstNameAttribute = firstName.getAttribute("name");
    console.log("Validate the email");
    console.log("The first name is now>>>", firstNameValue );
    console.log("The first name attribute>>>>", firstNameAttribute);

    if(!firstNameValue){
        //console.log("The errorMessage value >>>", errorFirstMessage);
        firstName.classList.add("error");

        errorFirstMessage.innerHTML = `
        <h3>First Name cannot be empty</h3>
        `
    }
    if(!lastNameValue){
        //console.log("The errorMessage value >>>", errorLastMessage);
        lastName.classList.add("error");

        errorLastMessage.innerHTML = `
        <h3>Last Name cannot be empty</h3>
        `
    }
});

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
}