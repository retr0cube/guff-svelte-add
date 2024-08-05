# 📛 Guff

> SASS up your styles with guff

An adder of [svelte-add](https://github.com/svelte-add) that adds support for SASS.

## Usage


## Converting to an first party composer

If you decide that this adder should become first party, there a few minor things to do.

-   Create a PR against the main repository adding those files.
-   Make sure to adapt the file layout to the layout presented inside the main repository. Mainly:
    -   Move the folders from the `src/` directory to the parent directory.
    -   Delete the following files: `jsconfig.json`, `pnpm-lock.yml`, `test.js`
-   Update the package name inside `package.json` to match the following pattern: `@svelte-add/{tool}`
