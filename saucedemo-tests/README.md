# Sauce Demo Cypress Tests

This suite is covering purchase flow on https://www.saucedemo.com/ using Cypress 

See [docker-compose.yml](docker-compose.yml) 
second container has [Cypress tests](e2e/Dockerfile).



## Use

1. build the containers with `npm run build`
2. start the web application and run Cypress tests with `npm run up`

## More info

- [Cypress Docker docs](https://docs.cypress.io/examples/examples/docker)
- [Cypress continuous integration docs](https://on.cypress.io/ci)
- [docker-compose networking](https://docs.docker.com/compose/networking/)
- Read the excellent [End-to-End Testing Web Apps: The Painless Way](https://mtlynch.io/painless-web-app-testing/)

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
