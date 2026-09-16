// @ts-nocheck - vite-plus types conflict with vite types
import { defineConfig } from 'vite-plus'
import { cloudflare } from '@cloudflare/vite-plugin'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  staged: {
    "*": "vp check --fix"
  },
  fmt: {},
  lint: {"jsPlugins":[{"name":"vite-plus","specifier":"vite-plus/oxlint-plugin"}],"rules":{"vite-plus/prefer-vite-plus-imports":"error"},"options":{"typeAware":true,"typeCheck":true}},
  resolve: { tsconfigPaths: true },
  plugins: [tailwindcss(), cloudflare(), viteReact()],
})

export default config
