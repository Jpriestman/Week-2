//This is the designers job for the Organ project and the Video/Car project
export default {
    template:`
        <div id="login">
            <h1> Log In </h1>
            <input type="text" name="username" v-model="input.username" placeholder="username">
            <input type="text" name="password" v-model="input.password" placeholder="password">
            <button v-on:click="login()">Login</button>
        </div>
    `,


    data() {
        return {
            input: {
                username: "",
                password: ""
            }
        }
    },


    methods: {
        login() {
            console.log('trying to log in');
            console.log(this.$parent.mockAccount.username);

            if (this.input.username != "" && this.input.password != "") {
                //do the login check
                if (this.input.password == this.$parent.mockAccount.password) {
                    //your logged in
                    console.log('logged in');
                    // This will change the router to a new page
                    this.$emit("authenticated",true);
                    this.$router.replace({ name: "users" });
                }else {
                    console.log('login failed');
                }
            } else {
                console.log('username and password cannot be blank');
            }
        }
    }

    //End of Export Default
}