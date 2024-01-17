import { test, expect } from '@playwright/test' 
test('has title', async ({ page }, testInfo) => {
  await page.goto('https://www.agl.com.au');
  await page.waitForTimeout(2000); 
  const screenshot = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
  await page.waitForTimeout(4000);
  const getValuesBtn = page.locator("//span[text()='Compare energy plans']")
  getValuesBtn.click();
  await page.waitForTimeout(6000);
  const screenshot1 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot1, contentType: 'image/png' });
  await page.waitForTimeout(3000);
  await page.locator("//*[@id=\"mat-input-8\"]").fill("103 Mansfiels Street Berwick");
  const screenshot2 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot2, contentType: 'image/png' });


});

test('get started link', async ({ page }, testInfo) => {
 
});
