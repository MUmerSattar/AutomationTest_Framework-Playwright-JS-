# 🚀 Playwright End-to-End Automation Framework

## 📌 Project Overview

This project is an **End-to-End (E2E) Test Automation Framework** built using **Playwright with JavaScript**. It simulates real user behavior on a web application including **Signup, Login, and Logout** flows.

The framework validates both **positive and negative scenarios** and ensures that user registration and authentication functionalities work correctly.

---

## 🎯 Objectives

* Automate real user flows (Signup, Login, Logout)
* Validate successful and failure scenarios
* Ensure application reliability
* Implement reusable and scalable architecture
* Integrate with CI/CD pipeline

---

## 🧰 Tech Stack

* **Playwright** (Automation Framework)
* **JavaScript (Node.js)**
* **GitHub Actions** (CI/CD)

---

## 📁 Project Structure

```
.
├── tests/
│   ├── auth/              # Login, Signup, Logout tests
│   ├── negative/          # Negative scenarios
│   ├── e2e/               # Full user journey tests
│
├── pages/                 # Page Object Models
│   ├── LoginPage.js
│   ├── SignupPage.js
│   ├── DashboardPage.js
│
├── fixtures/
│   └── baseTest.js        # Custom fixtures for reusable setup
│
├── utils/
│   ├── helper.js          # Utility functions (toast handling, waits)
│   └── testData.js        # Test data
│
├── playwright.config.js   # Playwright configuration
├── package.json           # Dependencies & scripts
├── .github/workflows/     # CI/CD pipeline
```

---

## 🧪 Test Scenarios

### ✅ End-2-End Scenarios

* User can register successfully
* User can login with same registered credentials
* User can logout successfully

### ✅ Positive Scenarios

* User can register successfully
* User can login with valid credentials
* User can logout successfully

### ❌ Negative Scenarios

* Login with invalid credentials
* Login with unregistered user
* Signup with invalid input data
* Missing required fields validation

---

## 🧱 Framework Design

### 🔹 Page Object Model (POM)

* Separates UI locators and actions from test logic
* Improves maintainability and reusability

### 🔹 Fixtures (baseTest.js)

* Provides reusable page objects
* Keeps test files clean and minimal

### 🔹 Utilities

* Handles dynamic elements like toast notifications
* Avoids flaky tests using smart waits

---

## ▶️ How to Run the Project

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Run all tests

```bash
npx playwright test
```

### 3️⃣ Run in headed mode

```bash
npx playwright test --headed
```

### 4️⃣ View HTML report

```bash
npx playwright show-report
```

---

## 🌐 Cross-Browser Testing

The framework supports execution on:

* Chromium
* Firefox
* WebKit

Configured via `playwright.config.js`.

---

## 📱 Mobile Testing

Playwright supports mobile emulation, enabling testing on different screen sizes and devices. (If website is optimized for mobile screens)

---

## 🔄 CI/CD Integration

This project uses **GitHub Actions** for Continuous Integration.

### Workflow Features:

* Runs tests automatically on every push
* Installs dependencies
* Executes Playwright tests

Workflow file:

```
.github/workflows/playwright.yml
```

## 📊 Test Cases

[Automation Test Cases.xlsx](https://github.com/user-attachments/files/26793253/Automation.Test.Cases.xlsx)

---

## 📊 Reporting

Playwright provides built-in HTML reports for test results:

```bash
npx playwright show-report
```

---

## ⚡ Key Highlights

* Clean and scalable architecture
* Reusable Page Object Model
* Dynamic test data handling
* Robust validation of UI behavior
* CI/CD ready

---

## 🚀 Conclusion

This framework ensures reliable end-to-end testing by simulating real-world user interactions. It improves software quality and integrates seamlessly into modern development workflows.

---

## 👨‍💻 Author

**Umer Sattar**
