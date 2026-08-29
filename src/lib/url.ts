export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const trimmedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  return path.startsWith("/") ? `${trimmedBase}${path}` : `${trimmedBase}/${path}`;
}
