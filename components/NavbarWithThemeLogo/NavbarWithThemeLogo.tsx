"use client";

import { useState, useEffect } from "react";
import { Navbar } from "nextra-theme-docs";
import Image from "next/image";
import { useTheme } from "next-themes";
import VeridianLogoFullDark from "../../utils/icons/VeridianLogoFullDark.svg";
import VeridianLogoFullLight from "../../utils/icons/VeridianLogoFullLight.svg";
import { VERIDIAN_GITHUB_REPO_URL, DISCORD_URL } from "../../utils/constants";

const NavbarWithThemeLogo = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const logo = theme === "dark" ? VeridianLogoFullLight : VeridianLogoFullDark;

  return (
    <Navbar
      logo={<Image src={logo} alt="Veridian Platform Logo" />}
      projectLink={VERIDIAN_GITHUB_REPO_URL}
      chatLink={DISCORD_URL}
    />
  );
};

export { NavbarWithThemeLogo };
