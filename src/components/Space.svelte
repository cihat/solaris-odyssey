<script>
  import { soundManager } from '../lib/sound'
  import Game from '../models/Game'
  import { onDestroy, onMount } from 'svelte'
  import solarisSoundTrack from '../assets/sound/Solaris-Soundtrack.ogg'

  export let width = 600
  export let height = 900

  let canvas
  let game = null
  let isPlaying = false

  onMount(() => {
    game = new Game(canvas.getContext('2d'))
    game.animate()
    game.addEventListener('stateChange', () => (game = game))
  })

  $: console.log('game', game)

  const handleSound = () => {
    if (isPlaying) {
      soundManager({ sound: solarisSoundTrack, status: 'stop' })
    } else {
      soundManager({ sound: solarisSoundTrack, volume: 0.3, status: 'play' })
    }
    isPlaying = !isPlaying
  }

  onDestroy(() => game && game.removeEventListener('keypress', game.fire))
</script>

<div class="controller">
  <p>Exist Enemy Ship: {game?.enemyWordShips.length}</p>
  <input type="range" max="2" min="0.1" value={game?.speed} step="0.1" />
  <button on:click={handleSound}>{isPlaying ? 'Sound 🔊' : 'Sound'}</button>
  <textarea value={game?.input || ''} />
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

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }

  textarea {
    text-align: center;
    max-width: 600px;
    width: 100%;
  }
</style>
