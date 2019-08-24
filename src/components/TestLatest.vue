<template>
    <div>
        <h1>GardenGuardian</h1>
        <h2>{{info[0].garden_name}}</h2>
        <h3>{{info[0].bed_name}}</h3>
        <h4>{{info[0].measurement_time}}</h4>

        <div
            v-for="garden in info"
            class="garden"
            >
            {{garden.measurement_type}}: {{garden.measurement_value}}
        </div>

    </div>

</template>

<script>
    const axios = require("axios");
    export default {
        name: "TestLatest",
        data() {
            return {
                info: null,
            }
        },
        mounted() {
            axios
                .get("http://kornspeicher94.internet-box.ch:31500/test_latest")
                .then(response => {
                    this.info = response.data
                })
        }

    }
</script>


<style scoped>
    div {
        color:##ad399c;
        border: 3px solid #6aa719;
        background: #bcda95;
    }

</style>


