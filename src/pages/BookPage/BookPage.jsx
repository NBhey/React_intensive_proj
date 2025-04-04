import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Book from '../../components/Book/Book';

function BookPage() {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const [loading, setLoading]=useState(false);

    const fetchBook = async (args) => {
      try {
        setLoading(true);
        const res = await axios.get(`https://gutendex.com/books?ids=${args}`);
        const newRes = res.data.results[0];
        console.log(newRes);
        setBook(newRes);
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
        fetchBook(id);
    }, [id]);

    return (
        <>
       {loading? <div>Загрузка...</div> : <Book book={book}/>} 
        </>
    );
}

export default BookPage;