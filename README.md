# eConsul tracker

React + TypeScript + Vite App that helps users track their visa status.

---

### Table of Contents

- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Development](#development)
- [Resources](#resources)

---

### Prerequisites

- _nodejs@ 22.14.0 and up_
- _npm@ 11.3.0 and up_

---

### Tech Stack

- [React 19](https://react.dev/reference/react) - Front-End library
- [Typescript](https://www.typescriptlang.org/) - Strongly typed programming language
- [Vite](https://vite.dev/) - Build tool
- [Tailwindcss 3](https://v3.tailwindcss.com/) - CSS framework
- [Tanstack Query](https://tanstack.com/query/latest) - async state manager

---

### Getting Started

1\. Clone repository from github:

```sh
git clone https://github.com/giorgio324/econsul-tracker.git
```

2\. install dependencies.

```sh
npm install
```

3\. Go to the root of your project and create .env file.

```sh
touch .env
```

---

After creating **.env** file add environment variables:

---

**Backend URL:**

> VITE_API_URL=YOUR_API_BASE_URL

---

after setting up **.env** file, execute:

```sh
npm run build
```

This will build project files and prepare it for deployment.

### Development

You can run npm's built-in development server by executing:

```sh
  npm run dev
```

### Resources

- [Figma](https://www.figma.com/design/HgElsDGjQhy4LEW9u86wOM/Tracking-tool?node-id=0-1&p=f) - UI Design
