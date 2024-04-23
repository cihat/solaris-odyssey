<script>
  import Game from '../models/Game'
  import { onDestroy, onMount } from 'svelte'

  export let width = 600
  export let height = 900

  let canvas
  let game = null

  onMount(() => {
    game = new Game(canvas.getContext('2d'))
    game.animate()
    game.addEventListener('stateChange', () => (game = game))
  })

  $: console.log('game', game)

  onDestroy(() => game && game.removeEventListener('keypress', game.fire))
</script>

<div class="controller">
  <p>Exist Enemy Ship: {game?.enemyWordShips.length}</p>
  <textarea value={game?.input || ''} />
  <input type="range" max="2" min="0.1" value={game?.speed} step="0.1" />
</div>
<canvas class="space" bind:this={canvas} {width} {height} />

<style>
  .space {
    position: relative;
    display: block;
    margin: auto;
    border: 1px solid black;
    border-radius: 10px;
    background-image: url('../assets/new-space-bg.avif');
  }

  .controller {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  textarea {
    text-align: center;
    max-width: 600px;
    width: 100%;
  }
</style>
