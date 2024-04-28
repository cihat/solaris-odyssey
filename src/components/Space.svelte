<script>
  import { soundManager } from '../lib/sound'
  import Game from '../entities/Game'
  import { onDestroy, onMount } from 'svelte'
  import solarisSoundTrack from '../assets/sound/Solaris-Soundtrack.ogg'
  import { dimensions, countOfEnemies } from '../store'

  let canvas
  let game
  let textarea

  onMount(() => {
    game = new Game(canvas.getContext('2d'))
    game.addEventListener('stateChange', () => (game = game))

    textarea.focus()
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
    const count = Number(e.target.value)
    game.setNumberOfEnemies(count)
    $countOfEnemies = count
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
      <input id="widthRange" type="range" max="900" min="600" bind:value={$dimensions.width} step="1" />
    </div>
    <div>
      <label for="heightRange">Canvas Height: </label>
      <input id="heightRange" type="range" max="1000" min="600" bind:value={$dimensions.height} step="1" />
    </div>
    <div>
      <label for="speedRange">Speed Range: </label>
      <input id="speedRange" type="range" max="20" min="0.1" value={game?.speed || 0} on:change={handleSpeedRange} step="0.1" />
    </div>
    <div>
      <label for="speedRange">Enemies Range: </label>
      <input id="speedRange" type="range" max="100" min="10" value={game?.numberOfEnemies || 10} on:change={handleEnemiesRange} step="1" />
    </div>
    <button on:click={handleSound}>{game?.isSoundPlaying ? 'Sound 🔊' : 'Sound'}</button>
    <textarea value={game?.input || ''} bind:this={textarea} />
  </div>

  <canvas class="space" bind:this={canvas} width={$dimensions.width} height={$dimensions.height} />
</div>

<style>
  :global(html, body) {
    background-image: url('../assets/images/space.avif');
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
  .space {
    background-image: url('../assets/images/space.avif');
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

    @media (max-width: 768px) {
      display: none;
    }
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
