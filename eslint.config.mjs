import eslint from "@eslint/js";
import perfectionist from "eslint-plugin-perfectionist";
import tsdoc from "eslint-plugin-tsdoc";
import tseslint from "typescript-eslint";

export default tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended, {
  ignores: ["build/", ".esbuild/", ".serverless/", "**/*.js"],
  plugins: {
    tsdoc,
    perfectionist,
  },
  rules: {
    "tsdoc/syntax": "error",
    "max-len": [
      "error",
      {
        code: 9999,
        comments: 120,
      },
    ],
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        args: "all",
        argsIgnorePattern: "^_|next",
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
    "perfectionist/sort-imports": [
      "error",
      {
        type: "natural",
        order: "asc",
      },
    ],
  },
});
