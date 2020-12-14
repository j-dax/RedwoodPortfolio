import { NavLink, routes } from '@redwoodjs/router'

import {
  IconButton,
  Typography,
} from '@material-ui/core'
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined'

const ProjectsLink = ({ classes }) => {
  return (
    <NavLink className={classes.link} activeClassName={classes.activeLink}
      to={routes.projectsListing()}>
      <IconButton edge="start" color="inherit" aria-label="menu"
        className={classes.menuButton}>
        <BuildOutlinedIcon />
        <Typography variant="h6" className={classes.title}>
          Projects
        </Typography>
      </IconButton>
    </NavLink>
  )
}

export default ProjectsLink
