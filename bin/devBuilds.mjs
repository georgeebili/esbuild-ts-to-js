// This script is meant to build custom typescript file

const CUSTOM_OUTPUT_DIRECTORY = '' // Example 'D:/location/tooutput/folder'

const YOUR_TYPESCRIPT_FILE_PATH = '' // Example 'C:/path/to/typescriptfile/example.ts'

// Import ESBuild
import esbuild from 'esbuild';

if (CUSTOM_OUTPUT_DIRECTORY && YOUR_TYPESCRIPT_FILE_PATH) {
    // Build/minify
    esbuild.build({
        bundle: true,
        minify: true,
        sourcemap: false,
        watch: false,
        outdir: CUSTOM_OUTPUT_DIRECTORY, // the output folder of the compiled js file
        target: 'esnext', // the js version
        entryPoints: [YOUR_TYPESCRIPT_FILE_PATH], // file that will be compiled, converted and minified to js
    });
}