<template>
    <div class="d-flex flex-nowrap">
        <md-datepicker
            class="flex-fill"
            v-model="value.date"
            md-immediately
            :name="id"
            :format="dateFormat"
        >
            <label :for="id">{{label}}</label>
        </md-datepicker>
        <timepicker class="ml-3"
            v-model="value.time"
            :minute-interval="5"
            :format="timeFormat"
            @change="change"
            
        ></timepicker>
    </div>
</template>
