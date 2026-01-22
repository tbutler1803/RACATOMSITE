/**
 * Get the correct base path for assets depending on the environment
 * On GitHub Pages, we need /RACATOMSITE/ prefix
 * On localhost, we just need /
 */
export function getAssetPath(relativePath: string): string {
  // Remove leading slash if present
  const path = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  
  // Get the base path from the public path (defined in vite config)
  const base = import.meta.env.BASE_URL;
  
  return `${base}${path}`;
}
