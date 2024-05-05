const express = require("express");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const routes = require('./routes')
const cors = require('cors');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

// const db = require('./config/connectDB');
// db.connect();
mongoose.connect(`mongodb+srv://hungystt4:GbzVSIVvekpMoa4K@cluster0.gjrfghp.mongodb.net/?retryWrites=true&w=majorityappName=Cluster0`)
    .then(() => {
        console.log('Connect Db success!')
    })
    .catch((err) => {
        console.log(err)
    })

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})
