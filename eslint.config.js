import { defineConfig, globalIgnores } from "eslint/config";
import astro from "eslint-plugin-astro";

export default defineConfig([
  globalIgnores(["dist/", ".astro/"]),
  ...astro.configs["flat/recommended"],
]);
