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
    text: `Experience in developing web applications using C#, MVC, Web API, React-Redux,
    KnockoutJS, Angular, NodeJS, MongoDB, MySQL, PHP.
    Good skills in React-Redux and NodeJS.`
  }, {
    text: `Command over Unit Testing using Jest, Jasmine and NUnit and Automation testing
    using Selenium WebdriverIO.`
  }, {
    text: `Worked in Agile Software development environment.`
  }, {
    text: `Result oriented, innovative, quest and zeal to learn new technologies, strong
    analytical, problem solving and communication skills with adaptability to changes.`
  }, {
    text: `Exploring attitude towards new domains and technologies. Passionate, innovative
    and self-motivated team player to work under challenging environments.`
  }
  ]

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant='headline' component='h1'>
          Summary
        </Typography>
        <Typography component='div'>
          <ol className={classes.summaryText}>
            {
              summaryItems.map((item, index) => {
                return <li key={index}>
                  {item.text}
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
