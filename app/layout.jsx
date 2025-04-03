import { Footer, Layout } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { NavbarWithThemeLogo } from "../components/NavbarWithThemeLogo";
import { DOCUMENTATION_GITHUB_REPO_URL, WEBPAGE_URL } from "../utils/constants";
import "nextra-theme-docs/style.css";
import "../styles/main.css";

export const metadata = {};

const currentYear = new Date().getFullYear();

const footer = <Footer>
<a href={WEBPAGE_URL} target="_blank" rel="noopener noreferrer">
  {`© ${currentYear} Veridian Platform`}
</a>
</Footer>;

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>{}</Head>
      <body>
        <Layout
          navbar={<NavbarWithThemeLogo />}
          pageMap={await getPageMap()}
          docsRepositoryBase={DOCUMENTATION_GITHUB_REPO_URL}
          footer={footer}
          editLink={null}
          feedback={{ content: null }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
