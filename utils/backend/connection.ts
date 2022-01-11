import { Db, MongoClient } from "mongodb";

// TODO: this is just temporary for learning, the connection will be never close like this
export async function getDbConnection (): Promise<Db> {
	const client = await MongoClient.connect('mongodb+srv://manfredKleeen:testnext@cluster0.eirs1.mongodb.net/meetups?retryWrites=true&w=majority');
	const db = client.db();
  return db;
}