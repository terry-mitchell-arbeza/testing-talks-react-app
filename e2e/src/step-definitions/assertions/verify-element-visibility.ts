import { Then } from '@cucumber/cucumber'
import { ElementKey } from '../../env/global';
import { getElementLocator} from '../../support/web-element-helper';
import {ScenarioWorld} from "../setup/world";
import {waitFor, waitForResult} from "../../support/wait-for-behaviour";
import {getElement, getElementAtIndex, getElements} from "../../support/html-behaviour";

Then(
    /^the "([^"]*)" should (not )?be displayed$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, negate: boolean) {
        const {
            screen: { page},
            globalConfig
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
                const isElementVisible = await getElement(page, elementIdentifier) != null
                if (isElementVisible === !negate) {
                    return waitForResult.PASS
                } else {
                    return waitForResult.ELEMENT_NOT_AVAILABLE;
                }
            },
            globalConfig,
            {
                target: elementKey,
                failureMessage: `🧨 Expected ${elementKey} to ${negate? 'not ': ''}be displayed`
            }
        );
    }
);

Then(
    /^the "((?<!\d)(?:1st|2nd|3rd)|\d*(?:1[123]th|[02-9](?:1st|2nd|3rd)|[04-9]th))" "([^"]*)" should (not )?be displayed$/,
    async function (this: ScenarioWorld, elementPosition: string, elementKey: ElementKey, negate: boolean){
        const {
            screen: { page},
            globalConfig
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);
        const index = Number(elementPosition.match(/\d/g)?.join('')) - 1;

        await waitFor(async () => {
                const isElementVisible = await getElementAtIndex(page, elementIdentifier, index) != null;
                if (isElementVisible === !negate) {
                    return waitForResult.PASS
                } else {
                    return waitForResult.ELEMENT_NOT_AVAILABLE;
                }
            },
            globalConfig,
            {
                target: elementKey,
                failureMessage: `🧨 Expected ${elementPosition} ${elementKey} to ${negate? 'not ': ''}be displayed`
            }
        );
    }
)

Then(
    /^I should (not )?see "(\d*)" "([^"]*)" displayed$/,
    async function (this: ScenarioWorld, negate: boolean, count: string, elementKey: ElementKey) {
        const {
            screen: { page},
            globalConfig
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
                const elements = await getElements(page, elementIdentifier);
                if ((Number(count) === elements.length) === !negate) {
                    return waitForResult.PASS;
                } else {
                    return waitForResult.ELEMENT_NOT_AVAILABLE;
                }
            },
            globalConfig,
            {
                target: elementKey,
                failureMessage: `🧨 Expected ${count} ${elementKey} to ${negate ? 'not ': ''}be displayed`
            }
        );
    }
)
