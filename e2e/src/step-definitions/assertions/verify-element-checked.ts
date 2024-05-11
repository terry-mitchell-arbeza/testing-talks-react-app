import {Given, Then} from "@cucumber/cucumber";
import {ScenarioWorld} from "../setup/world";
import {ElementKey} from "../../env/global";
import {getElementLocator} from "../../support/web-element-helper";
import {waitFor, waitForSelector} from "../../support/wait-for-behaviour";
import {elementChecked} from "../../support/html-behaviour";

Given(
    /^the "([^"]*)" (?:radio button|check box|switch) should (not )?be checked$/,
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
                    const isElementChecked= await elementChecked(page, elementIdentifier);
                    return isElementChecked === !negate
                } else {
                    return elementStable;
                }
            },
            globalConfig,
            {target: elementKey});
    }
);
