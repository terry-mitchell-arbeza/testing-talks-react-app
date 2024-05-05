import { Given } from '@cucumber/cucumber'
import {ScenarioWorld} from "./setup/world";
import {ElementKey} from "../env/global";
import {getElementLocator} from "../support/web-element-helper";
import {waitFor} from "../support/wait-for-behaviour";
import {scrollIntoView} from "../support/html-behaviour";

Given(
    /^I scroll to the "([^"]*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey) {
        const {
            screen: { page, context},
            globalConfig
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const result = await page.waitForSelector(elementIdentifier, {
                state: 'visible'
            });
            if(result){
                await scrollIntoView(page, elementIdentifier);
            }
            return result;
        })
    })