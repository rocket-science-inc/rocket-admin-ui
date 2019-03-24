import { Component, Vue } from "vue-property-decorator";
import * as faker from "faker";

@Component({
    template: require("./manage.component.html")
})
export class EventManagePage extends Vue {

    public model: any = {
        title: "Title",
        description: "Description",
        startDate: Date.now(),
        endDate: Date.now()
    };

    private options: any[] = new Array(20).fill(0).map(() => {
        return { name: faker.name.findName() }
    });

    public organizers(q:string):Promise<any[]> {
        return Promise.resolve(this.options)
    };

}