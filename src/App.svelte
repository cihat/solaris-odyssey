<script>
  console.log('Hello, Svelte!')
</script>

<main class="container">
  <canvas class="space" width="600" height="900" />
</main>

<style>
  .container {
    margin: auto;
  }
  .space {
    position: relative;
    display: grid;
    justify-items: center;
    align-items: center;
    margin: auto;
    border: 1px solid black;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
</style>
