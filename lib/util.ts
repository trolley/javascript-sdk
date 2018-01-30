/**
 * Build a URL to call the API with, making sure everything is encoded
 * @param base
 * @param parts any additional path components
 * @hidden
 */
export function buildURL(base: string, ...parts: string[]) {
  return ['', 'v1'].concat([base], parts).map(encodeURIComponent).join('/');
}
