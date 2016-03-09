import React, { PropTypes } from 'react'
import { login } from '../actions'
import CircularProgress from 'material-ui/lib/circular-progress';
import RaisedButton from 'material-ui/lib/raised-button';
import { findIndex } from 'lodash';
import TextField from 'material-ui/lib/text-field';

const Login = ({ login }) => {
    var field;
    return (
        <div>
            <h1>Hello! Welcome to the quizzz!</h1>
            <TextField
                ref={(input) =>  {
                    field = input;
                   }
                }
                hintText='place it here'
                floatingLabelText="Your name"
            /><br/>
            <RaisedButton label='Let it rocks'
                            onClick={() => login(field.input.value)}
                        />
        </div>
    )
}
export default Login