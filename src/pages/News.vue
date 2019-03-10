<template>
    <div>
        <v-container>
            <h3 class="page-header">Все новости</h3>
            <v-layout class="custom-lay">
                <v-flex xs12>
                    <v-card>
                        <v-list two-line>
                            <template v-for="(item, index) in newsList">
                                <v-list-tile
                                        :key="item.title"
                                        avatar
                                        ripple
                                        :to="'/new/' + item.id"
                                        @click="toggle(index)"
                                >
                                    <v-list-tile-content>
                                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                        <v-list-tile-sub-title>{{ item.shortDescription }}</v-list-tile-sub-title>
                                    </v-list-tile-content>

                                    <v-list-tile-action>
                                        <v-list-tile-action-text>{{ item.data }}</v-list-tile-action-text>
                                        <v-icon
                                                v-if="selected.indexOf(index) < 0"
                                                color="grey lighten-1"
                                        >
                                            forward
                                        </v-icon>

                                        <v-icon
                                                v-else
                                                color="yellow darken-2"
                                        >
                                            forward
                                        </v-icon>

                                    </v-list-tile-action>

                                </v-list-tile>
                                <v-divider
                                        v-if="index + 1 < newsList.length"
                                        :key="index"
                                ></v-divider>
                            </template>
                        </v-list>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>

    </div>

</template>

<script>
    export default {
        name: "News",
        data (){
            return {

                items: [
                    {
                        action: '15 min',
                        headline: 'Brunch this weekend?',
                        title: 'Ali Connors',
                        subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
                    },
                    {
                        action: '2 hr',
                        headline: 'Summer BBQ',
                        title: 'me, Scrott, Jennifer',
                        subtitle: "Wish I could come, but I'm out of town this weekend."
                    },
                    {
                        action: '6 hr',
                        headline: 'Oui oui',
                        title: 'Sandra Adams',
                        subtitle: 'Do you have Paris recommendations? Have you ever been?'
                    },
                    {
                        action: '12 hr',
                        headline: 'Birthday gift',
                        title: 'Trevor Hansen',
                        subtitle: 'Have any ideas about what we should get Heidi for her birthday?'
                    },
                    {
                        action: '18hr',
                        headline: 'Recipe to try',
                        title: 'Britta Holt',
                        subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
                    }
                ]
            }
        },
        methods: {
            toggle (index) {
                const i = this.selected.indexOf(index);

                if (i > -1) {
                    // this.selected.splice(i, 1)
                    this.$store.commit('news/deleteSelected',i)
                } else {
                    // this.selected.push(index)
                    this.$store.commit('news/pushSelected',index)
                }

            }
        },
        computed: {
            newsList () {
                return this.$store.getters['news/getNews'];
            },
            selected () {
                return this.$store.getters['news/getSelected'];
            }
        }
    }
</script>

<style lang="scss">
.page-header {
    margin-bottom: 40px;
    font-size: 32px;
}
</style>