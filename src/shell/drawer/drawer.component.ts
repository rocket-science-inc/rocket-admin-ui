import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
    template: require("./drawer.component.html")
})
export class ShellDrawer extends Vue {

    @Prop() toggle: () => void;

}