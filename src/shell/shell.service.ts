import { Route } from "vue-router";

export interface INavigation {
    anchor: string
    state: { name: string },
    icon?: string,
    children?: INavigation[]
};

export class ShellService {

    static navigation: INavigation[];

    static setNavigation(navigation:INavigation[]):void {
        this.navigation = navigation.map((item, i) => {
            return {...item, i}
        });
    };

    static getNavigation():INavigation[] {
        return this.navigation;
    };

    static getRootNavigation(route:Route):INavigation {
        return this.navigation.filter(item => {
            return (
                item.state.name == route.matched[0].meta.root ||
                item.state.name == route.matched[0].name
            )
        })[0]
    };

}