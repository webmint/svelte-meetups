import { writable } from "svelte/store";
import axios from 'axios';

let meetups = writable([]);

const customStore = {
  subscribe: meetups.subscribe,
  addMeetup: (meetup) => {
    axios.post('http://localhost:3000/meetups', meetup)
      .then((response) => {
        customStore.fetchMeetups();
      })
      .catch((e) => console.error(e.message))
  },
  toggleFavorite: (id) => {
    axios.put(`http://localhost:3000/meetups/toggle-fav/${id}`)
      .then(({ data }) => {
        meetups.update((items) => {
          const meetupIndex = items.findIndex(m => m.id === id);
          const updatedMeetups = [...items];
          updatedMeetups[meetupIndex] = data;
          return updatedMeetups;
        })
      })
      .catch((e) => console.error(e.message))
  },
  fetchMeetups: () => {
    axios.get('http://localhost:3000/meetups')
      .then(({ data }) => {
        meetups.set(data);
      })
      .catch((e) => console.error(e.message))
  }
}

export default customStore;
