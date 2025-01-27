const fs = require("fs");

const baseUrl = "https://www.abhivyaktifest.in";
const staticRoutes = ["/", "/event", "/team", "/developers", "/terms"];

const eventRoutes = [
    "showStopper",
    "melodyHustle",
    "danceSquad",
    "singersShowdown",
    "musicalArmageddon",
    "chordsOfChaos",
    "beatBarracks",
    "mrAndMsAbhivyakti",
    "rapBattle",
    "mun",
    "audienceOdyssey",
    "admads",
    "photographyChallenge",
    "aavahan",
    "dahaad",
    "bahumukhi",
    "rasdhaara",
];

const generateSitemap = () => {
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Add static routes
    staticRoutes.forEach((route) => {
        sitemap += `  <url>\n`;
        sitemap += `    <loc>${baseUrl}${route}</loc>\n`;
        sitemap += `  </url>\n`;
    });

    // Add dynamic routes
    eventRoutes.forEach((route) => {
        sitemap += `  <url>\n`;
        sitemap += `    <loc>${baseUrl}/event/${route}</loc>\n`;
        sitemap += `  </url>\n`;
    });

    sitemap += `</urlset>`;

    // Save the sitemap to public folder
    fs.writeFileSync("./public/sitemap.xml", sitemap, "utf8");
};

generateSitemap();
