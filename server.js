const express=require("express");
const app=express();
const cors=require("cors")
const mongoose=require('mongoose')
const bodyParser=require("body-parser");
const tutorialroute=require('./routes/tutorialRoute')

const path=require("path")
require('dotenv').config()

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors())
const URI = process.env.MONGODB_URL

app.use('/api',tutorialroute)

/* Connect to database */
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err =>{
    if(err) throw err;
    console.log('Connected to MongoDB')
})

/* Run React witth express, add lines of code to dev in packagejson and client*/
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})