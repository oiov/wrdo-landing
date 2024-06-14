/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://sorapi.dev",
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
