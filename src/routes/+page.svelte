<script lang="ts">
  import { goto } from '$app/navigation';
  import { signIn } from '$stores/auth';

  let elForm: HTMLFormElement;
  let email = '';
  let password = '';
  let loading = false;
  let hasError = false;

  $: if (password || email) hasError = false;

  const handleLogin = async () => {
    try {
      loading = true;
      await signIn(email, password);
      goto('/secret');
    } catch (error) {
      hasError = true;
      elForm.reset();
      loading = false;
    }
  };
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Firebase Auth" />
</svelte:head>

<h1>Login</h1>

<article>
  <form bind:this={elForm} on:submit|preventDefault={handleLogin}>
    <div class="message" class:error={hasError}>
      {!hasError ? 'Enter your credentials' : 'User not found! Please try again'}
    </div>

    <div class="grid">
      <div>
        <input placeholder="E-Mail" type="email" bind:value={email} required />
      </div>
      <div>
        <input placeholder="Password" type="password" bind:value={password} required />
      </div>
    </div>

    {#if loading}
      <button aria-busy="true" class="outline" disabled>Please wait...</button>
    {:else}
      <button class="outline">Login</button>
    {/if}
  </form>
</article>

<style>
  .message {
    text-align: center;
    min-height: 28px;
    margin-bottom: 1rem;
  }

  .error {
    color: #c44d56;
  }
</style>
