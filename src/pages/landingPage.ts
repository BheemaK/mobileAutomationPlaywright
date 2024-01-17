import { Page } from "playwright-core";
export default class LandingPage {
    private page: Page
    constructor(page: Page) {
        this.page = page;

    }
    get pageHeading() { return this.page.getByRole('heading').first() }
    get viewAllFeaturesButton() { return this.page.getByRole('link', { name: 'View all features'})}
    linkText(link: string) { return this.page.getByRole('link', { name: `${link}`})}
    async pageHeadingText() {
        return await this.pageHeading.innerText()
    }

    async clickOnFeaturesBUtton() {
        await this.viewAllFeaturesButton.waitFor();
        await this.viewAllFeaturesButton.click();
    }
}