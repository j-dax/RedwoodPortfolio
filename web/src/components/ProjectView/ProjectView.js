import { Link } from '@redwoodjs/router'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import projects from 'src/projects/projects'

const useStyles = makeStyles({
  page: {
    display: "display",
    textAlign: "center",
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
    marginLeft: 8
  },
  tags: {
    marginLeft: 8,
  },
  date: {
    position: "relative",
    marginLeft: "auto",
    marginRight: 8,
  },
  brief: {
    color: "#6b6b6b",
    marginLeft: 8,
  },
  gridBackground: {
    backgroundColor: "#ebebeb",
    borderRadius: 16,
    marginBottom: 16,
  }
})

const ProjectView = ({ index }) => {
  const project = projects[index]()
  const classes = useStyles()
  return (
    <Link to={`listing/${index}`}>
      <Grid container key={index} className={classes.gridBackground}
        direction="column">
        <h3 className={classes.title}>{project.title}</h3>
        <div className={classes.flexContainer}>
          {project.tags.map((tag, index)=>
            <span key={index} className={classes.tags}>{tag}</span>
          )}
          <span className={classes.date}>{project.date}</span>
        </div>
        <div className={classes.displayContainer}>
          <div className={classes.brief}>
            {project.brief.map((p, index)=><span key={index}>{p}</span>)}
          </div>
        </div>
      </Grid>
    </Link>
    )
}

export default ProjectView
