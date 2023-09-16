import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

/// <reference types="vitest" />
// Configure Vitest (https://vitest.dev/config/)
// https://vitejs.dev/config/
export default defineConfig({
    build: {
        cssCodeSplit: true,
        sourcemap: true,
        lib: {
            entry: resolve(__dirname, "src", "utils.ts"),
            name: "utils",
            fileName: (format) => `utils.${format}.js`,
        },
    },
    plugins: [dts({ rollupTypes: true })],
});
