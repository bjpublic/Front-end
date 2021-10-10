module.exports = {
  plugins: ['stylelint-scss', 'stylelint-prettier'],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'prettier/prettier': true,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'no-descending-specificity': null,
  },
};
