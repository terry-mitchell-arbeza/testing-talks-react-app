export type PageId = string;
export type PagesConfig = Record<PageId, Record<string, string>>;
export type HostsConfig = Record<string, string>;

export type ElementKey = string;
export type ElementLocator = string;
export type WaitForTargetType = string;
export type WaitForTarget = PageId | ElementKey;
export type PageElementMappings = Record<PageId, Record<ElementKey, ElementLocator>>
export type GlobalVariables = { [key: string]: string };
export type EmailsConfig = Record<string, string>;



export type ErrorConfig = {
    originalErrMsgRegexString: string;
    parsedErrMsg: string;
}

export type ErrorsConfig = ErrorConfig[];

export type MockConfigKey = string;
export type MockServerKey = string;
export type MockPayloadKey = string;

export type MocksConfig = Record<string, string>;
export type MockPayloadMappings = Record<string, string>;

export type GlobalConfig = {
    hostsConfig: HostsConfig;
    pagesConfig: PagesConfig;
    pageElementMappings: PageElementMappings;
    emailsConfig: EmailsConfig;
    errorsConfig: ErrorsConfig;
    mocksConfig: MocksConfig;
    mockPayloadMappings: MockPayloadMappings;
}


