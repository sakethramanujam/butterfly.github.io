import React, { Component } from 'react';
import { Grid, CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

export default class VMLayout extends Component {

    state = {

    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Card>
                        <CardContent>

                            <Grid container spacing={24}>
                                <Grid item xs={6}>
                                    <Typography color="textSecondary">
                                        Vending Machine UI Here...
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography color="textSecondary">
                                        Vending Machine UI Here...
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
            </div>
        )
    }
}