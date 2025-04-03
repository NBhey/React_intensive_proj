export const resources={
    pages: {
        search: {tittle: 'Поиск по: '},
        favorites: {tittle: 'Избранное'},
        history: {tittle: 'История поиска'},
        home: {tittle: 'Популярное'},
    },
    filter: {
        languages: [
            {
                parametr:'',
                label: 'Выберите язык'
            },
            {
                parametr:'ru',
                label: 'Русский'
            },
            {
                parametr:'en',
                label: 'Английский'
            },
            {
                parametr:'de',
                label: 'Немецкий'
            },
            {
                parametr:'fr',
                label: 'Французский'
            }
        ],
        popularity: 
        [
            {
                parametr: 'descending',
                label: 'Популярные',
            },
            {
                parametr: 'ascending',
                label: 'Нишевые'
            }
        ]
    }
}