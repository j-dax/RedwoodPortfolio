import TopNav from 'src/components/TopNav'

import { Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  centerMargin: {
    display: "flex",
    justifyContent: "space-around",
    alignContent: "space-between"
  }
})

const GlobalLayout = ({ children }) => {
  const classes = useStyles()
  return <>
    <header>
      <nav>
        <TopNav />
      </nav>
      {/* the empty toolbar is a workaround to prevent content
        from appearing under the toolbar */}
      <Toolbar />
    </header>
    <main className={classes.centerMargin}>{children}</main>
  </>
}

export default GlobalLayout
