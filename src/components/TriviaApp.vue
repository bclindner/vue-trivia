<template>
  <div class="container">
    <h1>Trivia</h1>
    <p v-if="status == 'LOADING'">Loading trivia...</p>
    <p v-if="status == 'FAILED'">Failed to load trivia!</p>
    <div v-if="status == 'READY'">
      <div v-if="questionState != 'DONE'">
      <p>Score: {{ score }}</p>
      <p><strong>Question {{questionNumber}}</strong></p>
      <p><strong>{{ currentQuestion.category }}<br/>({{ currentQuestion.difficulty }} difficulty)</strong></p>
      <p class="trivia" v-html="currentQuestion.question"/>
      <ol class="answer-list" type="A">
        <li v-for="(answer, index) in currentQuestion.answers" :key="answer.text" @click="verifyAnswer(index)">
          <div class="answer" :class="answerClassObject(answer.correct)" v-html="answer.text"/>
        </li>
      </ol>
      <p v-if="questionState == 'CORRECT'">Correct!</p>
      <p v-if="questionState == 'INCORRECT'">Incorrect...</p>
      <button v-if="readyToContinue" @click="goToNext()">Continue</button>
      </div>
      <div v-else>
        <p>Your scored {{ score }} points!</p>
        <button @click="getTrivia()">Restart</button>
      </div>
    </div>
    <hr/>
    <p>&copy; Brian Lindner, 2019. Trivia questions taken from <a href="https://opentdb.com/">OpenTDB</a>.</p>
  </div>
</template>

<script>
import { getTrivia } from '../utils/opentriviadb'

export default {
  name: 'trivia-app',
  data: () => ({
    // statuses: LOADING, FAILED, READY
    status: 'LOADING',
    triviaList: [],
    currentQuestion: {},
    // states: ANSWERING, CORRECT, INCORRECT, DONE
    questionState: 'ANSWERING',
    questionNumber: 0,
    score: 0
  }),
  computed: {
    readyToContinue () {
      return this.questionState === 'CORRECT' || this.questionState === 'INCORRECT'
    }
  },
  methods: {
    async getTrivia () {
      // Reset the game
      this.score = 0
      this.questionNumber = 0
      this.status = 'LOADING'
      try {
        this.triviaList = await getTrivia(10)
        this.goToNext()
        this.status = 'READY'
      } catch (err) {
        console.error(err)
        this.status = 'FAILED'
      }
    },
    verifyAnswer (index) {
      if (this.questionState !== 'ANSWERING') { return }
      if (this.currentQuestion.answers[index].correct) {
        this.score += 1
        this.questionState = 'CORRECT'
      } else {
        this.questionState = 'INCORRECT'
      }
    },
    goToNext () {
      if (this.triviaList.length) {
        this.currentQuestion = this.triviaList.pop()
        this.questionNumber += 1
        this.questionState = 'ANSWERING'
      } else {
        this.questionState = 'DONE'
      }
    },
    answerClassObject (correct) {
      switch (this.questionState) {
        case 'CORRECT':
        case 'INCORRECT':
          return { correct, incorrect: !correct }
        case 'ANSWERING':
        default:
          return { 'unknown': true }
      }
    }
  },
  async mounted () {
    this.getTrivia()
  }
}
</script>

<style scoped>
.container {
  width: calc(100% - 40px);
  margin: 0 auto;
  padding: 20px;
  max-width: 800px;
  background-color: #eee;
}

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
