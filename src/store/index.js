import Vuex from 'vuex';

const store = new Vuex.Store({
    state:{
      sampleBlogCards:[
      {blogTitle: 'Blog Card #1', blogCoverPhoto:'stock-1', blogDate:'May 1, 2021'},
      {blogTitle: 'Blog Card #2', blogCoverPhoto:'stock-2', blogDate:'May 2, 2021'},
      {blogTitle: 'Blog Card #3', blogCoverPhoto:'stock-3', blogDate:'May 3, 2021'},
      {blogTitle: 'Blog Card #4', blogCoverPhoto:'stock-4', blogDate:'May 4, 2021'}
      ],
      editPost: null,

    },
    mutations:{
        toggleEditPost(state, payload){
            state.editPost = payload; 
        }
    },
    action:{},
    modules:{},
})

export default store;