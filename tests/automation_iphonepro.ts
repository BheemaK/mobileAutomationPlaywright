const playwright = require("playwright");
const vp = { width: 375, height: 812 };

(async () => {
  for (const browserType of ["webkit", "chromium", "firefox"]) {
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext({
      devices: ["iPhone 11 Pro"],
      viewport: vp,
    });
    const page = await context.newPage();
    await page.goto("https://lusarealty.com/");
    await page.screenshot({
      path: `iphonepro-${browserType}.jpg`,
      type: "jpeg",
      fullPage: true,
      quality: 90,
    });
    page.once("load", () => console.log(`Page in ${browserType} loaded!`));
    await browser.close();
  }
})();