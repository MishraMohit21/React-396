const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post(" / ", 
(res, req) => {
    res.send("Server is running");
});


const port = 5000;
app.listen(port, () => console.log('Server is running on port 5000'));

