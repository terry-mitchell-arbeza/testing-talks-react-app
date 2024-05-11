import {When} from "@cucumber/cucumber";
import {ScenarioWorld} from "./setup/world";
import {ElementKey} from "../env/global";
import {getElementLocator} from "../support/web-element-helper";
import {waitFor, waitForSelector} from "../support/wait-for-behaviour";
import {checkElement, uncheckElement} from "../support/html-behaviour";


When(
    /^I (check|uncheck) the "([^"]*)" (?:check box|radio button|switch)$/,
    async function (this: ScenarioWorld, transition: string, elementKey: ElementKey) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
                const elementStable = await waitForSelector(page, elementIdentifier);

                if(elementStable){
                    if(transition === 'check') {
                        await checkElement(page, elementIdentifier);
                    } else {
                        await uncheckElement(page, elementIdentifier);
                    }
                }
                return elementStable;
            },
            globalConfig,
            {target: elementKey});
    }
);