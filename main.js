const form = document.querySelector('.actual-form');
const submitButton= document.querySelector('.submit-button');

form.addEventListener('submit',(e)=> {
    e.preventDefault();

    console.log("you submitted the form");
})

submitButton.addEventListener('click',()=>{

    console.log("Validate the email");

})