import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  professionBlock: {
    margin: '20px 0px'
  },
  professionTitle: {
    fontWeight: 700,
    fontSize: 24,
    margin: 0,
    padding: 0
  },
  professionLocation: {
    fontWeight: 300,
    fontSize: 16,
    margin: 0,
    padding: 0
  },
  studiedFrom: {
    fontSize: 14
  }
})

class ProfessionIntro extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <div className={classes.professionBlock}>
        <div className={classes.professionTitle}>
            Software Engineer
        </div>
        <div className={classes.professionLocation}>
            Pune, India(MH)
        </div>
        <div className={classes.studiedFrom}>
            B.E. Computer Engineering, Mumbai University
        </div>
      </div>
    )
  }
}

ProfessionIntro.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProfessionIntro)
