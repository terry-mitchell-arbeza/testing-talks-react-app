import {When} from '@cucumber/cucumber'
import {waitFor, waitForResult, waitForSelector} from "../support/wait-for-behaviour";
import {getElementLocator} from "../support/web-element-helper";
import {ScenarioWorld} from "./setup/world";
import {ElementKey} from "../env/global";
import {inputElementValue, selectElementValue} from "../support/html-behaviour";
import {parseInput} from "../support/input-helper";
import {valueIsOfOption} from "../support/options-helper";
import {getRandomData, RandomInputType, randomInputTypes} from "../support/random-data-helper";

When(
    /^I fill in the "([^"]*)" input with "([^"]*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, input: string) {
        const {
            screen: { page },
            globalConfig
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
                const elementStable = await waitForSelector(page, elementIdentifier);
                if(elementStable){
                    const parsedInput = parseInput(input, globalConfig);

                    await inputElementValue(page, elementIdentifier, parsedInput);
                    return waitForResult.PASS;
                }
                return waitForResult.ELEMENT_NOT_AVAILABLE;
            },
            globalConfig,
            {target: elementKey}
        );
    }
)

When(
    /^I select the "([^"]*)" option from the "([^"]*)"$/,
    async function(this: ScenarioWorld, option: string, elementKey: ElementKey) {
        const {
            screen: { page },
            globalConfig
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
                const elementStable = await waitForSelector(page, elementIdentifier);
                if(elementStable){
                    await selectElementValue(page, elementIdentifier, option);
                    return waitForResult.PASS;
                }
                return waitForResult.ELEMENT_NOT_AVAILABLE;
            },
            globalConfig,
            {target: elementKey}
        );
    }
)

When(
    /^I fill in the "([^"]*)" input with random "([^"]*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, randomInputType: RandomInputType) {
        const {
            screen: { page },
            globalConfig
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        const validRandomInputType = valueIsOfOption<RandomInputType>(randomInputType, randomInputTypes);

        await waitFor(async () => {

                const elementStable = await waitForSelector(page, elementIdentifier);

                if(elementStable) {
                    const randomContent = getRandomData(validRandomInputType);
                    await inputElementValue(page, elementIdentifier, randomContent);
                    return waitForResult.PASS;
                }

                return waitForResult.ELEMENT_NOT_AVAILABLE;

            },
            globalConfig,
            {target: elementKey}
        );
    }
)