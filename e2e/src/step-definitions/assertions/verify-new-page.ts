import {Then} from "@cucumber/cucumber";
import {getElementLocator} from "../../support/web-element-helper";
import {ScenarioWorld} from "../setup/world";
import {ElementKey} from "../../env/global";
import {waitFor, waitForSelectorOnPage} from "../../support/wait-for-behaviour";
import {getElementOnPage, getElementTextWithinPage, getTitleWithinPage} from "../../support/html-behaviour";

Then(
    /^the "((?<!\d)(?:1st|2nd|3rd)|\d*(?:1[123]th|[02-9](?:1st|2nd|3rd)|[04-9]th))" (?:tab|window) should (not )?contain the title "(.*)"$/,
    async function(this: ScenarioWorld, elementPosition: string, negate: boolean, expectedTitle: string) {
        const {
            screen: { page, context},
            globalConfig
        } = this;

        const pageIndex = Number(elementPosition.match(/\d/g)?.join('')) - 1;

        await page.waitForTimeout(2000);

        await waitFor(async () => {
                let pages = context.pages();
                const pageTitle = await getTitleWithinPage(page, pages, pageIndex);
                return pageTitle?.includes(expectedTitle) === !negate;
            },
            globalConfig,
            { type: 'title'});
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
                const elementStable = await waitForSelectorOnPage(page, elementIdentifier, pages, pageIndex);
                if(elementStable) {
                    const isElementVisible = await getElementOnPage(page, elementIdentifier, pages, pageIndex) != null;
                    return isElementVisible === !negate;
                } else {
                    return elementStable;
                }
            },
            globalConfig,
            {target: elementKey});
    }
)

Then(
    /^the "([^"]*)" on the "((?<!\d)(?:1st|2nd|3rd)|\d*(?:1[123]th|[02-9](?:1st|2nd|3rd)|[04-9]th))" (?:tab|window) should (not )?contain the text "([^"]*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, elementPosition: string, negate: boolean, expectedElementText: string){
        const {
            screen: { page, context},
            globalConfig
        } = this;

        const pageIndex = Number(elementPosition.match(/\d/g)?.join('')) - 1;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
                const pages = context.pages();
                const elementStable = await waitForSelectorOnPage(page, elementIdentifier, pages, pageIndex);
                if(elementStable) {
                    const elementText = await getElementTextWithinPage(page, elementIdentifier, pages, pageIndex);
                    return elementText?.includes(expectedElementText) === !negate;
                } else {
                    return elementStable;
                }
            },
            globalConfig,
            {target: elementKey});
    }
)

Then(
    /^the "([^"]*)" on the "((?<!\d)(?:1st|2nd|3rd)|\d*(?:1[123]th|[02-9](?:1st|2nd|3rd)|[04-9]th))" (?:tab|window) should (not )?equal the text "([^"]*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, elementPosition: string, negate: boolean, expectedElementText: string){
        const {
            screen: { page, context},
            globalConfig
        } = this;

        const pageIndex = Number(elementPosition.match(/\d/g)?.join('')) - 1;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
                const pages = context.pages();
                const elementStable = await waitForSelectorOnPage(page, elementIdentifier, pages, pageIndex);
                if(elementStable) {
                    const elementText = await getElementTextWithinPage(page, elementIdentifier, pages, pageIndex);
                    return (elementText === expectedElementText) === !negate;
                } else {
                    return elementStable;
                }
            },
            globalConfig,
            {target: elementKey});
    }
)
