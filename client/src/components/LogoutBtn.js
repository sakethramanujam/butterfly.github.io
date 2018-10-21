import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class LogoutBtn extends Component {
    render() {
        return (
            <div>
                <Button color="inherit" onClick={this.props.onClick}>
                    Logout
                </Button>
            </div>
        )
    }
}