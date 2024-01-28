import { devices, Browser, Page, chromium } from 'playwright';
(async () => {
   const browser = await chromium.launch( {headless:false } );
   const context = await browser.newContext(devices['iPhone 11']);
   const page = await context.newPage();
   await page.goto('https://www.lambdatest.com/blog/playwright-framework/');   
   await page.screenshot({ path: 'screenshot.png', fullPage: true });
   await page.locator("//*[@id=\"content\"]/div[1]/div[1]/p/a[1]").click();
   await page.screenshot({ path: 'screenshot1.png', fullPage:true});
   await page.locator("//*[@id=\"menu-item-35\"]/a").click();
   await page.screenshot( { path: 'screenshot2.png', fullPage:true});
   await page.waitForTimeout(6000);
  await context.close();
  await browser.close();
})();



