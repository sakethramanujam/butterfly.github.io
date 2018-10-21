import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles, Button } from '@material-ui/core';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
    button: {
        marginTop: theme.spacing.unit * 2.5,
        marginBottom: theme.spacing.unit * 2
    }
  });
  

class LandingComp extends Component {
    state = {
        email: '',
        pass: '',
    };

    handleChange = email => event => {
        this.setState({
            [email]: event.target.value,
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        const {classes} = this.props;

        return(
            <div className="Login">
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                    id="filled-name"
                    label="email"
                    className={classes.textField}
                    onChange={this.handleChange()}
                    margin="normal"
                    variant="outlined"
                    />
                    <TextField
                    id="filled-name"
                    label="Password"
                    type="password"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    />
                    <Button className={classes.button} color="primary"> Login </Button>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(LandingComp);