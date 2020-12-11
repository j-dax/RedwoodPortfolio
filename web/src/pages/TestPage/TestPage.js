import ProjectCell from 'src/components/ProjectCell'
import ProjectBriefCell from 'src/components/ProjectBriefCell'
import ProjectViewCell from 'src/components/ProjectViewCell'

const TestPage = () => {
  return (
    <>
      <hr />
      <h3>ProjectBriefCell</h3>
      <ProjectBriefCell id={2} />
      <hr />
      <h3>ProjectViewCell</h3>
      <ProjectViewCell id={2} />
      <hr />
      <h3>ProjectCell</h3>
      <ProjectCell id={2} />
      <hr />
    </>
  )
}

export default TestPage
