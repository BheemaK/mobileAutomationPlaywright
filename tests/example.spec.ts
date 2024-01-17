import { test, expect } from '@playwright/test' 
import { assert } from 'console';
import { resolve } from 'path';
import ENV from "../src/utils/env"



test('Electrification starting page(Select all options)', async ({ page }, testInfo) => {
 
  try {
  console.log("Begin Test");
  console.log(ENV.BASE_URL);
  let name1:string = ENV.BASE_URL || '';
  console.log(name1);
  await page.goto(name1);  
  const screenshot = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
  await page.locator("//*[@id=\"root\"]/div/main/div[2]/div/div[1]/div[2]/div/div/label[1]/input").click();
  const screenshot1 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot1, contentType: 'image/png' });
  await page.locator("//*[@id=\"root\"]/div/main/div[2]/div/div[1]/div[2]/div/div/label[2]/input").click();
  const screenshot2 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot2, contentType: 'image/png' });
  await page.locator("//*[@id=\"root\"]/div/main/div[2]/div/div[1]/div[2]/div/div/label[3]/input").click();
  const screenshot3 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot3, contentType: 'image/png' });
  await page.locator("//*[@id=\"root\"]/div/main/div[2]/div/div[1]/div[2]/div/div/label[4]/input").click();
  const screenshot4 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot4, contentType: 'image/png' });
  await page.locator("//*[@id=\"root\"]/div/main/div[2]/div/div[1]/div[2]/div/div/label[5]/input").click();
  const screenshot5 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot5, contentType: 'image/png' });
  await page.locator("//*[@id=\"root\"]/div/main/div[2]/div/div[2]/button[1]").click();
  const screenshot6 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot6, contentType: 'image/png' });
  await page.locator("//*[@id=\"root\"]/div/main/div[2]/div/div[1]/div[2]/div/div/label[1]/input").click();
  const screenshot7 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot7, contentType: 'image/png' });
  await page.locator("//*[@id=\"root\"]/div/main/div[2]/div/div[1]/div[2]/div/div/label[2]/input").click();
  const screenshot8 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot8, contentType: 'image/png' });
  await page.locator("//*[@id=\"root\"]/div/main/div[2]/div/div[1]/div[2]/div/div/label[3]/input").click();
  const screenshot9 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot9, contentType: 'image/png' });
  await page.locator("//*[@id=\"root\"]/div/main/div[2]/div/div[1]/div[2]/div/div/label[4]/input").click();
  const screenshot10 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot10, contentType: 'image/png' });
  await page.locator("//*[@id=\"root\"]/div/main/div[2]/div/div[1]/div[2]/div/div/label[5]/input").click();
  const screenshot11 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot11, contentType: 'image/png' });
  await page.locator("//*[@id=\"root\"]/div/main/div[2]/div/div[1]/div[2]/div/div/label[6]/input").click();
  const screenshot12 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot12, contentType: 'image/png' });
  
  await page.locator("//*[@id=\"root\"]/div/main/div[2]/div/div[2]/button[1]").click();
  const screenshot13 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot13, contentType: 'image/png' });
  await page.locator("//*[@id=\"email\"]").fill("abc@abc.com");
  const screenshot14 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot14, contentType: 'image/png' });
  await page.locator("//*[@id=\"firstName\"]").fill("David");
  const screenshot15 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot15, contentType: 'image/png' });
  await page.locator("//*[@id=\"lastName\"]").fill("Johnson");
  const screenshot16 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot16, contentType: 'image/png' });
 
  await page.locator("//*[@id=\"root\"]/div/main/div[2]/div/div[1]/div/div[3]/button[1]/div").click();
  const screenshot17 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot17, contentType: 'image/png' });
  await page.locator("//*[@id=\"en_US\"]/tbody/tr[7]/td/table/tbody/tr/td[1]/div/form/input[1]").click();
  const screenshot18 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot18, contentType: 'image/png' });
 
  await page.locator("//*[@id=\"container\"]/div/div[2]/div/div[1]/div[2]/button").click();
  const screenshot19 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot19, contentType: 'image/png' });
  
  await page.locator("//*[@id=\"container\"]/div/div[2]/div/div[2]/div").click();
  const screenshot20 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot20, contentType: 'image/png' });
  //*[@id="__next"]/div/main/div/div[1]/form/div[1]/input
  await page.locator("//*[@id=\"__next\"]/div/main/div/div[1]/form/div[1]/input").fill("Bheema.Kattikar@appscore.com.au");
  const screenshot21 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot21, contentType: 'image/png' });
  await page.locator("//*[@id=\"__next\"]/div/main/div/div[1]/form/div[2]/button[2]").click();
  const screenshot22 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot22, contentType: 'image/png' });
  await page.pause();

  await page.waitForTimeout(60000);
  await page.locator("//*[@id=\"__next\"]/div/main/div/div[1]/form/div[1]/div[2]/div[1]").click();
  const screenshot24 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot24, contentType: 'image/png' });
  await page.locator("//*[@id=\"__next\"]/div/main/div/div[1]/form/div[2]/div[2]/button").click();
  const screenshot25 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot25, contentType: 'image/png' });
  await page.locator("//*[@id=\"__next\"]/div/main/div/div[1]/div[2]/div[2]/button").click();
  const screenshot26 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot26, contentType: 'image/png' });


  const locatorVal = page.locator("//*[@id=\"root\"]/div/main/div[2]/div/div[1]/div[2]/div/span/span[2]");
  await locatorVal.hover();
  await locatorVal.click();
  await page.keyboard.press('ArrowRight');
  const screenshot27 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot27, contentType: 'image/png' });

  await page.locator("//*[@id=\"root\"]/div/main/div[2]/div/div[2]/div[2]/div/div/label[1]/input").click();
  const screenshot28 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot28, contentType: 'image/png' });


  const locatorVal1 = page.locator("//*[@id=\"root\"]/div/main/div[2]/div/div[3]/div[2]/div/span/span[2]");
  await locatorVal1.hover();
  await locatorVal1.click();
  await page.keyboard.press('ArrowRight');
  const screenshot29 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot29, contentType: 'image/png' });

  const locatorVal2 = page.locator("//*[@id=\"root\"]/div/main/div[2]/div/div[4]/div[2]/div/span/span[2]");
  await locatorVal2.hover();
  await locatorVal2.click();
  await page.keyboard.press('ArrowRight');
  const screenshot30 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot30, contentType: 'image/png' });

  const locatorVal3 = page.locator("//*[@id=\"root\"]/div/main/div[2]/div/div[5]/div[2]/div/span/span[2]");
  await locatorVal3.hover();
  await locatorVal3.click();
  await page.keyboard.press('ArrowRight');
  const screenshot31 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot31, contentType: 'image/png' });
  await page.locator("//*[@id=\"root\"]/div/main/div[2]/div/div[6]/div[2]/div/div/label[1]/input").click();
  const screenshot32 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot32, contentType: 'image/png' });
  await page.locator("//*[@id=\"root\"]/div/main/div[2]/div/div[7]/div[2]/div/div/label[1]/input").click();
  const screenshot33 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot33, contentType: 'image/png' });
  await page.locator("//*[@id=\"root\"]/div/main/div[2]/div/div[8]/div[2]/div/div/label[1]/input").click();
  const screenshot34 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot34, contentType: 'image/png' });
  await page.locator("//*[@id=\"root\"]/div/main/div[2]/div/div[9]/div[2]/div/div/label[1]/input").click();
  const screenshot35 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot35, contentType: 'image/png' });

  const locatorVal4 = page.locator("//*[@id=\"root\"]/div/main/div[2]/div/div[10]/div[2]/div/span/span[2]");
  await locatorVal4.hover();
  await locatorVal4.click();
  await page.keyboard.press('ArrowRight');
  const screenshot36 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot36, contentType: 'image/png' });
  await page.locator("//*[@id=\"root\"]/div/main/div[2]/div/div[11]/button[1]").click();
  const screenshot37 = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot37, contentType: 'image/png' });



 


  
  } catch (error) {
    console.error('Error logging in', error);

  }

  
  
});


