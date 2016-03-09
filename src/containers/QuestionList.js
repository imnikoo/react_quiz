import { connect } from 'react-redux'
import { choiceOption, toNextQuestion, answerOnQuestion, endQuiz } from '../actions'
import Quiz from '../components/Quiz'

const mapStateToProps = (state) => {
    return {
        quiz:               state.quiz,
        currentQuestion:    state.quiz.currentQuestion,
        isUserAnswered:     state.quiz.isUserAnswered,
        isQuizEnded:        state.quiz.isQuizEnded
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      next:     () => {
            dispatch(toNextQuestion());
      },
      select:   (selectedOption) => {
            dispatch(choiceOption(selectedOption));
      },
      answer:   (answer) => {
            dispatch(answerOnQuestion());
      },
      end:      () => {
            dispatch(endQuiz());
      },
  }
}

const QuestionList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz)

export default QuestionList