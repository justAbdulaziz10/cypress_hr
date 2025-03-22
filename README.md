# Cypress HR Project

This is a Cypress HR project for automated testing. It includes all the necessary dependencies and configurations to get started with Cypress.

## Prerequisites

cypress_hr/
├── e2e/                  # End-to-end test files
│   └── AddDeleteEmployee.cy.js   
│   └── job.cy.js
│   └── myInfo.cy.js
│   └── all.cy.js
├── fixtures/             # Test data files
│   └── profilepic.jpg
│   └── sampleCV.docx
├── node_modules/             # Dependencies (ignored by Git)
├── package.json              # Lists dependencies and scripts
├── package-lock.json         # Locks dependency versions
├── README.md                 # Project documentation
└── cypress.config.js         # Cypress configuration file

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
