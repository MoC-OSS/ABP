## Summary

This is a template project with some guide that shows how to tune Cypress to higher level in context of writing more user-oriented and easier to use High-Level System End-to-End tests. It often uses ideas of the Selenides family of Web UI Testing Frameworks (like Selenide in Java, Selene in Python, NSelene in C#, SelenideJs in JavaScript).

## Main features overview

Main features added:
- Selenide/Selene style aliases to existing conditions: .should(have.text, 'cleaner') over `.should('have.text', 'dirty')`
    - more custom elements collection conditions like texts, exactTexts from Selenide
- Selene style aliases: `browser.*` over `cy.*`, `s(selector).get()` over `cy.get(selector)`
- lazy elements for basic more common use cases: `const clean = s('#clean')` over `const bulky = () => cy.get('#bylky')`
    - to make code more concise by removing Cypress limitation of not being able to store elements in vars

## Intro

**Given** Cypress…:

* pros
    * Shift-left oriented, force you to write and learn how to write oprimised efficient tests
        * Best Docs in class to teach you how to do it
            * An Example/Recipe for almost any case
    * State of the art Debugging
    * ~~almost~~ no redundant async/await in usage
* cons
    * overblown not consistent (with both itself and common JS libs) and not obvious API, you have to read enormous documentation to learn each nuances
        * while having access to all methods – not everything work as you expected depending from context, sometimes – just do not work
        * more than one way (often not consistent with each other) to do things (especially when working with aliases)
    * lower level of API style, while the tests to be written should be normally more high level and user oriented
        * just a few examples:
            *  `cy.get(selector)` instead of something like `element(selector)`,
            * `cy.visit(url)` instead of `browser.visit(url)`, or `page.load(url)`
    * has no lazy element builders
        * selectors can't be easily broken into parts for easier support during "healing selectors on change"
        * when broken – the waiting will not work as you expect ([only the last command is retried](https://docs.cypress.io/guides/core-concepts/retry-ability#Only-the-last-command-is-retried)) and tests become fragile, so in complex UI scenarios you kind of forced [allways to stick to long merged selectors](https://docs.cypress.io/guides/core-concepts/retry-ability#Merging-queries) or overblown your code with [explicit assertions](https://docs.cypress.io/guides/core-concepts/retry-ability#Alternate-commands-and-assertions)
    * "dirty" API like in `.should('have.text', 'dirty')` instead of something like  `.should(have.text, 'cleaner')`
        * such API is also much harder to extend keeping Autocomplete and Hints working as you expect

## Notes on tech stack

* This is a JavaScript project. TypeScript's *.d.ts files for main Cypress API extensions are used here only to improve autocomplete feature in popular editors, like Visual Studio Code, that have typescript support buit in.
    * In general, using TypeScript for the majority of "test automation" projects might be preferrable for an «average» user, because would make "usage" easier on both side - «implementing framework» and «coding actual tests» (with support of Autocomplete, Hints and some more DSLish style when using Annotations)
    * But here the idea was to show the kitchen from the very low level without much of TypeScript stuff;), focusing on raw JavaScript features and its object-oriented nature (without classes;)), that are also pretty powerfull in context of building some DSL tuned to the context of test automation

add eslint

```shell
npm install eslint --save-dev && npm install eslint-plugin-cypress --save-dev && npm install --save-dev eslint-plugin-chai-friendly && npx eslint --init
```



some links:

* https://github.com/cypress-io/eslint-plugin-cypress



`.eslintrc.json` example:

```json
{
    "plugins": [
        "cypress",
        "chai-friendly"
    ],
    "globals": {
        "cy": true,
        "Cypress": true
    },
    "env": {
        "cypress/globals": true,
        "es2021": true
    },
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "extends": [
        "plugin:cypress/recommended",
        "plugin:chai-friendly/recommended"
    ],
    "rules": {
        "max-len": ["error", { "code": 80, "ignoreComments": true}],
        "cypress/no-pause": "error"
    }
}
```

**P.S** Other Usefull Resources

Read when you need it…


Modules & Globals

* https://basarat.gitbook.io/typescript/project/modules/external-modules
    * https://basarat.gitbook.io/typescript/project/modules/globals
        * https://newbedev.com/create-a-global-variable-in-typescript
            * https://stackoverflow.com/a/56984941/1297371 (https://stackoverflow.com/questions/38906359/create-a-global-variable-in-typescript)
    * https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html
* https://basarat.gitbook.io/typescript/type-system/intro/d.ts


Other usefull resources

* https://github.com/cypress-io/cypress-example-recipes

* https://glebbahmutov.com/cypress-examples/8.6.0/

* https://docs.cypress.io/guides/guides/command-line

## Used Technologies/Tools:

Cypress, Javascript, Node, Allure

## To Run the Test Automation Project Locally:

1) Install Node.js

2) Clone locally the repository and open the project

3) To install node modules run command:

```sh
npm install
```

4) Run cypress UI:

```sh
cypress open
```

5) Run cypress headless:

```sh
npm run cy:run
```

6) To run specific spec use:

```sh
npm run cy:run -- --spec "${pathToSpec}"
```

7) To run specs with specific browser use:

```sh
npm run cy:run cypress run --browser ${browserName}
```

The "browser" argument can be set to chrome, chromium, edge, electron, firefox








