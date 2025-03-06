import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
};

const navbar = (
  <Navbar
    logo={<b>Veridian Documentation</b>}
    projectLink="https://github.com/cardano-foundation/cf-identity-wallet"
    chatLink="https://discord.gg/Wh25yBqwpz"
  />
);
const footer = <Footer>Veridian</Footer>;

export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head
      >
        {}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
