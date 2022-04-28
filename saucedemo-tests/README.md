# Sauce Demo Cypress Tests

This suite is covering purchase flow on https://www.saucedemo.com/ using Cypress 

Main test logic located in [purchase_flow.spec.js](e2e/cypress/integration/purchase_flow.spec.js).
Suite uses [docker-compose.yml](docker-compose.yml) to be executed agaist Chrome and 
Edge browsers using container as described in [Dockerfile](e2e/Dockerfile).

Following artifacts will be generated as a result of test run:
- videos will be stored in `videos` folder using respective `chrome` and `edge` subfolders
- screenshots for failed tests will be saved to `screenshots` folder
- junit xml report can be found in `results` folder

## Use

1. build the containers with `npm run build`
2. run Cypress tests with `npm run up`

## More info

- [Cypress Docker docs](https://docs.cypress.io/examples/examples/docker)
- Read the excellent [End-to-End Testing Web Apps: The Painless Way](https://mtlynch.io/painless-web-app-testing/)


## Ideas to improve

1. More browsers can be added
2. It's maybe good idea to move selectors to separate module
3. Configuration for local execution can be added to simplify troubleshooting
