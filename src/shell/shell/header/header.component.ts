import { Component, Mixins, Prop, Watch } from "vue-property-decorator";
import { Route } from "vue-router";
import { ShellService, INavigation } from "./../../shell.service";
import Template from "./header.component.vue";

@Component
export class ShellHeader extends Mixins(Template) {

    @Prop() toggle: () => void;

    private getNavigation(route: Route):INavigation {
        return ShellService.getNavigation().filter(item => {
            return (
                item.state.name == route.matched[0].meta.root ||
                item.state.name == route.matched[0].name
            )
        })[0]
    };

    public get navigation():INavigation {
        return ShellService.getRootNavigation(this.$route)
    };

};