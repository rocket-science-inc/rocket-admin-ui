<template>
    <div class="md-table-pagination border-0">
        
        <template v-if="pageOptions !== false">
            <span class="md-table-pagination-label">{{ label }}</span>

            <md-field>
                <md-select v-model="currentPageSize" md-dense md-class="md-pagination-select" @input="setPageSize">
                    <md-option v-for="amount in pageOptions" :key="amount" :value="amount">{{ amount }}</md-option>
                </md-select>
            </md-field>
        </template>

        <span>{{ currentItemCount }}-{{ currentPageCount }} {{ separator }} {{ total }}</span>

        <md-button class="md-icon-button md-table-pagination-previous" @click="goToPrev()" :disabled="isFirstPage">
            <md-icon>keyboard_arrow_left</md-icon>
        </md-button>

        <md-button class="md-icon-button md-table-pagination-next" @click="goToNext()" >
            <md-icon>keyboard_arrow_right</md-icon>
        </md-button>

  </div>
</template>