/**
 * This script is meant to build custom typescript file 
 * Usage: Simply specify this comment: `// <I WANT TO BE COMPILED>` in the 
 * typescript file within the src/ directory you want to compile 
 * and run: `npm run dev`
 * */

import esbuild from 'esbuild';
import { readdirSync, statSync, readFileSync } from 'fs';
import { join, extname, basename, dirname } from 'path';

function findFilesWithText(folderPath, searchText, fileList = []) {
    const files = readdirSync(folderPath);

    for (const file of files) {
        const filePath = join(folderPath, file);
        const stats = statSync(filePath);

        if (stats.isDirectory()) {
            findFilesWithText(filePath, searchText, fileList);
        } else if (extname(file) === '.ts') {
            const content = readFileSync(filePath, 'utf8');
            if (content.includes(searchText)) {
                fileList.push(filePath);
            }
        }
    }

  return fileList;
}

const foundFiles = findFilesWithText('src/', '// <I WANT TO BE COMPILED>');

if (foundFiles.length > 0) {
    console.log('Files found:');
    foundFiles.forEach((file) => {
        console.log(file);
        //const fileName = basename(file);
        const fileDirectory = dirname(file);
        // Build/minify
        esbuild.build({
            bundle: true,
            minify: true,
            sourcemap: false,
            //watch: false,
            outdir: fileDirectory, // the output folder of the compiled js file
            target: 'esnext', // the js version
            entryPoints: [file], // file that will be compiled, converted and minified to js
        });
    });
} else {
    console.log('No files found with the compiling command.');
}