(() => {
    // Create a component first

    const HomePageComponent = {
        template: "<h2>This is my homepage</h2>"
    }

    const ContactComponent = {
        template: "<h2>This is the Contact page</h2>"
    }

    const UsersPageComponent = {
        props: ['id'],
        template: "#userList",

        //isolate all component data

        data: function() {
            return {
                users:[]
            }
        },

        created: function() {
            console.log('user component created');

            //Take the query peraminter from the route and pass it on to the fetchUserData
            this.fetchUserData(this.id);
        },

        methods: {
            fetchUserData(user){

                let url = `./includes/index.php?users=${this.id}`;

                fetch(url)
                .then(res => res.json())
                .then(data => this.users = data)
                .catch(function(error) {
                    console.error(error);
                });
            }
        }
    };

    const ErrorPageComponent = {
        template: "<h2>Page not found : Try Again</h2>"
    }

    // routes are the path you're talking through the application
    // www.google.ca is a route; its the route to the homepage
    // www.sumpinsumpin/contact is the route to the contact page, ect
    // each route gets mapped to a component that you define 
    // and that component gets rendered in the <router-view> element

    const routes = [
        { path: '/', name: 'home', component: HomePageComponent },
        { path: '/contact', name: 'contact', component: ContactComponent },
        { path: '/users/:id', name: 'users', component: UsersPageComponent, props: true },
        { path: '/*', name: 'error', component: ErrorPageComponent }
    ]

    const router = new VueRouter({
        routes
    });

    //const UserComponent = {
    //    props: ['name', 'role'],
    //
    //    template: "#userstemplate",
    //
    //       created: function() {
    //          console.log("I'm Aliive");
    //    },
//
    //    methods: {
    //        logFromChild() {
    //            console.log("logged from the component");
    //        },
//
    //        passEvent() {
    //            this.$emit('shoutup');
    //        }
    //    }
   // }
//
    // Then your vue Instance

    const vm = new Vue({
        el: "#app",

     
        data: { 
            testmessage: "sup"
        },

        methods: {
            calledOnParent(){
                console.log("This method lives in the main Vm and was called from a component");
            }
        },

        created: function() {
            console.log("Logged from Vue Instance");
        },

        components: {
            'homepagecomponent' : HomePageComponent,
            'contactcomponent' : ContactComponent,
            'userscomponent' : UsersPageComponent
        },

        router: router
    });


})()