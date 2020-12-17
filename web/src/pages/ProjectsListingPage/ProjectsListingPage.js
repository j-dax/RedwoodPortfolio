import GlobalLayout from 'src/layouts/GlobalLayout'
import ProjectView from 'src/components/ProjectView/ProjectView'

import projects from 'src/projects/projects'

const ProjectsListingPage = () => {
  return (<>
    <GlobalLayout>
      <div>
        { projects.map((_, index)=><ProjectView key={index} index={index} />) }
      </div>
    </GlobalLayout>
  </>)
}

export default ProjectsListingPage
