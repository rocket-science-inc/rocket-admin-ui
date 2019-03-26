import { Component, Mixins, Vue } from "vue-property-decorator";
import { CoolSelect } from "vue-cool-select";


@Component({
    render: (h) => {
        return (
            <div>
                <div>
                    <md-field>
                        <label>{this.placeholder}</label>
                        <md-input></md-input>
                    </md-field>
                </div>
            </div>
        )
    }
})
export class Autocomplete extends Mixins(CoolSelect) {}