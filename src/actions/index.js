export const choiceOption = (selectedOption) => {
  return {
    type: 'SELECT_OPTION',
      selectedOption
  }
}

export const loadForeign = () => {
  return {
    type: 'LOAD_FOREIGN_LIST'
  }
}

export const toNextQuestion = () => {
  return {
    type: 'TO_NEXT_QUESTION'
  }
}

export const answerOnQuestion = () => {
  return {
    type: 'ANSWER_ON_QUESTION',
  }
}

export const proceedToTheQuestion = (index) => {
  return {
      type: 'PROCEED_TO_THE_QUESTION',
      index
  }
}

export const endQuiz = () => {
  return {
    type: 'END_QUIZ',
  }
}

export const login = (userName) => {
  return {
      type: 'LOGIN',
      userName
  }
}