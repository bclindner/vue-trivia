<template>
  <app-container>
    <router-view/>
  </app-container>
</template>

<script>
import AppContainer from '@/components/AppContainer'
export default {
  components: { AppContainer }
}
</script>

<style>
#app {
  font-family: sans-serif;
  font-weight: 400;
}
</style>
