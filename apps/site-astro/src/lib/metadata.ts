export const siteTitle = "Big Ten After Dark";
export const siteTagline = "Three yards and a cloud of forrest fires";
export const siteDescription =
  "Manifest Destiny of the (Second) Best Damn Football Conference in the Land";
export const hostname =
  process.env.NODE_ENV === "production"
    ? "https://bigtenafterdark.com/"
    : "https://localhost:3000/";

export function titleTemplate(title?: string, tagline: string = siteTagline) {
  const pieces: string[] = [siteTitle, tagline];
  if (title) {
    pieces.unshift(title);
  }
  return pieces.join(" | ");
}

export function getPublicAssetUrl(assetPath: string) {
  return `${hostname}${assetPath}`;
}
