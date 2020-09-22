import AppTextInput from './../components/ui/AppTextInput.svelte';
import AppTextArea from './../components/ui/AppTextArea.svelte';

export default [
  {
    component: AppTextInput,
    label: 'Title',
    bindTo: 'title',
    id: Math.random().toString(),
  },
  {
    component: AppTextInput,
    label: 'Subtitle',
    bindTo: 'subtitle',
    id: Math.random().toString(),
  },
  {
    component: AppTextArea,
    label: 'Description',
    bindTo: 'description',
    id: Math.random().toString(),
  },
  {
    component: AppTextInput,
    label: 'Address',
    bindTo: 'address',
    id: Math.random().toString(),
  },
  {
    component: AppTextInput,
    label: 'Email',
    bindTo: 'contactEmail',
    id: Math.random().toString(),
  },
]
