import { Component, Vue } from "vue-property-decorator";
import { ShellHeader } from "./header/header.component";
import { ShellDrawer } from "./drawer/drawer.component";

@Component({
    template: require("./shell.component.html"),
    components: { ShellHeader, ShellDrawer }
})
export class Shell extends Vue {

    public drawer: boolean = false;

    public toggle():void {
        this.drawer = !this.drawer;
    };

};