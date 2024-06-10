<script setup lang="ts">
  const message = ref<string[]>([])
  const count = ref(0)

  const messageList = [
    "This page",
    "My Github",
    "Other projects"
  ]
  const colorList = [

  ]

  const nextMessage = () => {
    // Reset
    if (count.value >= messageList.length) count.value = 0

    // Display new message
    message.value.shift()
    message.value.push(messageList[count.value])


    // Increment
    count.value++

    // Loop
    setTimeout(() => {
      nextMessage()
    }, 5000)
  }

  nextMessage()
</script>

<template>
  <div id="hero">
    <div class="message">
      <span style="font-size: 10rem; color: lightskyblue; justify-self: end;">
        Hi!
      </span>
      <span style="display: flex; flex-flow: column nowrap; justify-self: start;">
        <span>I'm</span>
        <span>currently</span>
      </span>
      <span style="justify-self: end;">
        workingOn () =>
      </span>
      <span style="color: orange; grid-row: 3; grid-column: 2; justify-self: start;">
        <TransitionGroup name="list" tag="ul">
          <li v-for="item in message" :key="item">
            {{ item }}
          </li>
        </TransitionGroup>
      </span>
    </div>
  </div>
  <Particles />
</template>

<style scoped>
  #hero {
    display: grid;
    place-items: center;
    height: 100svh;

    backdrop-filter: blur(50px) brightness(40%);
  }

  .message {
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;

    font-size: 4rem;
    font-family: 'Nunito', Arial, Helvetica, sans-serif;

    color: whitesmoke;
  }

  ul {
    list-style: none;
  }

  .list-move, /* apply transition to moving elements */
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  /* ensure leaving items are taken out of layout flow so that moving
    animations can be calculated correctly. */
  .list-leave-active {
    position: absolute;
  }
</style>