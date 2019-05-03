<template>
    <md-content class="h-100 overflow-hidden d-flex flex-column">
        
        <md-toolbar md-elevation="0" class="md-transparent px-0 flex-shrink-0">
            <div class="md-toolbar-section-start">
                <md-field md-clearable>
                    <md-input
                        placeholder="Type to search..."
                        v-model="table.query"
                        @input="search"
                        :disabled="inprogress"
                    />
                </md-field>
            </div>
            <div class="md-toolbar-section-end">
                <rct-table-pagination
                    :total="total"
                    :page="page"
                    :count="count"
                    :inprogress="inprogress"
                    @update:page="onPageChanged"
                    @update:count="onCountChanged"
                ></rct-table-pagination>
            </div>
        </md-toolbar>

        <div class="position-relative flex-fill overflow-hidden">

            <md-table
                v-model="records" md-sort="name" md-sort-order="asc"
                md-card md-fixed-header
                class="m-0 md-elevation-0 h-100"
            >

                <md-table-empty-state
                    :md-label="noResultsLabel"
                    :md-description="noResultsDescription"
                ></md-table-empty-state>

                <md-table-row slot="md-table-row" slot-scope="{ item }">
                    <md-table-cell v-for="(col, index) in columns"
                        :md-label="col.heading"
                        :md-sort-by="col.sort"
                        :key="index"
                    >
                        <rct-table-vcell :raw="item" :index="col.index" :col="col.col"></rct-table-vcell>
                    </md-table-cell>
                </md-table-row>

            </md-table>

            <div style="z-index: 2; background: rgba(255, 255, 255, 0.7)" v-if="inprogress"
                class="position-absolute d-flex align-items-center justify-content-center right-0 left-0 top-0 bottom-0"
            >
                <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
            </div>

        </div>

    </md-content>
</template>


