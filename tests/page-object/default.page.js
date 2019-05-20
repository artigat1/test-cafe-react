import { Selector, t } from 'testcafe';

export default class HomePage {
    constructor() {
        this.reactLogo = Selector('.App-logo');
        this.learnReactLink = Selector('.App-link').withText('Learn React');
    }
    
    isPageDisplayed = async() => {
        await t.expect(await this.reactLogo.exists).ok();
        await t.expect(await this.learnReactLink.exists).ok();
    }
}