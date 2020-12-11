const ProjectView = ({ project }) => {
  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.createdAt}</p>
      <p>{project.description}</p>
    </div>
  )
}

export default ProjectView
