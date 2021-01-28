const puppeteer = require('puppeteer');
const { printTime } = require('./printTime');

(async () => {
  await pingDashboard('https://serene-savannah-58732.herokuapp.com/');
  await pingNoteful('https://noteful-deployment.herokuapp.com/');
})();

async function pingDashboard(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  let title = url.slice(8, url.indexOf('.herokuapp'));
  await page.screenshot({ path: `./screenshots/${title}-${printTime()}.png` });
  await browser.close();
}

async function pingNoteful(url) {
  let title = url.slice(8, url.indexOf('.herokuapp'));
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
