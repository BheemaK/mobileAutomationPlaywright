"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { devices, Browser, Page, chromium } from 'playwright';
var playwright_1 = require("playwright");
//async function run(): Promise<void> {
//  const browser: Browser = await devices['Pixel 5'].launch();
//  const context = await browser.newContext();
//  const page: Page = await context.newPage();
//  await page.goto('https://example.com');
//  await page.fill('input[name="username"]', "Kllkl");
// await page.fill('input[name="passwrod")', "nmnmnm");
// await page.click('button[type="submit"]');
//await browser.close();
//}
//run();
//import { chromium, devices } from 'playwright';
//import { describe, it, after } from 'mocha';
//import { createSession } from 'mochawesome/addContext';
//import assert from 'node:assert';
//test('Electrification starting page(Select all options)', async ({ page }, testInfo) => {
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var browser, context, page;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, playwright_1.chromium.launch({ headless: false })];
            case 1:
                browser = _a.sent();
                return [4 /*yield*/, browser.newContext(playwright_1.devices['iPhone 11'])];
            case 2:
                context = _a.sent();
                return [4 /*yield*/, context.newPage()];
            case 3:
                page = _a.sent();
                // The actual interesting bit
                // await context.route('**.jpg', route => route.abort());
                return [4 /*yield*/, page.goto('https://www.softwaretestinghelp.com/')];
            case 4:
                // The actual interesting bit
                // await context.route('**.jpg', route => route.abort());
                _a.sent();
                //const screenshot22 = await page.screenshot();
                return [4 /*yield*/, page.screenshot({ path: 'screenshot.png', fullPage: true })];
            case 5:
                //const screenshot22 = await page.screenshot();
                _a.sent();
                //const textValue = await page.locator("/html/body/div/h1").
                //console.log(textValue);
                //console.log(page.title);
                return [4 /*yield*/, page.locator("//*[@id=\"mega-menu-item-654\"]/a").click()];
            case 6:
                //const textValue = await page.locator("/html/body/div/h1").
                //console.log(textValue);
                //console.log(page.title);
                _a.sent();
                return [4 /*yield*/, page.screenshot({ path: 'screenshot1.png', fullPage: true })];
            case 7:
                _a.sent();
                //await testInfo.attach
                //await page.title() === 'Example Domain'; // 👎 not a Web First assertion
                // Teardown
                return [4 /*yield*/, context.close()];
            case 8:
                //await testInfo.attach
                //await page.title() === 'Example Domain'; // 👎 not a Web First assertion
                // Teardown
                _a.sent();
                return [4 /*yield*/, browser.close()];
            case 9:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
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
