import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TWILIO_AUTH, TWILIO_SID , TWILIO_SENDER} from './keys';
import axios from 'axios';

const accountSid = process.env.TWILIO_SID || TWILIO_SID; 
const authToken = process.env.TWILIO_AUTH || TWILIO_AUTH;

const styles = {
  card: { 
      marginTop: 4,
      marginBottom: 4,
  },
  textLeft: {
      textAlign: "left",
  },
};

class CaseCard extends Component {
  
  state= {
    open: false,
    done: false,
    err: false,
  }
  
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  
  handleClose = () => {
    this.setState({ open: false });
  };
  
  sendSMS = () => {
    axios.request({
      url: 'https://localhost:3000/sendSMS',
      method: 'POST',
      data: {
        phNo: "+919985296699"
      }
    }).then((resp) => {
      console.log("done");
    }).catch( non => {
      this.setState({err: true});
      console.log("Not done");
    })
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div>
      <Card className={classes.card}>
        <CardActionArea onClick={this.props.onClick}>
          <CardContent className={classes.textLeft}>
            <Typography gutterBottom variant="h5" component="h2">
              Case 01
            </Typography>
            <Typography component="p">
              The information of the case, i.e. the cause of donation
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={this.handleClickOpen}>
            Share
          </Button>
        </CardActions>
      </Card>

      <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Share</DialogTitle>

          {!this.state.done & !this.state.err ? 
            (<div>
              <DialogContent>
              <DialogContentText>
                  Please enter the mobile number of your friend to whom you want to share this Case
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Mobile Number"
                  type="phone"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={this.sendSMS} color="primary">
                  Share
                </Button>
              </DialogActions>

            </div>
            )
            :
            this.state.err ? 
            (
              <div>
              <DialogContent>
                <DialogContentText>
                    Error occured sending SMS to User !!!
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    Error
                  </Button>
                </DialogActions>
              </div>
            )
            :
            (
              <div>
              <DialogContent>
                <DialogContentText>
                    SMS update shared !
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    Thanks
                  </Button>
                </DialogActions>
              </div>
              )
            }
        </Dialog>

      </div>
    );

    }

}

CaseCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CaseCard);