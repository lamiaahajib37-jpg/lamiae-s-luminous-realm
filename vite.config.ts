import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        // هاد السطر كيقول لـ Vite ما يبقاش يصدعنا بـ index.html
        input: './src/router.tsx' 
      }
    }
  }
});