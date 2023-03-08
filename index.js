const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 5000;

// middle ware
app.use(cors());
app.use(express.json());

// const animals = [
//   {
//     image: "https://ibb.co/1vJ6TXd",
//     name: "Cookie",
//     type: "Cat",
//   },
//   {
//     image: "https://ibb.co/9TgVmgX",
//     name: "Tucker",
//     type: "Dog",
//   },
//   {
//     image: "https://ibb.co/H7wSSJ2",
//     name: "Mr.Chukles",
//     type: "Rabbit",
//   },
//   {
//     image: "https://ibb.co/gJVzCgQ",
//     name: "Greenie",
//     type: "Bird",
//   },
//   {
//     image: "https://ibb.co/2PRbJz4",
//     name: "Mini",
//     type: "Cat",
//   },
//   {
//     image: "https://ibb.co/x89nhLD",
//     name: "Buddy",
//     type: "Dog",
//   },
//   {
//     image: "https://ibb.co/2ktVk1g",
//     name: "Kookoo",
//     type: "Bird",
//   },
// ];

app.get("/adaptAnimals", (req, res) => {
  res.send(animals);
});

// userName: vaitasraizel
// pass: CVBXbWxsmjoMX8nP

// const uri =
//   "mongodb+srv://vaitasraizel:CVBXbWxsmjoMX8nP@cluster0.cpadwda.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });

// async function run() {
//   try {
//     const animalAdoptions = client
//       .db("animalAdoptions")
//       .collection("adaptions");

//     app.get("/adaptAnimals", async (req, res) => {
//       const cursor = animalAdoptions.find({});
//       const animals = await cursor.toArray();
//       res.send(animals);
//     });

//     app.post("/adaptAnimals", async (req, res) => {
//       console.log("post api called");
//       const animals = req.body;
//       const result = await animalAdoptions.insertOne(animals);
//       animals.id = result.insertedId;
//       res.send(animals);
//     });
//   } finally {
//   }
// }
// run().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app on port ${port}`);
});
