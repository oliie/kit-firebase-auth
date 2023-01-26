<script lang="ts">
  import { page } from '$app/stores';
  import { auth } from '$lib/firebase/client';
  import { user } from '$stores/auth';
  import { signOut } from 'firebase/auth';

  const handleSignOut = () => {
    signOut(auth);
  };
</script>

<div class="container-fluid">
  <nav>
    <ul>
      <li>Kit 🔥 Firebase Auth</li>
    </ul>
    <ul>
      <li>
        <a class:active={$page.route.id === '/'} href="/" class="secondary outline">Login</a>
      </li>
      <li>
        <a class:active={$page.route.id === '/secret'} href="/secret" class="secondary outline">
          Secret
        </a>
      </li>
      {#if $user}
        <li>
          <a on:click={handleSignOut} data-role="button" href="/" class="secondary outline">
            Signout
          </a>
        </li>
      {/if}
    </ul>
  </nav>
</div>

<style>
  div {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .active {
    color: white;
  }
</style>
