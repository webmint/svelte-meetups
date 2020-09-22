<script>
  import MeetupItem from './MeetupItem.svelte'
  import { scale } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import axios from 'axios';
  export let meetups;
</script>

<section class="grid grid-cols-3 gap-4">
  {#each meetups as meetup, i (meetup.id)}
    <div
      transition:scale
      animate:flip
    >
      <MeetupItem
        {meetup}
        on:toggle-favorite
      />
    </div>
  {:else}
    <p>No meetups found</p>
  {/each}
</section>
