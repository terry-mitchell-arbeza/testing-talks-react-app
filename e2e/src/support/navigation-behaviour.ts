import {Page} from 'playwright';
import {GlobalConfig, PageId} from "../env/global";
import {waitForResult} from "./wait-for-behaviour";

export const navigateToPage = async (
    page: Page,
    pageId: PageId,
    { pagesConfig, hostsConfig }: GlobalConfig
) :Promise<void> => {
    const {
        UI_AUTOMATION_HOST: hostName = 'localhost',
    } = process.env;

    const hostPath = hostsConfig[`${hostName}`];
    const url = new URL(hostPath);
    const pagesConfigItem = pagesConfig[pageId];
    url.pathname = pagesConfigItem.route;
    await page.goto(url.href);
}

const pathMatchesPageId = (
    path: string,
    pageId: PageId,
    { pagesConfig }: GlobalConfig
): boolean => {
    const pageRegexString = pagesConfig[pageId].regex;
    const pageRegex = new RegExp(pageRegexString);
    return pageRegex.test(path);
}

export const currentPathMatchesPageId = (
    page: Page,
    pageId: PageId,
    globalConfig: GlobalConfig
): waitForResult => {
    const {
        pathname: currentPath
    } = new URL(page.url());
    if (pathMatchesPageId(currentPath, pageId, globalConfig)) {
        return waitForResult.PASS;
    } else {
        return waitForResult.ELEMENT_NOT_AVAILABLE;
    }
};

export const getCurrentPageId = (
    page: Page,
    globalConfig: GlobalConfig
): PageId => {
    const { pagesConfig } = globalConfig;
    const pageConfigPageIds = Object.keys(pagesConfig);
    const { pathname: currentPath} = new URL(page.url());
    const currentPageId = pageConfigPageIds.find(
        pageId => pathMatchesPageId(currentPath, pageId, globalConfig)
    );

    if(!currentPageId) {
        throw Error(`Failed to get page name from route ${currentPath} \
        possible pages: ${JSON.stringify(pagesConfig)}`);
    }

    return currentPageId;
}

export const reloadPage = async (page: Page): Promise<void> => {
    await page.reload();
}