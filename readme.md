## https://github.com/peterkang91/cvs-stencil-testing
# Basic Testing Guidline for StencilJS Components
Writing tests for StencilJS components have numerous benefits to our team.
- Makes sure the code actually works.
- Reduces defect rates at the cost of a moderate increase in initial development effort.
- Ensures that all code meets quality standards before it gets deployed.
- Saves time because we don't need to manually test each functionalities.
- Helps developers to understand and debug the codebase by reading the tests (Individual test can be provided as documentation).
- Helps developers to think through the design of the application and what has to be done.
- and many more...

This repository includes simple component, rendering, state, prop, function, event and api-mock with detail comments.

# E2E Testing
End-to-end tests focus on how the components are rendered in the DOM and how the individual components work together. For example, when my-component has the X attribute, the child component then renders the text Y, and expects to receive the event Z.

https://stenciljs.com/docs/end-to-end-testing

# Unit Testing
Unit tests focus on testing a component's methods in isolation. For example, when a method is given the argument X, it should return Y.

https://stenciljs.com/docs/unit-testing

# How To Run Test
You can use 
```
npm run test
```

OR use watch to watch any changes
```
npm run test.watch
```
npm run test.watch will give you different usage options
```
 › Press f to run only failed tests.
 › Press o to only run tests related to changed files.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```
OR run the test individually with relative path
```
npm run test src/components/basic-function/test/basic-function.e2e.ts
```