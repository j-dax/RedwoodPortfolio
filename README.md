# Redwood Portfolio

A small project a simple, personal website.

> **WARNING:** RedwoodJS software has not reached a stable version 1.0 and should not be considered suitable for production use. In the "make it work; make it right; make it fast" paradigm, Redwood is in the later stages of the "make it work" phase.

### Setup

Complete the following:

#### Authentication

(Setup a free Netlify Identity)[https://redwoodjs.com/tutorial/authentication#netlify-identity-setup]

create an empty file ".env" so dotenv can reference it later.

```NETLIFY_IDENTITY=https://{}.netlify.app/.netlify/identity```

Make sure you have an account associated and authorized with netlify identity before proceeding. You'll need it to access the database from the webapp.

#### Adding Projects

Navigate to (/projects)[localhost:8910/projects] and add your project information. You'll want to customize your Have a look at (/listing)[localhost:8910/listing] and web/src/Pages/ProjectsListingPage to see how Project Briefs are listed. Configure the AboutPage to your liking.

### Upcoming

Add individual project page that lists a project's attributes

Clean up presentation of AboutPage, ProjectsListingPage, SigninPage, ProjectView, ProjectBrief

Remove personal information from AboutPage
