// @ts-check
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import mkcert from "vite-plugin-mkcert";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  devToolbar: {
    enabled: false,
  },
  fonts: [
    {
      provider: fontProviders.fontshare(),
      name: "Satoshi",
      cssVariable: "--font-satoshi",
      weights: [400, 500, 700, 900],
      fallbacks: ["sans-serif"],
    },
  ],
  vite: {
    plugins: [tailwindcss(), mkcert()],
  },
});
