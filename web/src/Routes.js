// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      {/* public routes */}
      <Route path="/signin" page={SigninPage} name="signin" />
      <Route path="/listing" page={ProjectsListingPage} name="projectsListing" />
      <Route path="/" page={AboutPage} name="about" />

      {/* Auth restricted routes */}
      <Private unauthenticated="about">
        <Route path="/admin/projects/new" page={NewProjectPage} name="newProject" />
        <Route path="/admin/projects/{id:Int}/edit" page={EditProjectPage} name="editProject" />
        <Route path="/admin/projects/{id:Int}" page={ProjectPage} name="project" />
        <Route path="/admin/projects" page={ProjectsPage} name="projects" />
      </Private>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
