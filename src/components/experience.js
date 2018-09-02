import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    maxWidth: '100%'
  },
  summaryText: {
    marginTop: 20,
    padding: '0px 40px',
    textAlign: 'justify'
  }
}

function ExecutiveSummary (props) {
  const { classes } = props
  const summaryItems = [{
    title: `Freelance developer with LifeCOMPILERS`,
    period: `August 2015 – August 2016`,
    text: `Freelancing web and android development experience`
  }, {
    title: `Software Engineer at LTI, Pune`,
    period: `September 2016 – Present`,
    text: `Agile experience with exposure to Development, Testing and little DevOps.`
  }
  ]

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant='headline' component='h1'>
          Experience
        </Typography>
        <Typography component='div'>
          <ol className={classes.summaryText}>
            {
              summaryItems.map((item, index) => {
                return <li key={index}>
                  <Typography component='h5'>
                    <b>
                      {item.title}
                    </b>
                  </Typography>
                  <div>{item.period}</div>
                  <div>{item.text}</div>
                </li>
              })
            }
          </ol>
        </Typography>
      </CardContent>
    </Card>
  )
}

ExecutiveSummary.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ExecutiveSummary)
