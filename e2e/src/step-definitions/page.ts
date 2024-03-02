import {Then, When} from "@cucumber/cucumber";
import {ScenarioWorld} from "./setup/world";
import {ElementKey} from "../env/global";
import {getElementLocator} from "../support/web-element-helper";
import {waitFor} from "../support/wait-for-behaviour";
import {getIframeElement, inputValueOnPage} from "../support/html-behaviour";

When(
    /^I fill in the "([^"]*)" input on the "\d*(1[123]th|1st|2nd|3rd|[04-9]th)" (?:tab|window) with "([^"]*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, elementPosition: string, inputValue: string) {
        const {
            screen: { page, context },
            globalConfig
        } = this;

        const pageIndex = Number(elementPosition.match(/\d/g)?.join('')) - 1;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const pages = context.pages();
            const result = await pages[pageIndex].waitForSelector(elementIdentifier, {
                state: 'visible'
            });
            if(result) {
                await inputValueOnPage(pages, pageIndex, elementIdentifier, inputValue);
            }
            return result;
        })

    }
);

Then(/^the "([^"]*)" on the "\d*(1[123]th|1st|2nd|3rd|[04-9]th)" (?:tab|window) should (not )?contain the text "([^"]*)"$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, elementPosition: string, negate: boolean, expectedElementText: string) {
        const {
            screen: { page, context},
            globalConfig
        } = this;

        const pageIndex = Number(elementPosition.match(/\d/g)?.join('')) - 1;
        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const pages = context.pages();
            const elementText = await pages[pageIndex].textContent(elementIdentifier);
            return elementText?.includes(expectedElementText) === !negate;
        });
    }
);

Then(/^the "([^"]*)" on the "\d*(1[123]th|1st|2nd|3rd|[04-9]th)" (?:tab|window) should (not )?equal the text "([^"]*)"$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, elementPosition: string, negate: boolean, expectedElementText: string) {
        const {
            screen: { page, context},
            globalConfig
        } = this;

        const pageIndex = Number(elementPosition.match(/\d/g)?.join('')) - 1;
        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const pages = context.pages();
            const elementText = await pages[pageIndex].textContent(elementIdentifier);
            return (elementText === expectedElementText) === !negate;
        });
    }
);