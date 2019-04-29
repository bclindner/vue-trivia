import { shallowMount } from '@vue/test-utils'
import Trivia from '@/views/Trivia.vue'

/**
 * Get a wrapper for the Trivia component.
 * @param {Array<Object>} questionsPerRound - Number of questions per round to pass as prop.
 * @param {String} questionState - State of the trivia game, to pass as prop.
 */
const getWrapper = (questionsPerRound = undefined, category = undefined) => shallowMount(Trivia, {
  propsData: {
    questionsPerRound, category
  }
})

describe('Trivia', () => {
  test('renders without crashing', () => {
    const wrapper = getWrapper()
    expect(wrapper.exists()).toBe(true)
  })
  test('should use its own data when no props are supplied', () => {
    const wrapper = getWrapper()
    expect(wrapper.vm.$props.questionsPerRound).toEqual('10')
    expect(wrapper.vm.$props.category).toEqual('0')
  })
})
