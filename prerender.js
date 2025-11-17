import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Define all routes that match App.tsx routing configuration
const routesToPrerender = [
  '/',
  '/about',
  '/contact',
  '/portfolio',
  '/portfolio/kalbakken-engros',
  '/portfolio/db-lyd-lys',
  '/portfolio/myklegull-polering',
  '/tjenester/webdesign',
  '/tjenester/grafisk-design',
  '/tjenester/digital-markedsføring',
  '/tjenester/merkevare',
  '/tjenester/nettside-pris',
  '/tjenester/seo-nettside',
  '/tjenester/nettside-bedrift',
  '/personvern',
  '/cookies',
  '/vilkar'
]

;(async () => {
  for (const url of routesToPrerender) {
    const appHtml = render(url);
    const html = template.replace(`<!--app-html-->`, appHtml)

    const filePath = `dist${url === '/' ? '/index' : url}.html`
    const dirPath = path.dirname(toAbsolute(filePath))
    
    // Ensure directory exists before writing file
    fs.mkdirSync(dirPath, { recursive: true })
    
    fs.writeFileSync(toAbsolute(filePath), html)
    console.log('pre-rendered:', filePath)
  }
})()
