---
title: Vite, Lit and Storybook
date: '2022-02-13'
description: How to use Vite, Lit and Storybook to build stand alone web components and publish them to NPM
intro: Getting tools to work together can be a bit of a challenge. In this article I will show you the steps needed.
tags:
  - web-components
  - vite
  - lit
  - storybook
githubUrl: https://github.com/leon/blog-vite-lit-storybook
---

At work we wanted to build some simple web components to publish to NPM.

I was thinking about writing plain web components, but there is a lot of boiler plate, therefor I chose [Lit](https://lib.dev) for the job. And [Vite](https://vitejs.dev) for development and packaging.

### Setup new Vite project

We start by setting up a new Vite project.

```bash
npm create vite@latest my-webcomponents -- --template lit-ts
```

### Install Storybook

```bash
npx sb@latest init --builder storybook-builder-vite
```

<mark>
  Storybook uses webpack by default, but since we are using Vite, we would rather use the `storybook-builder-vite` plugin.

Storybook 7 is going to be better and more modular when it comes to which build system it uses under the hood, be it vite, esbuild, swc...

</mark>

### Vite config changes

In our case we wanted to be able to use the web components as a stand alone package. the default config externalizes `lit`. so we have to comment that out.

```ts
// vite.config.js
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: 'src/my-element.ts',
			formats: ['es'],
		},
		rollupOptions: {
			// If we want to publish standalone components we don't externalize lit,
			// if you are going to use lit in your own project, you can make it a dep instead.
			// external: /^lit/, <-- comment this line
		},
	},
})
```

### Typescript config changes

Because we have added storybook we need to exclude `.stories.ts` files from the typescript compilation, otherwise when we publish to NPM they will be included.

```json
// tsconfig.json
{
	"compilerOptions": {
		"module": "esnext",
		"lib": ["es2017", "dom", "dom.iterable"],
		"declaration": true,
		"emitDeclarationOnly": true,
		"outDir": "./types",
		"strict": true,
		"noUnusedLocals": true,
		"noUnusedParameters": true,
		"noImplicitReturns": true,
		"noFallthroughCasesInSwitch": true,
		"moduleResolution": "node",
		"allowSyntheticDefaultImports": true,
		"experimentalDecorators": true,
		"forceConsistentCasingInFileNames": true,
		"useDefineForClassFields": false
	},
	"include": ["src/**/*.ts"],
	"exclude": ["src/**/*.stories.ts"], // <-- this is the line we need to add
	"references": [{ "path": "./tsconfig.node.json" }]
}
```

### Storybook config changes

The storybook config needs to tweak the vite config for `storybook-builder-vite` to work.
We need to include and exclude some packages from the vite config.

```js
// .storybook/main.js
module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
	framework: '@storybook/web-components',
	core: {
		builder: 'storybook-builder-vite',
	},
	async viteFinal(config, { configType }) {
		// customize the Vite config here
		config.optimizeDeps.include = [
			...(config.optimizeDeps?.include ?? []),
			'@storybook/web-components',
		]
		config.optimizeDeps.exclude = [...(config.optimizeDeps?.exclude ?? []), 'lit', 'lit-html']

		// return the customized config
		return config
	},
}
```

### Now we have a working Storybook

There is a downside to using web components (lit) with storybook, and that is that it does not support hot reload.
so each change will cause Storybook to do a full reload.
Hopefully this will be mitigated in the future.

### Publish to NPM

This section covers the steps needed to publish to NPM, if you are not planning to publish to NPM, you can skip this section.

First off, depending if you want to publish standalone web components you will need to move `lit` to become a devDependency in your `package.json`.

- Also instead of only exporting the single `dist/my-element.es.js` file we will change it so we have a barrel file that exports all components.
- and change both `index.html` and `vite.config.js` to point `src/index.ts`
- We then also need to change `package.json` to export the correct files.
- And we also want to make the package public by removing `"private": true` and choosing a name and license.

after this we should be good to go by running

```bash
npm run build
```

then checking `/dist/` to see that the correct files are there, and that our `package.json` points to these files.

then we can run

```bash
npm publish
```

If all has gone well you should be able to use your new package by importing it

```html
<script type="module" src="https://cdn.skypack.dev/my-element"></script>
<my-element name="Lit"></my-element>
```

## Example Repo

If you don't want to copy paste everything, I've created a demo project on github.
you can find it here [https://github.com/leon/blog-vite-lit-storybook](https://github.com/leon/blog-vite-lit-storybook)
