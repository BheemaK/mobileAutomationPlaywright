import { test, expect } from '@playwright/test' 
test('AGL login page', async ({ page }, testInfo) => {
  await page.goto('https://www.agl.com.au');
  const screenshot = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });

});

