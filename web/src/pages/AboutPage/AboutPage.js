import { makeStyles } from '@material-ui/core'
import { Link, routes } from '@redwoodjs/router'
import GlobalLayout from 'src/layouts/GlobalLayout'

import profile from "./profile.jpg"

const githubLink = "https://github.com/j-dax/"
const linkedInLink = "https://www.linkedin.com/in/piazzam/"

const useStyles = makeStyles({
  profileImage: {
    height: 100
  }
})

const AboutPage = () => {
  const classes = useStyles()
  return (
    <>
      <GlobalLayout>
        <h2>Matthew Piazza</h2>
        <hr />
        <h3>Contact Information</h3>
        <div>

          <img className={classes.profileImage} src={profile} alt="personal image of Matthew Piazza" />

          <a href={githubLink}>
            GitHub
          </a>

          <a href={linkedInLink}>
            LinkedIn
          </a>

        </div>
        <hr />

        <h3>Top Projects</h3>
      </GlobalLayout>
    </>
  )
}

export default AboutPage
