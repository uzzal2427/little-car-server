const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000 ;

// middleware

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('this is the server side for toy marketplace name Little Cars')
})

app.listen(port , ()=>{
    console.log(`this server is running on port ${port}`);
})