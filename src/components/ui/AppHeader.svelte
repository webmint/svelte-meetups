<script>
  import { createEventDispatcher } from 'svelte';
  import { routeIsActive, navigateTo } from 'svelte-router-spa';
  import AppButton from './../ui/AppButton.svelte';

  const dispatch = createEventDispatcher();
  
  function openAddMeetupModal() {
    dispatch('open-modal');
  }
</script>

<header class="app-header">
  <div></div>
  <div
    on:click={navigateTo('/')}
  >
    Meetupss
  </div>
  {#if routeIsActive('/')}
    <AppButton
      on:click="{openAddMeetupModal}"
    >
      Add Meetup
    </AppButton>
  {/if}
</header>

<style>
  .app-header {
    @apply flex items-center justify-between p-4 text-lg	font-semibold italic text-white bg-pink-600;
  }
</style>
