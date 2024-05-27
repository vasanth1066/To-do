// pages/api/todos.js

import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://vasanthmeetup:lgmLbocnq8qNPVwn@cluster0.7q5bfth.mongodb.net/todolist?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const todoCollection = db.collection("todolist");

  const tododata = await todoCollection.find().toArray();
  client.close();

  res.status(200).json(tododata);
}
