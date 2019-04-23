import { Component, Mixins, Prop } from "vue-property-decorator";
import RctTableTpl from "./table.component.vue"

interface IDataResponse {
    records: any[],
    total: number
};

interface IDataParams {
    q?: string
};

@Component
export class RctTable extends Mixins(RctTableTpl) {

    @Prop() data: (params: IDataParams) => Promise<IDataResponse>;

    public records:IDataResponse = { total: 0, records: [] };
    public query: string = "";
    public inprogress: boolean = false;

    public search():void {
        console.log(this.query)
    };

    public get noResultsLabel():string {
        return "No results found";
    };

    public get noResultsDescription():string {
        return "No results found. Try a different search term, apply other filters or create a new item.";
    };

    public load():void {
        this.inprogress = true;
        this.data({
            q: this.query
        }).then(records => {
            this.records = records;
            this.inprogress = false;
        });
    };

    public mounted():void {
        this.load();
    };

}