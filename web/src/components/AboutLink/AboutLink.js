import { NavLink, routes } from '@redwoodjs/router'

import {
  IconButton,
  Typography,
} from '@material-ui/core'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'

const AboutLink = ({ classes }) => {
  return (
    <NavLink className={classes.link} activeClassName={classes.activeLink}
      to={routes.about()}>
      <IconButton edge="start" color="inherit" aria-label="menu"
        className={classes.menuButton}>
        <HomeOutlinedIcon />
        <Typography variant="h6" className={classes.title}>
          Home
        </Typography>
      </IconButton>
    </NavLink>
  )
}

export default AboutLink
