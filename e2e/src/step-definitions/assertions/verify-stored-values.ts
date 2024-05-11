import {Then} from "@cucumber/cucumber";
import {getElementLocator} from "../../support/web-element-helper";
import {ScenarioWorld} from "../setup/world";
import {ElementKey} from "../../env/global";
import {waitFor, waitForSelector} from "../../support/wait-for-behaviour";
import {getElementText} from "../../support/html-behaviour";

Then(
    /^the "([^"]*)" should (not )?equal the "([^"]*)" stored in global variables$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, negate: boolean, variableKey: string) {
        const {
            screen: { page},
            globalConfig,
            globalVariables
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const elementStable = await waitForSelector(page, elementIdentifier);

            const variableValue = globalVariables[variableKey];

            if(elementStable) {
                const elementText = await getElementText(page, elementIdentifier);
                return (elementText === variableValue) === !negate;
            } else {
                return elementStable;
            }
        });
    }
);

Then(
    /^the "([^"]*)" should (not )?contain the "([^"]*)" stored in global variables$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, negate: boolean, variableKey: string) {
        const {
            screen: { page},
            globalConfig,
            globalVariables
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const elementStable = await waitForSelector(page, elementIdentifier);

            const variableValue = globalVariables[variableKey];

            if(elementStable) {
                const elementText = await page.textContent(elementIdentifier);
                return elementText?.includes(variableValue) === !negate;
            } else {
                return elementStable;
            }
        });
    }
);