import React from "react";
import { defineConfig } from "vite";
import { createTransformer } from "ts-jest";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": "./src",
        },
    },
    test: {
        transform: createTransformer(),
    },
});
