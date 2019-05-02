<template>
    <md-content class="h-100 overflow-hidden d-flex flex-column">
        
        <md-toolbar md-elevation="0" class="md-transparent px-0 flex-shrink-0">
            <div class="md-toolbar-section-start">
                <md-field md-clearable>
                    <md-input
                        placeholder="Type to search..."
                        v-model="table.query"
                        @input="search"
                    />
                </md-field>
            </div>
            <div class="md-toolbar-section-end">
                <rct-table-pagination
                    :total="total"
                    :page="page"
                    :count="count"
                    @update:page="onPageChanged"
                    @update:count="onCountChanged"
                ></rct-table-pagination>
            </div>
        </md-toolbar>
        
        <md-table
            v-model="records" md-sort="name" md-sort-order="asc"
            md-card md-fixed-header
            class="m-0 md-elevation-0 h-100 flex-fill"
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

    </md-content>
</template>


