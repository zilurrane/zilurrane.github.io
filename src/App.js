import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center'
  }
})

class GuttersGrid extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container justify='center' spacing={16}>
            <h1>Zilu Ramkrishna Rane</h1>
            <Grid item xs={12} sm={10}>
              <Paper className={classes.paper}>Software Engineer</Paper>
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
