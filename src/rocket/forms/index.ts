import Vue from "vue";
import * as kebabCase from "lodash/kebabCase";
import * as Controls from "./controls";

import { RctForm } from "./form/form.component";

const controls = require.context('./controls', false, /RctForm[A-Z]\w+\.(ts)$/);
const styles = require("./forms.scss");

export class RctFormsPlugin {

    public static install():void {
        Object.keys(Controls).map(key => {
            return { component: Controls[key], name: kebabCase(key)}
        }).forEach(({ component, name }) => {
            Vue.component(name, component)
        });
        Vue.component("rct-form", RctForm);
    };

};