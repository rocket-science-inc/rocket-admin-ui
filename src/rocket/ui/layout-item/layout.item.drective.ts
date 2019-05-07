import { DirectiveOptions } from "vue";
import * as $ from "jqlite";

export const RctLayoutItem:DirectiveOptions = {
    update: (el, { value }) => {
        $(el).css({
            flex: `0 0 ${value}px`,
            maxWidth: `${value}px`
        })
    }
}