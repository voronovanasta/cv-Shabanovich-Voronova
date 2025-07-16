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
  documents: ['src/features/**/*.{graphql,gql}', 'src/**/*.tsx', 'src/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    './src/graphql/': {
      preset: 'client',
      presetConfig: {
        fetcher: './src/graphql/execute#execute',
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
