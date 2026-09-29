import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Izinkan dev server diakses dari IP LAN agar HMR (hot reload) tidak 403
  allowedDevOrigins: ["localhost", "127.0.0.1", "192.168.202.1"],
};

export default nextConfig;
