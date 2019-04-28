import { shallowMount } from '@vue/test-utils'
import TriviaList from '@/components/TriviaList.vue'

// Mock multiple choice answer set for the TriviaList.
const mockMultipleChoice = [
  {
    correct: false,
    answer: 'This answer is false.'
  },
  {
    correct: false,
    answer: 'This answer is also false.'
  },
  {
    correct: true,
    answer: 'This answer is true.'
  },
  {
    correct: false,
    answer: 'This answer is false again.'
  }
]

// Mock true or false answer set for the TriviaList.
const mockTrueFalse = [
  {
    correct: true,
    answer: 'True'
  },
  {
    correct: false,
    answer: 'False'
  }
]

/**
 * Get a wrapper for the TriviaList.
 * @param {Array<Object>} answers - Answers to pass as prop.
 * @param {String} questionState - State of the trivia game, to pass as prop.
 */
const getWrapper = (answers, questionState = 'ANSWERING') => shallowMount(TriviaList, {
  propsData: {
    answers, questionState
  }
})

describe('TriviaList', () => {
  test('renders without crashing', () => {
    const wrapper = getWrapper(mockMultipleChoice)
    expect(wrapper.exists()).toBe(true)
  })
  test('has answer objects equal to the number of answers provided', () => {
    const wrapperMC = getWrapper(mockMultipleChoice)
    expect(wrapperMC.findAll('.answer').length).toBe(4)
    const wrapperTF = getWrapper(mockTrueFalse)
    expect(wrapperTF.findAll('.answer').length).toBe(2)
  })
  test('fires custom "answer" event with one parameter corresponding to the index of the option clicked', () => {
    const wrapper = getWrapper(mockMultipleChoice)
    wrapper.findAll('.answer').trigger('click')
    expect(wrapper.emitted().answer.length).toBe(mockMultipleChoice.length)
    wrapper.emitted().answer.forEach((params, loopParam) =>
      expect(params[0]).toBe(loopParam)
    )
  })
  test('does not highlight correct/incorrect answers when state is ANSWERING', () => {
    const wrapper = getWrapper(mockMultipleChoice, 'ANSWERING')
    expect(wrapper.findAll('.correct').length).toBe(0)
    expect(wrapper.findAll('.incorrect').length).toBe(0)
  })
  test('highlights all answers with correct/incorrect when state is CORRECT', () => {
    const wrapper = getWrapper(mockMultipleChoice, 'CORRECT')
    expect(wrapper.findAll('.correct').length).toBe(1)
    expect(wrapper.findAll('.incorrect').length).toBe(3)
  })
  test('highlights all answers with correct/incorrect when state is INCORRECT', () => {
    const wrapper = getWrapper(mockMultipleChoice, 'INCORRECT')
    expect(wrapper.findAll('.correct').length).toBe(1)
    expect(wrapper.findAll('.incorrect').length).toBe(3)
  })
  test('should transition state when state is changed from ANSWERING to CORRECT/INCORRECT', () => {
    const wrapper = getWrapper(mockMultipleChoice)
    expect(wrapper.findAll('.correct').length).toBe(0)
    expect(wrapper.findAll('.incorrect').length).toBe(0)
    wrapper.setProps({ questionState: 'CORRECT' })
    expect(wrapper.findAll('.correct').length).toBe(1)
    expect(wrapper.findAll('.incorrect').length).toBe(3)
  })
})
