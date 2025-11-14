import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['relay', { src: './src', schema: './schema.graphql' }]]
      }
    }),
    // Plugin to handle .graphql imports and map them to .graphql.ts files
    {
      name: 'relay-graphql-import',
      resolveId(id) {
        if (id.endsWith('.graphql') && !id.endsWith('.graphql.ts')) {
          // Map .graphql imports to .graphql.ts files
          return id + '.ts'
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/graphql': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
  },
}) 