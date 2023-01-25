<script lang="ts">
  import { user } from '$stores/auth';
</script>

<hgroup>
  <h1 class="center">You're in!</h1>
  {#if $user?.email}
    <h2 class="center">Logged in as {$user.email}</h2>
  {:else}
    <h2 class="center">Loading user...</h2>
  {/if}
</hgroup>

<div class="center">
  <img
    src="https://media0.giphy.com/media/3otPoS81loriI9sO8o/giphy.gif?cid=ecf05e47hc5agt77e1vzxptyf3evr9of6y6cmgima5hkt2ut&rid=giphy.gif&ct=g"
    alt="Congratulations"
  />
</div>

<style>
  .center {
    text-align: center;
  }
</style>
