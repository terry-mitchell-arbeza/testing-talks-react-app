import {Given, Then} from '@cucumber/cucumber'
import { ElementKey } from '../../env/global';
import { getElementLocator} from '../../support/web-element-helper';
import {ScenarioWorld} from "../setup/world";
import { waitFor} from "../../support/wait-for-behaviour";
import {getValue} from "../../support/html-behaviour";

Then(
    /^the "([^"]*)" should (not )?contain the text "(.*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, negate: boolean, expectedElementText: string) {
        console.log(`the ${elementKey} should ${negate?'not ':''}contain the text ${expectedElementText}`);

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
        console.log(`the ${elementKey} should ${negate?' not':''}contain the text ${expectedElementText}`);

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
        console.log(`the ${elementKey} should ${negate?' not':''}contain the value ${expectedElementValue}`);

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
        console.log(`the ${elementKey} should ${negate?' not':''}equal the value ${expectedElementValue}`);

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
        console.log(`the ${elementKey} should ${negate?' not':''}be enabled`);

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