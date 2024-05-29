import globals from "globals"

import pluginJs from "@eslint/js"

import nodePlugin from "eslint-plugin-n"
import nextPlugin from "@next/eslint-plugin-next"
import reactPlugin from "eslint-plugin-react"
import hooksPlugin from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import pluginJsxA11y from "eslint-plugin-jsx-a11y"

import typescriptEslint from "@typescript-eslint/eslint-plugin"
import eslintConfigPrettier from "eslint-config-prettier"

export default [
  eslintConfigPrettier,
  pluginJs.configs.recommended,
  ...nodePlugin.configs["flat/mixed-esm-and-cjs"],
  {
    plugins: {
      ts: typescriptEslint,
    },
    rules: {
      "ts/indent": "error",
    },
  },
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
        version: "detect",
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
    // in main config for TSX/JSX source files
    plugins: {
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": "warn",
    },
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
    plugins: {
      "jsx-a11y": pluginJsxA11y,
    },
    rules: pluginJsxA11y.configs.recommended.rules,
  },
  {
    ignores: [".next/*"],
  },
]
