import ProjectBrief from "src/components/ProjectBrief/ProjectBrief"

export const QUERY = gql`
  query PROJECTS {
    projects {
      id
      title
      brief
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ projects }) => {
  return <div>
    {projects.map((project, index)=>
      <ProjectBrief key={index} project={project} />
    )}
    </div>
}
