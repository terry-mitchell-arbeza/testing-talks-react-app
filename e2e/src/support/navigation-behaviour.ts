import { Page } from 'playwright';
import { GlobalConfig, PageId} from "../env/global";
import {checkPrimeSync} from "node:crypto";

export const navigateToPage = async (
    page: Page,
    pageId: PageId,
    { pagesConfig, hostsConfig }: GlobalConfig
) :Promise<void> => {
    const {
        UI_AUTOMATION_HOST: hostName = 'localhost',
    } = process.env;

    const hostPath = hostsConfig[`${hostName}`];

    console.log('hostPath', hostPath);

    const url = new URL(hostPath);

    console.log('url', url);

    const pagesConfigItem = pagesConfig[pageId];

    url.pathname = pagesConfigItem.route;
    console.log('pages route', url.pathname);

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
): boolean => {
    const {
        pathname: currentPath
    } = new URL(page.url());
    return pathMatchesPageId(currentPath, pageId, globalConfig);
};
