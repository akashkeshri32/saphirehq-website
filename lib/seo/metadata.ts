import type { Metadata } from "next";
import { SITE_NAME } from "./config";

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

export const buildMetadata = ({
  title,
  description,
  path,
  noIndex = false,
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
