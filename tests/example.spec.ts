import { test, expect } from '@playwright/test' 
import { assert } from 'console';
import { resolve } from 'path';
import ENV from "../src/utils/env"
import { devices, Browser, Page, chromium } from 'playwright';
//import type { PlaywrightCleanup, DetailedLogOptions } from "playwright-cleanup";
//import { playwrightCleanup } from "playwright-cleanup"


test('IOS Mobile Automation)', async ({  }, testInfo) => {
  try {
    const browser = await chromium.launch( {headless:false } );
    const context = await browser.newContext(devices['iPhone 12']);
    const page = await context.newPage();
    await page.goto('https://www.lambdatest.com/blog/playwright-framework/');
    const screenshot12 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot12, contentType: 'image/png' });
    await page.locator("//*[@id=\"content\"]/div[1]/div[1]/p/a[1]").click();
    const screenshot13 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot13, contentType: 'image/png' });
    await page.locator("//*[@id=\"menu-item-81\"]/a").click();
    const screenshot14 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot14, contentType: 'image/png' });
    await page.locator("//*[@id=\"__next\"]/div[1]/div[1]/section[1]/div/div[2]/a").click();
    const screenshot15 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot15, contentType: 'image/png' });
   
    
    await page.locator("//*[@id=\"__next\"]/div[1]/div/section[1]/div[2]/a[2]").click();
    const screenshot16 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot16, contentType: 'image/png' });
    await page.locator("//*[@id=\"orgname\"]").fill("Robert wharf");
    const screenshot17 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot17, contentType: 'image/png' });
    await page.locator("//*[@id=\"inputLastName2\"]").fill("Rocky");
    const screenshot18 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot18, contentType: 'image/png' });
    await page.locator("//*[@id=\"contctus\"]//*[@id=\"inputEmail\"]").fill("abc@abc.com");
    const screenshot19 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot19, contentType: 'image/png' });
    await page.locator("//*[@id=\"contctus\"]//*[@id=\"mobileid\"]").fill("0444222333");
    const screenshot20 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot20, contentType: 'image/png' });
    await page.locator("//*[@id=\"contctus\"]//*[@id=\"contbtn\"]").click();
    const screenshot21 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot15, contentType: 'image/png' });
    await page.waitForTimeout(12000);
    await context.close();
    await browser.close();
  } catch (error) {
    console.error('Not able to locate elements, hence failed', error);

  }  
  
});


test('Android Mobile Automation)', async ({  }, testInfo) => {
  try {
    const browser = await chromium.launch( {headless:false } );
    const context = await browser.newContext(devices['galaxy 14']);
    const page = await context.newPage();
    await page.goto('https://www.lambdatest.com/blog/playwright-framework/');
    const screenshot12 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot12, contentType: 'image/png' });
    await page.locator("//*[@id=\"content\"]/div[1]/div[1]/p/a[1]").click();
    const screenshot13 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot13, contentType: 'image/png' });
    await page.locator("//*[@id=\"menu-item-81\"]/a").click();
    const screenshot14 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot14, contentType: 'image/png' });
    await page.locator("//*[@id=\"__next\"]/div[1]/div[1]/section[1]/div/div[2]/a").click();
    const screenshot15 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot15, contentType: 'image/png' });
   
    
    await page.locator("//*[@id=\"__next\"]/div[1]/div/section[1]/div[2]/a[2]").click();
    const screenshot16 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot16, contentType: 'image/png' });
    await page.locator("//*[@id=\"orgname\"]").fill("Robert wharf");
    const screenshot17 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot17, contentType: 'image/png' });
    await page.locator("//*[@id=\"inputLastName2\"]").fill("Rocky");
    const screenshot18 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot18, contentType: 'image/png' });
    await page.locator("//*[@id=\"contctus\"]//*[@id=\"inputEmail\"]").fill("abc@abc.com");
    const screenshot19 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot19, contentType: 'image/png' });
  
   
    await page.locator("//*[@id=\"contctus\"]//*[@id=\"mobileid\"]").fill("0444222333");
    const screenshot20 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot20, contentType: 'image/png' });
    await page.locator("//*[@id=\"contctus\"]//*[@id=\"contbtn\"]").click();
    const screenshot21 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot15, contentType: 'image/png' });
    await page.waitForTimeout(12000);
    await context.close();
    await browser.close();
  } catch (error) {
    console.error('Not able to locate elements, hence failed', error);

  }
});



