
# Responsive UI Testing OrangeHRM 🚀

**`responsive-ui-testing-orangehrm`** automates responsive UI testing for the **OrangeHRM** application across different devices (desktop, tablet, and mobile) using **Cypress**. The goal is to ensure that the application performs well and is visually consistent across various screen sizes and resolutions.

---

## 📁 Project Structure

```
responsive-ui-testing-orangehrm/
│
├── cypress/
│   ├── e2e/
│   │   └── login.cy.js        # UI Cypress Test for Login
│   ├── reports/
│   │   └── index.html         # Mochawesome Report
│   ├── screenshots/           # Cypress screenshots
│   └── cypress.config.js      # Cypress config
│
├── .gitignore                 # Git ignore file
├── README.md                  # This file
├── README_SPA.md              # Single Page Application Readme (if applicable)
├── package-lock.json          # NPM lock file
├── package.json               # NPM configuration file
└── cypress.config.js          # Cypress configuration for the project
```

---

## 🚀 How to Run the Tests

### ✅ 1. UI Test (Cypress)

```bash
npx cypress open  # Opens Cypress UI for manual test execution
```

For headless testing:

```bash
npx cypress run --headless --browser chrome
```

---

## ⚙️ CI with GitHub Actions

Whenever you push to `main`, GitHub Actions automatically:

- Runs the Cypress UI tests for different screen sizes
- Generates a visual HTML report
- Uploads the report as a downloadable artifact

See it under the [Actions](https://github.com/Hyokenhi/responsive-ui-testing-orangehrm/actions) tab.

---

## ❗ Note on Cypress

During UI testing, **the login test may fail randomly** due to internal errors in the OrangeHRM demo app.  
This is not a problem with the test itself, but with the unstable demo environment.

---

## 👤 Author

**Cristian Camilo Delgado**  
👨‍💻 Software Programming Technician - SENA  
🚀 Passionate about automation and continuous learning, seeking a career in QA Automation.  
💡 Committed to improving software quality through disciplined, efficient, and effective testing practices.

📬 Contact: [LinkedIn](https://www.linkedin.com/in/Hyokenhi/) | GitHub: [@Crisweisk](https://github.com/Hyokenhi)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
