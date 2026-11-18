/** Public assets must include the project path when hosted on GitHub Pages. */
export const assetUrl = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;
