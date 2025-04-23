
# QA RPA Flow OrangeHRM 🚀

**`qa-rpa-flow-orangehrm`** is an advanced **Robotic Process Automation (RPA)** testing project designed to automate user workflows for the **OrangeHRM** application. By utilizing **Cypress** for end-to-end (E2E) testing, this project ensures that core user operations such as logging in, employee management, and other administrative tasks are tested consistently across different devices and screen sizes. 

This project not only simulates real user interactions but also automates repetitive testing tasks, making it a valuable tool for enhancing the quality assurance process, improving test coverage, and increasing the efficiency of the testing lifecycle. It is designed to integrate seamlessly into a DevOps pipeline, supporting **CI/CD** workflows and providing automated reports and feedback.

## 🔍 Project Overview

The project focuses on automating and validating the following user flows for the **OrangeHRM** application:

- **Login Flow**: Ensures that users can successfully log in with valid credentials.
- **Employee Management Flow**: Validates that users can add, update, and delete employee records within the system.
- **Cross-Device Testing**: Ensures that the application performs well across different screen sizes and devices (desktop, tablet, and mobile).
- **Automated Reporting**: Generates detailed test execution reports using **Mochawesome** for easy tracking and analysis.

The tests are designed to run in **headless mode** for automation, but Cypress also provides an interactive mode for manual debugging and inspection.

---

## 📁 Project Structure

The project is organized to facilitate easy navigation and maintainability, with the following structure:

```
qa-rpa-flow-orangehrm/
│
├── .github/
│   └── workflows/               # GitHub Actions workflows
│
├── cypress/
│   ├── e2e/
│   │   └── rpa-flow.cy.js       # Cypress RPA Flow Test (Automated User Flow)
│   ├── reports/                 # Mochawesome Reports
│   ├── screenshots/             # Cypress Screenshots
│   └── cypress.config.js        # Cypress configuration file
│
├── node_modules/                # Node modules for Cypress and other dependencies
├── ui-tests/                    # UI Testing Resources (if applicable)
├── .gitignore                   # Git ignore file
├── README.md                    # This file
├── package-lock.json            # NPM lock file
├── package.json                 # NPM configuration file
├── trigger.txt                  # Trigger file to initiate automation
└── merged-output.json           # Merged test output (optional, for further analysis)
```

---

## 🛠️ Technologies Used

- **Cypress**: For end-to-end UI testing, enabling the automation of user interactions and validation of expected outcomes across devices and screen sizes.
- **GitHub Actions**: For CI/CD integration to automate the testing process on every code change or pull request.
- **Mochawesome**: A powerful test reporter for generating beautiful HTML reports with detailed test logs and results.
- **Node.js**: A JavaScript runtime required for running Cypress and managing the project dependencies.
- **NPM**: For managing project dependencies and scripts.

---

## 🚀 How to Run the Tests

Follow these steps to set up and run the tests locally or within a CI/CD pipeline.

### ✅ 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/Hyokenhi/qa-rpa-flow-orangehrm.git
cd qa-rpa-flow-orangehrm
```

### ✅ 2. Install Dependencies

Run the following commands to install the necessary dependencies for Cypress and other tools:

```bash
# Install Cypress dependencies
npm install cypress

# Install other dependencies (if any)
npm install
```

### ✅ 3. Running the Tests Locally

#### UI Test (Cypress)

To open Cypress and run the tests interactively:

```bash
npx cypress open  # Opens Cypress UI for manual test execution
```

For headless testing (ideal for CI/CD):

```bash
npx cypress run --headless --browser chrome
```

#### Generate the Mochawesome Report

To generate the visual test report after running the tests:

```bash
npx cypress run --headless --browser chrome --reporter mochawesome
```

The report will be saved in the `cypress/reports/` folder in HTML format.

---

## ⚙️ CI/CD Integration with GitHub Actions

### Automated Test Execution

Each time you push to the `main` branch, **GitHub Actions** automatically:

- Runs the automated tests defined in **Cypress**.
- Generates a **Mochawesome** HTML report.
- Uploads the test results as artifacts for easy access.

### Workflow File (`.github/workflows/ci.yml`)

```yaml
name: QA RPA Flow Automation

on:
  push:
    branches:
      - main

jobs:
  run-tests:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Run Cypress tests
        run: npx cypress run --headless --browser chrome --reporter mochawesome
      - name: Upload test reports
        uses: actions/upload-artifact@v2
        with:
          name: mochawesome-report
          path: cypress/reports/*.html
```

The results of the tests can be accessed via the **Actions** tab in your GitHub repository.

---

## 📝 Test Details

- **RPA Flow Test**: Automates the login process and validates the ability to add, update, and delete employee records.
- **Cross-Device Testing**: Ensures responsiveness and proper layout handling across various screen sizes.
- **Mochawesome Reports**: Detailed test logs, visual reports, and failure details are automatically generated.

---

## ❗ Important Notes

- **Demo Environment**: The **OrangeHRM** demo environment may occasionally experience instability, which could cause test failures (especially during login or user management tests). This is not an issue with the automation itself but rather with the unstable demo environment.
  
- **Headless Testing**: Running tests in headless mode is recommended for automation pipelines. However, if you want to interact with the tests manually, you can use Cypress’s UI mode.

---

## 👤 Author

**Cristian Camilo Delgado**  
👨‍💻 Software Programming Technician - SENA  
🚀 Passionate about automation, RPA, and continuous learning, aiming to grow in the field of QA Automation.  
💡 Committed to improving software quality through effective and automated testing solutions.

📬 Contact: [LinkedIn](https://www.linkedin.com/in/Hyokenhi/) | GitHub: [@Hyokenhi](https://github.com/Hyokenhi)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
