import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import svgr from "vite-plugin-svgr";
import { VitePWA } from "vite-plugin-pwa";
export default defineConfig({
    plugins: [
        react(),
        svgr(),
        VitePWA({
            registerType: "autoUpdate",
            includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
            manifest: {
                name: "somerandomshit",
                short_name: "SRS",
                icons: [
                    {
                        src: "pwa-64x64.png",
                        sizes: "64x64",
                        type: "image/png",
                    },
                    {
                        src: "pwa-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "pwa-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any",
                    },
                    {
                        src: "maskable-icon-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "maskable",
                    },
                ],
                display: "standalone",
                orientation: "portrait",
                theme_color: "#6366f1",
                background_color: "#ffffff",
                scope: "/",
                start_url: "/",
            },
            devOptions: {
                enabled: true,
            },
        }),
    ],
    resolve: {
        alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
    },
    server: {
        host: true,
        port: 5173,
    },
});
