import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Define all routes that match App.tsx routing configuration
// Your site's base URL - update this to your actual domain
const SITE_URL = process.env.SITE_URL || 'https://yourdomain.com'

// Define all routes that match App.tsx routing configuration
const routesToPrerender = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/portfolio', priority: '0.9', changefreq: 'weekly' },
  { url: '/portfolio/kalbakken-engros', priority: '0.7', changefreq: 'monthly' },
  { url: '/portfolio/db-lyd-lys', priority: '0.7', changefreq: 'monthly' },
  { url: '/portfolio/myklegull-polering', priority: '0.7', changefreq: 'monthly' },
  { url: '/tjenester/webdesign', priority: '0.9', changefreq: 'monthly' },
  { url: '/tjenester/grafisk-design', priority: '0.9', changefreq: 'monthly' },
  { url: '/tjenester/digital-markedsføring', priority: '0.9', changefreq: 'monthly' },
  { url: '/tjenester/merkevare', priority: '0.9', changefreq: 'monthly' },
  { url: '/tjenester/nettside-pris', priority: '0.8', changefreq: 'monthly' },
  { url: '/tjenester/seo-nettside', priority: '0.8', changefreq: 'monthly' },
  { url: '/tjenester/nettside-bedrift', priority: '0.8', changefreq: 'monthly' },
  { url: '/personvern', priority: '0.3', changefreq: 'yearly' },
  { url: '/cookies', priority: '0.3', changefreq: 'yearly' },
  { url: '/vilkar', priority: '0.3', changefreq: 'yearly' }
]

// Function to generate sitemap.xml
function generateSitemap(routes) {
  const lastmod = new Date().toISOString().split('T')[0]
  
  const urls = routes.map(route => `  <url>
    <loc>${SITE_URL}${route.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
}

;(async () => {
  // Prerender all HTML pages
  for (const route of routesToPrerender) {
    const appHtml = render(route.url);
    const html = template.replace(`<!--app-html-->`, appHtml)

    const filePath = `dist${route.url === '/' ? '/index' : route.url}.html`
    const dirPath = path.dirname(toAbsolute(filePath))
    
    // Ensure directory exists before writing file
    fs.mkdirSync(dirPath, { recursive: true })
    
    fs.writeFileSync(toAbsolute(filePath), html)
    console.log('pre-rendered:', filePath)
  }
  
  // Generate and write sitemap.xml
  const sitemap = generateSitemap(routesToPrerender)
  fs.writeFileSync(toAbsolute('dist/sitemap.xml'), sitemap)
  console.log('generated: sitemap.xml')
})()
