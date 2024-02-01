import { test, expect } from '@playwright/test' 
import { assert } from 'console';
import { resolve } from 'path';
import ENV from "../src/utils/env"
import  { xapthLocator1, xapthLocator2, xapthLocator3, xapthLocator4, xapthLocator5, xapthLocator6, xapthLocator7, xapthLocator8, xapthLocator9 } from './pageObject';

import { devices, Browser, Page, chromium } from 'playwright';

test('IOS Mobile Automation)', async ({  }, testInfo) => {
  try {
    const browser = await chromium.launch( {headless:false } );
    const deviceName = 'iphone 12'
    const context = await browser.newContext(devices[deviceName]);
   // const context = await browser.newContext(devices['iPhone 12']);
    const page = await context.newPage();
    let urlName:string = ENV.BASE_URL || '';
    await page.goto(urlName);
    const screenshot12 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot12, contentType: 'image/png' });
    await page.locator(xapthLocator1).click();
    const screenshot13 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot13, contentType: 'image/png' });
    await page.locator(xapthLocator2).click();
    const screenshot14 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot14, contentType: 'image/png' });
    await page.locator(xapthLocator3).click();
    const screenshot15 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot15, contentType: 'image/png' });  
    await page.locator(xapthLocator4).click();
    const screenshot16 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot16, contentType: 'image/png' });
    await page.locator(xapthLocator5).fill("Robert wharf");
    const screenshot17 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot17, contentType: 'image/png' });
    await page.locator(xapthLocator6).fill("Rocky");
    const screenshot18 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot18, contentType: 'image/png' });
    await page.locator(xapthLocator7).fill("abc@abc.com");
    const screenshot19 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot19, contentType: 'image/png' });
    await page.locator(xapthLocator8).fill("0444222333")
    const screenshot20 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot20, contentType: 'image/png' });
    await page.locator(xapthLocator9).click();
    const screenshot21 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot21, contentType: 'image/png' });
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
    const deviceName = "galaxy 14";
    const context = await browser.newContext(devices[deviceName]);
    const page = await context.newPage();
    let urlName:string = ENV.BASE_URL || '';
    await page.goto(urlName);
    const screenshot12 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot12, contentType: 'image/png' });
    await page.locator(xapthLocator1).click();
    const screenshot13 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot13, contentType: 'image/png' });
    await page.locator(xapthLocator2).click();
    const screenshot14 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot14, contentType: 'image/png' });
    await page.locator(xapthLocator3).click();
    const screenshot15 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot15, contentType: 'image/png' });
    await page.locator(xapthLocator4).click();
    const screenshot16 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot16, contentType: 'image/png' });
    await page.locator(xapthLocator5).fill("Robert wharf");
    const screenshot17 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot17, contentType: 'image/png' });
    await page.locator(xapthLocator6).fill("Rocky");
    const screenshot18 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot18, contentType: 'image/png' });
    await page.locator(xapthLocator7).fill("abc@abc.com");
    const screenshot19 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot19, contentType: 'image/png' });
    await page.locator(xapthLocator8).fill("0444222333");
    const screenshot20 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot20, contentType: 'image/png' });
    await page.locator(xapthLocator9).click();
    const screenshot21 = await page.screenshot();   
    await testInfo.attach('screenshot', { body: screenshot15, contentType: 'image/png' });
    await page.waitForTimeout(12000);
    await context.close();
    await browser.close();
  } catch (error) {
    console.error('Not able to locate elements, hence failed', error);

  }
});



