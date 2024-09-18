import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config, {
        stepDefinitions: "cypress/integration/step_definitions/**/*.ts" // Define o caminho para os steps
      });

      return config;
    },
    specPattern: "cypress/integration/**/*.feature",  // Padrão para encontrar arquivos .feature
    supportFile: false,  // Opcional: definir arquivo de suporte se necessário
  },
});
