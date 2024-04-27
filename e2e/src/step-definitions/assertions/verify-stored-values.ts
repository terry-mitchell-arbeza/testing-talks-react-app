import {Then} from "@cucumber/cucumber";
import {getElementLocator} from "../../support/web-element-helper";
import {ScenarioWorld} from "../setup/world";
import {ElementKey} from "../../env/global";
import {waitFor} from "../../support/wait-for-behaviour";

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
            const elementText = await page.textContent(elementIdentifier);
            const variableValue = globalVariables[variableKey];
            return (elementText === variableValue) === !negate;
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
            const elementText = await page.textContent(elementIdentifier);
            const variableValue = globalVariables[variableKey];
            return elementText?.includes(variableValue) === !negate;
        });
    }
);