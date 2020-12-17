import GlobalLayout from 'src/layouts/GlobalLayout'
import ProjectView from 'src/components/ProjectView'

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';

import { makeStyles, Grid } from '@material-ui/core'

import profile from "./profile.jpg"

const githubLink = "https://github.com/j-dax/"
const linkedInLink = "https://www.linkedin.com/in/piazzam/"
const emailURI = "mailto:m21career@gmail.com"

const useStyles = makeStyles({
  profileImage: {
    height: 200,
    borderRadius: 16,
    position: "relative",
    float: "left",
  },
  container: {
    display: "flex",
    justifyContent: "space-between"
  }
})

const AboutPage = () => {
  const classes = useStyles()
  return (
    <>
      <GlobalLayout>

          <Grid container direction="row">

            <Grid container item sm={12} md={3}
              direction="column" alignItems="center" justify="flex-start">
              <h2>Matthew Piazza</h2>
              <div>
                <img className={classes.profileImage} src={profile}
                  alt="personal image of Matthew Piazza" />
              </div>
              <div>
                <h3>Contact Info</h3>
                <p><a href={githubLink}>
                  <GitHubIcon color="disabled" fontSize="small" /> GitHub
                </a></p>
                <p><a href={linkedInLink}>
                  <LinkedInIcon color="disabled" fontSize="small" /> LinkedIn
                </a></p>
                <p><a href={emailURI}>
                  <MailOutlinedIcon color="disabled" fontSize="small" /> Email
                </a></p>
              </div>
            </Grid>

            <Grid container item sm={12} md={9}
              direction="column" alignItems="center">
              <h3>Top Projects</h3>
              <Grid item>

                <ProjectView index={0} />
                <ProjectView index={1} />
                <ProjectView index={2} />
                <ProjectView index={3} />
                <ProjectView index={4} />

              </Grid>
            </Grid>

          </Grid>

      </GlobalLayout>
    </>
  )
}

export default AboutPage
