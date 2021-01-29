const puppeteer = require('puppeteer');

function printTime() {
  const time = new Date();
  return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
}

function getTitle(url) {
  return url.slice(8, url.indexOf('.herokuapp'));
}

async function pingDashboard(url) {
  const title = getTitle(url);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({ path: `./screenshots/${title}-${printTime()}.png` });
  await browser.close();
}

async function pingNoteful(url) {
  const title = getTitle(url);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.type('input[name=email]', 'email@test.com');
  await page.type('input[name=password]', 'password');
  await page.click('button[type=submit]');
  await page.waitForTimeout(9000);
  await page.screenshot({ path: `./screenshots/${title}-${printTime()}.png` });
  await browser.close();
}

module.exports = { pingDashboard, pingNoteful };
