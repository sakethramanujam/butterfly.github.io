import React, { Component } from 'react';
import { Grid, CardContent, withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CaseCard from './CaseCard';
import DetailDialog from './DetailDialog';

const styles = theme => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing.unit * 3,
    },
    group: {
      margin: `${theme.spacing.unit}px 0`,
    },
  });

class VMLayout extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isLoggedIn: false,
            open: false,
            scroll: 'paper',
            phNo: null,
            defu: 'donate',
            value: 'donate'
        };
        this.handleChange = this.handleChange.bind(this);
        // this.handleLogout = this.handleLogout.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }


    handleChange = event => {
        this.setState({ value: event.target.value, defu: event.target.value });
      };

      handleOpen(scroll) {
        console.log("Opening")
        this.setState({open: true, scroll});
    }

    handleClose() {
        this.setState({open: false});
    }

    

    render() {
        const { classes } = this.props;
        var URI = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=+91" + this.state.phNo;
        return (
            <div>
                <Card>
                        <CardContent>

                            <Grid container spacing={24}>
                                <Grid item xs={10}>
                                    <Grid container spacing={24}>
                                        <Grid item xs={4}>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                        <FormLabel component="legend">Options</FormLabel>
                                        <RadioGroup
                                            aria-label="Options"
                                            name="options"
                                            className={classes.group}
                                            value={this.state.value}
                                            onChange={this.handleChange}
                                        >
                                            <FormControlLabel value="donate" control={<Radio />} label="Donate" />
                                            <FormControlLabel value="invest" control={<Radio />} label="Invest" />
                                            <FormControlLabel
                                            value="disabled"
                                            disabled
                                            control={<Radio />}
                                            label="Request"
                                            />
                                        </RadioGroup>
                                        </FormControl>
                                        </Grid>
                                        <Grid item xs={8}>
                                        <CaseCard onClick={this.handleOpen}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography color="textSecondary">
                                        { !this.state.phNo ? ( <img src="data:image/jpeg;base64,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" alt="demo" /> ) :
                                        (<img src={URI} alt="qr"/>) }
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <DetailDialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    // scroll={this.state.scroll}
                    />
            </div>
        )
    }
}

export default withStyles(styles)(VMLayout);