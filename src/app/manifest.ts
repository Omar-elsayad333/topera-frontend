import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Next.js Base",
    short_name: "Next Base",
    description: "Nextjs base",
    start_url: "/",
    theme_color: "#000000",
    background_color: "#ffffff",
    display: "standalone",
    orientation: "portrait",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "16x16",
        type: "image/x-icon",
      },
      // { src: 'favicon/16x16.png?v=1.0', sizes: '16x16', type: 'image/png' },
      // { src: 'favicon/32x32.png?v=1.0', sizes: '32x32', type: 'image/png' },
      // { src: 'favicon/180x180.png?v=1.0', sizes: '180x180', type: 'image/png' },
      // { src: 'favicon/192x192.png?v=1.0', sizes: '192x192', type: 'image/png' },
      // { src: 'favicon/512x512.png?v=1.0', sizes: '512x512', type: 'image/png' },
    ],
  };
}
