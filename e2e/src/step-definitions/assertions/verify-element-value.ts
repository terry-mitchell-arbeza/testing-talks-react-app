import {Then} from '@cucumber/cucumber'
import { ElementKey } from '../../env/global';
import { getElementLocator} from '../../support/web-element-helper';
import {ScenarioWorld} from "../setup/world";
import {waitFor, waitForSelector} from "../../support/wait-for-behaviour";
import {
    elementEnabled,
    getAttributeText,
    getElementText,
    getElementTextAtIndex,
    getElementValue
} from "../../support/html-behaviour";

Then(
    /^the "([^"]*)" should (not )?contain the text "(.*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, negate: boolean, expectedElementText: string) {
        const {
            screen: { page},
            globalConfig
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            //await page.pause();
            const elementStable = await waitForSelector(page, elementIdentifier);
            if(elementStable){
                const elementText = await getElementText(page, elementIdentifier);
                return elementText?.includes(expectedElementText) === !negate;
            } else {
                return elementStable;
            }
        });
    }
);

Then(
    /^the "([^"]*)" should (not )?equal the text "(.*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, negate: boolean, expectedElementText: string) {
        const {
            screen: { page},
            globalConfig
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            //await page.pause();
            const elementStable = await waitForSelector(page, elementIdentifier);
            if(elementStable) {
                const elementText = await getElementText(page, elementIdentifier);
                return (elementText === expectedElementText) === !negate;
            } else {
                return elementStable;
            }
        });
    }
);
Then(/^the "([^"]*)" should (not )?contain the value "([^"]*)"$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, negate: boolean, expectedElementValue: string) {
        const {
            screen: { page},
            globalConfig
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            //await page.pause();
            const elementStable = await waitForSelector(page, elementIdentifier);
            if(elementStable) {
                const elementText = await getElementValue(page, elementIdentifier);
                return (elementText === expectedElementValue) === !negate;
            } else {
                return elementStable;
            }

        });
    }
);
Then(/^the "([^"]*)" should (not )?equal the value "([^"]*)"$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, negate: boolean, expectedElementValue: string) {
        const {
            screen: { page},
            globalConfig
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            //await page.pause();
            const elementStable = await waitForSelector(page, elementIdentifier);
            if(elementStable) {
                const elementText = await getElementValue(page, elementIdentifier);
                return (elementText === expectedElementValue) === !negate;
            } else {
                return elementStable;
            }
        });
});
Then(/^the "([^"]*)" should (not )?be enabled$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, negate: boolean) {
        const {
            screen: { page},
            globalConfig
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            //await page.pause();
            const elementStable = await waitForSelector(page, elementIdentifier);
            if(elementStable) {
                const isElementEnabled = await elementEnabled(page, elementIdentifier);
                return isElementEnabled === !negate;
            } else {
                return elementStable;
            }
        });
    }
);
Then(/^the "((?<!\d)(?:1st|2nd|3rd)|\d*(?:1[123]th|[02-9](?:1st|2nd|3rd)|[04-9]th))" "([^"]*)" should (not )?contain the text "([^"]*)"$/,
    async function (this: ScenarioWorld, elementPosition: string, elementKey: ElementKey, negate: boolean, expectedElementText: string) {
        const {
            screen: { page},
            globalConfig
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        const elementIndex = Number(elementPosition.match(/\d/g)?.join('')) - 1;

        await waitFor(async () => {
            const elementStable = await waitForSelector(page, elementIdentifier);
            if(elementStable) {
                const elementText = await getElementTextAtIndex(page, elementIdentifier, elementIndex);
                return elementText?.includes(expectedElementText) === !negate;
            } else {
                return elementStable;
            }
        });
    }
);

Then(/^the "([^"]*)" "([^"]*)" attribute should (not )?contain the text "(.*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, attribute: string, negate: boolean, expectedElementText: string) {
        const {
            screen: { page},
            globalConfig
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
           const elementStable = await waitForSelector(page, elementIdentifier);
           if(elementStable){
               const attributeText = await getAttributeText(page, elementIdentifier, attribute);
               return attributeText?.includes(expectedElementText) === !negate
           } else {
               return elementStable;
           }
        });
    }
);
