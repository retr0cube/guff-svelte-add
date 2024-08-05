import { defineAdderConfig } from "@svelte-add/core"

export const composer = defineAdderConfig({
    metadata: {
        id: "guff",
        name: "Guff (SASS adder for 'svelte-add')",
        description: "SASS your styles with Guff!",
        environments: { kit: true, svelte: true },
    },
    integrationType: "inline",
    packages: [
        {
            name: "sass",
            version: "latest",
            dev: false
        }
    ],
    files: [
        {
            name: () => "asd.svelte",
            contentType: "svelte",
            content: ({ js, css }) => {
                css.addImports(css.ast, ["@use 'src/variables.sass' as *"])
                js.imports.addEmpty(js.ast, "./app.sass")
                js.imports.addEmpty(js.ast, "./vars.sass")
            },
        },
    ],
    options: undefined
})
