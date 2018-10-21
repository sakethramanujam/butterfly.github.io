import React, { Component } from "react";
import Switch from '@material-ui/core/Switch';
import WebLayout from './WebLayout';
import VMLayout from "./VMLayout";

export default class MainLayout extends Component {
    state = {
        version: false,
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
                <span>Web</span>
                <Switch className="switch-one" checked={this.state.version} color="primary" onChange={this.handleToggle} />
                <span>Vending Machine</span>

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