import type { NextConfig } from "next";

// When deploying to GitHub Pages under https://<user>.github.io/<repo-name>/,
// Next.js needs basePath to match the repository name.
// GitHub Actions automatically sets process.env.GITHUB_REPOSITORY as "owner/repo"
const isGithubActions = !!process.env.GITHUB_ACTIONS;
let basePath = "";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, "");
  if (repo && !repo.endsWith(".github.io")) {
    basePath = `/${repo}`;
  }
}

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
