import { devices, Browser, Page, chromium } from 'playwright';
(async () => {
   try {
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
    await page.locator("//*[@id=\"__next\"]/div[1]/div[1]/section[1]/div/div[2]/a").click();
    await page.screenshot( { path: 'screenshot3.png', fullPage:true});
    
    await page.locator("//*[@id=\"__next\"]/div[1]/div/section[1]/div[2]/a[2]").click();
    await page.screenshot( { path: 'screenshot4.png', fullPage:true});
    await page.locator("//*[@id=\"orgname\"]").fill("Robert wharf");
    await page.screenshot( { path: 'screenshot5.png', fullPage:true});
    await page.locator("//*[@id=\"inputLastName2\"]").fill("Rocky");
    await page.screenshot( {path: 'screenshot6.png', fullPage:true});
    await page.locator("//*[@id=\"contctus\"]//*[@id=\"inputEmail\"]").fill("abc@abc.com");
   // await page.locator("/html/body/div[1]/header/nav/div/div/div[2]/div/div/div[2]/div[2]/div/div/div/form/div[2]/input"].fill("abc@abc.com");

    //*[@id="inputEmail"]
    await page.screenshot( { path: 'screenshot7.png', fullPage:true});
    await page.locator("//*[@id=\"contctus\"]//*[@id=\"mobileid\"]").fill("0444222333");
    await page.screenshot( { path: 'screenshot8.png', fullPage:true});
    await page.locator("//*[@id=\"contctus\"]//*[@id=\"contbtn\"]").click();
    await page.screenshot( {path: 'screenshot9.png', fullPage:true});
    await page.waitForTimeout(12000);
    await context.close();
    await browser.close();
   } catch (e) {
    console.error('Not able to locate elements', e);  
    console.log(e);
    }
})();