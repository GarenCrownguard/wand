const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://reader:dbReader$2022@cluster0.leenlb7.mongodb.net/?retryWrites=true&w=majority";
// const uri = "mongodb+srv://wandFE:WandFE2022@wand-investments-cluster.mzkz2ly.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client.connect(async (err) => {
  // const db = client.db("wand-database");
  const db = client.db("Wand_Data");

  // perform actions on the collection object

  //   https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/read-operations/cursor/
  // https://www.w3schools.com/nodejs/nodejs_mongodb_find.asp
  // Getting a single variable from whole dataset => https://stackoverflow.com/a/59834363

  /* Insert a document in the collection */

  // await db.collection("Investments").insert({
  //   date: "12/08/2022",
  //   chain: "ONE",
  //   expectedAPY: 150,
  //   investedAmount: 49000,
  //   protocolName: "Hundred Finance",
  //   protocolURL: "https://hundred.finance/",
  //   transactionLink: "https://snowtrace.io/transaction/0x2984795872635885",
  // });

  console.log(await db.collection("Investments").find({}).toArray());
  // console.log(await db.collection("mainContractData").find({}).toArray());
  // console.log(await db.collection("investment-list").distinct('expected_apy'));

  // console.log(await db.collection("front-end-stats").find({}).toArray());

  client.close();

  // await client
  //   .db("wand-database")
  //   .collection("investment-list")
  //   .insertOne({
  //     item: "canvas",
  //     qty: 100,
  //     tags: ["cotton"],
  //     size: { h: 28, w: 35.5, uom: "cm" },
  //   });
});

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://wandFE:WandFE2022@wand-investments-cluster.mzkz2ly.mongodb.net/?retryWrites=true&w=majority";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("wand-database");
//   dbo.collection("investment-list").find({}, function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });
