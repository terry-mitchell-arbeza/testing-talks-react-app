import {DataTable, Then} from '@cucumber/cucumber'
import { ElementKey } from '../../env/global';
import { getElementLocator} from '../../support/web-element-helper';
import {ScenarioWorld} from "../setup/world";
import {waitFor, waitForResult, waitForSelector} from "../../support/wait-for-behaviour";
import {getTableData} from "../../support/html-behaviour";

Then(/^the "([^"]*)" table should (not )?equal the following:$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, negate: boolean, dataTable: DataTable) {
        const {
            screen: {page},
            globalConfig
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
                const elementStable = await waitForSelector(page, elementIdentifier);
                if(elementStable) {
                    const tableData = await getTableData(page, elementIdentifier);
                    if (tableData === JSON.stringify(dataTable.raw()) === !negate) {
                        return waitForResult.PASS;
                    } else {
                        return waitForResult.FAIL;
                    }
                } else {
                    return waitForResult.ELEMENT_NOT_AVAILABLE;
                }
            },
            globalConfig,
            {
                target: elementKey,
                failureMessage: `🧨 Expected ${elementKey} to ${negate ? 'not ': ''}equal ${dataTable.raw()}`
            }
        );
    }
);