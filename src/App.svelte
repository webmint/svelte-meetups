<script>
  import { Router } from 'svelte-router-spa'
  import { routes } from './routes'
  
  console.log(routes);

</script>

<Router {routes} />
