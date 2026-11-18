const isPages = process.env.GITHUB_PAGES === 'true';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
export default {
  ...(isPages ? { output: 'export' } : {}),
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};
