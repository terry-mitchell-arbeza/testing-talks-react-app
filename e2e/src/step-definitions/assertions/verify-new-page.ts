import {Then} from "@cucumber/cucumber";
import {getElementLocator} from "../../support/web-element-helper";
import {ScenarioWorld} from "../setup/world";
import {ElementKey} from "../../env/global";
import {getIframeElement} from "../../support/html-behaviour";
import {waitFor} from "../../support/wait-for-behaviour";

Then(
    /^the "([0-9]+st|[0-9]+nd|[0-9]+rd|[0-9]+th)" (?:tab|window) should (not )?contain the title "(.*)"$/,
    async function(this: ScenarioWorld, elementPosition: string, negate: boolean, expectedTitle: string) {
        const {
            screen: { page, context},
            globalConfig
        } = this;

        const pageIndex = Number(elementPosition.match(/\d/g)?.join('')) - 1;

        await page.waitForTimeout(1000);

        await waitFor(async () => {
            let pages = context.pages();
            const pageTitle = await pages[pageIndex].title();
            return pageTitle?.includes(expectedTitle) === !negate;
        });
    }
)

Then(
    /^the "([^"]*)" on the "([0-9]+st|[0-9]+nd|[0-9]+rd|[0-9]+th)" (?:tab|window) should (not )?be displayed$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, elementPosition: string, negate: boolean) {
        const {
            screen: { page, context},
            globalConfig
        } = this;

        const pageIndex = Number(elementPosition.match(/\d/g)?.join('')) - 1;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const pages = context.pages();
            const isElementVisible = (await pages[pageIndex]?.$(elementIdentifier)) != null;
            return isElementVisible === !negate;
        });
    }
)