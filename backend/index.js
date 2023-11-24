const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = process.env.PORT || 4001;

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