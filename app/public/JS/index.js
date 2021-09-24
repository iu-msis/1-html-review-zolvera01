const RandomUserDataApp = {
    data() {
        return {
            "person": {
                name: {},
                picture: {},
                dob: {},
                location: {},
                street: {},
                city: {}
            }
          }
    },
    computed: { //Use computed to modify data in some way (Ex. date format, math operations, etc.)
        prettyBirthday() {//Can be put in method
            return dayjs(this.person.dob.date)
            .format('DD MMMM YYYY')//change in assignment to different format not default
        }
    },
    methods: {
        fetchUserData() {
            console.log("A"); //print to console
            fetch('https://randomuser.me/api/') //fetch info as promise object
            .then(response => response.json() ) //response to promise, transform response text to JSON
            .then( (responseJson) => { //
            console.log(responseJson);
            console.log("C");
            this.person = responseJson.results[0]; //1st person assigned to variable
            })
            .catch( err => {
                console.error(err);
            })
            console.log("B");
            } 
        },
    created(){
        this.fetchUserData();
    }
}//end created
//end Offer config

Vue.createApp(RandomUserDataApp).mount('#HW3');
console.log("Z")
