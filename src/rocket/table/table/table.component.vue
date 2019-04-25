<template>
    <md-table
        v-model="records.records" md-sort="name" md-sort-order="asc" md-card md-fixed-header
        class="m-0 md-elevation-0 h-100"
    >
        
        <md-table-toolbar class="px-0">
            <div class="md-toolbar-section-start" v-if="showSearch">
                <md-field md-clearable>
                    <md-input
                        placeholder="Type to search..."
                        v-model="query"
                        @input="search"
                    />
                </md-field>
            </div>
            <div class="md-toolbar-section-end"></div>
        </md-table-toolbar>

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
            <!-- <slot :raw="item"></slot> -->
            <!-- <md-table-cell
                v-for="qwe in [1]"
                md-label="Name"
                md-sort-by="name"
                :key="qwe"
            >{{ item.name }}</md-table-cell> -->
            <!-- <slot :raw="item" /> -->
            <!-- <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell> -->
            <!-- <slot name="rct-table-raw" :raw="item"></slot> -->
            <!-- <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell> -->
            <!-- <slot name="rct-table-raw" :raw="item"></slot> -->
            <!-- <md-table-cell>Shawna Dubbin</md-table-cell>
            <md-table-cell>sdubbin0@geocities.com</md-table-cell>
            <md-table-cell>Male</md-table-cell> -->
            <!-- <slot name="rct-table-raw" :raw="item"></slot> -->
            <!-- <md-table-cell md-label="ID" md-sort-by="id">{{ item.id }}</md-table-cell>
            <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
            <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
            <md-table-cell md-label="Gender" md-sort-by="gender">{{ item.gender }}</md-table-cell>
            <md-table-cell md-label="Job Title" md-sort-by="title">{{ item.title }}</md-table-cell> -->
        </md-table-row>

    </md-table>
</template>
