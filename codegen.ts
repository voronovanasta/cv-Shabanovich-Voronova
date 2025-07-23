import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
      'https://cv-project-js.inno.ws/api/graphql': {
        headers: {
          Origin: 'https://cv-project-js.inno.ws/api/graphql',
        },
      },
    },
  ],
  documents: ['src/features/**/*.{graphql,gql}', 'src/**/*.tsx'],
  ignoreNoDocuments: true,
  generates: {
    './src/graphql/': {
      preset: 'client',
      presetConfig: {
        fetcher: './src/shared/api/execute#execute',
      },
      config: {
        documentMode: 'graphQLTag',
        useTypeImports: true,
      },
    },
    './schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true,
      },
    },
  },
};

export default config;
