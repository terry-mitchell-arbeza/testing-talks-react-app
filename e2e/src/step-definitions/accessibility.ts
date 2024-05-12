import {Then} from "@cucumber/cucumber";
import {ScenarioWorld} from "./setup/world";
import {getViolations, injectAxe} from "axe-playwright";
import {getCurrentPageId} from "../support/navigation-behaviour";
import {env} from "../env/parseEnv";
import {createHtmlReport} from "axe-html-reporter";


Then(
    /^I inject axe accessibility engine$/,
    async function (this: ScenarioWorld) {
        const {
            screen: { page }
        } = this;

        await injectAxe(page);
    }
);

Then(
    /^I generate an accessibility report$/,
    async function (this: ScenarioWorld) {
        const {
            screen: { page },
            globalConfig
        } = this;

        const pageId = getCurrentPageId(page, globalConfig);

        createHtmlReport({
            results: {
                violations: await getViolations(page)
            },
            options: {
                outputDir: `${env('ACCESSIBILITY_REPORT_PATH')}`,
                reportFileName: `${pageId}_${env('HTML_ACCESSIBILITY_FILE')}`,
            }
        });
    }
)