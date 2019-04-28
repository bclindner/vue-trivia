import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Trivia from './views/Trivia.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/trivia',
      name: 'trivia',
      component: Trivia,
      props: route => ({
        questionsPerRound: route.query.qs,
        categoryID: route.query.cat
      })
    }
  ]
})
