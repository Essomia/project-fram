# Project FRAM

A flexible JavaScript/TypeScript boilerplate for modern Node.js and React projects.

## Features

- 🛠️ TypeScript & JavaScript support
- 📦 ESM and CommonJS compatibility
- 🔍 Strong linting with ESLint v9+ using new flat config format
- ✨ Code formatting with Prettier
- 🧪 Testing with Jest
- 🚀 Fast builds with esbuild
- 🔄 Automatic dependency updates with Dependabot
- 📈 Code coverage reporting
- 🔒 Git hooks with Husky and lint-staged
- 👷 CI/CD pipeline with GitHub Actions
- 📁 Well-structured project organization

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
- `npm run build` - Build the application with esbuild
- `npm run lint` - Check for linting errors
- `npm run lint:fix` - Fix linting errors
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run prepare` - Install Husky hooks automatically after install

## Project Structure

```
project-fram/
├── .github/            # GitHub workflows and configurations
│   ├── dependabot.yml  # Dependabot configuration
│   └── workflows/      # GitHub Actions workflows
├── .husky/             # Git hooks (pre-commit, etc.)
│
├── coverage/           # Test coverage reports
├── src/                # Source code
│   ├── __tests__/      # Test files
│   ├── utils/          # Utility functions
│   └── index.js        # Application entry point
├── .env                # Environment variables (development)
├── .env.example        # Example environment variables template
│
├── .editorconfig       # Editor configuration
├── .eslintrc.config.mjs # ESLint configuration (flat config format)
├── .gitignore          # Git ignore rules
├── .prettierrc.js      # Prettier configuration
├── jest.config.cjs     # Jest configuration
├── jest.setup.js       # Jest setup file
├── LICENSE             # MIT License
├── nodemon.json        # Nodemon configuration for development
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## Using TypeScript

The project is set up for TypeScript development with proper configurations:

- TypeScript files can be placed anywhere in the `src` directory
- Import aliases are configured (e.g., `@/utils` points to `src/utils`)
- Both `.ts` and `.js` files are supported

Example:

```typescript
// Using utility functions from the project
import { isValidString, formatDate } from '@/utils/helpers';

// Your code here
```

## Environment Variables

Environment variables are loaded automatically from `.env` files:

1. Create a `.env` file based on `.env.example`
2. Add your environment variables
3. Access them in code via `process.env.VARIABLE_NAME`

## For React Projects

For React projects, additional dependencies and configurations would be needed:

```bash
npm install react react-dom
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
