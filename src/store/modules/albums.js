export default {
    namespaced: true,
    state: {
        albumsList: [
            {id: 0, title: 'Краткое название альбома 1', previewPhoto: './images/photo1.jpeg'},
            {id: 1, title: 'Краткое название альбома 2', previewPhoto: './images/photo1.jpeg'},
            {id: 2, title: 'Краткое название альбома 3', previewPhoto: './images/photo1.jpeg'},
            {id: 3, title: 'Краткое название альбома 4', previewPhoto: './images/photo1.jpeg'},
            {id: 4, title: 'Краткое название альбома 4', previewPhoto: './images/photo1.jpeg'},
            {id: 5, title: 'Краткое название альбома 4', previewPhoto: './images/photo1.jpeg'},
            {id: 6, title: 'Краткое название альбома 4', previewPhoto: './images/photo1.jpeg'}
        ]
    },
    getters: {
        getAlbums (state) {
            return state.albumsList;
        }
    },
    mutations: {},

}