const BookApp = {
    data() {
        return {
            "books": [], 
            bookForm: {},
            selectedBook: null
          }
    },
    methods: {
        fetchBookData(book) {
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
            },

        postBook(evt) {
            if (this.selectedBook === null) {
                this.postNewBook(evt);
            } else {
                this.postEditBook(evt);
            }
        },    
        
        postNewBook(evt) {
           console.log("Posting", this.bookForm);

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
                this.resetBookForm(); //check here
            });
        },

        postEditBook(evt) {
            console.log("Posting", this.bookForm);
 
             fetch('api/books/update.php', {
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
                 this.resetBookForm(); //check here
             });
         },

         postDeleteBook(o) {
            if (!confirm("Are you sure you want to delete the book "+o.BookTitle+"?")) {
              return;
            }
            console.log("Delete!", o);
    
            fetch('api/books/delete.php', {
                method:'POST',
                body: JSON.stringify(o),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
    
                // reset the form
                this.resetBookForm();
              });
          },

        selectBookToEdit(o) {
            this.selectedBook = o;
            this.bookForm = Object.assign({}, this.selectedBook);
        },
        resetBookForm() {
            this.selectedBook = null;
            this.bookForm = {};
        }
    },

    created(){
        this.fetchBookData();
    }
}//end created
//end Offer config

Vue.createApp(BookApp).mount('#HW5');
console.log("Z")

//ENUM Class code
/*
enum for referee table (be careful with datatypes)

ALTER TABLE books ADD COLUMN status enum('Unanswered','Accepted','Declined', 'Negotiating') NOT NULL DEFAILT 'Unanswered';
SELECT * FROM books

*/