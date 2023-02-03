# Chase Tech task

So for the task I decided to use [webdriverio version 8](https://webdriver.io/)

## Structure

```
└── e2e
    ├── README.md
    ├── allure.js
    ├── features
    │   ├── step-definitions
    │   │   └── steps.ts
    │   └── valid-news.feature
    ├── helpers
    │   └── index.ts
    ├── package-lock.json
    ├── package.json
    ├── pages
    │   ├── google
    │   │   ├── search.page.ts
    │   │   └── searchResults.page.ts
    │   └── guardian
    │       ├── article.page.ts
    │       └── news.page.ts
    ├── tsconfig.json
    └── wdio.conf.ts
```

## Pre-requisites

```
NodeJS v18.13.0
Java 19.0.2
Chrome browser 109.0.5414.119
```

## To run the tests

```shell
cd e2e
npm install
npm test

# on completion of tests run below command to launch allure report
npm run report
```

## Approach

As mentioned earlier I am using webdriverio v8 with the cucumber framework. The configuration can be found in the `./e2e/wdio.conf.ts` file

I used typescript as instructed in the guidance

Feature file and step definitions can be found in [e2e/features](e2e/features)

Page objects are available in [e2e/pages](e2e/pages)

Helpers in [e2e/helpers/index.ts](e2e/helpers/index.ts)

I have written 2 scenarios 1 for a valid news scenario and one for fake however, as I am not in control of the test data in a controlled enviroment it is impossible to write both scenarios pass

The algorithm I'm using to decide if the articles match is a simple string equals comparing the string from guardian news to that from the google result links.

If I had time I would have improved the solution to use a Natural Language Processing to compare the strings for similarity. It isnt an area I am vastly experienced in and so decided to skip
