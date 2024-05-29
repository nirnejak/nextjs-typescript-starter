import globals from "globals"

import pluginJs from "@eslint/js"

import nextPlugin from "@next/eslint-plugin-next"
import reactPlugin from "eslint-plugin-react"
import hooksPlugin from "eslint-plugin-react-hooks"

// import reactRefresh from "eslint-plugin-react-refresh"

// import jsxA11y from "eslint-plugin-jsx-a11y"

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  {
    plugins: {
      react: reactPlugin,
    },
    rules: {
      ...reactPlugin.configs["jsx-runtime"].rules,
    },
    settings: {
      react: {
        version: "detect", // You can add this if you get a warning about the React version when you lint
      },
    },
  },
  {
    plugins: {
      "react-hooks": hooksPlugin,
    },
    rules: hooksPlugin.configs.recommended.rules,
  },
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  {
    ignores: [".next/*"],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
]

// module.exports = {
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     sourceType: "module",
//     ecmaVersion: 2020,
//     ecmaFeatures: {
//       jsx: true,
//     },
//     project: ["./tsconfig.json"],
//   },
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: [
//     "standard-with-typescript",
//     "eslint:recommended",
//     "plugin:prettier/recommended",
//     "plugin:jsx-a11y/recommended",
//     "plugin:tailwindcss/recommended",
//     "plugin:@typescript-eslint/recommended",
//     "next/core-web-vitals",
//     "next",
//   ],
//   plugins: {
//     "react-refresh": reactRefresh,
//     react: reactPlugin,
//     "jsx-a11y": jsxA11y,
//   },
//   plugins: ["@typescript-eslint", "jsx-a11y", "tailwindcss"],
//   rules: {
//     "@typescript-eslint/no-explicit-any": "off",

//     "react/prop-types": "off",
//     "react/react-in-jsx-scope": "off",
//     "react/jsx-no-useless-fragment": "error",
//     "react/no-multi-comp": "error",
//     "react/sort-comp": "error",

//     "react-hooks/exhaustive-deps": "warn",
//     "react-hooks/rules-of-hooks": "error",

//     "react-refresh/only-export-components": [
//       "warn",
//       { allowConstantExport: true },
//     ],

//     "import/order": [
//       "error",
//       {
//         groups: [
//           "builtin",
//           "external",
//           ["parent", "internal", "sibling"],
//           "index",
//           "object",
//         ],
//         pathGroups: [
//           {
//             pattern: "react*",
//             group: "external",
//             position: "before",
//           },
//           {
//             pattern: "next*",
//             group: "external",
//             position: "before",
//           },
//         ],
//         pathGroupsExcludedImportTypes: ["react*", "next*"],
//         "newlines-between": "always",
//         alphabetize: {
//           order: "asc",
//           caseInsensitive: true,
//         },
//       },
//     ],
//   },
//   globals: {
//     Atomics: "readonly",
//     SharedArrayBuffer: "readonly",
//   },
//   settings: {
//     react: {
//       version: "detect",
//     },
//   },
// }
