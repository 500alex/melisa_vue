export default {
    namespaced: true,
    state: {
        photoList: [
            {id: 0, url:'./img/photo/photo1.jpg',description: 'Описание фото'},
            {id: 1, url:'./img/photo/photo2.jpg',description: 'Описание фото'},
            {id: 2, url:'./img/photo/photo3.jpg',description: 'Описание фото'},
            {id: 3, url:'./img/photo/photo4.jpg',description: 'Описание фото'},
        ]
    },
    getters: {
        getPhoto (state) {
            return state.photoList;
        }
    },
    mutations: {},

}