<h1 align="center"> 👍 Welcome to rule-of-thumb 👎</h1>
<h2 align="center"><a  href="https://ruleofthumb.netlify.com"> ✨ Live Demo</a></h2>

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/rankill/RuleOfThumb#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/rankill/RuleOfThumb/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
</p>

[![Angular](https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/002/square_256/angularjs.png "Angular" )](https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/002/square_256/angularjs.png "Angular" ) [![Rxjs](https://gblobscdn.gitbook.com/spaces%2F-LwY_OXUQHvmdEoy0xNa%2Favatar.png?generation=1579380746835203&alt=media "Rxjs" )](https://gblobscdn.gitbook.com/spaces%2F-LwY_OXUQHvmdEoy0xNa%2Favatar.png?generation=1579380746835203&alt=media "Rxjs" ) [![Sass](https://cdn.iconscout.com/icon/free/png-256/sass-226054.png "Sass" )](https://cdn.iconscout.com/icon/free/png-256/sass-226054.png "Sass" )[![KarmaJasmine](https://bitrise-steplib-collection.s3.amazonaws.com/steps/karma-jasmine-runner/assets/icon.svg "KarmaJasmine" )](https://bitrise-steplib-collection.s3.amazonaws.com/steps/karma-jasmine-runner/assets/icon.svg "KarmaJasmine" ) 


## Description

For the development of the prototype the following tech stack was selected:

- **Angular 8**
   - **[In Memory Web Api](https://github.com/angular/in-memory-web-api "In Memory Web Api")**, An in-memory web api for Angular demos and tests that emulates CRUD operations over a RESTy API.

  - IndexedDB to persist the votes made and obtain them after reloading the page

- **Sass**, Preprocessor to implement CSS in a structural and optimal way, for future growth the 7-1 pattern of Sass is proposed

- **Karma / Jasmine**

###Layout - Responsive

Mobile-first strategy was used for responsive implementation to generate a scalable architecture at the design level

### Architecture

The architecture in general allows to maintain and scale the project in a simple way, dividing this into three main folders:
 - **Shell**: Main component where the header and footer are rendered and any component that you want to keep throughout the navigation

- **Shared**: It will contain all the elements shared by the different modules of the platform, such as components, services, policies, etc.

- **Modules**: They are the main modules (Pages) of the platform


# Project Setup

### Install

```sh
npm install
```

### Usage

```sh
npm run start
```

### Run tests

To carry out the unit tests, **Jasmine** was used as a practice to perform BDD and **Karma** as a test runner. Unit tests were carried out for the main modules, generating in total:  **24** specs.

```sh
npm run test
```
---

## Author

👤 **Luis Saraza**

* Website: https://www.kickresume.com/cv/luis_saraza/
* Github: [@rankill](https://github.com/rankill)
* LinkedIn: [@luissaraza](https://linkedin.com/in/luissaraza)
