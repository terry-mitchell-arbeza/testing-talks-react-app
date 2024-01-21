import {Given, Then} from "@cucumber/cucumber";
import {ScenarioWorld} from "../setup/world";
import {ElementKey} from "../../env/global";
import {getElementLocator} from "../../support/web-element-helper";
import {waitFor} from "../../support/wait-for-behaviour";

Given(
    /^the "([^"]*)" radio button should (not )?be checked$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, negate: boolean) {
        console.log(`the ${elementKey} radio button should ${negate?'not ':''}be checked`);

        const {
            screen: { page},
            globalConfig
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            //await page.pause();
            const isElementChecked = await page.isChecked(elementIdentifier);
            return isElementChecked === !negate;
        });
    }
);
