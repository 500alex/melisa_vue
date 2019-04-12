export default {
    state: {
        photoList: [
            {id: 0, url:'./static/images/photo1.jpeg'},
            {id: 1, url:'./static/images/photo2.jpeg'},
            {id: 2, url:'./static/images/photo3.jpeg'},
        ]
    },
    getters: {
        getPhoto (state) {
            return state.photoList;
        }
    },
    mutations: {},

}