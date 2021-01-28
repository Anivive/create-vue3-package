# Vue Starter Package
---

## General
Thank you for downloading this package. We've attempted to create an "all-in-one" solution for any
open source Vue 3 package you could think of creating.

Whether it's a simple plugin, or a large-scale application, this package should have the building
blocks you will need to get started.

This package includes:
* [Vue 3](https://v3.vuejs.org/) (Javascript Framework)
* [Typescript](https://www.typescriptlang.org/) (Javascript Extension)
    * [Eslint](https://eslint.org/) (Javascript Linter)
* [Jest](https://jestjs.io/) (Unit Testing Framework)
* [Docsify](https://docsify.js.org/#/) (Documentation Generator)
* Documentation:
    * MIT License
    * Contributing Guidelines
    * Code of Conduct
    * Pull Request Template
    * Bug Report Template
    * Feature Request Template

**Note: Only you and your team know what tools and conventions work best for your project, but you
are free to use this as a starting point if this is helpful to you. Feel free to add, remove, or
modify any of the existing dependencies or documents included in this package. The purpose of this
project is to make the process of getting an open source project in Vue 3 started quickly and
easily, and is in no way intended to force your team into using any tools or conventions that do
not serve your project's specific needs.**

To see the full list of dependencies in this project, please visit [package.json](package.json),
and refer to the dependencies. If you do not need, and would like to uninstall any of these
packages, please run one of the commands in your terminal:
```
cd <project-repo>
npm uninstall <package-name>
```

---

## Getting Started

### Update the names of some files:
```
root > README.md                          ===> delete or rename
/templates/ > README_TEMPLATE.md          ===> rename to 'README.md'
```

### Update the content of some files: (highlighted in <span style="color:red">red</span>)
```
/templates/ > LICENSE.md                  ===> [COMPANY-NAME] (1)
/templates/ > CONTRIBUTING.md             ===> [PACKAGE-NAME] (5)
/templates/ > README_TEMPLATE.md          ===> [COMPANY-NAME] (2), [WEBSITE-URL] (1), [YEAR] (1)
/docs/ > README.md                        ===> [COMPANY-NAME] (1)
```

### Update the location of some files:
```
/templates/ > README_TEMPLATE.md          ===> root
/templates/ > CODE_OF_CONDUCT.md          ===> root
/templates/ > LICENSE.md                  ===> root
/templates/ > CONTRIBUTING.md             ===> /.github/
/templates/ > /ISSUE_TEMPLATE/            ===> /.github/
/templates/ > PULL_REQUEST_TEMPLATE.md    ===> /.github/
```
These files have been temporarily stored in the templates file for package simplicity.
Feel free to delete the `/templates` directory after completing this step.

### Install necessary dependencies:
```
npm install
```

### Compile (with hot-reloads) for development
```
npm run serve
```

NOW YOU'RE READY TO GO!

---

## Testing
In the event that you want to integrate testing into your package, this package is set up to include
Jest, a javascript testing framework, which allows you and your team to write, and execute
automated unit tests for your project.

This package is one of the most popular automated testing frameworks on Github, and works pretty
much right out of the box.

If you wish to expand on the test suite, make sure to add all of your test files to the `/tests`
directory, so Jest can automatically pick them up.

To run your automated tests, just run the commands below in your terminal:
```
cd <repo-name>

npm run test
```

[Full Documentation](https://jestjs.io/)
---

## Documentation
This package is set up to use Docsify, a documentation generator that creates a website portal for
you and your team to view all of your documentation automatically.

Your documentation README files are located in the `/docs` directory.
```
/docs/README.md                 ==> landing page for your documentation portal
/docs/_sidebar.md               ==> displays your documentation archictecture. (manually updated)
/docs/changelog.md              ==> references your documentation updates (manually updated)
/docs/customization/            ==> example folder
/docs/getting_started/          ==> example folder
/docs/guides/                   ==> example folder
```

In order to view your documentation, just run the commands below in your terminal:
```
npm i docsify-cli -g

cd <repo-name>/docs

docsify serve
```
View your documentation at: `http://localhost:3000`

[Full Documentation](https://docsify.js.org/#/)

---

## Open Source Project References
For more information on best practices, and how to get your open source project started, please
feel free to visit one of the following resources below:

* [Open Source Guides](https://opensource.guide/starting-a-project/)
* [Github Learning Lab - Create an open source program](https://lab.github.com/githubtraining/create-an-open-source-program)
