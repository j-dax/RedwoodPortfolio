import GlobalLayout from 'src/layouts/GlobalLayout'
import ProjectsListingView from 'src/components/ProjectsListingView/ProjectsListingView'

import projects from 'src/projects/projects'

const ProjectsListingPage = () => {
  return (<>
    <GlobalLayout>
      <div>
        { projects.map((_, index)=><ProjectsListingView key={index} index={index} />) }
      </div>
    </GlobalLayout>
  </>)
}

export default ProjectsListingPage
