import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';

export function NewMeetupPage() {
    const router = useRouter();
    return (
        <NewMeetupForm onAddMeetup={addMeetUpHandler}></NewMeetupForm>
    )
    async function addMeetUpHandler(enteredMeetupData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await response.json();
        router.push('/');
    }

}

export default NewMeetupPage;