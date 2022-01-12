import { Button, Paper } from '@mui/material';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';

export function NewMeetupPage() {
    const router = useRouter();
    return (
        <Paper variant="outlined">
            <NewMeetupForm onAddMeetup={addMeetUpHandler}></NewMeetupForm>
            <Button variant="contained">Im just a testing button doing nothing</Button>
            <Button color="secondary">Im just a  secondary testing button doing nothing</Button>
        </Paper>
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

// export const getServerSideProps = (ctx) => {
//     return {
//         props: {}
//     }
// }

export default NewMeetupPage;