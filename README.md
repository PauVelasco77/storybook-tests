# UI Component Library with Storybook and Testing

 This project demonstrates component testing through Storybook stories, providing a practical approach to testing React components in isolation. Built with React 19, TypeScript, Vite, and Storybook 8, it showcases modern best practices for component development and unit testing.

  The repository features a structured component architecture with reusable UI components like Button, TextField, and LoginForm, each with dedicated story files that serve as both documentation and test fixtures. This approach illustrates how Storybook stories can be leveraged not just for visual development but as a foundation for robust automated testing.

## 🚀 Features

- **Modern Stack**: React 19, TypeScript 5.7, Vite 6
- **Component Documentation**: Storybook 8 with addons
- **Testing**: Vitest with React Testing Library
- **Type Safety**: Strong TypeScript typing
- **Accessibility**: ARIA attributes and semantic HTML

## 🔧 Components

The library currently includes:

- **Button**: Versatile button with multiple variants, colors, loading state
- **TextField**: Form input field with validation and error states
- **LoginForm**: Validation form with email/password fields

## 🏗️ Project Structure

```
src/
├── assets/            # Icons and shared assets
├── components/        # UI components
│   ├── Button/        
│   │   ├── button.tsx
│   │   ├── button.css
│   │   ├── button.types.ts
│   │   ├── button.stories.tsx
│   │   └── button.test.tsx
│   ├── TextField/
│   └── LoginForm/
└── styles/            # Global styles
    ├── colors.css
    ├── reset.css
    └── typography.css
```

## 📋 Commands

```bash
# Install dependencies
yarn install

# Start Storybook development server
yarn storybook

# Run tests
yarn test

# Run tests with coverage
yarn coverage

# Lint code
yarn lint

# Build Storybook for production
yarn build-storybook
```

## 🧪 Testing

Tests use Vitest with React Testing Library and follow the Given/When/Then pattern:

```typescript
describe("Given a Button component", () => {
  describe("When the button is clicked", () => {
    test("Then the action onClick should be called", async () => {
      // Test implementation
    });
  });
});
```

## 🎨 Design System

The components follow consistent design patterns:
- Typography classes (body-lg, label-md, etc.)
- Color scheme with primary/secondary/tertiary
- Variants like filled, outlined, text, elevated, tonal

## 📚 Resource

- [Material Design](https://m3.material.io/)
- [Storybook Unit Testing](https://storybook.js.org/docs/writing-tests/import-stories-in-tests/stories-in-unit-tests)
- [Kent C. Dodds - how to type a react form on submit handler](https://www.epicreact.dev/how-to-type-a-react-form-on-submit-handler)