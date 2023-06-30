# esbuild-ts-to-js

An Esbuild quick setup that convert typescript to javascript.

This project contains:

- Preconfigured development tools:

  - [Typescript](https://www.typescriptlang.org/)
  - Eslint
  - Prettier
  - [ESBuild](https://esbuild.github.io/)

## How to start

The quickest way to start developing a new project is by creating a new repository from this template. [see example](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template).

After that, open the new repository in your terminal and install the NPM packages by running:

```bash
npm install
```

## Usage

If you have more than one typescript file and there are all connected to each other, you can put them inside the `src` folder and import them into
the `index.ts` file before running build.

To build the files, you have two defined scripts:

- `npm run build`: Will build to the production directory (`/dist`).
- `npm run dev`: Compile any custom typescript file in the `src/` directory into javascript. Simply add this comment:`// <I WANT TO BE COMPILED>` in the typescript file you want to convert to JS.

## Note

By default, the output from the build command(`npm run build`) is set to the `dist` folder (check `dist/index.js`). While for the output from the dev command(`npm run dev`), check the directory of the targeted typescript file.
