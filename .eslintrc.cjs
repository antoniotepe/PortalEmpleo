module.exports = {
  root: true,
  extends: ['@nuxt/eslint-config', 'prettier'],
  rules: {
    'vue/require-default-prop': 'off',
    'vue/no-setup-props-destructure': 'off',
    'vue/no-multiple-template-root': 'off',
    'no-console': 'warn',
  },
}
