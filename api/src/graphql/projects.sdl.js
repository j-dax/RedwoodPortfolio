export const schema = gql`
  type Project {
    id: Int!
    title: String!
    brief: String!
    description: String!
    createdAt: String!
  }

  type Query {
    projects: [Project!]!
    project(id: Int!): Project
  }

  input CreateProjectInput {
    title: String!
    brief: String!
    description: String!
    createdAt: String!
  }

  input UpdateProjectInput {
    title: String
    brief: String
    description: String
    createdAt: String
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project!
    updateProject(id: Int!, input: UpdateProjectInput!): Project!
    deleteProject(id: Int!): Project!
  }
`
