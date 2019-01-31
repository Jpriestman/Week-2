// Import Components
// exactly like a php include

import LoginComponent from '../js/modules/LoginComponent.js';
import UsersComponent from '../js/modules/UsersComponent.js';

// routes are the path you're talking through the application
// www.google.ca is a route; its the route to the homepage
// www.sumpinsumpin/contact is the route to the contact page, ect
// each route gets mapped to a component that you define 
// and that component gets rendered in the <router-view> element

const routes = [
    { path: '/', redirect: { name: "login" } },
    { path: '/login', name: 'login', component: LoginComponent },
    { path: '/users', name: 'users', component: UsersComponent }
]

const router = new VueRouter({
    routes
});

const vm = new Vue({

    data: { 
        testmessage: "sup",

        authenticated: false,

        mockAccount: {
            username: "usher4663",
            password: "password"
        }
    },

    methods: {
        calledOnParent(){
            console.log("This method lives in the main Vm and was called from a component");
        },

        setAuthenticated(status) {
            this.authenticated = status;
        },

        logout() {
            this.authenticated = false;
        }
    },

    created: function() {
        console.log("Logged from Vue Instance");
    },

    router: router
}).$mount("#app");

router.beforeEach((to, from, next) => {
    console.log('router guard fired!');

    if (vm.authenticated == false) {
        next("/login");
    } else {
        next();
    }



});
