import {Then} from "@cucumber/cucumber";
import {getElementLocator} from "../../support/web-element-helper";
import {ScenarioWorld} from "../setup/world";
import {ElementKey} from "../../env/global";
import {waitFor} from "../../support/wait-for-behaviour";

Then(
    /^the "((?<!\d)(?:1st|2nd|3rd)|\d*(?:1[123]th|[02-9](?:1st|2nd|3rd)|[04-9]th))" (?:tab|window) should (not )?contain the title "(.*)"$/,
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
    /^the "([^"]*)" on the "((?<!\d)(?:1st|2nd|3rd)|\d*(?:1[123]th|[02-9](?:1st|2nd|3rd)|[04-9]th))" (?:tab|window) should (not )?be displayed$/,
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