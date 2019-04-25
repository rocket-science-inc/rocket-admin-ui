import { Component, Mixins, Prop, Provide } from "vue-property-decorator";
import RctTableTpl from "./table.component.vue";
import { RctTableVcell } from "./raw/vcell/vcell.component";

interface IDataResponse {
    records: any[],
    total: number
};

interface IDataParams {
    q?: string
};

// @Component
// class Vcell extends Vue {

    

// }

@Component({
    components: {
        "rct-table-vcell": RctTableVcell
    }
})
export class RctTable extends Mixins(RctTableTpl) {

    @Prop() data: (params: IDataParams) => Promise<IDataResponse>;
    @Prop({ default: true }) showSearch: boolean;
    @Prop({ default: {} }) sorting: any;

    @Provide() rcolumn = () => this.$scopedSlots.default;

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

    public get columns():any[] {
        return this.$scopedSlots.default({ raw: {} })
            .map((col, index) => {
                return (({ heading, sort }:any) => ({
                    index, heading, sort, col
                }))((col.componentOptions || { propsData : {} }).propsData)
            }).filter(({ heading }) => heading);
    }

    public mounted():void {
        this.load();
    };

}