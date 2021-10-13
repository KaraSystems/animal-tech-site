# Uzumaki Application
<img src="src/assets/images/logo.svg">
<br/>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.


---

Summary
=======
<!--ts-->

- [Board of project](#board-of-project)
- [Install](#install)
  - [Access the app](#access-the-app)
- [Dependence of project](#dependence-of-project)
  - [Jasmine](#jasmine)
  - [ESLint](#eslint)
  - [Husky](#husky)
  - [Commitlint](#commitlint)
  - [GitHub Workflow](#gitHub-workflow)
- [Build](#Build)
  <!--te-->
---

Board of Project
================
To access board [click here](https://trello.com/b/pGy353KN/uzumaki).

---

Install
==========
For to execute the project you need to have `npm` in your computer.
<br>
You need to clone the project repository and run this command in the project folder:
```sh
npm install
```
Then run this command

```sh
ng serve
```

Access the app
-------------------
To access app use this url: [http://localhost:4200](http://localhost:4200).

---
Dependence of project
=======================
| Name                                                               | For                             |
| ------------------------------------------------------------------ | ------------------------------------ |
| [Karma](https://karma-runner.github.io)                            | Test in Front-End                  |
| [ESLint](https://eslint.org/docs/user-guide/getting-started)       | Standard code                    |
| [Husky](https://typicode.github.io/husky/#/)                       | Git hooks                            |
| [Commitlint](https://github.com/conventional-changelog/commitlint) | Standard Commits                 |
| [GitHub Workflow](https://docs.github.com/en/actions/quickstart#creating-your-first-workflow)                             | Run check on pull request |

Jasmine
-------
To run test `npm run test`.

ESLint
------
To run lint `npm run lint`.

Husky
-----
Run check `pre-commit` end `pre-push` to help ensure code standard and quality.

Commitlint
----------
For ensure `commits` standard.

GitHub Workflow
---------------
Auto run when a ***Pull Request*** is created on GitHub.

- **Lint** - Run script `workflow:lint`.
- **Testes** - Run script `workflow:test`.

---

Build
=====
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
