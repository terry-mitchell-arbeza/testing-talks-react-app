import { Then } from '@cucumber/cucumber'
import { ElementKey } from '../../env/global';
import { getElementLocator} from '../../support/web-element-helper';
import {ScenarioWorld} from "../setup/world";
import { waitFor} from "../../support/wait-for-behaviour";

Then(
    /^the "([^"]*)" should (not )?be displayed$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, negate: boolean) {
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
            const isElementVisible = (await page.$(`${elementIdentifier}>>nth=${index}`)) != null;
            return isElementVisible === !negate;
        });
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
            const element = await page.$$(elementIdentifier);
            return (Number(count) === element.length) === !negate;
        })
    }
)
