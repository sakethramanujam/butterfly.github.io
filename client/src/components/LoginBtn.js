import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class LoginBtn extends Component {
    
    render() {
        return (
            <div>
                <Button color="inherit" onClick={this.props.onClick}>
                    Login
                </Button>
            </div>
        )
    }
}