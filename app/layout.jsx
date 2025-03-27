import { Footer, Layout } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { NavbarWithThemeLogo } from "../components/NavbarWithThemeLogo";
import "nextra-theme-docs/style.css";

export const metadata = {};

const footer = <Footer>Veridian</Footer>;

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>{}</Head>
      <body>
        <Layout
          navbar={<NavbarWithThemeLogo />}
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
