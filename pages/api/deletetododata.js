import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "DELETE") {
    const id = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://vasanthmeetup:lgmLbocnq8qNPVwn@cluster0.7q5bfth.mongodb.net/todolist?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db();
    const todoCollection = db.collection("todolist");
    const result = await todoCollection.deleteOne({ _id: new ObjectId(id) });
    console.log(result);
    client.close();
    res.status(201).json(result);
  }
}

export default handler;
