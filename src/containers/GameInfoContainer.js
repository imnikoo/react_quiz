import { connect } from 'react-redux'
import { choiceOption, toNextQuestion, answerOnQuestion, proceedToTheQuestion } from '../actions'
import GameInfo from '../components/GameInfo'

const mapStateToProps = (state) => {
    return {
        quiz: state.quiz,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    proceedToTheQuestion: (index) => {
        dispatch(proceedToTheQuestion(index));
        }
  }
}
const GameInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameInfo)

export default GameInfoContainer