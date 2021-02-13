module.exports = {
  // plugins: ['@loft', 'import-alias'],
  // extends: ['plugin:@loft/recommended-frontend'],
  plugins: ['import-alias'],
  ignorePatterns: [".eslintrc.js"],
  globals: {
    // converting jest.setup helpers into functions to be explicitly imported will solve these
    // mountWithIntl: 'readonly',
    // shallowWithIntl: 'readonly',
    // TestThemeProvider: 'readonly',
  },
  rules: {
    // temporary overrides, should be promoted to 'error' or removed
    // '@loft/copan/discourage-components': 'warn',
    // '@loft/copan/tokens-usage': 'warn',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/explicit-member-accessibility': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-var-requires': 'warn',
    'consistent-return': 'warn',
    'func-names': 'warn',
    'import/no-named-as-default': 'warn',
    'import/no-named-default': 'warn',
    'jest/valid-expect': 'warn',
    'jest/valid-expect-in-promise': 'warn',
    'jest/valid-title': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-autofocus': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'no-import-assign': 'warn',
    'no-console': 'warn',
    'no-param-reassign': 'warn',
    'no-prototype-builtins': 'warn',
    'no-shadow': 'warn',
    'react/button-has-type': 'warn',
    'react/default-props-match-prop-types': 'warn',
    'react/forbid-prop-types': 'warn',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx', '.js', '.jsx'] }],
    'react/jsx-key': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/no-unused-state': 'warn',
    'react/prefer-stateless-function': 'warn',
    'react/prop-types': 'warn',
    'react/require-default-props': 'warn',
    'react/state-in-constructor': ['warn', 'never'],
    'react/static-property-placement': 'warn',
    'sonarjs/cognitive-complexity': 'warn',
    'sonarjs/no-collapsible-if': 'warn',
    'sonarjs/no-duplicated-branches': 'warn',
    'sonarjs/no-identical-functions': 'warn',
    'sonarjs/no-small-switch': 'warn',

    // Permanent Rules
    // maybe some of those are already part of another plugin and would not need to be here
    // also, maybe some should be promoted to @loft/eslint-plugin
    'cypress/assertion-before-screenshot': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.__tests__.*', '**/*.spec.*', 'jest.setup.js', '**/*.stories.*'] },
    ],
    'import/no-unresolved': ['error', { ignore: ['\\.(png|jpg|svg)\\?(lqip|webp)$'] }], // next-optimized-images https://github.com/cyrilwanner/next-optimized-images/issues/23
    'import-alias/import-alias': [
      'error',
      {
        relativeDepth: 0,
        aliases: [{ alias: '', matcher: '^src/' }],
      },
    ],
    'no-async-promise-executor': 'error',
    'no-nested-ternary': 'error',
    'no-restricted-globals': 'error',
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
  overrides: [
    {
      files: ['*.tsx', '*.ts'],
      rules: {
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-floating-promises': 'warn', // temporary?
      },
    },
    {
      files: ['*'],
      rules: {
        'simple-import-sort/imports': 'warn',
        'prettier/prettier': [
          'error',
          {
            arrowParens: 'avoid',
            quoteProps: 'as-needed',
          },
        ],
      },
    },
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        'no-restricted-imports': [
          'warn',
          {
            paths: [
              // {
              //   name: '@loft/copan-components',
              //   importNames: ['Link'],
              //   message: 'Please use Link from routes/Link.',
              // },
              {
                name: 'next/link',
                message: 'Please use Link from routes/Link.',
              },
            ],
          },
        ],
      },
    },
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      excludedFiles: ['*.spec.*', '*.stories.*'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            paths: [
              // {
              //   name: 'lang/pt',
              //   message:
              //     'Do not import directly from lang, use useIntl instead. See: https://bitbucket.org/loftbr/webnext/pull-requests/3175',
              // },
              // {
              //   name: 'js-cookie',
              //   message: 'Please use functions from lib/cookies.',
              // },
              {
                name: 'lodash',
                message:
                  'Try importing only what you need from lodash as https://www.blazemeter.com/blog/the-correct-way-to-import-lodash-libraries-a-benchmark',
              },
              {
                name: 'lodash/fp',
                message:
                  'Try importing only what you need from lodash as https://www.blazemeter.com/blog/the-correct-way-to-import-lodash-libraries-a-benchmark',
              },
            ],
          },
        ],
        // 'no-restricted-syntax': [
        //   'error',
        //   {
        //     selector: "MemberExpression[object.name='res'][property.name='cookie']",
        //     message:
        //       'Please use functions from lib/cookies, more info https://bitbucket.org/loftbr/webnext/src/master/GUIDELINES.md.',
        //   },
        //   {
        //     selector: "MemberExpression[object.name='res'][property.name='clearCookie']",
        //     message:
        //       'Please use functions from lib/cookies, more info https://bitbucket.org/loftbr/webnext/src/master/GUIDELINES.md.',
        //   },
        //   {
        //     selector: "MemberExpression[object.name='req'][property.name='cookies']",
        //     message:
        //       'Please use functions from lib/cookies, more info https://bitbucket.org/loftbr/webnext/src/master/GUIDELINES.md.',
        //   },
        // ],
      },
    },
    {
      files: ['*.spec.ts', '*.spec.tsx'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            // 'This is already being imported at jest.setup.js. You should not be importing it again.'
            patterns: ['@testing-library/jest-dom*'],
          },
        ],
      },
    },
    // The cypress/ folder is parallel to the src/ folder, our root folder. So we need to exclude it from the import-alias rule.
    {
      files: ['cypress/**'],
      rules: {
        'import-alias/import-alias': 'off',
      },
    },
  ],
};
