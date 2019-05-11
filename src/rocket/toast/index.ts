import Vue from "vue";
import VueToasted from "vue-toasted";

Vue.use(VueToasted);

declare module 'vue/types/vue' {
    interface Vue {
        $toast: {
            success: (message:string, actions?:any[]) => void,
            error: (message:string, actions?:any[]) => void
        }
    }
};

export class RctToastPlugin {

    public static install():void {
        Vue.prototype.$toast = [{
            icon: "check",
            type: "success"
        }, {
            icon: "error_outline",
            type: "error"
        }].reduce((res, item) => {
            return {...res, [item.type]: (message:string, actions:any[] = []) => {
                Vue.toasted.show(message, {
                    ...item,
                    duration: 5000,
                    position: "bottom-right",
                    action: [...actions, {
                        text: "Close",
                        onClick: (e, toastObject) => toastObject.goAway(0)
                    }]
                });
            }}
        }, {});
    };

};