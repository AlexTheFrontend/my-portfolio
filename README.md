# My Portfolio

A modern React-based personal portfolio website with TypeScript support, powered by Bun and Sanity CMS.

## 🚀 Tech Stack

- **React 18** with TypeScript
- **Bun** - Fast JavaScript runtime and package manager
- **Tailwind CSS v4** - Modern utility-first CSS framework
- **Sanity CMS** - Headless content management system
- **React Router** - Client-side routing
- **ESLint + Prettier** - Code quality and formatting

<<<<<<< Updated upstream
### `bun run dev`
=======
## 📦 Prerequisites
>>>>>>> Stashed changes

Make sure you have [Bun](https://bun.sh) installed on your machine:

```bash
curl -fsSL https://bun.sh/install | bash
```

## 🛠 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```

## 🏃‍♂️ Available Scripts

### `bun run dev`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `bun run build`
Builds the app for production to the `build` folder. The build is optimized and minified.

### `bun run test`
Launches the test runner in interactive watch mode.

### `bun run lint`
Runs ESLint to check for code quality issues.

### `bun run format`
Formats code using Prettier.

### `bun run deploy`
Deploys the Sanity studio.

### `bun run generate-types`
Generates TypeScript types from GraphQL schema.

## 🎨 Features

- **Modern Design** - Clean, responsive portfolio layout
- **Content Management** - Easy content updates via Sanity CMS
- **Type Safety** - Full TypeScript support with proper type definitions
- **Performance** - Optimized with React 18 and modern build tools
- **Developer Experience** - ESLint, Prettier, and hot reload

## 📁 Project Structure

```
src/
├── components/          # React components
├── images/             # Static images
├── types/              # TypeScript type definitions
├── App.tsx            # Main app component
└── index.tsx          # App entry point
```

## 🔧 Configuration

The project uses modern tooling configurations:
- **TypeScript** - `tsconfig.json`
- **Tailwind CSS** - `tailwind.config.js`
- **PostCSS** - `postcss.config.js`
- **ESLint** - `.eslintrc.js`
- **Prettier** - `.prettierrc`

## 🚀 Deployment

The app can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages after running:

```bash
bun run build
```

## 📝 Learn More

- [Bun Documentation](https://bun.sh/docs)
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Sanity Documentation](https://www.sanity.io/docs)