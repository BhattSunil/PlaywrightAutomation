# 🎭 Playwright Automation – Learning Project

This repository contains my **Playwright automation practice project**, created to **learn and understand end-to-end test automation** using **Playwright with JavaScript/TypeScript**.

The project focuses on **UI automation**, **test structure**, **locators**, and **best testing practices** used in real-world automation projects.

---

## 🚀 Tech Stack

- Playwright
- JavaScript
- Node.js
- Git & GitHub
- VS Code
- Linux (Ubuntu)

---

## 🎯 Purpose of This Project

- Learn Playwright automation from scratch
- Understand UI testing concepts
- Practice:
  - Locators (`getByRole`, `locator`, `getByText`)
  - Assertions
  - Test hooks (`beforeEach`, `afterAll`)
  - Page Object Model (POM – upcoming)
- Build a strong automation testing foundation
- Prepare for QA / SDET / Automation Engineer roles

---

## 📁 Project Structure

PlaywrightAutomation/
│
├── tests/ # Test cases
│ ├── login.spec.js
│ ├── homepage.spec.js
│
├── playwright.config.ts # Playwright configuration
├── package.json # Project dependencies
├── .gitignore # Ignored files
└── README.md # Project documentation



2️⃣ Install dependencies
npm install

3️⃣ Install Playwright browsers
npx playwright install

4️⃣ Run all tests
npx playwright test

5️⃣ Run tests in UI mode
npx playwright test --ui

6️⃣ View test report
npx playwright show-report
