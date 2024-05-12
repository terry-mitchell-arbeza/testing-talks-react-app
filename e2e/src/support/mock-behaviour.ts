import {Page} from "@playwright/test";
import {GlobalConfig, MockConfigKey, MockPayloadKey, MockServerKey} from "../env/global";


export const interceptResponse = async (
    page: Page,
    mockServerKey: MockServerKey,
    mockConfigKey: MockConfigKey,
    mockPayloadKey: MockPayloadKey,
    {
        hostsConfig,
        mocksConfig,
        mockPayloadMappings
    } : GlobalConfig
): Promise<void> => {
    const mockServerHostURL = hostsConfig[mockServerKey];
    const mockServerRoute = mocksConfig[mockConfigKey];
    const mockServerPayload = mockPayloadMappings[mockPayloadKey];

    if(!mockServerPayload) {
        throw Error(`🧨 Unable to find the ${mockPayloadKey} payload`);
    }

    await page.route(`${mockServerHostURL}${mockServerRoute}`, (route) => {
        route.fulfill({
            contentType: 'application/json',
            body: JSON.stringify(mockServerPayload)
        });
    });
}