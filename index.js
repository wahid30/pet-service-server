const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 5000;

// middle ware
app.use(cors());
app.use(express.json());

userName: vaitasraizel;
pass: CVBXbWxsmjoMX8nP;

const uri =
  "mongodb+srv://vaitasraizel:CVBXbWxsmjoMX8nP@cluster0.cpadwda.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const animalAdoptions = client
      .db("animalAdoptions")
      .collection("adaptions");

    app.get("/adaptAnimals", async (req, res) => {
      const cursor = animalAdoptions.find({});
      const animals = await cursor.toArray();
      res.send(animals);
    });

    app.post("/adaptAnimals", async (req, res) => {
      console.log("post api called");
      const animals = req.body;
      const result = await animalAdoptions.insertOne(animals);
      animals.id = result.insertedId;
      res.send(animals);
    });
  } finally {
  }
}
run().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app on port ${port}`);
});
