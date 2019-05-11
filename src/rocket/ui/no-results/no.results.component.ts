import { Component, Mixins, Prop } from "vue-property-decorator";
import RctNoResultsTpl from "./no.results.component.vue"

@Component
export class RctNoResults extends Mixins(RctNoResultsTpl) {

    @Prop({ default: "No results found" }) heading: string;
    @Prop({ default: "No results found. Try a different search term, apply other filters or create a new item." }) description: string;

}