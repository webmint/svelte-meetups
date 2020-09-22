<script>
  import MeetupItem from './../components/meetup/MeetupItem.svelte';
  import axios from "axios";
  import {onMount} from "svelte";
  import {routeIsActive} from "svelte-router-spa";
  
  export let currentRoute;
  export let params = {};
  
  let meetup = {};
  console.log(routeIsActive('/meetup/:id'));

  async function fetchMeetup() {
     await axios.get(`http://localhost:3000/meetups/${currentRoute.namedParams.id}`)
      .then(({ data }) => {
        meetup = data;
      })
      .catch((e) => console.error(e.message))
  }
  onMount(() => {
    fetchMeetup();
  });
</script>


<MeetupItem
  {meetup}
/>
