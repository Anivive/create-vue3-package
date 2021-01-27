# Vue Starter Package
<hr>

## General
Thank you for downloading this package. We've attempted to create an "all-in-one" solution for any
open source Vue 3 project you could think of making.

Whether it be a simple website or plugin, or a more large scale application, this should have all
the basic tools you will need to get started.

This package includes:
* [Vue 3](https://v3.vuejs.org/) (Javascript Framework)
    * [Vue Router](https://router.vuejs.org/) (Router System)
    * [Vuex](https://vuex.vuejs.org/) (State Management)
* [Typescript](https://www.typescriptlang.org/) (Javascript Extension)
    * [Eslint](https://eslint.org/) (Javascript Linter)
* [SASS](https://sass-lang.com/) (CSS Extension)
* [Jest](https://jestjs.io/) (Unit Testing Framework)
* [Docsify](https://docsify.js.org/#/) (Documentation Generator)
* Documentation:
    * MIT License
    * Contributing Guidelines
    * Code of Conduct
    * Pull Request Template
    * Bug Report Template
    * Feature Request Template

**Note: Feel free to add, remove, or modify any of the existing dependencies or documents included
in this package. The purpose of this project is to make the process of getting an open source
project in Vue 3 started more easily, and is in no way intended to force your team into using any
tools or conventions that do not serve your project's specific needs. Only you and your team know
what tools and conventions work best for your project, but you are free to use this as a starting
point if this is helpful to you.**

To see the full list of dependencies in this project, please visit the package.json file, and refer
to the dependencies and dev-dependencies. If you do not need, and would like to uninstall any of
these packages, please run one of the commands in your terminal:
```
// if installed locally
cd <project-repo>
npm uninstall <package-name>

// if installed globally
cd ~
npm uninstall <package-name> -g
```

<hr>

## Getting Started
### Update the location and names of some files:
```
README.md                                 ===> (delete or rename)
/templates/ > README_TEMPLATE.md          ===> root (rename to 'README.md')
/templates/ > CODE_OF_CONDUCT.md          ===> root
/templates/ > LICENSE.md                  ===> root
/templates/ > CONTRIBUTING.md             ===> /.github/
/templates/ > /ISSUE_TEMPLATE/            ===> /.github/
/templates/ > PULL_REQUEST_TEMPLATE.md    ===> /.github/
```
These files have been temporarily stored in the templates file for package simplicity.
Feel free to delete the `templates` directory after completing this step.

### Install necessary dependencies:
```
npm install
```

### Compile (with hot-reloads) for development
```
npm run serve
```

NOW YOU'RE READY TO GO!

<hr>

## Testing
In the event that you want to integrate testing into your package, this package is set up to include
[Jest](https://jestjs.io/), a javascript testing framework, which allows you and your team to write,
and execute automated unit tests for your project.

This package is one of the most popular automated testing frameworks on Github, and works pretty
much right out of the box.

To run your automated tests, just run the command:
```
npm run test
```

This package is not set up for other types of automated testing. If this is something you need for
your project, we recommend the tool [Cypress.io](https://www.cypress.io/) for end-to-end testing.

<hr>

## Documentation
This package is set up to use [Docsify](https://docsify.js.org/#/), a documentation generator that
creates a website for you and your team to view all of your documentation automatically.

<hr>

## Open Source Project References
For more information on best practices, and how to get your open source project started, please
feel free to visit one of the following resources below:

* [Open Source Guides](https://opensource.guide/starting-a-project/)
* [Github Learning Lab - Create an open source program](https://lab.github.com/githubtraining/create-an-open-source-program)
