import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

import path from 'path'
import fs from 'fs'

function getHtmlEntryFiles(srcDir) {
	const entry = {};

	function traverseDir(currentDir) {
	  const files = fs.readdirSync(currentDir);

	  files.forEach((file) => {
		const filePath = path.join(currentDir, file);
		const isDirectory = fs.statSync(filePath).isDirectory();

		if (isDirectory) {
		  // If it's a directory, recursively traverse it
		  traverseDir(filePath);
		} else if (path.extname(file) === '.html') {
		  // If it's an HTML file, add it to the entry object
		  const name = path.relative(srcDir, filePath).replace(/\..*$/, '');
		  entry[name] = filePath;
		}
	  });
	}

	traverseDir(srcDir);

	return entry;
}


export default defineConfig({
	root: 'src',
  plugins: [react()],
	build: {
		rollupOptions: {
			input: getHtmlEntryFiles('src')
		},
		outDir: '../dist',
		emptyOutDir: true
	},
	optimizeDeps: {
		entries: 'src/**/*{.html,.css,.js}'
	}
})
// export default defineConfig({
//   base: '/',
//   plugins: [react()],
//   // build: {
//   //   rollupOptions: {
//   //     input: {
//   //       main: resolve(__dirname, 'index.html'),
//   //       contact: resolve(__dirname, 'contact/index.html'),
//   //       projects: resolve(__dirname, 'projects/index.html'),
//   //     },
//   //   },
//   // },

// })

// export default defineConfig({
//   base: '/',
//   plugins: [react()],
// })
