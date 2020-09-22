<script>
  import AppButton from './../ui/AppButton.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  
  let selectedButton = 0;
</script>

<section class="mb-2">
  <AppButton
    class="mr-2 {selectedButton === 0 ? 'active' : ''}"
    on:click={() => {
      selectedButton = 0;
      dispatch('filter', false)
    }}
  >
    Display All
  </AppButton>
  <AppButton
    class="{selectedButton === 1 ? 'active' : ''}"
    on:click={() => {
      selectedButton = 1;
      dispatch('filter', true)
    }}
  >
    Display Favorites
  </AppButton>
</section>
