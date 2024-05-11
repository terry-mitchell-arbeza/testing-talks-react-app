import {Then} from "@cucumber/cucumber";
import {getElementLocator} from "../../support/web-element-helper";
import {ScenarioWorld} from "../setup/world";
import {ElementKey} from "../../env/global";
import {waitFor, waitForResult, waitForSelector} from "../../support/wait-for-behaviour";
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
                    if ((elementText === variableValue) === !negate) {
                        return waitForResult.PASS;
                    } else {
                        return waitForResult.FAIL;
                    }
                } else {
                    return waitForResult.ELEMENT_NOT_AVAILABLE;
                }
            },
            globalConfig,
            {
                target: elementKey,
                failureMessage: `🧨 Expected ${elementKey} to ${negate? 'not ': ''}equal the ${variableKey} in global variables`
            }
        );
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
                    if (elementText?.includes(variableValue) === !negate) {
                        return waitForResult.PASS;
                    } else {
                        return waitForResult.FAIL;
                    }
                } else {
                    return waitForResult.ELEMENT_NOT_AVAILABLE;
                }
            },
            globalConfig,
            {
                target: elementKey,
                failureMessage: `🧨 Expected ${elementKey} to ${negate? 'not ': ''}contain the ${variableKey} in global variables`
            }
        );
    }
);