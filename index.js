let express = require('express')
let app = express();
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = "mongodb+srv://root:1996@nodetest.dsog3.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "test";
var port = process.env.PORT || 8080;
// Welcome message
app.get('/', (req, res) => res.send('Welcome to Express'));
// Launch app to the specified port
app.listen(port, ()=> {MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("test");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});
//Import routes
let apiRoutes = require("./routes")
//Use API routes in the App
app.use('/api', apiRoutes)
app.use('/data',apiRoutes);
//import body parser
let bodyParser = require('body-parser');
app.use(bodyParser.json());
//configure bodyparser to handle the post requests
app.use(bodyParser.urlencoded({
    extended: true
}));

