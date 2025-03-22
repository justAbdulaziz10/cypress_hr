# Cypress HR Project

This is a Cypress HR project for automated testing. It includes all the necessary dependencies and configurations to get started with Cypress.

1. **Project Structure**:
   ```bash
   cypress_hr/
   ├── e2e
   │   ├── AddDeleteEmployee.cy.js
   │   ├── job.cy.js
   │   ├── myInfo.cy.js
   │   └── all.cy.js
   ├── fixtures
   │   ├── profilepic.jpg
   │   └── sampleCV.docx
   ├── node_modules
   ├── package.json
   ├── package-lock.json
   ├── README.md
   └── cypress.config.js

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

2. **Install dependencies:**:
   ```bash
   npm install

3. **Running Tests:**:
   ```bash
   npm run cypress:open #Open Cypress Test Runner
   npm test #Run tests in headless mode

4. **Run:**:
   ```bash
   npx cypress open #run test live
   npx cypress run #take video for the test
