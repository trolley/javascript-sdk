/**
 * Build a URL to call the API with, making sure everything is encoded
 * @param base
 * @param parts any additional path components
 * @hidden
 */
export function buildURL(base: string, ...parts: string[]) {
  return ['', 'v1'].concat([base], parts.map(encodeURIComponent))
    .join('/');
}

interface PaginationMeta {
  page: number;
  pages: number;
  records: number;
}

export class PaginatedArray<T> extends Array<T> {
  meta: PaginationMeta;

  constructor(meta: PaginationMeta, ...items: T[]) {
    super(...items);
    this.meta = meta;
  }
}
