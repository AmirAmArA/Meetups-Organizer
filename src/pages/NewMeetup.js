import React from "react";
import {useHistory} from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
function NewMeetupPage(props) {
    const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch('https://meetups-organizer-47570-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
        history.replace('/')
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
