module.exports = {
	"extends": [
		"./base"
	],
	"plugins": [
		"stylelint-selector-bem-pattern"
	],
	"rules": {
		"scss/no-global-function-names": null,
		"scss/comment-no-empty": null,
		"scss/at-extend-no-missing-placeholder": null,
		"plugin/selector-bem-pattern": {
			"preset": "bem"
		}
	}
}
