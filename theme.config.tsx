import type { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Identity Wallet Documentation</span>,
  project: {
    link: "https://github.com/cardano-foundation/cf-identity-wallet",
  },
  chat: {
    link: "https://discord.gg/Wh25yBqwpz",
  },
  head: (
    <>
      <link rel="icon" type="image/svg+xml" sizes="any" href="/favicon.svg" />
    </>
  ),
  footer: {
    text: "Cardano Foundation",
  },
  i18n: [
    {
      locale: "en",
      text: "English",
    },
  ],
};

export default config;
