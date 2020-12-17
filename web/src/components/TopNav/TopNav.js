import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  CssBaseline,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined'

import { NavLink, routes } from '@redwoodjs/router'

import AuthenticateLink from 'src/components/AuthenticateLink/AuthenticateLink'
import AboutLink from 'src/components/AboutLink/AboutLink'
import ProjectsLink from 'src/components/ProjectsLink/ProjectsLink'

const useStyles = makeStyles({
  menuButton: {
    color: "white"
  },
  title: {
    color:"white"
  },
  link: {
    paddingRight: 15,
    paddingBottom: 0,
    marginBottom: 0
  },
  activeLink: {
    // todo: register active links
    color: "darkorange"
  },
  login: {
    float:"left"
  },
  test: {
    height: "100%"
  },
  block: {
    display: "block"
  },
  center: {
    textAlign: "center"
  },
  appBar: {
    backgroundColor: "#000000"
  }
})

const TopNav = () => {
  const classes = useStyles()
  return (<>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <AboutLink classes={classes} />
          <ProjectsLink classes={classes} />
          <AuthenticateLink classes={classes} />
        </Toolbar>
      </AppBar>
    </>
  )
}

export default TopNav
