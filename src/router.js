import {createRouter,createWebHistory} from "vue-router";

import Home from "./pages/Home";

import TemplateUser from "./pages/users/Template"
import IndexUser from "./pages/users/Index"
import ShowUser from "./pages/users/Show"

import TemplatePost from "./pages/posts/Template"
import IndexPost from "./pages/posts/Index"
import ShowPost from "./pages/posts/Show"
import CreatePost from "./pages/posts/Create"
import EditPost from "./pages/posts/Edit"



const routes = [
    { path : '/', name : 'home', component : Home },
    { path : '/users', name : 'userTemplate', component : TemplateUser, children : [
            { path : '' , name : 'users', component : IndexUser },
            { path : ':id' , name : 'userId', component : ShowUser }
        ] },
    { path : '/posts', name : 'postTemplate', component : TemplatePost, children : [
            { path : '' , name : 'posts', component : IndexPost },
            { path : ':id' , name : 'postId', component : ShowPost },
            { path : 'create' , name : 'createPost', component : CreatePost },
            { path : 'edit/:id' , name : 'editPost', component : EditPost }
        ] }
];

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router;