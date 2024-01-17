import { expect } from '@playwright/test';
import { fixtures as test } from '../src/fixture'
import { fixtures as test767 } from '../src/fixture';
import { fixtures as test898 } from '../src/fixture';
import { fixtures as test1234 } from '../src/fixture';
import { fixtures as test8999 } from '../src/fixture';
import { fixtures as test124555454 } from '../src/fixture';

test.describe('Android emulator Test Suite', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    })

    test("should have page heading", async ({ landingPage }) => {
        await expect(landingPage.pageHeading).toHaveText('Free and open-source eCommerce platform')
    })

    test("Should be able to navigate to all features page", async ({ landingPage, page }) => {
        landingPage.clickOnFeaturesBUtton()
        await expect(page).toHaveURL(/.*features/)
    })

    test("Should have all list of features displayed", async ({ landingPage, page }) => {
        await page.goto('/features')
        await expect.soft(landingPage.linkText('Multi-store')).toBeVisible()
        await expect.soft(landingPage.linkText('Mobile Commerce')).toBeVisible()
        await expect.soft(landingPage.linkText('Multi-vendor')).toBeVisible()
    })

    test("should have the list features", async ({ landingPage, page}) => {
      await page.goto('/features');
      await expect.soft(landingPage.linkText('Multi-store')).toBeVisible();
      await expect.soft(landingPage.linkText('Mobile-Commerce')).toBeVisible();
      await expect.soft(landingPage.linkText('Multi-vender')).toBeVisible();
    })


    //}

});