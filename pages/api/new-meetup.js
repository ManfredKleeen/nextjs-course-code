// /api/new-meetup
// Contains server side code

import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if (req.method === 'POST') {
			const data = req.body;

			// No problem because it will be executed on the server side
			const client = await MongoClient.connect('mongodb+srv://manfredKleeen:testnext@cluster0.eirs1.mongodb.net/meetups?retryWrites=true&w=majority');
			const db = client.db();

			const meetupsCollection = db.collection('meetups');
			const result = await meetupsCollection.insertOne(data);
			client.close();
			res.status(201).json({ message: 'Meetup inserted successfully' });
		}
}