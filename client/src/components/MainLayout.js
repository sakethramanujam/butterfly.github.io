import React, { Component } from "react";
import Switch from '@material-ui/core/Switch';
import WebLayout from './WebLayout';
import VMLayout from "./VMLayout";
import Grid from '@material-ui/core/Grid';

export default class MainLayout extends Component {
    state = {
        version: true,
    };

    handleToggle = () => {
        this.setState(state => ({
            version: !state.version,
        }))
    }

    render () {
        // const { classes } = this.props;
        
        return (
            <div>
                <div>
                    <Grid container spacing={24}>
                        <Grid item xs={6}>
                            <span>Web</span>
                            <Switch className="switch-one" checked={this.state.version} color="primary" onChange={this.handleToggle} />
                            <span>Vending Machine</span>
                        </Grid>
                        <Grid item xs={6}>
                        <br/>
                            View Project on <a href="https://github.com/sakethramanujam/butterfly.github.io/" target="_blank"  rel="noopener noreferrer"> Github</a>
                        </Grid>
                    </Grid>

                </div>

                <br/>

                {/* Web UI */}
                <div hidden={this.state.version}>
                    <WebLayout/>
                </div>
                {/* VM UI */}
                <div hidden={!this.state.version}>
                    <VMLayout/>
                </div>

            </div>
        )

    }


}