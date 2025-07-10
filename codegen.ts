import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
      'http://localhost:3000/api': {
        headers: {
          Origin: 'http://localhost:3000',
        },
      },
    },
  ],
  documents: ['src/**/*.graphql', 'src/**/*.tsx'],
  ignoreNoDocuments: true,
  generates: {
    './src/graphql/': {
      preset: 'client',
      presetConfig: {
        fetcher: './src/graphql/execute#execute',
      },
      config: {
        documentMode: 'graphQLTag',
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
