<template>
  <ol class="answer-list" type="A">
    <li v-for="(answer, index) in answers" :key="answer.text" @click="$emit('answer', index)">
      <div class="answer" :class="answerClasses(answer.correct)" v-html="answer.text"/>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'trivia-list',
  props: {
    showAnswers: {
      type: Boolean,
      required: true
    },
    answers: {
      type: Array,
      required: true
    }
  },
  methods: {
    answerClasses (correct) {
      if (this.showAnswers) {
        const incorrect = !correct
        return { correct, incorrect }
      } else {
        return { 'unknown': true }
      }
    }
  }
}
</script>

<style scoped>
.answer-list {
  padding: 0 12px;
}
.answer {
  /* layout */
  padding: 0.5rem;
  margin: 1rem 0;
  width: 100%;
  /* behavior */
  cursor: pointer;
  user-select: none;
  /* style */
  border-radius: 2px;
  color: white;
  text-align: center;
  transition: 0.2s ease;
}
.unknown {
  background-color: #875fd7;
}
.unknown:hover {
  background-color: #9f70ff;
}
.correct {
  background-color: #3ee86b;
}
.incorrect {
  background-color: #e84c3e;
}
</style>
