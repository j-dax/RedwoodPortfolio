import TopNav from 'src/components/TopNav'
import { Toolbar } from '@material-ui/core'


const GlobalLayout = ({ children }) => {
  return <>
    <header>
      <nav>
        <TopNav />
      </nav>
      {/* the empty toolbar is a workaround to prevent content
        from appearing under the toolbar */}
      <Toolbar />
    </header>
    {children}
  </>
}

export default GlobalLayout
