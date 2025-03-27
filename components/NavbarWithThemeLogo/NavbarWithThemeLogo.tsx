"use client";

import { Navbar } from "nextra-theme-docs";
import Image from "next/image";
import { useTheme } from "next-themes";
import VeridianLogoFullDark from "../../utils/icons/VeridianLogoFullDark.svg";
import VeridianLogoFullLight from "../../utils/icons/VeridianLogoFullLight.svg";
import { GITHUB_REPO_URL, DISCORD_URL } from "../../utils/constants";

const NavbarWithThemeLogo = () => {
  const { theme } = useTheme();

  const logo = theme === "dark" ? VeridianLogoFullLight : VeridianLogoFullDark;

  return (
    <Navbar
      logo={<Image src={logo} alt="Veridian Platform Logo" />}
      projectLink={GITHUB_REPO_URL}
      chatLink={DISCORD_URL}
    />
  );
};

export { NavbarWithThemeLogo };
