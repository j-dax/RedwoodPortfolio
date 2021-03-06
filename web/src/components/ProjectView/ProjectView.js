import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import GitHubIcon from '@material-ui/icons/GitHub';

import projects from 'src/projects/projects'

const template = {
  title: "",
  date: "",
  tags: [],
  brief: [
  ],
  outcomes: [
  ],
  link: ""
}

const useStyles = makeStyles({
  page: {
    display: "display",
    textAlign: "center",
    marginLeft: "16.6%",
    marginRight: "16.6%",
    backgroundColor: "#ebebeb",
  },
  flexContainer: {
    display: "flex",
    margin: 8,
  },
  displayContainer: {
    display: "display",
    margin: 8,
  },
  title: {
  },
  tags: {
    marginLeft: 8,
  },
  date: {
    position: "relative",
    marginLeft: "auto",
    paddingRight: 8,
  },
  about: {
    color: "#6b6b6b",
    marginBottom: 16
  },
})

const getProject = (index) => {
  if (index < projects.length)
    return projects[index]()
  else
    return template
}

const ProjectView = ({ id }) => {
  const classes = useStyles()
  const project = getProject(id)
  return (
    <>
        <Grid container className={classes.page}
          direction="column" alignItems="column" justify="space-between">

          <h2 className={classes.title}>{project.title}</h2>

          { project.link.length > 0 && <a href={project.link}><GitHubIcon />View on Github</a> }

          <Grid container item className={classes.flexContainer}>
            {project.tags.map((tag, index)=>
            <span className={classes.tags}>{tag}{(index < project.tags.length - 1) ? "," : ""}</span>)}
            <span className={classes.date}>{project.date}</span>
          </Grid>

          <Grid container item className={classes.displayContainer}
            direction="column" alignItems="center" justify="space-between">

            <Grid item className={classes.about}>
              {project.brief.map(p=>p)}
            </Grid>

            <Grid item className={classes.outcomes}>
              {project.outcomes}
            </Grid>

          </Grid>

        </Grid>
    </>
  )
}

export default ProjectView
