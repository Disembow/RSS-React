/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [react(), eslint()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      exclude: [
        ...(configDefaults.coverage.exclude || []),
        'src/main.tsx',
        'src/components/utils/data.ts',
        'src/components/utils/fetchAPI.ts',
        'src/types/props-types.ts',
        'src/types/enums.ts',
        'src/app/hooks.ts',
        'src/app/store.ts',
        'src/components/main/forms/formSlice.ts',
        'src/components/main/home/UI/searchBarSlice.ts',
      ],
      all: true,
      src: ['src'],
      provider: 'c8',
      reporter: ['text'],
    },
  },
});
