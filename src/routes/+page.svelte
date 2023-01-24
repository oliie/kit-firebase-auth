<script lang="ts">
  import { enhance } from '$app/forms';

  let email = '';
  let password = '';
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Firebase Auth" />
</svelte:head>

<h1>Login</h1>

<article>
  <form method="POST" use:enhance>
    <div class="grid">
      <div>
        <input placeholder="E-Mail" type="text" bind:value={email} />
      </div>
      <div>
        <input placeholder="Password" type="text" bind:value={password} />
      </div>
    </div>
    <button class="outlined">Login</button>
  </form>
</article>
