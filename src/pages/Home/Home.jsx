import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { LogStateContext } from '../../Providers/LogState';
import axios from 'axios';
import Card from '../../components/Card/Card';
import Cards from '../../components/Cards/Cards';
import BlockSearch from '../../components/BlockSearch/BlockSearch';

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();
  const debouncerTimer = useRef();
  const [books, setBooks] = useState([]);
  
  
    useEffect(() => {
      if (!hasMore) return;
  
      const fetchBooks = async () => {
        setLoading(true);
  
        try {
          const url = `https://gutendex.com/books/?page=${page}`;
          const res = await axios.get(url);
  
          setBooks((prevBooks) => [...prevBooks, ...res.data.results]);
          setHasMore(res.data.next !== null);
        } catch (err) {
          console.log("Ошибка запроса", err);
        } finally {
          setLoading(false);
        }
      };
      fetchBooks();
    }, [page, hasMore]);
  
    const observerRef = useRef();
  
    const bookRef = useCallback(
      (element) => {
        console.log(element);
        if (loading) return;
        console.log(observerRef, "||", observerRef.current);
        if (observerRef.current) observerRef.current.disconnect();
  
        observerRef.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setPage((prevPage) => prevPage + 1);
          }
        });
        if (element) observerRef.current.observe(element);
      },
      [loading, hasMore]
    );
  const debouncer = (func, delay) => {
    return (...args) => {
      clearTimeout(debouncerTimer.current);
      debouncerTimer.current = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const debounsedSetPage = useCallback(
    debouncer((newPage) => {
      setPage(newPage);
    }, 300),
    [],
  );

  //     const fetchData = async (page) =>{
  //         setLoading(true)
  //         try{
  //             axios.get(`https://gutendex.com/books/?page=${page}`)
  //                 .then((response)=>{
  //                     setData((prevData)=>
  //                         [...prevData, ...response.data.results]
  //                     )

  //                     setHasMore(response.data.results.length>0)
  //                 })

  //                 console.log(data)

  //         }catch(error){
  //             console.log(error);

  //         }finally{
  //             setLoading(false)
  //         }

  //    }
  // useEffect(()=>{
  //     fetchData(page)
  // }, [page])

  // const lastItemRef = (node) =>{
  //     if(loading) return;

  //     if(observer.current) observer.current.disconnect();

  //     observer.current = new IntersectionObserver((entries)=>{
  //         if(entries[0].isIntersecting && hasMore){
  //             debounsedSetPage(page+1)
  //         }
  //     })

  //     if(node) observer.current.observe(node)

  // }

  const user = JSON.parse(localStorage.getItem('user'));
  const { isAuth } = useContext(LogStateContext);
  let headerPhrase = null;
  if (!isAuth) {
    headerPhrase = <h1>Наша коллекция книг очень большая. Присоединяйся к нам!</h1>;
  } else {
    headerPhrase = user && isAuth && <h1>{user.name}, Привет!</h1>;
  }

  // const booksArr = data && data.map((item, index)=>{

  //     return (
  //         // <Card
  //         //     scrollRefferal = {index === data.length - 1 ? lastItemRef : null}
  //         //     bookName = {item.title}
  //         //     bookAuthor = {item.authors[0]?.name? item.authors[0].name:item.authors[0]='unknown author'}
  //         //     />
  //         <Cards/>
  //     )
  // })

  return (
    <>
      <BlockSearch />
      <div className="wrapper">
        <Cards books={books} bookRef={bookRef} loading={loading}/>
      </div>
    </>
    // <div>
    //     {/* {headerPhrase}
    //     {booksArr} */}
    // </div>
  );
};

export default Home;
