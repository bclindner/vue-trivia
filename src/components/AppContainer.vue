<template>
  <div class="container">
    <h1>Trivia</h1>
    <slot/>
    <hr/>
    <p>&copy; Brian Lindner, 2019. Trivia questions taken from <a href="https://opentdb.com/">OpenTDB</a>.</p>
  </div>
</template>

<style scoped>
.container {
  width: calc(100% - 40px);
  margin: 0 auto;
  padding: 20px;
  max-width: 800px;
  background-color: #eee;
}
</style>
