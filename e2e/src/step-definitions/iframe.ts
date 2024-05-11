import {When} from "@cucumber/cucumber";
import {ScenarioWorld} from "./setup/world";
import {ElementKey} from "../env/global";
import {getElementLocator} from "../support/web-element-helper";
import {waitFor, waitForResult, waitForSelector, waitForSelectorInIframe} from "../support/wait-for-behaviour";
import {getIframeElement, inputValueOnIframe} from "../support/html-behaviour";

When(/^I fill in the "([^"]*)" input on the "([^"]*)" iframe with "([^"]*)"$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, iframeKey: string, inputValue: string) {
        const {
            screen: { page },
            globalConfig
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);
        const iframeIdentifier = getElementLocator(page, iframeKey, globalConfig);

        await waitFor(async () => {
                const elementIframe = await getIframeElement(page, iframeIdentifier);

                if(elementIframe) {
                    const elementStable = await waitForSelectorInIframe(elementIframe, elementIdentifier);

                    if(elementStable) {
                        await inputValueOnIframe(elementIframe, elementIdentifier, inputValue);
                        return {result: waitForResult.PASS};
                    } else {
                        return {result: waitForResult.ELEMENT_NOT_AVAILABLE, replace: elementKey};
                    }
                } else {
                    return {result: waitForResult.ELEMENT_NOT_AVAILABLE, replace: iframeKey};
                }
            },
            globalConfig,
            { target: iframeKey }
        );

    }
);