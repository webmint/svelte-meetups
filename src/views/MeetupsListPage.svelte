<script>
  import { onMount } from 'svelte';
  import meetups from '../store/meetups';
  import MeetupList from '../components/meetup/MeetupList.svelte';
  import MeetupFilter from '../components/meetup/MeetupFilter.svelte';

  export let currentRoute;
  export let params;

  onMount(() => {
    meetups.fetchMeetups();
  });
  
  
  let showFavorites = false;
  
  function filterMeetups({ detail }) {
    showFavorites = detail;
    
  }
  
  $: filteredMeetups = showFavorites ? $meetups.filter(m => m.isFavorite ) : $meetups;

</script>

<MeetupFilter
  on:filter={filterMeetups}
/>
<MeetupList
  meetups="{filteredMeetups}"
/>
