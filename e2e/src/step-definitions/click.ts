import {When} from '@cucumber/cucumber';
import {ScenarioWorld} from "./setup/world";
import {
    clickElement, clickElementAtIndex
} from "../support/html-behaviour";
import { waitFor} from "../support/wait-for-behaviour";
import {getElementLocator} from "../support/web-element-helper";
import {ElementKey} from "../env/global";

When(
    /^I click the "([^"]*)" (?:button|link|icon|element)$/,
    async function(this: ScenarioWorld, elementKey: ElementKey) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const result = await page.waitForSelector(elementIdentifier, {
                state: 'visible',
            });
            if(result){
                await clickElement(page, elementIdentifier);
            }
            return result;
        });
    }
)
When(/^I click the "(\d+(?:st|nd|rd|th))" "([^"]*)" (?:button|link|icon|element)$/,
    async function (this: ScenarioWorld, elementPosition: string, elementKey: ElementKey) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        const elementIndex = Number(elementPosition.match(/\d/g)?.join('')) - 1;

        await waitFor(async () => {
            const result = await page.waitForSelector(elementIdentifier, {
                state: 'visible',
            });
            if(result){
                await clickElementAtIndex(page, elementIdentifier, elementIndex);
            }
            return result;
        });
    }
);