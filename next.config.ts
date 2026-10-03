import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true" || process.env.EXPORT === "true";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? "/opfrontend" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
