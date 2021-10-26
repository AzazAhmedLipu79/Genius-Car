const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const objectId = require("mongodb").objectId;
const cors = require("cors");
const port = 5000;
// middleware

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://admin:admin@cluster0.ocwvl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const database = client.db("CarMechanics");
    const servicesCollection = database.collection("servicesCollection");

    // Get Api
    app.get("/services", async (req, res) => {
      const cursor = servicesCollection.find({});
      const services = await cursor.toArray();
      res.send(services);
    });
    // Get Single Sevice
    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: objectId(id) };
      const service = await servicesCollection.findOne(query);

      res.json(service);
    });

    // POST API
    app.post("/services", async (req, res) => {
      const service = req.body;
      console.log("hit the post api", service);

      const result = await servicesCollection.insertOne(service);
      console.log(result);
      res.json(result);
    });
  } finally {
    //   await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Cars Genuius Server");
});

app.listen(port, () => {
  console.log("Lipu👨‍⚕️❌!!! Running on port ", port);
});
