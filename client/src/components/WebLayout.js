import React, { Component } from 'react';
import { Grid, CardContent, Toolbar, IconButton } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

export default class WebLayout extends Component {

    state = {

    };

    render() {
        const { classes } = this.props;
        console.log(this.props);
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography  variant="h6" color="inherit">
                            Project Butterfly
                        </Typography>
                        <IconButton color="inherit">
                            <AccountCircle/>
                        </IconButton>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <Typography color="textSecondary">
                            WebLayout UI Here...
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography color="textSecondary">
                            WebLayout UI Here...
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}