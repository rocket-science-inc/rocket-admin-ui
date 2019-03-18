import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
    template: require("./header.component.html")
})
export class ShellHeader extends Vue {

    @Prop() toggle: () => void;

}