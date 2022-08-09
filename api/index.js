/*
  <=====  Initialisation for the node api ===========>
*/
const express = require("express");
var cors = require("cors"); //https://www.npmjs.com/package/cors
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();

/*
  <======  Constants Start initialisation [UPDATE THESE] ==========>
*/

const APIport = 8448;

const MONGO_URI =
  "mongodb+srv://reader:dbReader$2022@cluster0.leenlb7.mongodb.net/?retryWrites=true&w=majority";

const MONGO_DB = "Wand_Data";

const MONGO_CONTRACT_DATA = "mainContractData";
const MONGO_INVESTMENT_LIST = "Investments";

const client = new MongoClient(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// const requestingURL = "http://localhost:3000"; // This is URL of the front end to allow CORS requests.

app.use(cors());

/*
  <======  CORS Allow ==========>
  [REF] https://enable-cors.org/server.html
*/
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", requestingURL);
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.listen(APIport, () => {
  console.log(`API server port: ${APIport}`);
});

app.get("/investment-list-data", function (req, res) {
    console.log("investment list API called.");
    client.connect(async (err) => {
      const db = client.db(MONGO_DB);
        res.send(await db.collection(MONGO_INVESTMENT_LIST).find({}).toArray());
      client.close();
    });
});
