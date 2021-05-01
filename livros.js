const books_by_category = [
    {
        category: 'Riqueza',
        books: [
            {
                title: 'Os segredos da mente milionária',
                author: 'T. Harv Eker',
            },
            {
                title: 'O homem mais rico da Babilônia',
                author: 'George S. Clason',
            },
            {
                title: 'Pai rico, pai pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lechter',
            },
        ],
    },
    {
        category: 'Inteligencia Emocional',
        books: [
            {
                title: 'Você é insubstituível',
                author: 'Augusto Cury',
            },
            {
                title: 'Ansiedade - Como enfrentar o mal do século',
                author: 'Augusto Cury',
            },
            {
                title: 'Os 7 habitos das pessoas altamente eficazes',
                author: 'Stephen R. Covey',
            },
        ],
    },
];

const total_categories = books_by_category.length

/*console.log(total_categories);
for(let category of books_by_category) {
    console.log('Total de livros por categoria: ',category.category);
    console.log(category.books.length);
}
*/
function count_authors() {
    let authors = []

    for(let category of books_by_category){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }

    console.log('total de autores: ', authors.length);
}

function books_of_author(author) {
    let books = []

    for(let category of books_by_category) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${author}: ${books.join(', ')}`)
}

//count_authors()
books_of_author('T. Harv Eker')