// Import ESBuild
import esbuild from 'esbuild';

// Build/minify
esbuild.build({
  bundle: true,
  minify: true,
  sourcemap: false,
  //watch: false,
  outdir: '/dist', // the output folder of the compiled js file
  target: 'esnext', // the js version
  entryPoints: ['src/index.ts'], // file that will be compiled, converted and minified to js
});
