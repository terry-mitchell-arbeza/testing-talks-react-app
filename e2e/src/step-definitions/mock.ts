import {Given} from "@cucumber/cucumber";
import {ScenarioWorld} from "./setup/world";
import {MockConfigKey, MockPayloadKey, MockServerKey} from "../env/global";
import {interceptResponse} from "../support/mock-behaviour";


Given(
    /^the "([^"]*)" endpoint for "([^"]*)" is mocked with "([^"]*)"$/,
    async function(this: ScenarioWorld, mockServerKey: MockServerKey, mockConigKey: MockConfigKey, mockPayloadKey: MockPayloadKey) {
        const {
            screen: { page },
            globalConfig
        } = this;

        await interceptResponse(page, mockServerKey, mockConigKey, mockPayloadKey, globalConfig);
    }
)