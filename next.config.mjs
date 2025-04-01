import nextra from "nextra";

const withNextra = nextra({
});

export default withNextra({
  async redirects() {
    return [
      { source: "/walletGuide/recovery", destination: "/recovery", permanent: false },
      { source: "/walletGuide/onboarding/:path*", destination: "/onboarding/:path*", permanent: false }
    ];
  }
});
