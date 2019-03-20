export default {
    namespaced: true,
    state: {
        albumsList: [
            {id: 0, title: 'Краткое название альбома 1', previewPhoto: './static/img/photo/photo1.jpg'},
            {id: 1, title: 'Краткое название альбома 2', previewPhoto: './static/img/photo/photo1.jpg'},
            {id: 2, title: 'Краткое название альбома 3', previewPhoto: './static/img/photo/photo1.jpg'},
            {id: 3, title: 'Краткое название альбома 4', previewPhoto: './static/img/photo/photo1.jpg'},
            {id: 4, title: 'Краткое название альбома 4', previewPhoto: './static/img/photo/photo1.jpg'},
            {id: 5, title: 'Краткое название альбома 4', previewPhoto: './static/img/photo/photo1.jpg'},
            {id: 6, title: 'Краткое название альбома 4', previewPhoto: './static/img/photo/photo1.jpg'}
        ]
    },
    getters: {
        getAlbums (state) {
            return state.albumsList;
        }
    },
    mutations: {},

}