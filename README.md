# Clarify stylelint config

This is a linter configuration to use when developing Sass-based projects. It uses stylelint and it's based on stylelint's recommended config that helps you avoid errors.

It provides two configurations, one for regular Sass projects and one specifically for BEM based Sass projects.

## Installation:

```
npm install --save-dev @clarifynl/stylelint-config-clarify
```

In your `package.json`, add the following:

```js
"stylelint": {
	"extends": ["@clarifynl/clarify"]
}
```

Or, for BEM-based projects:
```js
"stylelint": {
	"extends": ["@clarifynl/clarify/bem"]
}
```
