import { Given } from '@cucumber/cucumber'
import {PageId} from "../env/global";
import {
    navigateToPage, currentPathMatchesPageId, reloadPage
} from '../support/navigation-behaviour';
import {ScenarioWorld} from "./setup/world";
import {waitFor} from "../support/wait-for-behaviour";

Given(
    /^I navigate to the "([^"]*)" page$/,
    async function(this: ScenarioWorld, pageId: PageId) {

        const {
            screen: { page},
            globalConfig
        } = this;

        await navigateToPage(page, pageId, globalConfig);

        await waitFor(()=> currentPathMatchesPageId(page, pageId, globalConfig));
    }
)

Given(
    /^I am directed to the "([^"]*)" page$/,
    async function (this: ScenarioWorld, pageId: PageId) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        await waitFor(() => currentPathMatchesPageId(page, pageId, globalConfig));
    }
)

Given(
    /^I refresh the "([^"]*)" page$/,
    async function (this: ScenarioWorld, pageId: PageId) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        await reloadPage(page);

        await waitFor(() => currentPathMatchesPageId(page, pageId, globalConfig), {
            timeout: 30000
        });
    }
)