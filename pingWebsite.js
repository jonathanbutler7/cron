const puppeteer = require('puppeteer');
const { printTime } = require('./printTime');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://serene-savannah-58732.herokuapp.com/');
  await page.screenshot({ path: `${printTime()}.png` });

  await browser.close();
})();
