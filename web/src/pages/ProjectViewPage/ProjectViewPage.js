import GlobalLayout from 'src/layouts/GlobalLayout'
import Grid from '@material-ui/core/Grid'
import ProjectView from 'src/components/ProjectView'

const ProjectViewPage = ({ id }) => {
  return (
    <>
      <GlobalLayout>
        <ProjectView id={id} />
      </GlobalLayout>
    </>
  )
}

export default ProjectViewPage
