import React, { PropTypes } from 'react'
import QuestionList from '../containers/QuestionList'
import GameInfoContainer from '../containers/GameInfoContainer'
import LoginContainer from '../containers/LoginContainer'

const App = ({ quiz }) => {
       var flexContainer = {
            'justifyContent': 'flex-start',
            'alignItems' : 'flex-start',
            'display': 'flex',
            'flexDirection' : 'row',
            'padding':'2px',
        }
       var flexItem = {
            'flexFlow': 'wrap',
            'alignContent' : 'space-between',
            'padding':'5px',
            'width' : '200px'
        }
        
       return (
        <div>
            {(quiz.userName==undefined) ? (
             <div style={flexContainer}>
                <div style={flexItem}>
                    <LoginContainer/>
                </div>
            </div>
            ) : 
            (<div>
                <div style={flexContainer}>
                    <div style={flexItem}>
                        <QuestionList />
                    </div>
                    <div style={flexItem}>
                        <GameInfoContainer />
                    </div>
                </div>
                <div style={flexContainer}>
                    <div style={flexItem}>
                    </div>
                </div>
                <div style={flexItem}>
                </div>
            </div>
            )}
        </div>
        )
   }


export default App
