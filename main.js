const form = document.querySelector('.actual-form');
const submitButton= document.querySelector('.submit-button');

const errorFirstMessage = document.getElementById("errorFirstName");

form.addEventListener('submit',(e)=> {
    e.preventDefault();

    console.log("you submitted the form");
})

submitButton.addEventListener('click',(e)=>{
    e.preventDefault(); // you have to put this so the default error messages dont appear
    resetErrors();

    console.log("Validate the email");

    const firstName = document.querySelector(".firstName").value;
    console.log("The first name value >>>", firstName);

    if(!firstName){
        console.log("The errorMessage value >>>", errorFirstMessage);


        errorFirstMessage.innerHTML = `
        <h3>Please write a first name</h3>
        `
    }
});

function resetErrors(){
    errorFirstMessage.innerHTML = '';


}