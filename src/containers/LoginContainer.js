import { connect } from 'react-redux'
import { choiceOption, toNextQuestion, answerOnQuestion, login } from '../actions'
import Login from '../components/Login'

    

const mapStateToProps = (state) => {
    return {
        quiz:       state.quiz,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      login: (userName) => {
        dispatch(login(userName));
          
        }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginContainer
    