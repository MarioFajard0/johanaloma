import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"]
  },
  {
    languageOptions: { 
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      // React rules
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/react-in-jsx-scope": "off", // Not needed with React 17+
      "react/no-unsafe": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-key": "error",
      "react/no-array-index-key": "warn",
      "react/no-unused-state": "warn",
      "react/prop-types": "warn",
      "react/jsx-fragments": ["warn", "syntax"],
      "react/self-closing-comp": "warn",
      "react/jsx-pascal-case": "warn",
      "react/no-unescaped-entities": "warn", // Allow unescaped entities or consider using {"'" : "'"} in options if needed
      
      // React hooks rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      
      // General good practices
      "no-unused-vars": "warn",
      "no-console": "warn",
      "prefer-const": "warn",
      "no-undef": "error"
    }
  }
];
