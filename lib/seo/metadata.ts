import type { Metadata } from "next";
import { SITE_NAME } from "./config";

const DEFAULT_OG_IMAGE = "/metadata/opengraph-image.webp";

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  image?: string;
};

export const buildMetadata = ({
  title,
  description,
  path,
  noIndex = false,
  image = DEFAULT_OG_IMAGE,
}: BuildMetadataArgs): Metadata => ({
  title,
  description,
  alternates: {
    canonical: path,
  },
  openGraph: {
    title,
    description,
    url: path,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: image,
        width: 1568,
        height: 1003,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  ...(noIndex && {
    robots: {
      index: false,
      follow: true,
    },
  }),
});
