import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

const styles = theme => ({
  socialLinks: {
    margin: '10px 0px'
  },
  button: {
    margin: theme.spacing.unit,
    textTransform: 'none'
  },
  facebook: {
    backgroundColor: '#3b5999'
  },
  linkedin: {
    backgroundColor: '#0077B5'
  },
  twitter: {
    backgroundColor: '#55acee'
  },
  googleplus: {
    backgroundColor: '#dd4b39'
  }
})

function SocialLinks (props) {
  const { classes } = props
  return (
    <div className={classes.socialLinks}>
      <Button href='https://www.linkedin.com/in/zilurane/' target='_blank' variant='contained' color='secondary' className={classNames(classes.button, classes.linkedin)}>
          LinkedIn
      </Button>
      <Button href='https://www.facebook.com/zilurane' target='_blank' variant='contained' color='secondary' className={classNames(classes.button, classes.facebook)}>
          Facebook
      </Button>
      <Button href='https://twitter.com/ZiluRane' target='_blank' variant='contained' color='secondary' className={classNames(classes.button, classes.twitter)}>
          Twitter
      </Button>
      <Button href='https://plus.google.com/u/0/+zilurane' target='_blank' variant='contained' color='secondary' className={classNames(classes.button, classes.googleplus)}>
          Google+
      </Button>
    </div>
  )
}

SocialLinks.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SocialLinks)
