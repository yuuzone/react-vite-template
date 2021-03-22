// module.exports = {
//   extends: [
//     'airbnb',
//     'prettier',
//     'plugin:jest/recommended',
//     'plugin:react/recommended',
//     'plugin:import/typescript',
//     'prettier/react',
//     'plugin:@typescript-eslint/recommended',
//     'prettier/@typescript-eslint',
//     'plugin:prettier/recommended'
//   ],
//   env: {
//     browser: true,
//     node: true,
//     jasmine: true,
//     jest: true,
//     es6: true,
//   },
//   settings: {
//     react: {
//       version: '17.0.1',
//     },
//   },
//   parser: '@typescript-eslint/parser',
//   plugins: ['markdown', 'react', 'babel', 'jest', '@typescript-eslint', 'react-hooks', 'unicorn'],
//   // https://github.com/typescript-eslint/typescript-eslint/issues/46#issuecomment-470486034
//   overrides: [
//     {
//       files: ['*.ts', '*.tsx'],
//       rules: {
//         '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
//         'no-unused-expressions': 'off',
//         '@typescript-eslint/no-unused-expressions': 2,
//         'quotes': [1, 'single'],
//         'semi': [2, 'never']
//       },
//     },
//     {
//       files: ['*.md'],
//       globals: {
//         React: true,
//         ReactDOM: true,
//         mountNode: true,
//       },
//       rules: {
//         indent: 0,
//         'no-console': 0,
//         'no-plusplus': 0,
//         'eol-last': 0,
//         'no-script-url': 0,
//         'prefer-rest-params': 0,
//         'react/no-access-state-in-setstate': 0,
//         'react/destructuring-assignment': 0,
//         'react/no-multi-comp': 0,
//         'jsx-a11y/href-no-hash': 0,
//         'import/no-extraneous-dependencies': 0,
//         'jsx-a11y/control-has-associated-label': 0,
//       },
//     },
//   ],
//   rules: {
//     'react/jsx-one-expression-per-line': 0,
//     'react/prop-types': 0,
//     'react/forbid-prop-types': 0,
//     'react/jsx-indent': 0,
//     'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false }],
//     'react/jsx-filename-extension': 0,
//     'react/state-in-constructor': 0,
//     'react/jsx-props-no-spreading': 0,
//     'react/destructuring-assignment': 0, // TODO: remove later
//     'react/require-default-props': 0,
//     'react/sort-comp': 0,
//     'react/display-name': 0,
//     'react/static-property-placement': 0,
//     'react/no-find-dom-node': 0,
//     'react/no-unused-prop-types': 0,
//     'react/default-props-match-prop-types': 0,
//     'react-hooks/rules-of-hooks': 2, // Checks rules of Hooks

//     'import/extensions': 0,
//     'import/no-cycle': 0,
//     'import/no-extraneous-dependencies': [
//       'error',
//       {
//         devDependencies: [
//           'site/**',
//           'tests/**',
//           'scripts/**',
//           '**/*.test.js',
//           '**/__tests__/*',
//           '*.config.js',
//           '**/*.md',
//         ],
//       },
//     ],
//     'jsx-a11y/no-static-element-interactions': 0,
//     'jsx-a11y/anchor-has-content': 0,
//     'jsx-a11y/click-events-have-key-events': 0,
//     'jsx-a11y/anchor-is-valid': 0,
//     'jsx-a11y/no-noninteractive-element-interactions': 0,
//     // label-has-for has been deprecated
//     // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
//     'jsx-a11y/label-has-for': 0,

//     'comma-dangle': ['error', 'always-multiline'],
//     'consistent-return': 0, // TODO: remove later
//     'no-param-reassign': 0, // TODO: remove later
//     'no-underscore-dangle': 0,
//     // for (let i = 0; i < len; i++)
//     'no-plusplus': 0,
//     // https://eslint.org/docs/rules/no-continue
//     // labeledLoop is conflicted with `eslint . --fix`
//     'no-continue': 0,
//     // ban this for Number.isNaN needs polyfill
//     'no-restricted-globals': 0,
//     'max-classes-per-file': 0,

//     'jest/no-test-callback': 0,
//     'jest/expect-expect': 0,
//     'jest/no-done-callback': 0,
//     'jest/valid-title': 0,
//     'jest/no-conditional-expect': 0,

//     'unicorn/better-regex': 2,
//     'unicorn/prefer-string-trim-start-end': 2,
//     'unicorn/expiring-todo-comments': 2,
//     'unicorn/no-abusive-eslint-disable': 2,

