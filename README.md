QA Responsive UI Testing - OrangeHRM 💻📱
This project automates UI tests on OrangeHRM with a focus on:

✅ Responsive user experience (desktop, tablet, mobile)

✅ Negative login flow validation

✅ Visual screenshots for each device

✅ Professional HTML report generated with Mochawesome

📁 Project Structure

responsive-ui-testing-orangehrm/
│
├── cypress/
│   ├── e2e/
│   │   ├── login-responsive.cy.js       # Responsive tests
│   │   └── login-negative.cy.js         # Negative login tests
│   ├── support/
│   │   └── commands.js
│   ├── screenshots/                     # Auto screenshots by Cypress
│   └── reports/                         # HTML test report
│
├── cypress.config.js                   # Cypress config file
├── package.json                        # Project dependencies
├── README.md                           # This file


🚀 Test Scenarios
🧪 Responsive Tests (login-responsive.cy.js)
Emulates macbook-15, ipad-2, and iphone-6

Validates successful login for each viewport

Auto screenshot after each test

⚠️ Negative Tests (login-negative.cy.js)
Invalid credentials

Empty fields

Error message validation

📊 Test Report
Test results are generated with Mochawesome in HTML format.
Location:

cypress/reports/index.html


Open it in your browser after executing the tests to view full results.

▶️ How to run tests
Install dependencies:

- npm install

Run all tests in headless mode:

-npx cypress run

Open Cypress in interactive mode:

-npx cypress open


⚠️ Notes on mobile device failures (iPad and iPhone)
During testing, the cases for ipad-2 and iphone-6 failed due to a specific condition in the OrangeHRM app:

The element <a.oxd-main-menu-item.active> is not visible because its container has overflow: hidden and size 0 x N, which prevents Cypress from detecting it.

This failure:

Is not a bug in the test code.

Is a responsiveness limitation in the real system.

Shows how the UI can break or behave unexpectedly on smaller screens.

🧪 This kind of failure is actually valuable in QA, as it highlights design flaws that affect real users on mobile devices.




👨‍💻 Author
Cristian Camilo Delgado
Software Programming Technician - SENA
🚀 Actively looking for a QA Automation opportunity
📫 GitHub: [Hyokenhi](https://github.com/Hyokenhi)
