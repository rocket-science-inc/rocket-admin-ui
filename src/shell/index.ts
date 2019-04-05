import { Shell } from "./shell/shell.component";
import { ShellService, INavigation } from "./shell.service";

interface IOptions {
    navigation: INavigation[]
};


export class RctShellPlugin {

    public static install(vue, options:IOptions):void {
        ShellService.setNavigation(options.navigation);
    };

};

export { Shell };