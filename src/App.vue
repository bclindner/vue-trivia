<template>
  <div id="app">
    <TriviaApp />
  </div>
</template>

<script>
import TriviaApp from './components/TriviaApp.vue'

export default {
  name: 'app',
  components: {
    TriviaApp
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
  font-weight: light;
}
</style>
