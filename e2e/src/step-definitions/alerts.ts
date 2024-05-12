import {When} from "@cucumber/cucumber";
import {ScenarioWorld} from "./setup/world";

When(
    /^I click (accept|dismiss) on the alert dialog$/,
    async function(this: ScenarioWorld, dialogAction: string) {
        const {
            screen: { page }
        } = this;

        switch(dialogAction) {
            case 'accept':
                page.on('dialog', async dialog => await dialog.accept());
                break;
            case 'dismiss':
                page.on('dialog', async dialog => await dialog.dismiss());
                break;
        }
    }
)