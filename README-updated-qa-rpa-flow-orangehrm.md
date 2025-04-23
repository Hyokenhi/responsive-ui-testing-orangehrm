
# QA RPA Flow OrangeHRM 🚀

**`qa-rpa-flow-orangehrm`** is a Robotic Process Automation (RPA) testing project for the **OrangeHRM** application. This project automates a complete user flow using **Cypress**, including end-to-end tests for key functionalities like login, employee management, and other core processes. The project ensures that these actions are performed correctly across different devices, making sure the system remains stable and functional.

This project aims to automate repetitive user flows, improving efficiency and consistency in testing. The tests simulate real user actions, such as logging in, managing employees, and other workflows, ensuring that the system responds as expected.

---

## 📁 Project Structure

```
qa-rpa-flow-orangehrm/
│
├── .github/
│   └── workflows/               # GitHub Actions workflows
│
├── cypress/
│   ├── e2e/
│   │   └── rpa-flow.cy.js       # Cypress RPA Flow Test
│   ├── reports/                 # Mochawesome Reports
│   ├── screenshots/             # Cypress Screenshots
│   └── cypress.config.js        # Cypress configuration
│
├── node_modules/                # Installed node modules
├── ui-tests/                    # UI Testing Resources
├── .gitignore                   # Git ignore file
├── README.md                    # This file
├── package-lock.json            # NPM lock file
├── package.json                 # NPM configuration file
├── trigger.txt                  # Trigger file for automation
└── merged-output.json           # Merged test output (optional)
```

---

## 🚀 How to Run the Tests

### ✅ 1. RPA Test (Cypress)

Run the Cypress tests with the following command:

```bash
npx cypress open  # Opens Cypress UI for manual test execution
```

For headless testing:

```bash
npx cypress run --headless --browser chrome
```

This will execute the automated RPA flow, simulating user actions like login and managing employees in the **OrangeHRM** application.

---

## ⚙️ CI with GitHub Actions

Every time you push to `main`, **GitHub Actions** automatically:

- Runs the RPA flow tests in Cypress.
- Generates a visual HTML report for the tests.
- Uploads the report as a downloadable artifact.

You can monitor the execution of your workflows under the [Actions](https://github.com/Hyokenhi/qa-rpa-flow-orangehrm/actions) tab in your GitHub repository.

---

## ❗ Note on Cypress

During UI testing, **the login test may fail randomly** due to internal errors in the **OrangeHRM** demo app.  
This is not a problem with the test itself, but with the unstable demo environment provided by OrangeHRM.

---

## 👤 Author

**Cristian Camilo Delgado**  
👨‍💻 Software Programming Technician - SENA  
🚀 Passionate about automation, RPA, and continuous learning, aiming to grow in the field of QA Automation.  
💡 Committed to enhancing software quality through effective and automated testing solutions.

📬 Contact: [LinkedIn](https://www.linkedin.com/in/Hyokenhi/) | GitHub: [@Crisweisk](https://github.com/Hyokenhi)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
