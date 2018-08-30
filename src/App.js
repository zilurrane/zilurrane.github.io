import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: '#FFF',
    background: 'linear-gradient(150deg,#281483 15%,#8f6ed5 70%,#d782d9 94%)'
  },
  userName: {
    textAlign: 'center'
  },
  userImage: {
    textAlign: 'center',
    marginTop: -40,
    height: 120,
    borderRadius: 120,
    boxShadow: '0px 0px 0px 4px #FFF'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    textShadow: '0 2px 20px rgba(0,0,0,.16)',
    color: '#333',
    fontWeight: 'bolder',
    minHeight: 300,
    backgroundColor: '#EEE'
  }
})

class GuttersGrid extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container justify='center' spacing={16}>
            <Grid item xs={12}>
              <h1 className={classes.userName}>
                Zilu Ramkrishna Rane
              </h1>
            </Grid>
            <Grid item xs={12} sm={11}>
              <Paper className={classes.paper}>
                <img className={classes.userImage} src='https://avatars3.githubusercontent.com/u/9009188?s=200&v=4' />
                <h3>
                  Software Engineer
                </h3>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(GuttersGrid)
