module.exports = {
	"extends": [
		"stylelint-config-standard"
	],
	"rules": {
		"at-rule-empty-line-before": [
			"always",
			{
				"except": [
					"blockless-after-same-name-blockless",
					"first-nested"
				],
				"ignore": ["after-comment"]
			}
		],
		"at-rule-no-unknown": [
			true,
			{
				"ignoreAtRules": ["debug", "each", "else", "extend", "for", "if", "include", "mixin", "tailwind", "use"]
			}
		],
		"no-descending-specificity": null,
		"color-hex-length": "short",
		"color-no-invalid-hex": true,
		"comment-empty-line-before": [
			"always",
			{
				"except": ["first-nested"],
				"ignore": ["stylelint-commands"]
			}
		],
		"comment-whitespace-inside": "always",
		"custom-property-empty-line-before": [
			"always",
			{
				"except": [
					"after-custom-property",
					"first-nested"
				],
				"ignore": [
					"after-comment",
					"inside-single-line-block"
				]
			}
		],
		"declaration-block-single-line-max-declarations": 1,
		"declaration-empty-line-before": [
			"always",
			{
				"except": [
					"after-declaration",
					"first-nested"
				],
				"ignore": [
					"after-comment",
					"inside-single-line-block"
				]
			}
		],
		"function-no-unknown": null,
		"function-name-case": "lower",
		"import-notation": "string",
		"length-zero-no-unit": true,
		"no-invalid-position-at-import-rule": null,
		"rule-empty-line-before": [
			"always-multi-line",
			{
				"except": ["first-nested"],
				"ignore": ["after-comment"]
			}
		],
		"selector-id-pattern": null,
		"selector-pseudo-element-colon-notation": "double",
		"selector-type-case": "lower",
		"selector-class-pattern": null
	}
}
