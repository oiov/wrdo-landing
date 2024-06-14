/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.wr.do",
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
