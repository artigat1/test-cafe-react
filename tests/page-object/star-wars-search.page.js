import { Selector, t } from "testcafe";

export default class Page {
    constructor() {
        this.form = Selector('form');
        this.queryInput = Selector('#query');
        this.results = Selector('ul li');

    }

    typeQuery = async (text) => {
        await t.typeText(await this.queryInput, text);
    }
}
