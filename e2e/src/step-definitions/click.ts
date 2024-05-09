import {When} from '@cucumber/cucumber';
import {ScenarioWorld} from "./setup/world";
import {
    clickElement, clickElementAtIndex
} from "../support/html-behaviour";
import {waitFor, waitForSelector} from "../support/wait-for-behaviour";
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
            const elementStable = await waitForSelector(page, elementIdentifier);
            if(elementStable){
                await clickElement(page, elementIdentifier);
            }
            return elementStable;
        });
    }
)
When(/^I click the "((?<!\d)(?:1st|2nd|3rd)|\d*(?:1[123]th|[02-9](?:1st|2nd|3rd)|[04-9]th))" "([^"]*)" (?:button|link|icon|element)$/,
    async function (this: ScenarioWorld, elementPosition: string, elementKey: ElementKey) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        const elementIndex = Number(elementPosition.match(/\d/g)?.join('')) - 1;

        await waitFor(async () => {
            const elementStable = await waitForSelector(page, elementIdentifier);
            if(elementStable){
                await clickElementAtIndex(page, elementIdentifier, elementIndex);
            }
            return elementStable;
        });
    }
);