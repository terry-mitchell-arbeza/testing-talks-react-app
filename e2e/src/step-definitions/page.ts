import {Then, When} from "@cucumber/cucumber";
import {ScenarioWorld} from "./setup/world";
import {ElementKey} from "../env/global";
import {getElementLocator} from "../support/web-element-helper";
import {waitFor, waitForResult, waitForSelectorOnPage} from "../support/wait-for-behaviour";
import {getIframeElement, inputValueOnPage} from "../support/html-behaviour";

When(
    /^I fill in the "([^"]*)" input on the "\d*(1[123]th|1st|2nd|3rd|[04-9]th)" (?:tab|window) with "([^"]*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, elementPosition: string, inputValue: string) {
        const {
            screen: { page, context },
            globalConfig
        } = this;

        const pageIndex = Number(elementPosition.match(/\d/g)?.join('')) - 1;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
                const pages = context.pages();
                const elementStable = await waitForSelectorOnPage(page, elementIdentifier, pages, pageIndex);
                if(elementStable) {
                    await inputValueOnPage(pages, pageIndex, elementIdentifier, inputValue);
                    return waitForResult.PASS;
                }
                return waitForResult.ELEMENT_NOT_AVAILABLE;
            },
            globalConfig,
            {target: elementKey});

    }
);