<div style="text-align:center" align="center">

![Package Logo](assets/vue-ts-eslint-jest.png)

# Vue 3 Package Starter

Vue Starter Package integrated with Typescript and Eslint

Automated unit testing with Jest

Auto-generated documentation via Docsify

[![Vue](https://img.shields.io/badge/vue-3.0.5-%2342b883)](https://v3.vuejs.org/)
[![Typescript](https://img.shields.io/badge/typescript-4.1.3-blue)](https://www.typescriptlang.org/)
[![Jest](https://img.shields.io/badge/jest-26.6.3-red)](https://jestjs.io/en/)
[![Docsify](https://img.shields.io/badge/docsify-4.11.6-green)](https://docsify.js.org/#/)

</div>



## Getting Started

#### Install necessary dependencies:
```
npm install
```

#### Create new project
```
npx create-vue3-package <repo-name>
```

#### Initiate test suite
```
npm test
```

#### Serve docs
```
npm run docs

visit -> http://localhost:3000
```


## Table of Contents

* [Overview](#vue-3-package-starter)
* [Getting Started](#getting-started)
* [Table of Contents](#table-of-contents)
* [What's in this Package?](#whats-in-this-package)
* [Testing](#testing)
* [Documentation](#documentation)
* [How to Open Source Your Project](#how-to-open-source-your-project)
* [Contributing Guidelines](#contributing-guidelines)
* [Code Of Conduct](#code-of-conduct)
* [Bugs and Feature Requests](#bugs-and-feature-requests)
* [Copyright and License](#copyright-and-license)



## What's in this Package?

```
create-vue3-package
├── templates
│   └── ISSUE_TEMPLATE
│       └── bug_report.md
│       └── feature_request.md
│   └── CODE_OF_CONDUCT.md
│   └── CONTRIBUTING.md
│   └── LICENSE.md
│   └── PULL_REQUEST_TEMPLATE.md
│   └── README_TEMPLATE.md
│   └── src
│       └── main.ts
│       └── main.vue
│   └── tests
│       └── example-ts-file.test.js
│       └── example-vue-file.test.js
│   └── docs
│       └── customization
│           └── configuration.md
│           └── themes.md
│       └── getting_started
│           └── more-pages.md
│           └── quickstart.md
│       └── guides
│           └── deploy.md
│           └── helpers.md
│       └── .nojekyll
│       └── _sidebar.md
│       └── changelog.md
│       └── index.html
│       └── README.md
```



## Testing
To expand on the test suite, add your test files to the `/tests` directory, and Jest will
automatically pick them up.

This package has been pre-configured to test `.js`, `.ts`, and `.vue` files for your convenience.
Please see `/templates/tests` for example implementation. 

To run your automated tests, run the commands below in your terminal:
```
cd <repo-name>

npm test
```
If you would like to have an HTML file generated to view the results in more detail, please
uncomment the line 'html' in `jest.config.js`. Otherwise, the results will be visible in your
terminal.


[Jest Documentation](https://jestjs.io/docs/en/getting-started)



## Documentation
This package is set up to use Docsify, a documentation generator that creates a website portal for
you and your team to view all of your documentation automatically.

Your documentation README files are located in the `/docs` directory.
```
/docs/README.md                 ==> landing page for your documentation portal
/docs/_sidebar.md               ==> displays your documentation archictecture
/docs/changelog.md              ==> references your documentation updates
/docs/customization/            ==> example folder
/docs/getting_started/          ==> example folder
/docs/guides/                   ==> example folder
```

In order to view your documentation, run the commands below in your terminal:
```
npm i docsify-cli -g

cd <repo-name>

npm run docs
```

View your documentation at: `http://localhost:3000`

[Docsify Documentation](https://docsify.js.org/#/quickstart)



## How to Open Source Your Project

If you are looking to open source this project, we've created some template documentation for you
to get the ball rolling:
* MIT License
* Contributing Guidelines
* Code of Conduct
* Pull Request Template
* Bug Report Template
* Feature Request Template


For more information on creating an open source project and best practices, here are some helpful
resources to get you started:
* [Open Source Guides](https://opensource.guide/starting-a-project/)
* [Github Learning Lab - Create an open source program](https://lab.github.com/githubtraining/create-an-open-source-program)



## Contributing Guidelines
Please read through our [contributing guidelines](.github/CONTRIBUTING.md). Included are directions
for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you must include relevant
unit tests. All HTML and CSS should conform to the Code Guide, maintained by Mark Otto.



## Code of Conduct
Please read through our [code of conduct](CODE_OF_CONDUCT.md).



## Bugs and Feature Requests
Found a bug or have a feature request? Please first read the issue guidelines and search for
existing and closed issues.

If your problem or idea is not addressed yet, please
[open a new issue](https://github.com/Anivive/vue-package-starter/issues).



## Copyright and License
Code and documentation copyright 2021 Anivive Lifesciences Code released under the [MIT License](LICENSE.md).

Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/).

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md).
By participating in this project you agree to abide by its terms.



---



Status badges created using [Shields.io](https://github.com/badges/shields).
