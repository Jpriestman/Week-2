export default {
    template: `
    <div>
        <h1> You made it to the User's Page </h1>
        <p>{{ message }}</p>
    </div>
    `,

    data() {
        return {
            message: "on the user page component"
        }
    },

}