import ProjectBrief from "../ProjectBrief/ProjectBrief"

export const QUERY = gql`
  query FIND_PROJECT_BY_ID($id: Int!) {
    project: project(id: $id) {
      id
      title
      brief
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ project }) => {
  // return JSON.stringify(project)
  return <ProjectBrief project={project} />
}
