module.exports = {
	extends: [
		"stylelint-config-standard",
		"stylelint-config-tailwindcss",
		"stylelint-config-prettier"
	],
	rules: {
		// asegura que no moleste con @tailwind
		"at-rule-no-unknown": null,
	},
}
