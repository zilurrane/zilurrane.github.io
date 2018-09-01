import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TechnicalStackItems from './technical-stack-items'

const styles = {
  card: {
    maxWidth: '100%'
  },
  title: {
    marginTop: 20
  }
}

function TechnicalStack (props) {
  const { classes } = props

  return (
    <Card xs={12} sm={8} className={classes.card}>
      <CardContent>
        <Typography variant='headline' component='h2'>
          Technical Stack
        </Typography>
        <Typography component='div' className={classes.title}>
          <TechnicalStackItems />
        </Typography>
      </CardContent>
    </Card>
  )
}

TechnicalStack.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TechnicalStack)
