const ProjectBrief = ({ project }) => {
  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.createdAt}</p>
      <p>{project.brief}</p>
    </div>
  )
}

export default ProjectBrief
