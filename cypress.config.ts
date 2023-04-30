import { defineConfig } from 'cypress';
import codeCoverageTasks from '@cypress/code-coverage/task';

export default defineConfig({
  // env: {
  //   codeCoverage: {
  //     exclude: 'cypress/**/*.*',
  //   },
  // },

  e2e: {
    baseUrl: 'http://localhost:666',
    setupNodeEvents(on, config) {
      codeCoverageTasks(on, config);
      return config;
    },
  },

  video: false,
  chromeWebSecurity: false,
});
