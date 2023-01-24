<script lang="ts">
  import '@picocss/pico/css/pico.min.css';
  import Header from '$lib/components/Header.svelte';
</script>

<Header />

<div class="container">
  <slot />
</div>

<style>
  div {
    margin-top: 3rem;
  }
</style>
