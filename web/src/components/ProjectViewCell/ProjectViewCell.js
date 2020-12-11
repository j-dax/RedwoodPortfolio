import ProjectView from 'src/components/ProjectView/ProjectView'

export const QUERY = gql`
  query FIND_PROJECT_BY_ID($id: Int!) {
    project: project(id: $id) {
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

export const Success = ({ project }) => {
  return <ProjectView project={project} />
}
