export const RctBaseTemplate = (input:string):string => {
    return `
        <md-field>
            <label :for="id">{{label}}</label>
            ${input}
        </md-field>
    `;
};

export const RctInputTemplate = (type:string):string => {
    return `
        <md-input
            type="${type}"
            :name="id"
            :disabled="disabled"
        />
    `;
}