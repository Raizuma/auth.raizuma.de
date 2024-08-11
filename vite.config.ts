import { defineConfig } from "vite"
import type { CommonServerOptions } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"
import { enhancedImages } from "@sveltejs/enhanced-img"
import mkcert from "vite-plugin-mkcert"

const serverConfig: CommonServerOptions = {
    https: true,
    host: "0.0.0.01",
    port: 3001,
    strictPort: true,
    proxy: {}
}

export default defineConfig({
    server: serverConfig,
    preview: serverConfig,
    plugins: [sveltekit(), enhancedImages(), mkcert()]
})
