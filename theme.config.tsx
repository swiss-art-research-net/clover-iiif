import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./docs/components/Logo";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useMemo } from "react";

const siteTitle = "Clover IIIF";
const siteDescription = "Showcase IIIF Manifests as interopable web content.";

const config: DocsThemeConfig = {
  darkMode: true,
  nextThemes: {
    defaultTheme: "system",
  },
  docsRepositoryBase: "https://github.com/mathewjordan/clover-iiif-proto/docs",
  footer: {
    text: "Extensible IIIF front-end toolkit and Manifest viewer. Accessible. Composable. Open Source.",
  },

  useNextSeoProps() {
    const config = useConfig();
    const title = config.frontMatter.title
      ? `${config.frontMatter.title} – ${siteTitle}`
      : `${siteTitle} – ${siteDescription}`;
    const description = config.frontMatter.description
      ? config.frontMatter.description
      : siteDescription;

    const { route } = useRouter();
    const canonical = useMemo(
      () =>
        new URL(
          route.endsWith("/") ? route : `${route}/`,
          "https://samvera-labs.github.io/clover-iiif/"
        ).href,
      [route]
    );

    return {
      defaultTitle: `${siteTitle} - ${siteDescription}`,
      title,
      description,
      canonical,
      openGraph: {
        url: canonical,
        title,
        siteName: `${siteTitle} - ${siteDescription}`,
        images: [
          {
            url: "",
            type: "image/png",
            width: 1200,
            height: 675,
          },
        ],
      },
      twitter: {
        cardType: "summary_large_image",
      },
    };
  },
  logo: <Logo />,
  project: {
    link: "https://github.com/samvera-labs/clover-iiif",
  },
  primaryHue: 209,
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1,
  },
};

export default config;
