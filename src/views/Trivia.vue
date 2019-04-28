<template>
  <div>
    <p v-if="status == 'LOADING'">Loading trivia...</p>
    <p v-if="status == 'FAILED'">Failed to load trivia!</p>
    <div v-if="status == 'READY'">
      <div v-if="questionState != 'DONE'">
        <p>Score: {{ score }}</p>
        <h3>
          Question {{ questionNumber }}
        </h3>
        <p><strong>{{ currentQuestion.category }}</strong><br/>({{ currentQuestion.difficulty }} difficulty)</p>
        <p class="trivia" v-html="currentQuestion.question"/>
        <trivia-list :question-state="questionState" :answers="currentQuestion.answers" @answer="verifyAnswer"/>
        <p v-if="questionState == 'CORRECT'">Correct!</p>
        <p v-if="questionState == 'INCORRECT'">Incorrect...</p>
        <button v-if="readyToContinue" @click="goToNext()">Continue</button>
      </div>
      <div v-else>
        <p>Your scored {{ score }} points!</p>
        <button @click="getTrivia()">Restart</button>
        <p>
          <router-link to="/">Configure Trivia</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { getTrivia, getSessionToken } from '@/utils/opentriviadb'
import TriviaList from '@/components/TriviaList'

export default {
  name: 'trivia-app',
  props: {
    questionsPerRound: {
      type: String,
      default: '0'
    },
    categoryID: {
      type: String,
      default: '0'
    }
  },
  components: {
    TriviaList
  },
  data: () => ({
    // statuses: LOADING, FAILED, READY
    status: 'LOADING',
    triviaList: [],
    currentQuestion: {},
    // states: ANSWERING, CORRECT, INCORRECT, DONE
    questionState: 'ANSWERING',
    questionNumber: 0,
    score: 0,
    sessionToken: ''
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
        if (this.sessionToken.length === 0) {
          this.sessionToken = await getSessionToken()
        }
        this.triviaList = await getTrivia(this.questionsPerRound, this.sessionToken, this.categoryID)
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
    }
  },
  async mounted () {
    this.getTrivia()
  }
}
</script>
