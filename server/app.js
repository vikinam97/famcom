const app = require("express")();
const user = require("./user/user.route");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const cors = require('cors');
let csc = require('country-state-city').default

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// routes
app.use(user);

app.get('/states',async function(req,res){
    let states =  await csc.getStatesOfCountry('101')
    //let city = await csc.getCitiesOfState('1') 
    res.send(states)
})

app.get('/states/:id',async function(req,res){
    let city = await csc.getCitiesOfState(req.params.id)
    res.send(city)
})

app.listen(9000, () => {
    console.log("Server is running at 9000");
    // Connect to database
    mongoose.connect("mongodb://localhost/famcom", { useNewUrlParser: true, useUnifiedTopology: true },function() {

    });
    mongoose.connection.on('error', function (err) {
        console.error('MongoDB connection error: ' + err);
        process.exit(-1);
    });
})