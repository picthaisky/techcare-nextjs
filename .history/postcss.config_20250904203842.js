// Force Lightning CSS WASM on Windows to avoid native binary resolution issues
if (!process.env.CSS_TRANSFORMER_WASM && process.platform === 'win32') {
  process.env.CSS_TRANSFORMER_WASM = '1'
}

// CommonJS config to ensure PostCSS picks this up reliably
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default {
  plugins: [tailwindcss, autoprefixer],
}

