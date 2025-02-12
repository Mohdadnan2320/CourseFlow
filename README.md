# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# CourseFlow

## Installation
1. Install dependencies:
   ```sh
   npm install
   ```

2. Add Firebase Realtime Database secrets in the `.env` file.

## Usage
To run the project, use:
   ```sh
   npm run dev
   ```

## Project Structure
- **Main Code**: The main logic is in `App.jsx`, where all routes are dynamically connected.
- **Components**:
  - Navbar
  - SearchBar
  - CourseCard
  - StudentDashboard
  - ProgressBar
- **Pages**: Various pages where components are linked together.

## Features
- User-friendly UI for browsing and enrolling in courses.
- Real-time course progress tracking.
- Firebase integration for storing and retrieving data.
- Fully responsive design.

