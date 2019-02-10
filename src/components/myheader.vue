<template>
    <v-toolbar color="primary">
        <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>

        <v-toolbar-title>Melisa</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat>Link One</v-btn>
            <v-btn flat>Link Two</v-btn>
            <v-btn flat>Link Three</v-btn>
        </v-toolbar-items>
        <v-btn icon>
            <v-icon>search</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>apps</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>refresh</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>more_vert</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
    export default {
        name: "myheader"
    }
</script>

<style scoped>

</style>