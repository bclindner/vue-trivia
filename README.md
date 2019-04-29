# vue-trivia

This is a test app I wrote to learn Vue.js. It is currently hosted on [Github
Pages](https://bclindner.github.io/vue-trivia/).

## Details

This app uses the [OpenTriviaDB](https://opentdb.com/) API to pull questions and
categories and quiz you on them. Through it, the app also allows you to
configure your preferred category (if any) and how many questions you want per
round.

The app is a simple project instanced by [vue-cli](https://cli.vuejs.org/) with
default babel/eslint plugins, with a plugin for
[vue-router](https://router.vuejs.org/) to handle some rudimentary routing.
Tests are also available using the
[Jest](https://www.npmjs.com/package/@vue/cli-plugin-unit-jest) plugin, though
they are still a work in progress.
