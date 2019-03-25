import { Component, Mixins, Vue } from "vue-property-decorator";
import { CoolSelect } from "vue-cool-select";

// @Component
// class Autocomplete extends Mixins(CoolSelect) {}

@Component({
    template: require("./autocomplete.component.html")
})
class Template extends Vue {}

@Component({
    render: () => {
        return (
            <div></div>
        )
    }
})
export class Autocomplete extends Mixins(CoolSelect) {}