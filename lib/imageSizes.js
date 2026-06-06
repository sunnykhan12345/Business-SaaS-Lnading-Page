export const imageSizes = {
  '/images/hero-dashboard.webp': { width: 1096, height: 748 },
  '/images/super-admin-dashboard.webp': { width: 1096, height: 748 },
  '/images/hero-dashboard-wide.webp': { width: 2047, height: 1330 },
  '/images/client-lead-profile.webp': { width: 1590, height: 1032 },
  '/images/client-dashboard.webp': { width: 1644, height: 1122 },
  '/images/documents-management.webp': { width: 1593, height: 519 },
  '/images/documents-management-wide.webp': { width: 1593, height: 519 },
  '/images/full-site-reference.webp': { width: 288, height: 2048 },
  '/images/contact-support.webp': { width: 1728, height: 1860 },
  '/images/package-management.webp': { width: 1644, height: 1122 },
  '/images/problem-workflow.webp': { width: 1656, height: 1980 },
  '/images/solution-overview.webp': { width: 2048, height: 1050 }
};

export function getImageSize(src) {
  return imageSizes[src] || { width: 1200, height: 800 };
}
