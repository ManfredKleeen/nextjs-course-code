import Head from 'next/head';
import { MeetupList } from '../components/meetups/MeetupList';
import { MongoClient } from "mongodb";

export default function HomePage(props) {
	console.log('props: ', props);
	return (
		<>
		<Head>
			<title>Learning NextJs</title>
			<meta name="description" content="Just a sample page to learn NextJs"/>

		</Head>
		<MeetupList meetups={props.meetups}></MeetupList>
		</>
	)
}

/*
	LEARNING NOTES:
	serverSideProps: guaranteed to be generated on every request,
	 but should be considered that this will wait for the generation on every request,
	 this also is required if there is an authentication or access to the request required.
	getStaticProps: is faster since will generate a page that will be cached
*/

export async function getStaticProps() {
	const client = await MongoClient.connect('mongodb+srv://manfredKleeen:testnext@cluster0.eirs1.mongodb.net/meetups?retryWrites=true&w=majority');
	const db = client.db();
	const meetupsCollection = db.collection('meetups');
	const meetups = await meetupsCollection.find().toArray();
	console.log('meetups: ', meetups);

	client.close();
	return {
		props: {
			meetups: meetups.map(({ title, address, image, _id }) => ({
				address, image, title, id: _id.toString()
			}))
		},
		revalidate: 1
	}
}

// const MOCK_MEETUPS = [{
// 	address: 'C.R. San José, Coronado',
// 	id: '1',
// 	image: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/TemploParroquialdeSanIsidroCoronado.JPG',
// 	title: 'First one',
// }, {
// 	address: 'C.R. Heredia, Sarapiquí, La Virgen',
// 	id: '2',
// 	image: 'https://sarapiquisostenible.com/wp-content/uploads/2018/09/hacienda-pozo-azul.jpg',
// 	title: 'Welcome to the jungle!',
// }]


// // will run on the server after deployment
// export async function getServerSideProps(context) {
// 	const { req, res } = context;
// 	return {
// 		props: {
// 			meetups: MOCK_MEETUPS,
// 		},
// 	}
// }

