import { Link, routes } from '@redwoodjs/router'

import {
  IconButton,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

import HttpsOutlinedIcon from '@material-ui/icons/HttpsOutlined'

import { useAuth } from '@redwoodjs/auth'

const AuthenticateLink = ({ classes }) => {
  const { isAuthenticated, logOut } = useAuth()
  const [ error, setError ] = React.useState(null)

  const logoutUser = ()=> {
    setError(null)
    logOut()
      .then(()=>navigate(routes.about()))
      .catch(err=>setError(err.message))
  }

  const whenTrue = (
    <div className={classes.block, classes.center, classes.padding} onClick={()=>logoutUser()}>
      <Link className={classes.login,classes.link} to={routes.about()}>
        <IconButton edge="start" color="inherit" aria-label="menu"
          className={classes.menuButton}>
          <HttpsOutlinedIcon />
          <Typography variant="h6" className={classes.title}>
            Logout
          </Typography>
        </IconButton>
      </Link>
    </div>
  )
  const whenFalse = (
    <Link className={classes.login,classes.link} to={routes.signin()}>
      <IconButton edge="start" color="inherit" aria-label="menu"
        className={classes.menuButton}>
        <HttpsOutlinedIcon />
        <Typography variant="h6" className={classes.title}>
          Login
        </Typography>
      </IconButton>
    </Link>
  )
  return isAuthenticated ? whenTrue : whenFalse
}

export default AuthenticateLink
