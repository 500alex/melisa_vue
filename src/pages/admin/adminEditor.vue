<template>
    <v-container>
        <v-layout>
            <v-flex>
                <input type="file"
                       @change="onFileSelected"
                       style="display: none;"
                       ref="fileInput"
                >
                <button @click="$refs.fileInput.click()">Pich File</button>
                <button @click="onUpload">Upload</button>
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>
    import axios from 'axios';
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    export default {
        name: "adminEditor",
        data (){
            return {
                editor: ClassicEditor,
                editorData: 'Content of the editor.',
                editorConfig: {
                    // The configuration of the editor.
                },
                selectedFile: null
            }
        },
        mounted (){

        },
        methods: {
            onFileSelected (event) {
                // var form = $("form[name='uploader']");
                // const file = new FormData(form[0]);
                this.selectedFile = event.target.files[0]
            },
            onUpload () {
                const fd = new FormData();
                fd.append('image',this.selectedFile, this.selectedFile.name)
                axios.post('url.....', fd, {
                   onUploadProgress: uploadEvent => {
                       console.log('upload file' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%')
                   }
                })
                    .then(res => {
                        console.log(res);
                    })
            }
        }
    }
</script>

<style scoped>

</style>