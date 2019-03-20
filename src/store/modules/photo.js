export default {
    namespaced: true,
    state: {
        photoList: [
            {id: 0, url:'./images/photo1.jpeg',description: 'Описание фото'},
            {id: 1, url:'./images/photo2.jpeg',description: 'Описание фото'},
            {id: 2, url:'./images/photo3.jpeg',description: 'Описание фото'},
            {id: 3, url:'./images/photo4.jpeg',description: 'Описание фото'},
        ]
    },
    getters: {
        getPhoto (state) {
            return state.photoList;
        }
    },
    mutations: {},

}