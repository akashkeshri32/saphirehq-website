export const SITE_URL = "https://sapphireiq.in";
export const SITE_NAME = "Sapphire IQ";

export const absoluteUrl = (path: string = "/") =>
  new URL(path, SITE_URL).toString();
