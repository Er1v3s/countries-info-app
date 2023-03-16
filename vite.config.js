import { defineConfig } from "vite";

export default defineConfig(({ command }) => {
  if (command === "build") {
    return {
      base: "/countries-info-app/",
    };
  } else if (command === "serve") {
    return {
      base: "/",
    };
  }
});
