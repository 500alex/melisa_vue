export default {
    namespaced: true,
    state: {
        isAdmin: true,
        adminLinks: [
            {id: 0, text: 'Редактор новостей', url: '/admin/news',icon: 'person'}
        ]
    },
    getters: {
        getAdminLinks (state){
            return state.adminLinks;
        },
        getAdmin (state) {
            return state.isAdmin
        }
    },
    mutations: {
        setAdmin (state,payload) {
            state.isAdmin = payload;
        }
    }

}