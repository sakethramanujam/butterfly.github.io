import React, { Component } from 'react';
import { Grid, CardContent, Toolbar } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import LogoutBtn from "./LogoutBtn";
import LoginBtn from './LoginBtn';
import SearchComp from './SearchComp';
import MapComp from './MapComp';
import CaseCard from './CaseCard';
import DetailDialog from './DetailDialog';
import LandingComp from './LandingComp';
import axios from 'axios';

const styles = theme => ({
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
      },
    noPadding: {
        padding: 0,
        paddingBottom: 0,
    },
})

class WebLayout extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isLoggedIn: false,
            open: false,
            scroll: 'paper',
            data: null,
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.getData = this.getData.bind(this);
    }

    handleLogin() {
        this.setState({isLoggedIn: true});
    }
    handleLogout() {
        this.setState({isLoggedIn: false});
    }

    handleOpen(scroll) {
        console.log("Opening")
        this.setState({open: true, scroll});
    }

    handleClose() {
        this.setState({open: false});
    }

    async getData() {
        axios.request({
            url: "https://cherry-salad.glitch.me/view",
            method: "GET"
        }).then((resp) => {
            this.state.data= await resp.data;
            console.log(resp.data);
        }).catch(err => {
            console.log(err);
        })
    }

    render() {

        this.getData();
        const { classes } = this.props;
        const isLoggedIn = this.state.isLoggedIn;
        const pos= {
            lat: 83.387864,
            lng: 17.809514,
        }
        let button;

        if (isLoggedIn) {
            button =( <div>
                    <LogoutBtn onClick={this.handleLogout}/>
                    </div>);
        }
        else {
            button = <LoginBtn onClick= {this.handleLogin}/>;
        }


        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography  variant="h6" color="inherit">
                            Project Butterfly
                        </Typography>
                        <div className="pull-right">
                            {button}
                        </div>
                    </Toolbar>
                </AppBar>
                {!isLoggedIn ? (<LandingComp onClick={this.handleLogin}/>) :
                (<Grid container spacing={24}>
                    <Grid item xs={6}>
                    <Card classes={classes.marT}>
                        <CardContent className={classes.noPadding}>
                            <SearchComp/>
                        </CardContent>
                    </Card>
                    <MapComp location={pos}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6">
                            List of cases available in your location:
                        </Typography>
                        <div className="scroll-handle">
                        {
                            // this.state.data.forEach(element => {
                            //     <CaseCard onClick={this.handleOpen} value-data={element}/>
                            // })
                            this.state.data.map((item, i) => {
                                console.log("entered");
                                return <CaseCard onClick={this.handleOpen} valueData={item}/>
                            })
                        }
                        </div>
                    </Grid>
                </Grid>)
                }

                <DetailDialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    scroll={this.state.scroll}/>
            </div>
        )
    }
}

export default withStyles(styles)(WebLayout);