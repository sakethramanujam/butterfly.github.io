import React, { Component } from 'react';
import { Grid, CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CaseCard from './CaseCard';
import ReactModal from 'react-modal';

export default class VMLayout extends Component {

    state = {

    };

    render() {
        // const { classes } = this.props;
        return (
            <div>
                <Card>
                        <CardContent>

                            <Grid container spacing={24}>
                                <Grid item xs={6}>
                                    {/* <Typography color="textSecondary">
                                        Vending Machine UI Here...
                                    </Typography> */}
                                    <Button size="small" color="primary">
                                        Donate
                                    </Button>
                                    <Button size="small" color="primary">
                                        Invest
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography color="textSecondary">
                                        Projects
                                    </Typography>
                                    <div className="scroll-handle">
                                        <CaseCard/>
                                        <CaseCard/>
                                        <CaseCard/>
                                        <CaseCard/>
                                        <CaseCard/>
                                    </div>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
            </div>
        )
    }
}