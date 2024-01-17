//import { devices, Browser, Page } from 'playwright';
//async function run(): Promise<void> {
  //  const browser: Browser = await devices['Pixel 5'].launch();
  //  const context = await browser.newContext();
  //  const page: Page = await context.newPage();
  //  await page.goto('https://example.com');
  //  await page.fill('input[name="username"]', "Kllkl");
   // await page.fill('input[name="passwrod")', "nmnmnm");
   // await page.click('button[type="submit"]');

    //await browser.close();
//}
//run();
import { chromium, devices } from 'playwright';
//import assert from 'node:assert';

(async () => {
  // Setup
  const browser = await chromium.launch();
  const context = await browser.newContext(devices['iPhone 11']);
  const page = await context.newPage();

  // The actual interesting bit
  await context.route('**.jpg', route => route.abort());
  await page.goto('https://example.com/');

  //assert(await page.title() === 'Example Domain'); // 👎 not a Web First assertion

  // Teardown
  await context.close();
  await browser.close();
})();