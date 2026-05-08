export function withBase(baseUrl: string, path = ""): string {
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  const normalizedPath = path ? `/${path.replace(/^\/+/, "")}` : "/";
  return `${normalizedBase}${normalizedPath}`;
}
