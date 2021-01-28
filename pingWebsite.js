const puppeteer = require('puppeteer');
const { printTime } = require('./printTime');

(async () => {
  await getScreenshot('https://serene-savannah-58732.herokuapp.com/');
  await getScreenshot('https://noteful-deployment.herokuapp.com/');
})();

async function getScreenshot(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  let title = url.slice(8, url.indexOf('.herokuapp'));
  await page.screenshot({ path: `./screenshots/${title}-${printTime()}.png` });
  await browser.close();
}
