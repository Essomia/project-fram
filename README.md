# Project FRAM

A flexible JavaScript boilerplate for modern Node.js and React projects.

## Features

- 🛠️ TypeScript support
- 🧪 Jest for testing
- 📏 ESLint and Prettier for code quality
- 🔄 Automatic dependency updates with Dependabot
- 🚀 CI/CD pipeline with GitHub Actions
- 📦 Common development scripts
- 🌲 Well-structured project organization

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/essomia/project-fram.git your-project-name
cd your-project-name
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start development

```bash
npm run dev
# or
yarn dev
```

## Available Scripts

- `npm start` - Run the application
- `npm run dev` - Run the application with hot-reloading
- `npm run build` - Build the application
- `npm run lint` - Check for linting errors
- `npm run lint:fix` - Fix linting errors
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report

## Project Structure

```
project-fram/
├── .github/            # GitHub workflows and configurations
├── src/                # Source code
│   ├── __tests__/      # Tests
│   ├── config/         # Application configuration
│   ├── utils/          # Utility functions
│   └── index.js        # Application entry point
├── .editorconfig       # Editor configuration
├── .eslintrc.js        # ESLint configuration
├── .prettierrc         # Prettier configuration
├── jest.config.js      # Jest configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## For React Projects

For React projects, additional dependencies and configurations would be needed:

```bash
npm install react react-dom
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
