import Vue, { DirectiveOptions, ComponentOptions, VNodeComponentOptions } from "vue";
import MdProgress from "vue-material/dist/components/MdProgress";
import * as $ from "jqlite";

const template = `
    <div>

    </div>
`;

export const RctLoader: DirectiveOptions = {
    inserted: (el) => {
        // let loader = new MdProgress({
        //     propsData: {
        //         "md-diameter": 20,
        //         "md-stroke": 3,
        //         "md-mode": "indeterminate"
        //     }
        // });
    },
    bind: (el) => {
        // let loader = new MdProgress({
        //     propsData: {
        //         "md-diameter": 20,
        //         "md-stroke": 3,
        //         "md-mode": "indeterminate"
        //     }
        // });
        //loader.$mount()
        // let loader = document.createElement("md-progress-spinner");
        // loader.setAttribute(":md-diameter", "20");
        // loader.setAttribute(":md-stroke", "3");
        // loader.setAttribute("md-mode", "indeterminate");
        // el.appendChild(loader);
        // //Vue.compile(loader);
        // console.log(loader)
        // console.log(template)
        // let qwe = $(template);
        // console.log(qwe)
        // let loader = $(el).addClass("position-relative")
        //     .append(template);
        // console.log(loader[0])
        // //Vue.compile(loader[0])
        // console.log(el);
    },
    update: (el) => {
        //console.log(el);
    }
};