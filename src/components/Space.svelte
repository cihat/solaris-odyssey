<script>
  import { soundManager } from '../lib/sound'
  import Game from '../models/Game'
  import { onDestroy, onMount } from 'svelte'
  import solarisSoundTrack from '../assets/sound/Solaris-Soundtrack.ogg'

  export let width = 600
  export let height = 900

  let canvas
  let game

  onMount(() => {
    game = new Game(canvas.getContext('2d'))
    game.animate()

    game.addEventListener('stateChange', () => (game = game))
  })

  $: console.log('game', game)

  const handleSound = () => {
    if (game.isSoundPlaying) {
      soundManager({ sound: solarisSoundTrack, status: 'stop' })
    } else {
      soundManager({ sound: solarisSoundTrack, volume: 0.3, status: 'play' })
    }

    game.isSoundPlaying = !game.isSoundPlaying
  }

  const handleSpeedRange = (e) => {
    game.speed = Number(e.target.value)
  }

  onDestroy(() => game && game.removeEventListener('keydown', game.fire))
</script>

<div class="controller">
  <p>Exist Enemy Ship: {game?.enemyWordShips.length}</p>
  <label for="speedRange">Speed Range: </label>
  <input id="speedRange" type="range" max="2" min="0.1" value={game?.speed || 0} on:change={handleSpeedRange} step="0.1" />
  <button on:click={handleSound}>{game?.isSoundPlaying ? 'Sound 🔊' : 'Sound'}</button>
  <textarea value={game?.input || ''} />
</div>
<canvas class="space" bind:this={canvas} {width} {height} />

<style>
  .space {
    position: relative;
    display: flex;
    border: 1px solid black;
    border-radius: 10px;
    background-image: url('../assets/new-space-bg.avif');
  }

  .controller {
    display: flex;
    width: 600px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    border: 1px solid black;
    border-radius: 10px;
    background-color: white;
  }

  .controller > * {
    margin-bottom: 12px;
  }

  textarea {
    text-align: center;
    max-width: 600px;
    width: 100%;
    margin-bottom: 6px;
  }
</style>
