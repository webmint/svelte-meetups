<script>
  import meetups from './../../store/meetups';
  import AppButton from './../ui/AppButton.svelte';
  import Meetup from './../../classes/Meetup.js';
  import addMeetupFormConfig from './../../configs/addMeetupFormConfig.js';
  import { isEmpty, isEmail } from './../../helpers/validations.js'

  import { createEventDispatcher } from 'svelte';
  
  export let isCreateForm = true;
  
  const dispatch = createEventDispatcher();
  
  let form = new Meetup;
  
  function saveMeetup() {
    if (isCreateForm) {
      meetups.addMeetup(form);
    }
  }
  
  function cancelChange() {
    dispatch('cancel');
  }
  
  let validator = {};

  Object.keys(form).forEach((key) => {
    if (addMeetupFormConfig.some((item) => item.bindTo === key)) {
      validator[key] = {
        valid: !isCreateForm,
        validationMessage: '',
        touched: false,
      }
    }
  })
  
  function validate(item) {
    if (item.label === 'Email') {
      return !isEmpty(form[item.bindTo]) && isEmail(form[item.bindTo]);
    }
    return !isEmpty(form[item.bindTo])
  }

  function setValidateMessage(item) {
    if (item.label === 'Email' && !isEmail(form[item.bindTo]) && form[item.bindTo].length > 0) {
      return 'Must be an Email';
    }
    if (isEmpty(form[item.bindTo])) {
      return 'Must be not empty';
    }
    return '';
  }
  
  $: isValidForm = Object.keys(validator).every(key => validator[key].valid === true);
</script>

<form
  on:submit|preventDefault
>
  {#each addMeetupFormConfig as item, i}
    <svelte:component
      this={item.component}
      input="{item}"
      valid="{validator[item.bindTo].valid}"
      validityMessage="{validator[item.bindTo].validationMessage}"
      touched="{validator[item.bindTo].touched}"
      value="{form[item.bindTo]}"
      on:input={(event) => {
        form[item.bindTo] = event.target.value
        validator[item.bindTo].valid = validate(item);
        validator[item.bindTo].validationMessage = setValidateMessage(item);
      }}
      on:blur={(event) => {
        validator[item.bindTo].touched = true;
        validator[item.bindTo].valid = validate(item);
        validator[item.bindTo].validationMessage = setValidateMessage(item);
      }}
    />
  {/each}
  <div class="flex items-center">
    <AppButton
      class="mr-4"
      on:click={cancelChange}
    >
      Cancel
    </AppButton>
    <AppButton
      disabled="{!isValidForm}"
      type="submit"
      class="bg-pink-600 text-white"
      on:click={saveMeetup}
    >
      Save
    </AppButton>
  </div>
</form>
