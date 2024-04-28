import {Then} from '@cucumber/cucumber'
import { ElementKey } from '../../env/global';
import { getElementLocator} from '../../support/web-element-helper';
import {ScenarioWorld} from "../setup/world";
import { waitFor} from "../../support/wait-for-behaviour";
import {getAttributeText, getValue} from "../../support/html-behaviour";

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
            const elementText = await page.textContent(elementIdentifier);
            return elementText?.includes(expectedElementText) === !negate;
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
            const elementText = await page.textContent(elementIdentifier);
            return (elementText === expectedElementText) === !negate;
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
            const elementText = await getValue(page, elementIdentifier);
            return (elementText === expectedElementValue) === !negate;
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
            const elementText = await getValue(page, elementIdentifier);
            return (elementText === expectedElementValue) === !negate;
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
            const isElementEnabled = await page.isEnabled(elementIdentifier);
            return isElementEnabled === !negate;
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
            const elementText = await page.textContent(`${elementIdentifier}>>nth=${elementIndex}`);
            return elementText?.includes(expectedElementText) === !negate;
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
           const attributeText = await getAttributeText(page, elementIdentifier, attribute);
           return attributeText?.includes(expectedElementText) === !negate
        });
    }
);
