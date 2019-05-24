import { DirectiveOptions } from "vue";
import { ValidationService } from "./validation.service";

export const RctValidation:DirectiveOptions = {
    bind: (el, { value }, { context }) => {
        el.addEventListener("input", () => {
            ValidationService.validate(context["value"], value)
                .then(() => {
                    context["setPristine"](false);
                    context["validationSuccess"]();
                }).catch((error) => {
                    context["setPristine"](false);
                    context["validationError"](error);
                })
        });
    }
};