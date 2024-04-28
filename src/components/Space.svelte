<script>
  import { soundManager } from '../lib/sound'
  import Game from '../entities/Game'
  import { onDestroy, onMount } from 'svelte'
  import solarisSoundTrack from '../assets/sound/Solaris-Soundtrack.ogg'

  export let width = 600
  export let height = 900

  let canvas
  let game

  onMount(() => {
    game = new Game(canvas.getContext('2d'))
    game.addEventListener('stateChange', () => (game = game))
  })

  $: if (game?.enemyWordShips.length === 0) {
    game.levelUp()
  }

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
  const handleEnemiesRange = (e) => {
    game.setNumberOfEnemies(Number(e.target.value))
  }

  onDestroy(() => game && game.removeEventListener('keyup', game.fire))
</script>

<div class="container">
  <div class="controller">
    <h1>Score: {game?.score}</h1>
    <h2>Level: {game?.level}</h2>
    <p>Exist Enemy Ship: {game?.enemyWordShips.length}</p>
    <div>
      <label for="widthRange">Canvas Width: </label>
      <input id="widthRange" type="range" max="900" min="600" bind:value={width} step="1" />
    </div>
    <div>
      <label for="heightRange">Canvas Height: </label>
      <input id="heightRange" type="range" max="1000" min="600" bind:value={height} step="1" />
    </div>
    <div>
      <label for="speedRange">Speed Range: </label>
      <input id="speedRange" type="range" max="2" min="0.1" value={game?.speed || 0} on:change={handleSpeedRange} step="0.1" />
    </div>
    <div>
      <label for="speedRange">Enemies Range: </label>
      <input id="speedRange" type="range" max="100" min="10" value={game?.numberOfEnemies || 10} on:change={handleEnemiesRange} step="1" />
    </div>
    <button on:click={handleSound}>{game?.isSoundPlaying ? 'Sound 🔊' : 'Sound'}</button>
    <textarea value={game?.input || ''} />
  </div>

  <canvas class="space" bind:this={canvas} {width} {height} />
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #f0f0f0;
  }
  .space {
    position: relative;
    display: flex;
    border: 1px solid black;
    border-radius: 10px;
    background-image: url('../assets/new-space-bg.avif');
  }

  .controller {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    width: 400px;
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
