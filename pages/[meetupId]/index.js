import { MongoClient, ObjectId } from 'mongodb';

import { MeetupDetails } from '../../components/meetups/meetup-detail';

export function MeetUpDetails({ meetup }) {
	
	return (
		<MeetupDetails
			img={meetup.image}
			title={meetup.title}
			address={meetup.address}
			description={meetup.description}
		/>
	)
}

export async function getStaticPaths() {
	const client = await MongoClient.connect('mongodb+srv://manfredKleeen:testnext@cluster0.eirs1.mongodb.net/meetups?retryWrites=true&w=majority');
	const db = client.db();
	const meetupsCollection = db.collection('meetups');
	const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
	client.close();

	return {
		// this will generate the page on demand and after caching
		fallback: 'blocking',
		paths: meetups.map(({ _id }) => ({ params: { meetupId: _id.toString() } }))
	}
}

// the context argument allows us to get the url params
export async function getStaticProps(context) {
	const client = await MongoClient.connect('mongodb+srv://manfredKleeen:testnext@cluster0.eirs1.mongodb.net/meetups?retryWrites=true&w=majority');
	const db = client.db();
	const meetupsCollection = (await db).collection('meetups');
	const { _id, ...restMeetup } = await meetupsCollection.findOne({ _id: ObjectId(context?.params?.meetupId) });

	return {
		props: {
			meetup: {
				...restMeetup,
				id: _id.toString(),
			}
		}
	}
}

export default MeetUpDetails;