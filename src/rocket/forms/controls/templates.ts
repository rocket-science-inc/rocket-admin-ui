export const RctBaseTemplate = (input:string):string => {
    return `
        <md-field :class="{
            'md-required': isRequired,
            'md-invalid': isInvalid
        }">
            <label>{{label}}</label>
            ${input}
            <span
                class="md-error"
                v-for="message in errors"
            >{{message}}</span>
        </md-field>
    `;
};

export const RctInputTemplate = (type:string):string => {
    return `
        <md-input
            v-model="value"
            type="${type}"
            :name="id"
            :disabled="disabled"
            @input="changed"
            @change="changed"
            v-validation="validation"
        />
    `;
};

export const RctTextareaTemplate = ():string => {
    return `
        <md-textarea
            md-autogrow
            :name="id"
            v-model="value"
            @input="changed"
            :rows="5"
        />
    `;
};

export const RctDatetimepickerTemplate = ():string => {
    return `
        <md-datepicker
            v-model="value"
            md-immediately
            :name="id"
        >
            <label :for="id">{{label}}</label>
        </md-datepicker>
    `;
};