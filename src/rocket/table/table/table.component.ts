import { Component, Mixins, Prop, Provide } from "vue-property-decorator";
import RctTableTpl from "./table.component.vue";
import { RctTableVcell } from "./raw/vcell/vcell.component";
import { RctTablePagination } from "./pagination/pagination.component";

const styles = require("./table.component.scss");

interface IDataResponse {
    records: any[],
    total: number
};

interface IDataParams {
    q?: string,
    page: number,
    count: number,
};

@Component({
    components: {
        "rct-table-vcell": RctTableVcell,
        "rct-table-pagination": RctTablePagination
    }
})
export class RctTable extends Mixins(RctTableTpl) {

    @Prop() data: (params: IDataParams) => Promise<IDataResponse>;
    @Prop({ default: true }) showSearch: boolean;
    @Prop({ default: {} }) sorting: any;

    public inprogress: boolean = false;

    public total: number = 0;
    public page: number = 1;
    public count: number = 25;
    public records: any[] = [];

    public table:any = {
        records: [],
        query: ""
    };

    @Provide() rcolumn = () => this.$scopedSlots.default;

    public search():void {
        console.log(this.table.query)
    };

    public get noResultsLabel():string {
        return "No results found";
    };

    public get noResultsDescription():string {
        return "No results found. Try a different search term, apply other filters or create a new item.";
    };

    public onPageChanged(page:number) {
        this.page = page; this.load();
    };

    public onCountChanged(count:number) {
        this.page = 1;
        this.count = count;
        this.load();
    };

    public load():void {
        this.inprogress = true;
        this.data({
            q: this.table.query,
            page: this.page - 1,
            count: this.count
        }).then(({records, total}) => {
            this.total = total;
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
    };

    public mounted():void {
        this.load();
    };

    public created():void {
        
    };

}