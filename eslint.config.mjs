import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import stylisticEslintPlugin from '@stylistic/eslint-plugin'

export default createConfigForNuxt({})
  .prepend({
    name: 'custom/ignores',
    ignores: [
      'public'
    ]
  })
  .append({
    name: 'custom/stylistic-rules',
    plugins: {
      '@stylistic': stylisticEslintPlugin
    },
    rules: {
      '@stylistic/array-bracket-newline': ['error', 'consistent'],
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/comma-spacing': ['error', { before: false, after: true }],
      '@stylistic/comma-style': ['error', 'last'],
      '@stylistic/computed-property-spacing': ['error', 'never'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/func-call-spacing': ['error', 'never'],
      '@stylistic/function-call-argument-newline': ['error', 'consistent'],
      '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
      '@stylistic/indent': ['error', 2, { SwitchCase: 1 }],
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],
      '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
      '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
      '@stylistic/no-mixed-spaces-and-tabs': ['error'],
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
      '@stylistic/no-tabs': ['error'],
      '@stylistic/no-trailing-spaces': ['error'],
      '@stylistic/no-whitespace-before-property': ['error'],
      '@stylistic/nonblock-statement-body-position': ['error', 'beside'],
      '@stylistic/object-curly-newline': ['error', { consistent: true, multiline: true }],
      '@stylistic/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
      '@stylistic/operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
      '@stylistic/padded-blocks': ['error', { blocks: 'never' }],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/semi-spacing': ['error', { before: false, after: true }],
      '@stylistic/semi-style': ['error', 'last'],
      '@stylistic/space-before-blocks': ['error', 'always'],
      '@stylistic/space-before-function-paren': ['error', 'always'],
      '@stylistic/space-in-parens': ['error', 'never'],
      '@stylistic/space-infix-ops': ['error'],
      '@stylistic/space-unary-ops': ['error', { words: true, nonwords: false }],
      '@stylistic/template-curly-spacing': ['error', 'never'],
      '@stylistic/arrow-spacing': ['error', { before: true, after: true }],
      '@stylistic/rest-spread-spacing': ['error'],
      '@stylistic/no-multi-spaces': ['error'],
      '@stylistic/curly-newline': ['error', { multiline: true, minElements: 3, consistent: true }],
      '@stylistic/type-annotation-spacing': ['error', {
        before: false,
        after: true,
        overrides: { arrow: { before: true, after: true } }
      }],
      '@stylistic/member-delimiter-style': ['error',
        {
          multiline: {
            delimiter: 'none',
            requireLast: false
          },
          singleline: {
            delimiter: 'semi',
            requireLast: false
          }
        }]
    }
  })
  .append({
    name: 'custom/general-rules',
    rules: {
      'max-len': ['error', {
        code: 120,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignorePattern: 'url\\('
      }],
      'no-undef': 'off',
      'no-useless-escape': 'off',
      'no-prototype-builtins': 'off',
      'array-callback-return': 'off',
      'no-empty': ['error', { allowEmptyCatch: true }]
    }
  })
  .override('nuxt/vue/rules', {
    rules: {
      'vue/max-attributes-per-line': 'off',
      'vue/require-default-prop': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/no-v-html': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/attribute-hyphenation': 'off',
      'vue/v-on-event-hyphenation': 'off',
      'vue/no-deprecated-slot-attribute': 'off',
      'vue/custom-event-name-casing': 'off',
      'vue/first-attribute-linebreak': ['error', {
        singleline: 'ignore',
        multiline: 'below'
      }],
      'vue/v-slot-style': ['error', {
        atComponent: 'shorthand',
        default: 'shorthand',
        named: 'shorthand'
      }],
      'vue/html-indent': ['error', 2],
      'vue/html-closing-bracket-spacing': ['error', {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always'
      }],
      'vue/html-quotes': ['error', 'double'],
      'vue/max-len': ['error', {
        code: 120,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreHTMLTextContents: true
      }],
      'vue/mustache-interpolation-spacing': ['error', 'always'],
      'vue/prop-name-casing': ['error', 'camelCase'],
      'vue/require-prop-types': ['error'],
      'vue/v-bind-style': ['error', 'shorthand'],
      'vue/v-on-style': ['error', 'shorthand']
    }
  })
  .override('nuxt/vue/single-root', {
    rules: {
      'vue/no-multiple-template-root': 'off'
    }
  })
