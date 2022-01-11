import classes from './meetup-detail.module.css'

export function MeetupDetails(props) {
	return (
		<section className={classes.detail}>
			<img src={props.img} />
			<h1>{props.title}</h1>
			<address>{props.address}</address>
			<p>{props.description}</p>
		</section>
	)
}


export default MeetupDetails;