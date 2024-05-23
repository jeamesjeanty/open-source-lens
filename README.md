# Open Source Lens

Build a web application of the Open-Source Lens, empowering users to quickly explore the landscape of GitHub organizations. Please add tests (a list of manual tests is fine) performed to test your application, including happy path and error scenarios.

## Getting Started

These instructions will guide you through setting up the project locally for development and testing purposes.

### Prerequisites

## Backend Setup

#### Navigate to the backend directory:

```bash
cd backend
```

#### Install dependencies:

```bash
npm install
```

#### Start the server:

```bash
npm start
```

#### This will run the backend on http://localhost:8080.

## Frontend Setup

#### Set up environment variables:

Create a .env file in the frontend directory and add the following:

```bash
REACT_APP_API_URL=http://localhost:8080
```

#### Navigate to the frontend directory:

```bash
cd ../frontend
```

#### Install dependencies:

```bash
npm install
```

#### Start the React application:

```bash
npm start
```

#### This will run the app in development mode. Open http://localhost:3000 to view it in the browser.

#### Running the Tests

Navigate to the frontend directory if not already there, and run the following command to execute the tests:

```bash
npm run test
```
