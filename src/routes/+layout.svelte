<script>
  import Header from '$lib/components/Header.svelte';
  import '@picocss/pico/css/pico.min.css';
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
