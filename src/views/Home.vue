<template>
  <form id="configureTrivia" @submit="submit">
    <h3>Configure</h3>
    <label for="category">
      <p>Select a category:</p>
    </label>
    <p v-if="disableCategories">Failed to load categories.</p>
    <select name="category" v-model.number="categoryID" :disabled="disableCategories || loading">
      <option value="0" selected>All Categories</option>
      <option v-for="category in categories" :value="category.id" :key="category.id">{{ category.name }}</option>
    </select>
    <label for="questionsPerRound">
      <p>Number of questions per round:</p>
    </label>
    <input type="number" v-model.number="questionsPerRound" value="10"/>
    <input class="submit" type="submit" value="Start Trivia"/>
  </form>
</template>

<script>
import { getCategories } from '@/utils/opentriviadb'
// This is basically a configuration view.
// You set some options for how many questions you want, category, etc.
export default {
  name: 'home-view',
  data: function () {
    return {
      // Whether or not any necessary requests are loading.
      loading: true,
      // The category list to be populated by the API.
      categories: [],
      // Disable the category selector (i.e. when network request fails).
      disableCategories: false,
      // Number of questions per round the user has specified.
      questionsPerRound: 10,
      // Category ID the user has specified.
      categoryID: 0
    }
  },
  methods: {
    submit (event) {
      event.preventDefault()
      this.$router.push({
        path: 'trivia',
        // query params are fine here - makes more sense than router params in this instance
        query: {
          qs: this.questionsPerRound,
          cat: this.categoryID
        }
      })
    }
  },
  async mounted () {
    try {
      // Get the categories, sort them, and add them; signal it's ready afterwards
      const categories = await getCategories()
      this.categories = categories.sort((categoryA, categoryB) => categoryA.name > categoryB.name ? 1 : -1)
      this.loading = false
    } catch (e) {
      // if it doesn't work, no big deal; just disable it
      console.error(e)
      this.disableCategories = true
      this.loading = false
    }
  }
}
</script>

<style scoped>
/* submit button just needs block and some margins */
.submit {
  display: block;
  margin: 16px 0;
}
</style>
