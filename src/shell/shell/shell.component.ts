import { Component, Vue } from "vue-property-decorator";
import { ShellHeader } from "./header/header.component";
import { ShellDrawer } from "./drawer/drawer.component";
import { ShellService } from "./../shell.service";

@Component({
    template: require("./shell.component.html"),
    components: { ShellHeader, ShellDrawer }
})
export class Shell extends Vue {

    public drawer: boolean = false;

    public toggle():void {
        this.drawer = !this.drawer;
    };

    public get mh():string {
        console.log((<any>document).offsetHeight)
        return (<any>document).offsetHeight + "px"
    };

};