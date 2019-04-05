import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import { ShellService, INavigation } from "./../../shell.service";
import Template from "./drawer.component.vue";

@Component
export class ShellDrawer extends Mixins(Template) {

    @Prop() toggle: () => void;

    public navigation: INavigation[] = ShellService.getNavigation();

};