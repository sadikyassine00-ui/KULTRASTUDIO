import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KULTRA Studio",
    short_name: "KULTRA",
    description: "Handcrafted 100% Merino Wool Desk Mats with Zero-Slide Micro-Grip Backing.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#242528",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
