<script>
  export let href = '';
</script>

{#if href}
<a
  on:click
  {...$$restProps}
  href="{href}"
  class="p-2 rounded text-sm border inline-block border-gray-600 hover:no-underline"
>
  <slot />
</a>
  {:else}
<button
  on:click
  {...$$restProps}
  class="{$$props.class||''} p-2 rounded text-sm border-gray-600"
>
  <slot />
</button>
  {/if}

<style>
    .active {
        @apply bg-pink-600 text-white;
    }
</style>
