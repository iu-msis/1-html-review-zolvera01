const BookApp = {
    data() {
        return {
            "books": []
          }
    },
    methods: {
        fetchBookData() {
            console.log("A"); //print to console
            fetch('/api/books/') //fetch info as promise object
            .then(response => response.json() ) //response to promise, transform response text to JSON
            .then( (responseJson) => { //
            console.log(responseJson);
            console.log("C");
            this.books = responseJson//.results[0]; //1st person assigned to variable
            })
            .catch( err => {
                console.error(err);
            })
            console.log("B");
            } 
        },
    created(){
        this.fetchBookData();
    }
}//end created
//end Offer config

Vue.createApp(BookApp).mount('#HW5');
console.log("Z")
