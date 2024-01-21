import { Then } from '@cucumber/cucumber'
import { ElementKey } from '../../env/global';
import { getElementLocator} from '../../support/web-element-helper';
import {ScenarioWorld} from "../setup/world";
import { waitFor} from "../../support/wait-for-behaviour";

Then(
    /^the "([^"]*)" should (not )?be displayed$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, negate: boolean) {
        console.log(`the ${elementKey} should ${negate?'not ':''}be displayed`);

        const {
            screen: { page},
            globalConfig
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const isElementVisible = (await page.$(elementIdentifier)) != null
            return isElementVisible === !negate;
        })
    }
);