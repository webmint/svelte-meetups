<script>
  import { navigateTo } from 'svelte-router-spa';
  import meetups from './../../store/meetups';
  import AppButton from './../ui/AppButton.svelte';
  import AppBadge from './../ui/AppBadge.svelte';
  
  export let meetup;
  
  function toggleFavorite() {
    meetups.toggleFavorite(meetup.id)
  }
</script>

<article class="p-4 rounded shadow border">
  <header>
    <h1 class="text-2xl">
      {meetup.title}
      {#if meetup.isFavorite}
        <AppBadge>
          Favorite
        </AppBadge>
      {/if}
    </h1>
    <h2 class="text-xl text-gray-600">{meetup.subtitle}</h2>
    <h3 class="text">{meetup.address}</h3>
  </header>
  <div class="my-4">
    <img src="{meetup.imageUrl}" alt="{meetup.title}">
  </div>
  <div class="my-4">
    <p>{meetup.description}</p>
  </div>
  <footer>
    <AppButton
      href="mailto:{meetup.contactEmail}"
    >
      Contact
    </AppButton>
    <AppButton
      on:click={navigateTo(`meetup/${meetup.id}`)}
    >
      Show details
    </AppButton>
    <AppButton
      on:click={toggleFavorite}
    >
      {meetup.isFavorite ? 'Unfavorite' : 'Favorite'}
    </AppButton>
  </footer>
</article>
