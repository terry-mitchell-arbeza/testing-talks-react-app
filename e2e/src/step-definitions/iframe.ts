import {When} from "@cucumber/cucumber";
import {ScenarioWorld} from "./setup/world";
import {ElementKey} from "../env/global";
import {getElementLocator} from "../support/web-element-helper";
import {waitFor, waitForSelector} from "../support/wait-for-behaviour";
import {getIframeElement, inputValue, inputValueOnIframe} from "../support/html-behaviour";

When(/^I fill in the "([^"]*)" input on the "([^"]*)" iframe with "([^"]*)"$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, iframeName: string, inputValue: string) {
        const {
            screen: { page },
            globalConfig
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);
        const iframeIdentifier = getElementLocator(page, iframeName, globalConfig);

        await waitFor(async () => {
            const iframeStable = await waitForSelector(page, iframeIdentifier);

            if(iframeStable){
                const elementIframe = await getIframeElement(page, iframeIdentifier);
                if(elementIframe) {
                    await inputValueOnIframe(elementIframe, elementIdentifier, inputValue);
                }
            }
            return iframeStable;
        });

    }
);