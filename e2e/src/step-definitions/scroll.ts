import { Given } from '@cucumber/cucumber'
import {ScenarioWorld} from "./setup/world";
import {ElementKey} from "../env/global";
import {getElementLocator} from "../support/web-element-helper";
import {waitFor, waitForSelector} from "../support/wait-for-behaviour";
import {scrollElementIntoView} from "../support/html-behaviour";

Given(
    /^I scroll to the "([^"]*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey) {
        const {
            screen: { page, context},
            globalConfig
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
                const elementStable = await waitForSelector(page, elementIdentifier);
                if(elementStable){
                    await scrollElementIntoView(page, elementIdentifier);
                }
                return elementStable;
            },
            globalConfig,
            {target: elementKey})
    })