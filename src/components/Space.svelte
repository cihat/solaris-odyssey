<script>
  import WordShip from '../models/WordShip'
  import SpaceShip from '../models/SpaceShip'
  import { onDestroy, onMount } from 'svelte'

  export let width = 600
  export let height = 900

  let canvas
  let context

  let enemyWordShips = []
  let spaceShip
  let speed
  let input = ''

  const startGame = () => {
    function animate() {
      context.clearRect(0, 0, width, height)

      enemyWordShips.forEach((wordShip) => {
        wordShip.draw(context)
        wordShip.update(context)
      })

      spaceShip.draw(context)

      requestAnimationFrame(animate)
    }

    animate()
  }

  onMount(() => {
    context = canvas.getContext('2d')
    enemyWordShips = new WordShip(speed).generate(10)
    spaceShip = new SpaceShip(context, enemyWordShips)

    startGame()
  })

  window.addEventListener('keypress', (event) => {
    input += event.key
    spaceShip.fire(context, event)
  })

  onDestroy(() => {
    window.removeEventListener('keydown', spaceShip.fire)
  })
</script>

<div class="controller">
  <textarea bind:value={input} />
  <input type="range" max="2" min="0.1" bind:value={speed} step="0.1" />
  <p>Exist Enemy Ship: {enemyWordShips.lenght}</p>
</div>
<canvas class="space" bind:this={canvas} {width} {height} />

<style>
  .space {
    position: relative;
    display: block;
    margin: auto;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-image: url('../assets/space-bg.jpg');
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
