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
    questionState: {
      type: String,
      required: true
    },
    answers: {
      type: Array,
      required: true
    }
  },
  methods: {
    answerClasses (correct) {
      switch (this.questionState) {
        case 'CORRECT':
        case 'INCORRECT':
          const incorrect = !correct
          return { correct, incorrect }
        case 'ANSWERING':
        default:
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
  padding: 4px;
  margin: 8px 0;
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
