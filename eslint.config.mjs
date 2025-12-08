import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    },
    // 👇 ADD THE RULES PROPERTY HERE
    rules: {
      "no-unused-vars": [
        "error",
        { 
          "argsIgnorePattern": "^_", // Keep this for standard ignore
          "args": "none" // 👈 The key setting to ignore all unused arguments
        }
      ]
    }
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs"
    }
  }
]);