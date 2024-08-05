import { defineAdderTests } from "@svelte-add/core"

export const tests = defineAdderTests({
    files: [],
    optionValues: [],
    options: undefined,
	tests: [
		{
			name: "Testing...",
			run: async ({ elementExists }) => {
				await elementExists(".sass")
			},
		},
	],
})
