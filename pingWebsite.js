const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://serene-savannah-58732.herokuapp.com/');
  const time = new Date();
  const hours = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  const readableTime = `${hours}:${min}:${sec}`;
  await page.screenshot({ path: `${readableTime}.png` });

  await browser.close();
})();
