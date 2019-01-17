(() => {
    // Create a component first
    const UserComponent = {
        props: ['name', 'role'],

        template: "#userstemplate",

        created: function() {
            console.log("I'm Aliive");
        },

        methods: {
            logFromChild() {
                console.log("logged from the component");
            },

            passEvent() {
                this.$emit('shoutup');
            }
        }
    }

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
            'activeusers' : UserComponent
        }
    })


})()