import {After, Before, BeforeStep, ITestCaseHookParameter, setDefaultTimeout} from "@cucumber/cucumber";
import {PickleStepType} from "@cucumber/messages"
import {ScenarioWorld} from "./world";
import {env, envNumber} from '../../env/parseEnv';

setDefaultTimeout(envNumber('SCRIPT_TIMEOUT'));

Before(async function(this: ScenarioWorld, scenario) {
    console.log(`Running cucumber scenario ${scenario.pickle.name}`);

    const contextOptions = {
        recordVideo: {
            dir: `${env('VIDEO_PATH')}${scenario.pickle.name}`,
        }
    };

    const ready = await this.init(contextOptions);
});

BeforeStep(async function(this: ScenarioWorld, scenario) {
    const toGivenWhenThen = (context: PickleStepType | undefined): string | undefined => {
        switch(context){
            case PickleStepType.CONTEXT: return 'Given';
            case PickleStepType.ACTION: return 'When';
            case PickleStepType.OUTCOME: return 'Then';
            default: return undefined;
        }
    }
    const gwt = toGivenWhenThen(scenario.pickleStep.type);
    console.log(`${gwt? `${gwt} `: ''}${scenario.pickleStep.text}`);
})

After(async function(this: ScenarioWorld, scenario: ITestCaseHookParameter) {
    const {
        screen: {page, browser}
    } = this;

    const scenarioStatus = scenario.result?.status;

    if(scenarioStatus === 'FAILED'){
        const screenshot = await page.screenshot({
            path: `${env('SCREENSHOT_PATH')}${scenario.pickle.name}.png`
        });
        await this.attach(screenshot, 'image/png');
    }

    await browser.close();
    return browser;
});