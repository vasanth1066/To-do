import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "PUT") {
    const { id, ...data } = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://vasanthmeetup:lgmLbocnq8qNPVwn@cluster0.7q5bfth.mongodb.net/todolist?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db();
    const todoCollection = db.collection("todolist");
    const result = await todoCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: data }
    );
    console.log(result);
    client.close();
    res.status(201).json(result);
  }
}

export default handler;
