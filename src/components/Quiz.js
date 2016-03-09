import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/lib/raised-button';
import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';
import CircularProgress from 'material-ui/lib/circular-progress';


const buttonStyle = {
  margin: 12,
};
const radioStyles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};
const h2Style = {
    'fontSize' : '1.5em',
    'lineHeight': '1.334',
    'borderBottom': '1px solid #eee',
   };

const correctAnswerStyle = {
    'backgroundColor':'green'
}
const incorrectAnswerStyle = {
    'backgroundColor':'red'
} 


const Quiz = ({ quiz, currentQuestion, isUserAnswered,isQuizEnded, next, select, answer, end }) => {
   if ( quiz.quiz.length==0 ) {
        return <CircularProgress />
   }
   
   var raisedButtonProps = {
        style: {buttonStyle},
   }
   if (!isQuizEnded) {
       if(!isUserAnswered) {
           raisedButtonProps.label='Answer';
           raisedButtonProps.secondary=true;
           raisedButtonProps.onClick=answer;
       }
       else {
       raisedButtonProps.label='Next';
       raisedButtonProps.primary=true;
       raisedButtonProps.onClick=next;
       }
   }
   else {
       raisedButtonProps.label='End';
       raisedButtonProps.onClick=end;
   }
   
   
   return (
   <div>
    <h2 style={h2Style}>({quiz.quiz.indexOf(currentQuestion)+1}/{quiz.quiz.length}) {currentQuestion.word}</h2>
    <RadioButtonGroup   name={currentQuestion.word} 
                        key={currentQuestion.word} 
                        defaultSelected={isUserAnswered ? currentQuestion.translate : ''}>
       {(currentQuestion.options || []).map(option =>
            <RadioButton 
                    label={option}  
                    onClick={select.bind(null, option)}
                    key={option} value={option} disabled={isUserAnswered}
             />
            )}
      </RadioButtonGroup>
      <RaisedButton {...raisedButtonProps}/>
   </div>
   )
}

Quiz.propTypes = {
  quiz: PropTypes.shape({
    word: PropTypes.string,
    translate: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
  next: PropTypes.func.isRequired,
}

export default Quiz