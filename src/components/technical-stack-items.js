import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'
import TagFacesIcon from '@material-ui/icons/TagFaces'

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit / 2,
    boxShadow: '0px 0px 1px #333',
    fontWeight: '500'
  }
})

class TechnicalStackItems extends React.Component {
  render () {
    const { classes } = this.props
    const chipData = [
      { label: 'React' },
      { label: 'Redux' },
      { label: 'Angular' },
      { label: 'NodeJS' },
      { label: '.NET' },
      { label: 'PHP' },
      { label: 'Jest' },
      { label: 'Jasmine' },
      { label: 'WebdriverIO' },
      { label: 'HTML' },
      { label: 'CSS' },
      { label: 'JavaScript' },
      { label: 'JQuery' },
      { label: 'TypeScript' },
      { label: 'MongoDB' },
      { label: 'MySQL' },
      { label: 'Express' },
      { label: 'Koa' },
      { label: 'Lumen' }
    ]
    return (
      <div>
        {chipData.map((data, key) => {
          let avatar = (
            <Avatar>
              <TagFacesIcon className={classes.svgIcon} />
            </Avatar>
          )

          return (
            <Chip
              key={key}
              avatar={avatar}
              label={data.label}
              color='primary'
              className={classes.chip}
            />
          )
        })}
      </div>
    )
  }
}

TechnicalStackItems.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TechnicalStackItems)
