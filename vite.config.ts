import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    imagetools({
      defaultDirectives: (url) => {
        if (url.searchParams.has('webp')) {
          return new URLSearchParams('format=webp&quality=80');
        }
        return new URLSearchParams();
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          animations: ["framer-motion"],
          ui: ["@radix-ui/react-accordion", "@radix-ui/react-dialog", "@radix-ui/react-tooltip"],
        },
      },
    },
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    minify: 'esbuild',
    target: 'esnext',
  },
  assetsInclude: ["**/*.jpg", "**/*.jpeg", "**/*.png", "**/*.webp", "**/*.avif", "**/*.gif", "**/*.svg"],
}));
