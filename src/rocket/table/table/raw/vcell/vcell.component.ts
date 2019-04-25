import { Component } from "vue"

export const RctTableVcell:Component = {
    functional: true,
    props: {
        raw: { type: Object },
        index: { type: Number },
        col: { type: Object }
    },
    inject: ["rcolumn"],
    render: (createElement, context) => {
        return context.injections.rcolumn()({
            raw: context.props.raw
        })[context.props.index]
    }
}