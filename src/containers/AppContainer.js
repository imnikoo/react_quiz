import { connect } from 'react-redux'
import App from '../components/App'
import { loadForeign, toNextQuestion } from '../actions'
    

const mapStateToProps = (state) => {
    return {
        quiz:       state.quiz,
  }
};

const mapDispatchToProps = (dispatch) => {
    dispatch(loadForeign());
    dispatch(toNextQuestion());
  return {
      
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
