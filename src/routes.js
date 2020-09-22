import MeetupsListPage from './views/MeetupsListPage.svelte';
import MeetupsItemPage from './views/MeetupsItemPage.svelte';
import DefaultLayout from './layouts/DefaultLayout.svelte';

const routes = [
  {
    name: '/',
    component: MeetupsListPage,
    layout: DefaultLayout,
  },
  {
    name: 'meetup/:id',
    component: MeetupsItemPage,
    layout: DefaultLayout,
  },
];

export { routes };
