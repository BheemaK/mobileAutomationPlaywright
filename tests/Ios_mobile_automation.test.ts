import { devices, Browser, Page, chromium } from 'playwright';
(async () => {
   const browser = await chromium.launch( {headless:false } );
   const context = await browser.newContext(devices['iPhone 12']);
   const page = await context.newPage();
   await page.goto('https://www.lambdatest.com/blog/playwright-framework/');   
   await page.screenshot({ path: 'screenshot.png', fullPage: true });
   //*[@id="menu-item-81"]/a
   //*[@id="menu-item-81"]/a
   await page.locator("//*[@id=\"content\"]/div[1]/div[1]/p/a[1]").click();
   await page.screenshot({ path: 'screenshot1.png', fullPage:true});
   await page.locator("//*[@id=\"menu-item-81\"]/a").click();
   await page.screenshot( { path: 'screenshot2.png', fullPage:true});
   await page.locator("//*[@id=\"__next\"]/div[1]/div[1]/section[2]/div/div[2]/div/div/a").click();
   await page.screenshot( { path: 'screenshot3.png', fullPage:true});
   await page.waitForTimeout(12000);
   await context.close();
   await browser.close();
})();