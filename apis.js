export const sendInfo = (obj) => {

    console.log('the object is >>>', obj);
    console.log(`${obj['firstName']}`)

    fetch(`http://localhost:4001/newUser`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(obj),
    })
    .then(res=>{
        console.log("heello baus");
        return res.text();
    })
    .then(textRes => {
        alert(`${textRes}`)
    })


}
