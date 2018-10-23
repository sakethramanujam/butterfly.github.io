import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles, Button, Grid } from '@material-ui/core';

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
    },
    padd: {
        padding: 24,
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
        // console.log(process.env)

        return(
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <img alt="none" src="https://i.pinimg.com/originals/a5/4f/36/a54f36571ab124382cd0e990cb0f84df.png" width="240" height="240" className={classes.padd}/>
                        <p>
                        <strong>Project Butterfly</strong> is a digital and engaging way for consumers to donate for charity, resulting in reduced efforts deployed by charities to fundraise for their digital campaigns and programmes.
Making Financial Institutions and encourage customers to make charitable donations via any platform such as Vending Machine or through Our Online Portal with digital technologies.

                        </p>
                    </Grid>
                    <Grid item xs={6}>
                    <br/>
                    <br/><br/><br/><br/><br/>
                        <div className="Login">
                            <form className={classes.container} noValidate autoComplete="off">
                                <TextField
                                id="filled-email"
                                label="email"
                                className={classes.textField}
                                onChange={this.handleChange()}
                                value="rakhi2104@gmail.com"
                                margin="normal"
                                variant="outlined"
                                />
                                <TextField
                                id="filled-pass"
                                label="Password"
                                value="rakesh123"
                                type="password"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                />
                                <Button className={classes.button} color="primary" onClick={this.props.onClick}> Login </Button>
                            </form>
                        </div>
                    </Grid>
                </Grid>
                <Button className={classes.button} color="primary"> Fund 'Project Butterfly' </Button>
            </div>
        );
    }
}

export default withStyles(styles)(LandingComp);