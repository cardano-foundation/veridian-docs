const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || ''
});
