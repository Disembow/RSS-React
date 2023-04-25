import { defineConfig } from 'cypress';
import codeCoverageTasks from '@cypress/code-coverage/task';

export default defineConfig({
  video: false,
  chromeWebSecurity: false,
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  e2e: {
    baseUrl: 'http://localhost:666',
    setupNodeEvents(on, config) {
      codeCoverageTasks(on, config);
      return config;
    },
  },
});
