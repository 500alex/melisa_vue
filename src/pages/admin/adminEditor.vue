<template>
    <v-container>
        <v-layout>
            <v-flex>
                <h2>CKEditor</h2>

                <div>
                    <div v-html="editorData"></div>
                </div>

                <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    export default {
        name: "adminEditor",
        data (){
            return {
                editor: ClassicEditor,
                editorData: 'Content of the editor.',
                editorConfig: {
                    // The configuration of the editor.
                }
            }
        }
    }
</script>

<style scoped>

</style>