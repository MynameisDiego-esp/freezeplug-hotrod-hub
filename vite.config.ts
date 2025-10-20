import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
<<<<<<< Updated upstream
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  base: "/freezeplug-hotrod-hub/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "::",
    port: 8080,
  },
}));
=======
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This sets up the '@' alias to point to the 'src' directory.
      "@": path.resolve(__dirname, "./src"),},},
  base: "/freezeplug-hotrod-hub/",
});
>>>>>>> Stashed changes
