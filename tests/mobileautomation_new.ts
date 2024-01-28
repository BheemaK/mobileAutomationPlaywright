import { devices, Browser, Page, chromium ,test, expect } from '@playwright/test';

test('Mobile', async ({}, testInfo) => {
    const browser = await chromium.launch( {headless:false } );
    const context = await browser.newContext(devices['iPhone 11']);
    const page = await context.newPage();
    await page.goto('https://example.com/');
    const screenshot = await page.screenshot();
    //await page.screenshot({ path: 'screenshot.png', fullPage: true });
    await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });

 

});



//(async () => {
  // Setup
  // const browser = await chromium.launch( {headless:false } );
  // const context = await browser.newContext(devices['iPhone 11']);
  // const page = await context.newPage();

  // The actual interesting bit
 // await context.route('**.jpg', route => route.abort());
 // await page.goto('https://example.com/');
  //const screenshot = await page.screenshot();
 // await page.screenshot({ path: 'screenshot.png', fullPage: true });
  //await testInfo.attach
  


  //assert(await page.title() === 'Example Domain'); // 👎 not a Web First assertion

  // Teardown
  //await context.close();
  //await browser.close();
//})();



//import { test } from '@playwright/test';
 
  //test('adds a downloaded file to report', async ({ page }, testInfo) => {
    //const browser = await chromium.launch( {headless:false } );
    //const context = await browser.newContext(devices['iPhone 11']);
    //const page = await context.newPage();
    //await page.goto('https://example.com/');
    //const screenshot = await page.screenshot();
  
  
    //assert(await page.title() === 'Example Domain'); // 👎 not a Web First assertion
  
    // Teardown
    //await context.close();
    //await browser.close();

    // 1. Navigate to the page
   // await page.goto('https://owasp.org/www-project-web-security-testing-guide/');
    //await page.getByRole('tab', { name: 'Release Versions' }).click();
 
    // 2. Wait for the download
    //const downloadPromise = page.waitForEvent('download');
    //await page.getByRole('link', { name: 'Download the v4.2 PDF' }).click();
    //const download = await downloadPromise;
 
    // 3. Add the PDF to the report
    //const path = await download.path();
    // ^ AppData\Local\Temp\playwright-artifacts-KZfOpF\19df2a33-9f96-465a-acb5-3dc1b9041e71
   // await testInfo.attach(download.suggestedFilename(), {
     //   path: path!,
   // });
//});