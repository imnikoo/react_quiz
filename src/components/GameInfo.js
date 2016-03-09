import React, { PropTypes } from 'react'
import CircularProgress from 'material-ui/lib/circular-progress';
import RaisedButton from 'material-ui/lib/raised-button';
import { findIndex, some, find } from 'lodash'

const GameInfo = ({ quiz, proceedToTheQuestion }) => {
return (
        <div>
            <h2>"{quiz.userName}" proggress:</h2>
                {(quiz.quiz.map(function(question, i) {
                    var buttonProps = {
                        key : i+1,
                        label : i+1,
                        onClick : proceedToTheQuestion.bind(null, i)
                    };
                    var foundedAnsweredQuestion = find(quiz.userAnswers, (obj) => { return obj.questionIndex===i; });
                    if(foundedAnsweredQuestion!==undefined) {
                        if(foundedAnsweredQuestion.isCorrect) {
                                buttonProps.secondary = true;
                            }
                            else {
                                buttonProps.primary = true;
                            }
                    }
                    return <RaisedButton  {...buttonProps}/>
                }))}
        </div>
    )
}

export default GameInfo  