//     // https://github.com/typescript-eslint/typescript-eslint/issues/2540#issuecomment-692866111
//     'no-use-before-define': 0,
//     '@typescript-eslint/no-use-before-define': 2,
//     'no-shadow': 0,
//     '@typescript-eslint/no-shadow': [2, { ignoreTypeValueShadow: true }],
//     // https://github.com/typescript-eslint/typescript-eslint/issues/2528#issuecomment-689369395
//     'no-undef': 0,
//   },
//   globals: {
//     gtag: true,
//   },
// };
module.exports = {
  'env': {
    'browser': true,
    'node': true
  },
  'globals': {
    'appTool': true,
    'require': true,
    '$': true,
    'ant': true
  },
  'parser': '@typescript-eslint/parser',
  'plugins': ['@typescript-eslint'],
  'rules': {
    'accessor-pairs': 'error',
    'array-bracket-spacing': [
      'error',
      'never'
    ],
    'array-callback-return': 'error',
    'arrow-body-style': ['off', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'block-scoped-var': 'off',
    'block-spacing': [
      'error',
      'never'
    ],
    'brace-style': 'off',
    'callback-return': 'off',
    'camelcase': 'off',
    'comma-dangle': [
      'error',
      'never'
    ],
    'comma-spacing': 'off',
    'comma-style': [
      'error',
      'last'
    ],
    'complexity': 'off',
    'computed-property-spacing': [
      'error',
      'never'
    ],
    'consistent-return': 'off',
    'consistent-this': 'off',
    'curly': 'off',
    'default-case': 'off',
    'dot-location': [
      'error',
      'property'
    ],
    'dot-notation': 'error',
    'eol-last': 'off',
    'eqeqeq': 'off',
    'func-names': 'off',
    'func-style': 'off',
    'generator-star-spacing': 'error',
    'global-require': 'error',
    'guard-for-in': 'off',
    'handle-callback-err': 'error',
    'id-blacklist': 'error',
    'id-length': 'off',
    'id-match': 'error',
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'init-declarations': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': 'off',
    'keyword-spacing': 'off',
    'lines-around-comment': 'off',
    'max-depth': 'off',
    'max-len': 'off',
    'max-lines': 'off',
    'max-nested-callbacks': 'error',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': 'off',
    'new-parens': 'off',
    'new-cap': 'off',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': 'off',
    'no-alert': 'off',
    'no-array-constructor': 'error',
    'no-bitwise': 'off',
    'no-caller': 'error',
    'no-catch-shadow': 'off',
    'no-confusing-arrow': 'error',
    'no-console': 'off',
    'no-continue': 'off',
    'no-div-regex': 'error',
    'no-duplicate-imports': 'off',
    'no-else-return': 'off',
    'no-empty-function': 'off',
    'no-eq-null': 'off',
    'no-eval': [
      'error', {
        'allowIndirect': true
      }
    ],
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': 'off',
    'no-floating-decimal': 'off',
    'no-implicit-coercion': [
      'error', {
        'boolean': false,
        'number': false,
        'string': false
      }
    ],
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-inline-comments': 'off',
    'no-inner-declarations': [
      'error',
      'functions'
    ],
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'off',
    'no-loop-func': 'off',
    'no-magic-numbers': 'off',
    'no-mixed-operators': 'off',
    'no-mixed-requires': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'off',
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
    'no-native-reassign': 'error',
    'no-negated-condition': 'off',
    'no-nested-ternary': 'off',
    'no-new': 'error',
    'no-new-func': 'off',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-path-concat': 'error',
    'no-plusplus': 'off',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-proto': 'off',
    'no-prototype-builtins': 'off',
    'no-restricted-globals': 'error',
    'no-restricted-imports': 'error',
    'no-restricted-modules': 'error',
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-return-assign': 'off',
    'no-script-url': 'off',
    'no-self-compare': 'off',
    'no-sequences': 'off',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'off',
    'no-spaced-func': 'error',
    'no-sync': 'off',
    'no-ternary': 'off',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'off',
    'no-undef-init': 'error',
    'no-undef': 'off',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': [
      'error', {
        'defaultAssignment': true
      }
    ],
    'no-unsafe-finally': 'error',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-call': 'off',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'off',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'off',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'no-void': 'off',
    'no-warning-comments': 'off',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'object-curly-newline': 'off',
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': [
      'error', {
        'allowMultiplePropertiesPerLine': true
      }
    ],
    'object-shorthand': 'off',
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'operator-assignment': 'off',
    'operator-linebreak': [
      'error',
      'after'
    ],
    'padded-blocks': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-const': 'error',
    'prefer-reflect': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',
    'prefer-template': 'off',
    'quote-props': 'off',
    'quotes': ['error', 'single'],
    'radix': 'off',
    'require-jsdoc': 'off',
    'require-yield': 'error',
    'rest-spread-spacing': 'error',
    'semi': ['error', 'always'],
    'semi-spacing': 'off',
    'sort-imports': 'off',
    'sort-vars': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never' }],
    'space-in-parens': 'off',
    'space-infix-ops': 'off',
    'space-unary-ops': [
      'error', {
        'nonwords': false,
        'words': false
      }
    ],
    'strict': 'off',
    'template-curly-spacing': 'error',
    'unicode-bom': [
      'error',
      'never'
    ],
    'valid-jsdoc': 'off',
    'vars-on-top': 'off',
    'wrap-iife': 'off',
    'wrap-regex': 'off',
    'yield-star-spacing': 'error',
    'yoda': 'off',
    'react/sort-comp': 'off',
    'react/prefer-stateless-function': 'off',
    'spaced-comment': ['error', 'always'],
    'react/jsx-no-bind': 'off',
    'no-extra-boolean-cast': 'off'
  }
};