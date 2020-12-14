import { NavLink, routes } from '@redwoodjs/router'

import {
  IconButton,
  Typography,
} from '@material-ui/core'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'

const AboutLink = ({ classes }) => {
  return (
    <NavLink className={classes.link} activeClassName={classes.activeLink}
      to={routes.about()}>
      <IconButton edge="start" color="inherit" aria-label="menu"
        className={classes.menuButton}>
        <PersonOutlineIcon />
        <Typography variant="h6" className={classes.title}>
          About Me
        </Typography>
      </IconButton>
    </NavLink>
  )
}

export default AboutLink
