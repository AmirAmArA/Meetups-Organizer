import React, { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedContent, setLoadedContent] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://meetups-organizer-47570-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          }
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedContent(meetups);
      });
  }, []);
  

  if (isLoading) {
    return (
      <section>
        <p>Loading . . .</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={loadedContent} />
    </section>
  );
}

export default AllMeetupsPage;
