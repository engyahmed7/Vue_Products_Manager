import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { createRouter , createWebHistory } from 'vue-router';
import AllProduct from './components/OptionAPI/AllProduct.vue';
import store from './Store'; 
import GetProductById from './components/OptionAPI/getProductById.vue';
import EditAndCreateProduct from './components/OptionAPI/editAndCreateProduct.vue';
import DisplayAllProduct from './components/ComposationAPI/DisplayAllProduct.vue';
import EditAndCreate from './components/ComposationAPI/editAndCreate.vue';

const routes =[
    // {path: '/', component: HomeComponent},
    {path:'/',children:[
        {path:'',component:AllProduct},
        {path:':id' ,component:GetProductById},
        {path:'add' ,component:EditAndCreateProduct},
        {path:'edit/:id' ,component:EditAndCreateProduct},
        // {
        //     path:'/:NotFound(.*)*',
        //     component:HomeComponent,
        //     meta:{hideNavbar:true}
        // }
    ]},
    {path:'/products',children:[
        {path:'',component:DisplayAllProduct},
        // {path:':id' ,component:GetProductById},
        {path:'add' ,component:EditAndCreate},
        {path:'edit/:id' ,component:EditAndCreate},

    ]}
]

let router =createRouter({
    history: createWebHistory(),
    routes,
})
createApp(App).use(store).use(router).mount('#app')
