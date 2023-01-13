const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  // An array with your links
  const links = [
    { url: "/", lastmod: "2022-09-26T18:46:08+00:00", priority: 1.0 },
    { url: "/nft-website-development", changefreq: "daily", priority: 0.9 },
    { url: "/website-design", changefreq: "daily", priority: 0.9 },
    { url: "/website-analysis", changefreq: "daily", priority: 0.9 },
    { url: "/smart-contract", changefreq: "daily", priority: 0.9 },
    { url: "/smart-contract-analysis", changefreq: "daily", priority: 0.9 },
    { url: "/about", changefreq: "daily", priority: 0.9 },
    { url: "/blog", changefreq: "daily", priority: 0.9 },
    { url: "/portfolio", changefreq: "daily", priority: 0.9 },
    { url: "/contract", changefreq: "daily", priority: 0.9 },
    { url: "/terms", changefreq: "daily", priority: 0.9 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
