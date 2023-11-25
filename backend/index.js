const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 4001;

const newUsers = [];

// Use static server to serve your Website
app.use(express.static('public'));

// Invoke the app's `.listen()` method below:
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });


app.get('/', (req,res) => {
    console.log("Hello World");
    res.status(200).send({"message":"hello world"});
})
app.post('/newUser', (req,res)=>{
  console.log("Post is being made");
  console.log("before>>",req.body);

  for(key in req.body){
    req.body[key] = req.body[key].trim();
  }

  console.log("after>>",req.body);
  newUsers.push(req.body);
  console.log("New user made >>>", newUsers)
  res.status(201).send("Thank you! You're set baus")

})