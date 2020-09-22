<script>
  export let input;
  export let value;
  export let valid = true;
  export let validityMessage = '';
  export let touched = false;
</script>

<div class="mb-4">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="{input.id}">
    {input.label}
  </label>
  <textarea
    class="shadow-sm appearance-none border rounded w-full
    py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
    {!valid && touched ? 'border-red-700' : ''}"
    id="{input.id}"
    rows="5"
    cols="33"
    placeholder="{input.label}"
    bind:value
    on:input
    on:blur={() => touched = true}
  />
  {#if validityMessage && !valid && touched}
    <p class="text-sm text-red-700">
      {validityMessage}
    </p>
  {/if}
</div>
