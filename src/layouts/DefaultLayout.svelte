<script>
  import { onMount } from 'svelte';
  import { Route } from "svelte-router-spa";
  import meetups from '../store/meetups';
  import AppHeader from '../components/ui/AppHeader.svelte';
  import AppModal from '../components/ui/AppModal.svelte';
  import AddEditMeetupForm from '../components/meetup/AddEditMeetupForm.svelte';
  import { fade } from 'svelte/transition';
  
  export let currentRoute;
  export let params;
  
  onMount(() => {
    meetups.fetchMeetups();
  });
  
  let modalIsVisible = false;
  
  function closeModal() {
    modalIsVisible = false;
  }
  
  function openModal() {
    modalIsVisible = true;
  }
  
</script>

<AppHeader
  on:open-modal={openModal}
/>
{#if modalIsVisible}
  <div
    transition:fade="{{ duration: 350 }}"
  >
    <AppModal
      on:close-modal={closeModal}
    >
      <AddEditMeetupForm
        on:submit={closeModal}
        on:cancel={closeModal}
      />
    </AppModal>
  </div>
{/if}
<main
  class="my-4"
>
  <Route {currentRoute} {params} />
</main>
