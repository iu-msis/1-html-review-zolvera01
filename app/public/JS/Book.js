const BookApp = {
    data() {
        return {
            "books": [], 
            "bookForm": {}
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
        postNewBook(evt) {
           console.log("Posting", this.bookForm);
         //   alert("Posted");

            fetch('api/books/create.php', {
                method: 'POST',
                body: JSON.stringify(this.bookForm),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                }
            })
            .then( response => response.json() )
            .then( json => {
                console.log("Retured from post:", json);
                //Test result?
                this.books = json;

                //form reset
                this.bookForm = {};
            });
        },
    created(){
        this.fetchBookData();
    }
}//end created
//end Offer config

Vue.createApp(BookApp).mount('#HW5');
console.log("Z")