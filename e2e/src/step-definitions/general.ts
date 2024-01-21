import {Then} from "@cucumber/cucumber";
import {ScenarioWorld} from "./setup/world";


Then(/^I wait "([0-9]+)" seconds?$/,
    async function(this: ScenarioWorld, waitSeconds: string) {
        const {
            screen: {page},
        } = this;

        await page.waitForTimeout(parseInt(waitSeconds, 10) * 1000);
    }
);