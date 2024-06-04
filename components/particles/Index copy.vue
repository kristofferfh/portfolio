<script setup lang="ts">
  import { useWindowSize } from '@vueuse/core'

  const { width, height } = useWindowSize()
  const canvasRef = ref<HTMLCanvasElement>()
  const contextRef = ref<CanvasRenderingContext2D>()
  const effectRef = ref<Effect>()

  onMounted( () => {
    // Set context
    contextRef.value = canvasRef.value?.getContext('2d') || undefined

    // Start animation
    render()
  })

  watch([width, () => height.value], ([newX, newY]) => {
    if (canvasRef.value) {
      canvasRef.value.width = width.value
      canvasRef.value.height = height.value

      effectRef.value?.handleResize()
    }
  })

  class Particle {
    effect: Effect;
    x: number;
    y: number;
    radius: number;
    vx: number;
    vy: number;
    color: string;


    constructor (effect: Effect) {
      this.effect = effect
      this.x = Math.floor(Math.random() * effect.canvas.width)
      this.y = Math.floor(Math.random() * effect.canvas.height)
      this.radius = Math.floor(Math.random() * 50 + 5)
      this.vx = Math.random() * 2 - 1
      this.vy = Math.random() * 2 - 1
      this.color = `hsl(${this.x/(effect.canvas.width/360)}, 100%, 50%)`
    }

    draw(context: CanvasRenderingContext2D) {
      /* context.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)` */
      /* context.fillStyle = `hsl(${this.x/(context.canvas.width/360)}, 100%, 50%)` */
      context.fillStyle = this.color
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      context.fill();
      context.stroke();
    }

    linearBounce() {
      this.x += this.vx
      if (this.x > this.effect.width || this.x < 0) {
        this.vx *= -1
      }

      this.y += this.vy
      if (this.y > this.effect.height || this.y < 0) {
        this.vy *= -1
      }
    }

    update() {
      // Make particles bounce
      this.linearBounce()
    }

    windowResize() {
      if (!canvasRef.value) return
      this.x = Math.floor(Math.random() * canvasRef.value?.width)
      this.y = Math.floor(Math.random() * canvasRef.value?.width)
    }
  }

  class Effect {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D|null;
    width: number;
    height: number;
    particleArray: Particle[];
    particleCount: number;

    constructor (canvas: HTMLCanvasElement) {
      this.canvas = canvas
      this.context = canvas.getContext('2d')
      this.width = canvas.width
      this.height = canvas.height
      this.particleArray = []
      this.particleCount = 200;
      this.createParticles();
    }

    createParticles() {
      for (let i = 0; i < this.particleCount; i++) {
        this.particleArray.push(new Particle(this))
      }
    }

    handleParticles(context: CanvasRenderingContext2D) {
      this.particleArray.forEach( particle => {
        particle.draw(context)
        particle.update()
      })
    }

    clearParticles() {
      // Comment out to get trails
      this.context?.clearRect(0, 0, this.width, this.height)
    }

    handleResize() {
      this.particleArray.forEach( particle => {
        particle.windowResize()
      })
    }
  }


  const animate = () => {
    if (!effectRef.value || !contextRef.value) return

    // Clear previous frame
    effectRef.value.clearParticles()

    // Call handleParticle on effect
    effectRef.value.handleParticles(contextRef.value)

    // Call this fn again to animation
    requestAnimationFrame(animate)
  }

  const render = () => {
    // Return if canvas or context has not been refferenced
    if (!canvasRef.value || !contextRef.value) return

    // Set canvas to fullscreen
    canvasRef.value.width = width.value
    canvasRef.value.height = height.value

    // Create new effect
    effectRef.value = new Effect(canvasRef.value)

    // Start animation
    animate()
  }
</script>

<template>
  <canvas id="particles" ref="canvasRef"></canvas>
</template>

<style scoped>
  #particles {
    position: absolute;
    top: 0;
    z-index: -1;
  }
</style>