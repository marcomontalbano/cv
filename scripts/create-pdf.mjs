// @ts-check

import path from 'path'
import puppeteer from 'puppeteer'

import url from 'url'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

/**
 * Generate a PDF
 * @param {string} url Input url
 * @returns 
 */
async function generatePDF(url) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--disable-web-security']
  })

  const page = await browser.newPage()
  await page.goto(url, { waitUntil: 'networkidle0' })

  /** @type import('puppeteer').PDFOptions */
  const pdfConfig = {
    path: './src/static/cv-marco-montalbano.pdf',
    format: 'A4',
    scale: 1,
    // scale: 1.3,
    printBackground: true,
    margin: {
      top: '15mm',
      right: '10mm',
      bottom: '15mm',
      left: '10mm',
    }
  }
  await page.emulateMediaType('print')
  const pdf = await page.pdf(pdfConfig)

  await browser.close()

  return pdf
}

await generatePDF(`file:${path.join(__dirname, '../dist/index.html')}`)
