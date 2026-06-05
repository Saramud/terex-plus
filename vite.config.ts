import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { globSync } from 'glob'
import pug from 'vite-plugin-pug'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

function getHtmlEntries(): Record<string, string> {
  const htmlFiles = globSync('**/*.html', {
    cwd: __dirname,
    ignore: ['dist/**', 'node_modules/**', 'build/**'],
  })

  return Object.fromEntries(
    htmlFiles.map(file => [
      file.replace(/\.html$/, ''),
      resolve(__dirname, file),
    ])
  )
}

export default defineConfig({
  plugins: [pug()],
  publicDir: 'public',
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        silenceDeprecations: ['import'],
      },
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: getHtmlEntries(),
    },
  },
  resolve: {
    alias: { '@': resolve(__dirname, 'src') },
  },
})
