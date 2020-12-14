import { Link, routes } from '@redwoodjs/router'
import GlobalLayout from 'src/layouts/GlobalLayout'
import ProjectsListingViewCell from 'src/components/ProjectsListingViewCell/ProjectsListingViewCell'

const ProjectsListingPage = () => {
  return ( <>
    <GlobalLayout>
      <ProjectsListingViewCell />
    </GlobalLayout>
  </>)
}

export default ProjectsListingPage
